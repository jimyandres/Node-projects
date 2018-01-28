const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/edx-course-db');

const bookSchema = mongoose.Schema({name: String});

bookSchema.method({
  buy(quantity, customer, callback) {
    var bookToPurchase = this;
    console.log('buy');
    return callback();
  },
  refund(customer, callback) {
    // process the refund
    console.log('refund');
    return callback();
  }
});

bookSchema.static({
  getZeroInventoryReport(callback) {
    // run a query on all books and get the ones with zero inventory
    console.log('getZeroInventoryReport');
    let books = [];
    return callback(books);
  },
  getCountOfBooksById(bookId, callback) {
    // run a query and get the number of books left for a given book
    console.log('getCountOfBooksById');
    let count = 0;
  }
});

let Book = mongoose.model('Book', bookSchema);
Book.getZeroInventoryReport(() => {});
Book.getCountOfBooksById(123, () => {});

let practicalNodeBook = new Book({name: 'Practica Node.js, 2nd Edition'});

practicalNodeBook.buy(1, 2, () => {});
practicalNodeBook.refund(1, () => {});

bookSchema.post('save', (next) => {
  // prepare for saving
  console.log('post save');
  return next;
});

bookSchema.pre('remove', (next) => {
  // prepare for removing
  console.log('pre remove');
  return next;
});

practicalNodeBook.save((error, results) => {
  if (error) {
    console.error(error);
    process.exit(1);
  } else {
    console.log('Saved: ', results);
    practicalNodeBook.remove((error, results) => {
      if (error) {
        console.error(error);
        process.exit(1);
      } else {
        process.exit(0);
      }
    });
  }
});
