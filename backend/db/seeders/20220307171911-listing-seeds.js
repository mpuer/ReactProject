'use strict';
import { faker } from '@faker-js/faker';

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Listings', [{
    userId: 1,
    title: "testing 1",
    address: "Eitrheimsvegen 65, 5750",
    city: "Odda",
    state: "Ullensvang",
    country: "Norway",
    price: 120,
    image: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,f_jpg,h_605,q_65,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3D1240x711-Sindre_Ellingsen-DJI_0142_921800817.jpg%26dh%3D459%26dw%3D800%26t%3D4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    userId: 1,
    title: "testing 2",
    address: "Maelsvegen 299, 5628",
    city: "Herand",
    state: "Ullensvang",
    country: "Norway",
    price: 180,
    image: "https://media.newmindmedia.com/TellUs/image/?file=DSC_6232_189802928.JPG&dw=1000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    title: "testing 3",
    address: "125 Rue des Vergers",
    city: "Villersexel",
    state: "Franche-Comte",
    country: "France",
    price: 60,
    image: "https://a0.muscache.com/im/pictures/77502939/a25d9ab1_original.jpg?im_w=1200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    title: "testing 4",
    address: "599 Rte de la Griaz",
    city: "Les Houches",
    state: "Auvergne-Rhône-Alpes",
    country: "France",
    price: 114,
    image: "https://a0.muscache.com/im/pictures/77502939/a25d9ab1_original.jpg?im_w=1200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    title: "testing 5",
    address: "822 Via Aurelia",
    city: "Rosignano Solvay-Castiglioncello",
    state: "Tuscany",
    country: "Italy",
    price: 89,
    image: "https://a0.muscache.com/im/pictures/33e8488e-1072-4091-bc0a-5d8a7a663912.jpg?im_w=1200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    title: "testing 6",
    address: "Via Mortelle, 54",
    city: "Torre del Greco",
    state: "Campania",
    country: "Italy",
    price: 77,
    image: "https://a0.muscache.com/im/pictures/b4448895-562a-4073-9e50-a45e52cd4fff.jpg?im_w=1200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet efficitur nisl. Fusce consectetur, massa vitae placerat sodales, libero leo sagittis augue, ut sollicitudin ex libero ac justo. Donec a accumsan nunc. Donec a tempor dolor. Donec non dictum tellus, a condimentum sem. Etiam ac velit mauris. Donec volutpat.",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
  */
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Listings', null, {});
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
  */
}
