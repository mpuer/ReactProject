const express = require("express");
const asyncHandler = require("express-async-handler");

const { Listing } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async function(_req, res) {
    const listings = await Listing.findAll();
    return res.json(listings);
  }));


module.exports = router;
