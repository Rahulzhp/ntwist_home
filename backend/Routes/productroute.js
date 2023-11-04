const express = require("express")

const { ProductModel } = require("../Model/product")

const productRoute = express.Router()


const PAGE_SIZE = 5;

productRoute.get('/', async (req, res) => {
    const { search, page = 1 } = req.query;
    const skip = (page - 1) * PAGE_SIZE;

    try {
        const filter = {};

        if (search) {
            const searchFields = ['title', 'color'];

            if (!isNaN(search)) {
                // If the search query is a number, handle it as an exact match for year and price
                filter.$or = [
                    { year: parseInt(search) },
                    { price: parseFloat(search) },
                    { mileage: parseFloat(search) },
                    { max_speed: parseFloat(search) },
                ];
            } else {
                // Create a case-insensitive regular expression search for specified fields
                filter.$or = searchFields.map((field) => ({
                    [field]: { $regex: search, $options: 'i' },
                }));
            }
        }

        const count = await ProductModel.countDocuments(filter);
        const totalPages = Math.ceil(count / PAGE_SIZE);

        const data = await ProductModel.find(filter)
            .skip(skip)
            .limit(PAGE_SIZE);

        res.status(200).json({ data, totalPages });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//Get SingleProduct

productRoute.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let product = await ProductModel.findById(id)
        res.send(product)

    } catch (e) {
        res.send(e.message)
    }
})

productRoute.post("/", async (req, res) => {
    const payload = req.body;
    try {
        const data = new ProductModel(payload);
        await data.save();
        res.send(data);
    } catch (err) {
        res.send(err);
    }
})

productRoute.patch('/:id', async (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;

    try {
        // Find the product by ID and update it
        const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

productRoute.delete('/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        // Find the product by ID and delete it
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(204).send(); // 204 No Content: The request was successful, and there is no response entity.
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = {
    productRoute
};