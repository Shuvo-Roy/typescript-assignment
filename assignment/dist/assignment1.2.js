"use strict";
{
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    function filterByRating(items, minRating = 4.0) {
        return items.filter(book => book.rating >= minRating);
    }
    const highRatedBooks = filterByRating(books);
    console.log(highRatedBooks);
}
