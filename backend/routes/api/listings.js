const express = require("express");
const asyncHandler = require("express-async-handler");

const {handleValidationErrors} = require('../../utils/validation');
const { check } = require('express-validator');

const { Listing } = require("../../db/models");

const router = express.Router();

const listingValidators = [
  check('title')
    .exists({checkFalsy: true})
    .isLength({min: 5})
    .withMessage('Please provide a title with at least 5 characters'),
  check('address')
    .exists({checkFalsy: true})
    .isLength({min: 5})
    .withMessage('Please provide an address with at least 5 characters'),
  check('city')
    .exists({checkFalsy: true})
    .isLength({min: 1})
    .withMessage('Please provide a valid city'),
  check('state')
    .exists({checkFalsy: true})
    .isLength({min: 1})
    .withMessage('Please provide a valid state'),
  check('country')
    .exists({checkFalsy: true})
    .isLength({min: 4})
    .withMessage('Please provide a country with at least 4 characters'),
  check('price')
    .exists({checkFalsy: true})
    .isInt()
    .withMessage('Please enter a valid price'),
  check('image')
    .exists({checkFalsy: true})
    .isURL()
    .withMessage('Please provide a valid image url'),
  check('description')
    .exists({checkFalsy: true})
    .isLength({min: 15})
    .withMessage('Please provide a description with at least 15 characters'),
  handleValidationErrors,
];

router.get('/', asyncHandler(async (req, res) => {
    const listings = await Listing.findAll();
    return res.json(listings);
  }));


router.get('/:id', asyncHandler(async (req, res) => {
    const listing = await Listing.findByPk(req.params.id)
    return res.json(listing);
  }));

router.put('/:id', listingValidators, asyncHandler( async (req, res) => {
  const listing = await Listing.findByPk(req.params.id)
  const { userId, title, address, city, state, country, price, image, description} = req.body;

  if (listing) {
    await listing.update({
      userId, title, address, city, state, country, price, image, description
    })
  } else {
    throw new Error("Unable to update");
  };

  const updatedListing = await Listing.findByPk(req.params.id)
  return res.json(updatedListing)
  
}))

router.delete("/:id", asyncHandler( async(req, res) => {
  const listing = await Listing.findByPk(req.params.id);

  if (!listing) throw new Error("Unable to delete! This is the route!!");

  await listing.destroy();
  return res.json(listing);
}))


router.post("/", listingValidators, asyncHandler( async (req, res) => {
  const { userId, title, address, city, state, country, price, image, description} = req.body;
  const listing = await Listing.create({
    userId, title, address, city, state, country, price, image, description
  })

  return res.json(listing);

}));
module.exports = router;
