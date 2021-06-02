--CREATE DATABASE restaurant;
-- CREATE TABLE restaurant(
--     id SERIAL PRIMARY KEY,
--     name varchar,
--     distance real,
--     stars integer,
--     category char(60),
--     fav_dish varchar,
--     takeout boolean DEFAULT FALSE,
--     last_visit date
-- );

-- INSERT INTO restaurant VALUES
-- (DEFAULT,'Brickstore',4.1,5,'American','burger',TRUE,'2021-5-31'),
-- (DEFAULT,'Coyote Mexican Grill',4.7,4,'Mexican','Quesadilla',TRUE,'2021-5-24'),
-- (DEFAULT,'Skips Chicago Dogs',3.4,5,'Mexican','Onion Rings',TRUE,'2021-5-27'),
-- (DEFAULT,'Chick-fil-a',5.0,4,'American','Chicken Biscut',TRUE,'2021-5-29'),
-- (DEFAULT,'Bawarchi Biryanis',8.4,4,'Indian','Chef Special',TRUE,'2021-5-30'),
-- (DEFAULT,'Rising Son',3.2,5,'Southern','Brunch',FALSE,'2020-1-30'),
-- (DEFAULT,'Shun Xing',0.8,4,'Chinese','Lo mein',TRUE,'2021-5-15'),
-- (DEFAULT,'Gusto',6.9,5,'Healthy','Thai Peanut Bowl',TRUE,'2021-5-7'),
-- (DEFAULT,'Fellinis Pizza',4.6,5,'Pizza','Fellinis Special',TRUE,'2021-5-13'),
-- (DEFAULT,'Village Burger',7.5,5,'American','Fried Pickles',TRUE,'2020-12-10');
-- ALTER TABLE restaurant ALTER COLUMN category TYPE varchar(20);


-- SELECT * FROM restaurant;

-- SELECT name FROM restaurant WHERE stars = 5;
-- SELECT fav_dish FROM restaurant WHERE stars = 5;
-- SELECT id FROM restaurant WHERE name = 'Gusto';
-- SELECT * FROM restaurant WHERE category = 'American';
-- SELECT * FROM restaurant WHERE takeout = TRUE;
-- SELECT * FROM restaurant WHERE takeout = TRUE and category = 'American';
 -- SELECT * FROM restaurant WHERE distance <= 4.0;
 -- SELECT * FROM restaurant WHERE last_visit < '2021-5-24';
 -- SELECT * FROM restaurant WHERE last_visit < '2021-5-24' AND stars = 5;

-- SELECT * FROM restaurant ORDER BY distance;
-- SELECT * FROM restaurant ORDER BY distance DESC LIMIT 2;
-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;
-- SELECT * FROM restaurant WHERE distance < 5 ORDER BY stars DESC LIMIT 2;

--SELECT COUNT(*) FROM restaurant;
--SELECT COUNT(*) FROM restaurant WHERE category = 'American';
--SELECT COUNT(*) FROM restaurant WHERE category = 'Mexican';

-- SELECT AVG(stars) FROM restaurant;
-- SELECT AVG(stars) FROM restaurant WHERE category = 'American';
-- SELECT AVG(stars) FROM restaurant WHERE category = 'Mexican';
-- SELECT MAX(stars) FROM restaurant WHERE category = 'Mexican';
-- SELECT MAX(stars) FROM restaurant WHERE category = 'American';

-- SELECT category, AVG(stars) FROM restaurant GROUP BY category;
-- SELECT category, MAX(stars) FROM restaurant GROUP BY category;
-- SELECT category, Min(distance) FROM restaurant GROUP BY category;


