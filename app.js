const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(parser.urlencoded({ extended: true }));

// const APIURL =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//   "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";
// // Conditional check for poster_path
// const posterSrc = poster_path
//   ? IMGPATH + poster_path
//   : "path/to/placeholder-image.jpg";

const products = [
  {
    title: "Laptop",
    model: "HP",
    price: 33544.99,
    img_src:
      "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?rs=1&pid=ImgDetMain",
  },

  {
    title: "Mobile Phone",
    model: "Tecno",
    price: 29999.99,
    img_src:
      "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Bicycle",
    model: "Mountain G3",
    price: 338783.12,
    img_src:
      "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?rs=1&pid=ImgDetMain",
  },
];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.post("/new_product", (req, res) => {
  const data = req.body;
  products.push(data);
  res.redirect("products");
});

app.get("/product/new", (req, res) => {
  res.render("new_product");
});

app.listen(5000, () => {
  console.log("Works");
});
