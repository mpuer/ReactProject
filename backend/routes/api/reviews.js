const express = require("express");
const asyncHandler = require("express-async-handler");

const {handleValidationErrors} = require('../../utils/validation');
const { check } = require('express-validator');

const { Review } = require("../../db/models");

const router = express.Router();

reviewsValidators = [
    check('reviewText')
        .exists({checkFalsy: true})
        .isLength({min: 5, max: 300})
        .withMessage("Please provide a review within 5 to 300 characters."),
    check('rating')
        .exists({checkFalsy: true})
        .isFloat({ min: 1, max: 5 })
        .withMessage("Please provide a rating between 1 and 5"),
        handleValidationErrors
];

router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
  }));

router.post("/", reviewsValidators, asyncHandler( async (req, res) => {
    const {userId, listingId, reviewText, rating} = req.body;
    const review = await Review.create({ userId, listingId, reviewText, rating});

    return res.json(review)
}))

router.delete("/", asyncHandler(async (req, res) => {
    console.log(req.body)
    // console.log(id, "222222222222222222222222222")
    // const review = await Review.findByPk(id);
    // console.log(review, "this is the review in the route")
    // const remove = await review.destroy();
    // res.json(remove)
}))

  
module.exports = router;
