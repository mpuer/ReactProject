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

router.delete("/:id", asyncHandler(async (req, res) => {
    const { id } = req.body;

    const review = await Review.findByPk(id);
    const remove = await review.destroy();
    res.json(review.id);
}))

  
module.exports = router;
