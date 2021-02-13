const References = require('../schema/References');
const Counters = require('../schema/Counters');

function getNextSequenceValue(sequence) {
    Counters.findByIdAndUpdate(
        { _id: sequence },
        {
            $inc: { sequence_value: 1 },
            new: true,
            upsert: true,
        });
}

function create(req, res) {
    if (!req.body.refName || !req.body.label) {
        res.status(400).json({
            "text": "Invalid request"
        })
    } else {
        var reference = {
            name: req.body.refName,
            label: req.body.label,
        }
        References.findOne({
            "reference.name": reference.name,
        }).then(ref => {
            if (ref) {
                References.findOne({
                    "_id": ref.id,
                    "reference.values.label": reference.label,
                }).then(label => {
                    if (!label) {
                        Counters.findByIdAndUpdate(
                            { _id: reference.name },
                            {
                                $inc: { sequence_value: 1 },
                                new: true,
                                upsert: true,
                            }).then((sequence) => {
                                References.updateOne(
                                    { _id: ref.id },
                                    {
                                        $push: {
                                            "reference.values":
                                            {
                                                "_id": sequence.sequence_value,
                                                "label": reference.label
                                            }
                                        },
                                        safe: true,
                                        upsert: true,
                                    },
                                ).then(value => {
                                    console.log('value', value);
                                    res.status(200).json({
                                        "text": "Success",
                                    })
                                }).catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        "text": "Internal error",
                                    })
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                                res.status(500).json({
                                    "text": "Internal error",
                                })
                            });
                    } else {
                        res.status(204).json({
                            "text": `Value ${reference.label} already exists`,
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
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                "text": "Internal error",
            })
        });
    }
}

function modify(req, res) {
    if (!req.body.refName || !req.body.label || !req.body.id) {
        res.status(400).json({
            "text": "Invalid request"
        })
    } else {
        var reference = {
            name: req.body.refName,
            id: req.body.id,
            label: req.body.label,
        }
        References.findOne({
            "reference.name": reference.name,
            "reference.values._id": reference.id,
        }).then(ref => {
            if (ref) {
                References.update({ _id: ref.id, "reference.values._id": reference.id },
                {
                    $set: { "reference.values.$.label": reference.label },
                }).then(value => {
                    console.log('value', value);
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        "text": "Internal error",
                    })
                });
            } else {
                res.status(204).json({
                    "text": `Value ${reference.label} not exists`,
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                "text": "Internal error",
            })
        });
    }
}

function list(req, res) {
    console.log('list', req.params.name);
    if (!req.params.name) {
        res.status(400).json({
            "text": "Invalid request"
        })
    } else {
        var reference = {
            name: req.params.name,
        }
        References.findOne({
            "reference.name": reference.name,
        }).then(ref => {
            if (ref) {
                ref.reference.values.forEach((elem) => {
                    console.log(elem._id, elem.label);
                })
                res.status(200).json(
                    {
                        refName: reference.name,
                        data: ref.reference.values
                    }
                );
          } else {
                res.status(204).json({
                    "text": `Value ${reference.label} not exists`,
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                "text": "Internal error",
            })
        });
    }
}
//On exporte nos deux fonctions

exports.create = create
exports.modify = modify
exports.list = list