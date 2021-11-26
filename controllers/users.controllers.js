const { response, request } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  // check if email exist

  // encrypt password
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  // save in db
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
