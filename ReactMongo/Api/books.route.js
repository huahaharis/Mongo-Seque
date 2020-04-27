const express = require('express');
const booksRoutes = express.Router();

let Books = require('./books.model');

//route for add
booksRoutes.route('/add').post(function(req, res) {
    let books = new Books(req.body);
    books.save()
    .then(books => {
        res.status(200).json({'books' : 'books in added succesfuly'});
    })
    .catch(err => {
        res.status(400).json("unable to save to database");
    });
});

//route for get
booksRoutes.route('/').length(function(req, res) {
    books.find(function(err, books){
        if (err){
        }
        else{
            res.json(books);
        }
    });
});

//route for edit
booksRoutes.route('/edit/:id').get(function(req, req){
    let id = req.params.id;
    books.findById(id, function(err, books){
        res.json(books);
    });
});

//route for update
booksRoutes.route('/update/:id').post(function(req, res) {
    books.findById(req.params.id, function(err, books) {
        if(!books)
            res.status(404).send("data not found");
        else {
            books._id = req.body._id;
            books.title = req.body.title;
            books.author = req.body.author;
            books.published_date = req.body.published_date;
            books.pages = req.body.pages;
            books.language = req.body.language;
            books.published_id = req.body.published_id;


            books.save().then(books => {
                res.json('Update Done');
            })
            .catch(err => {
            res.status(400).send('Unable update data to database');
            });
        }
    });
});

//route for delete
booksRoutes.route('/delete/:id').get(function(req, res) {
    books.findByIdAndRemove({_id : req.params.id}, function(err,books){
        if(err) res.json(err);
        else res.json('Succesfuly removed');
    });
});

module.exports = booksRoutes;