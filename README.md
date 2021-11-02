# Midwestern Interactive Tech Challenge

This challenge was completed by Clint Edwards
I built this with mobile first in mind. Even though this is small I used the file architecture I would on a full scale project.

# Get up and running!

1. Clone this project onto your computer.

2. log into the PSQL shell. We will be using the postgres user since this is not a production site.

3. Navigate to the server folder of this project and find database.sql. Copy all the commands in that file and then run them in your psql shell.

4. In the terminal navigate the server folder of this project and run this command to import the seed data I have provided.
   psql mi_challenge < seed.sql

# Trying out new architecture

I am trying out a new architecture for my styles. Normally each component has a folder with it's .jsx component and .scss file in that folder. In my last project that was a little cumbersom to navigate the components while building it. I'm going to try having a styles folder that houses all the styles and then in components there will only be the .jsx component.
