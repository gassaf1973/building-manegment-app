const Product = require('../schema/Products');
const Counters = require('../schema/Counters');

function create(req, res) {
    if (!req.body.product_name) {
        res.status(400).json({
            "text": "Invalid request"
        })
    } else {
        Product.findOne({
            "product_name": req.body.product_name,
        }).then(data => {
            if (!data) {
                Counters.findByIdAndUpdate(
                    { _id: "Products" },
                    {
                        $inc: { sequence_value: 1 },
                        new: true,
                        upsert: true,
                    }).then((sequence) => {
                        console.log("sequence : ", sequence.sequence_value);
                        const newProduct = new Product(req.body);
                        newProduct._id = sequence.sequence_value;
                        newProduct.save(err => {
                            console.log(err);
                            if (err) return res.status(500).send(err);
                            return res.status(200).send(newProduct);
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err) return res.status(500).send(err);
                        return res.status(500).json({"text": "Internal error"});
                    });
            } else {
                return res.status(204).json({"text": `Customer with name ${req.body.product_name} already exists`});
            }
        })
            .catch(err => {
                console.log(err);
                return res.status(500).json({"text": "Internal error"});
            });
    }
}

function modify(req, res) {
    if (!req.params._id) {
        res.status(400).json({
            "text": "Invalid request"
        })
    } else {
        Product.findOne({
            "_id": req.params._id,
        }).then(data => {
            if (data) {
                Customer.findByIdAndUpdate(
                    // the id of the item to find
                    req.params._id,
                    // the change to be made. Mongoose will smartly combine your existing 
                    // document with this change, which allows for partial updates too
                    req.body,
                    // an option that asks mongoose to return the updated version 
                    // of the document instead of the pre-updated one.
                    {new: true},
                    
                    // the callback function
                    (err, product) => {
                    // Handle any possible database errors
                        if (err) return res.status(500).send(err);
                        return res.send(product);
                    }
                )
            } else {
                res.status(204).send({
                    "text": `Customer with ID ${req.params._id} not found`,
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                "text": "Internal error",
            })
        });
    }
}

function list(req, res) {
    // No query passed in means "find everything"
    Product.find((err, products) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).send(err)
        // send the list of all people
        return res.status(200).send(products);
    });
}
//On exporte nos deux fonctions

exports.create = create
exports.modify = modify
exports.list = list