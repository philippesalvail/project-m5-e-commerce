"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleItemsByCategory,
  handleItemsByCompany,
  handleAllItems,
} = require("./serverHandlers/handleItems");

const { handleSearchItems } = require("./serverHandlers/handleSearch");

const { handlePurchase } = require("./serverHandlers/handlePurchase");
const { handleSingleItem } = require("./serverHandlers/handleSingleItem");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/items/filter/:category", handleItemsByCategory)
  .get("/items/company/:companyId", handleItemsByCompany)
  .get("/items/", handleAllItems)
  .get("/item/:itemId", handleSingleItem)
  .get("/search/:input", handleSearchItems)

  .patch("/buy", handlePurchase)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
