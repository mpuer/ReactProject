'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      listingId: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      listingId: 6,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      listingId: 2,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      listingId: 3,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      listingId: 3,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      listingId: 4,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      listingId: 3,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      listingId: 4,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
      rating: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
