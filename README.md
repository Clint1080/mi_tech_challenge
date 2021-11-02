# Midwestern Interactive Tech Challenge

This challenge was completed by Clint Edwards
I built this with mobile first in mind. Even though this is small I used the file architecture I would on a full scale project.

# Get up and running!

1. Clone this project onto your computer. I'm assuming you have installed postgres and it is running.

2. log into the PSQL shell. We will be using the postgres user since this is not a production site.

3. These are the commands we will use to create the database and create the tables needed. You can aslo find them located in the server folder in the file named database.sql

```
CREATE DATABASE mi_challenge;

CREATE TABLE "cards" (
card_id SERIAL PRIMARY KEY,
title VARCHAR(150),
paragraph VARCHAR(755)
);

CREATE TABLE "forms" (
form_id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
title VARCHAR(50),
email VARCHAR (50),
message VARCHAR(755)
);

```

4. In the terminal navigate the server folder of this project and run this command to import the seed data I have provided.
   ```
   psql mi_challenge < seed.sql
   ```

# Trying out new architecture

I am trying out a new architecture for my styles. Normally each component has a folder with it's .jsx component and .scss file in that folder. In my last project that was a little cumbersom to navigate the components while building it. I'm going to try having a styles folder that houses all the styles and then in components there will only be the .jsx component.
