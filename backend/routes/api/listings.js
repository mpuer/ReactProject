const express = require("express");
const asyncHandler = require("express-async-handler");

const { Listing } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async function(_req, res) {
    const listings = await Listing.findAll();
    return res.json(listings);
  }));


router.get('/:id', asyncHandler(async (req, res) => {
    const listing = await Listing.findByPk(req.params.id)
    return res.json(listing);
  }));

module.exports = router;
