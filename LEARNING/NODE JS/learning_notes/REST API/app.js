const express = require("express");
const app = express();
//res.json({...}) is a method that sets the Content-Type to application/json and sends a JSON response.
//Once you call res.json(...), the response is already sent to the client.
//Calling .send(...) after that is redundant and invalid because you can only send one response per request.
//If strict error handling is enabled, calling .send(...) after .json(...) may result in an error like:
app.use(express.json());

const books = [
  {
    id: 1,
    label: "sky",
  },
];

app.get("/", (req, res) => {
  res.json(books);
});

app.get("/get-book/:id", (req, res) => {
  //   res.json({
  //     message: "hello",
  //   });

  const current_book = books.find(
    (book) => book.id === parseInt(req.params.id)
  );

  if (current_book) {
    res.json({
      message: "book found successfully",
      data: current_book,
    });
  } else {
    res.status(400).json({
      message: "book not found",
    });
  }

  // give the text content in the html page.
  //   res.json({
  //     message: "home page",
  //     home: "new home page",
  //   });// in the formate of json body
});

app.post("/book/add", (req, res) => {
  const new_book_detail = {
    id: books.length + 1,
    label: "apple",
  };

  books.push(new_book_detail);

  res.json({
    message: "new book added",
    data: new_book_detail,
  });
});

app.put("/books/put/:id", (req, res) => {
  const get_book_index = books.find(
    (book) => book.id === parseInt(req.params.id)
  );

  if (get_book_index) {
    get_book_index.label = req.body.label || get_book_index.label;

    res.json({
      message: "new data updated",
      data: books,
    });
  }
});

app.delete("/books/delete/:id", (req, res) => {
  const get_books_index = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (get_books_index != -1) {
    const delete_books = books.splice(get_books_index, 1);
    res.status(200).json({
      message: "books deleted successfully...",
      data: get_books_index,
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("server has started");
});
