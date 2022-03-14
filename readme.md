# barebnb

barebnb is an [Airbnb](https://www.airbnb.com/) clone that focuses on smaller niche accommodations that contribute to the traveler's enjoyment of their destination.

Try creating an account and using currently deployed features: [barebnb](https://bare-bnb.herokuapp.com/).

## Overview
barebnb wants travelers to fully appreciate their destination. Providing locations that bring out the most of their surroundings,
barebnb will provide your next unforgettable travel experience!

## Starting The App
To view and use this application, you can either navigate to the [live hosted site](https://github.com/mpuer/barebnb.git) and login as a new or demo user, or download the project locally:
1. Clone this repository ```git clone https://github.com/mpuer/barebnb.git```

2. Install dependencies ```npm install``` in both backend and frontend folders.

3.  Create a .env file based on the .env.example given

4.  Setup a PostgresSQL user + database in the backend folder
    ```javascript
    npx sequelize init
    psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
    npx dotenv sequelize db:create
    ```

5. Migrate and Seed models in the backend folder
    ```javascript
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```

6. Start the app by running ```npm start``` in both the frontend and backend folders

## Libraries Used
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height=40/>

## Current Features 
### Listings
- Logged in users can view listings, as well as create, update, and delete their own!

### Reviews
- Logged in users can view other users reviews, create, and delete their own reviews!

## Future Features
### Booked Listings
- track and manage your upcoming listings
