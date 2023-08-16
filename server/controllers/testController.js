const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const app = express();

const tokenSecret = process.env.TOKEN_SECRET;

// Fake db

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    language: "Danish",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
];

const getBooks = (req, res) => {
  res.json(books);
};

const createBook = (req, res) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.sendStatus(403);
  } else {
    const book = req.body;
    books.push(book);
    res.send('Book added successfully');
  }
}

module.exports = {
  getBooks,
  createBook
};
