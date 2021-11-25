const { response } = require("express");

const usersGET = (req, res = response) => {
  res.json({
    msg: "get API - Controller",
  });
};

const usersPUT = (req, res = response) => {
  res.status(400).json({
    msg: "put API - Controller",
  });
};
const usersPOST = (req, res = response) => {
  res.status(201).json({
    msg: "post API - Controller",
  });
};
const usersDELETE = (req, res = response) => {
  res.json({
    msg: "delete API - Controller",
  });
};
const usersPATCH = (req, res = response) => {
  res.json({
    msg: "patch API - Controller",
  });
};

module.exports = {
  usersGET,
  usersDELETE,
  usersPATCH,
  usersPOST,
  usersPUT,
};
