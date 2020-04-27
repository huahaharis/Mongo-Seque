const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Books = new Schema({
    _id : {
        type: string
    },
    title: {
        type: string
    },
    author: {
        type: string
    },
    published_date: {
        type: date
    },
    pages: {
        type: Number
    },
    language: {
        type: string
    },
    published_id: {
        type: string
    }
},{
    collection: 'books'

})

module.exports = mongoose.model('Books', Books);