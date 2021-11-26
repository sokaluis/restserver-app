const { response, request } = require("express");
const User = require("../models/User");

const usersGET = (req = request, res = response) => {
  const { q, name = "no name", apikey, page = 1, limit = 10 } = req.query;
  res.json({
    msg: "get API - Controller",
    q,
    name,
    apikey,
    page,
    limit,
  });
};

const usersPUT = (req = request, res = response) => {
  const id = req.params.id;
  res.status(400).json({
    msg: "put API - Controller",
    id,
  });
};
const usersPOST = async (req = request, res = response) => {
  const body = req.body;
  const user = new User(body);

  await user.save();

  res.status(201).json({
    user,
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
