var model = require("../models/index.js");

module.exports = function(app) {
    //get data
    app.get("/books", function(req, res, next){
        model.Book.findAll({})
        .then(books=>
            res.json({
               error: false,
               data: books
            })
        )
        .catch(error =>
            res.json({
                data:[],
                error: error
            })
        );
});



//get data by id
app.get("/books/:id", function(res,req, next){
    const book_id = req.params.id;
    model.Book.findById({})
    .then(books=>
        res.json({
           error: false,
           data: books
        })
    )
    .catch(error =>
        res.json({
            data:[],
            error: error,
            massage: "The book hasn't found"
        }
    ));
});



//post data
app.post("/books", function(res, res, next){
    const {title, decsription} = req.body;
    model.Book.create({
        title: title,
        decsription: decsription
    })
        .then(book =>
            res.status(201).json({
                error: false,
                data: book,
                message: "Data has been created"
            })
        )
            .catch(error =>
                res.json({
                    error: true,
                    data: [],
                    error: error
                })
            );
});      
//update data
app.put("/books/:id", function(res,req, next){
    const book_id = req.params.id;

    const{title, description} = req.body;

    model.Book.update(
        {
            title: title,
            description: description
        },
        {
            where: {
                id: book_id
            }
        }
    .then(book =>
        res.json({
            error: false,
            message: "Data has been update "
        })
    ));
});

//delete data
app.delete("/books/:id", function(req, res, next){
    const book_id = req.params.id;

    model.Book.destroy({
        where: {
            id: book_id
        }
    })
    .then(status =>
        res.json({
            error: false,
            message: "Data has been delete"
        })
    )
    .catch(error =>
        res.json({
            error: true,
            error: error
        })
    );
});
};