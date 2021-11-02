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