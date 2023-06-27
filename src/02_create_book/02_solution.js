// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
  const book = Object.create(createBook.prototype);
  
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
}

createBook.prototype = {
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  getPrice() {
    return this.price;
  },
  addRating(stars) {
    this.rating.push(stars);
  },
  getRating() {
    if (this.rating.length === 0) {
      return 'No ratings yet.';
    }

    const sum = this.rating.reduce((total, stars) => total + stars.length, 0);
    const average = sum / this.rating.length;
    return average;
  }
};

// Example usage:
// const book1 = createBook(1, 'Title 1', 'Author 1', 19.99);
const book1 = createBook(1, "Goodnight Moon", "Margaret Wise Brown");

const book2 = createBook(2, 'Title 2', 'Author 2', 24.99);

console.log(book1.getInfo()); // Output: "Title 1 by Author 1"
console.log(book2.getPrice()); // Output: 24.99

book1.addRating('*****');
book1.addRating('***');
book1.addRating('****');

console.log(book1.getRating()); // Output: "4.00"


