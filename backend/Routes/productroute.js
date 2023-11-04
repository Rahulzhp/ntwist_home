const express = require("express")

const { ProductModel } = require("../Model/product")

const productRoute = express.Router()

const PAGE_SIZE = 5;
productRoute.get("/", async (req, res) => {
    const { search, page = 1 } = req.query;
    const skip = (page - 1) * PAGE_SIZE;

    try {
        const filter = {}; // Create an empty filter object

        if (search) {
            const searchRegex = new RegExp(search, 'i');
            filter.$or = [
                { title: searchRegex },
                { year: searchRegex },
                { price: searchRegex },
                { color: searchRegex },
                { mileage: searchRegex },
                { max_speed: searchRegex },

            ];
            // Add a search filter to match any of the fields using a case-insensitive regular expression
        }

        const count = await ProductModel.find(filter).countDocuments();
        const totalPages = Math.ceil(count / PAGE_SIZE);

        const data = await ProductModel.aggregate([
            {
                $match: filter,
            }
        ])
            .skip(skip)
            .limit(PAGE_SIZE);

        res.send({ data, totalPages });
    } catch (err) {
        res.send(err);
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
});
module.exports = {
    productRoute
};