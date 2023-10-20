// Sample list of books
const books = [
    { title: "Book 1", author: "john smith", year: 2005 },
    { title: "Book 2", author: "jane doe", year: 2015 },
    { title: "Book 3", author: "alice wonderland", year: 2012 },
    { title: "Book 4", author: "bob marley", year: 2008 },
  ];
  
  // Function to capitalize the author's name
  function capitalizeAuthorName(authorName) {
    const words = authorName.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }
  
  // Filter and capitalize
  const filteredBooks = books.filter(book => book.year >= 2010)
    .map(book => ({ ...book, author: capitalizeAuthorName(book.author) }));
  
  console.log(filteredBooks);
  