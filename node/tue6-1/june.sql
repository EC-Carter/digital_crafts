-- CREATE TABLE student2(
--      name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohart_start_date date,
--     graduated boolean
-- );

-- INSERT INTO student2 VALUES(
--     'Jacob', 'jacob@dc.com', 'thejacob', 5, 'm','2021-06-01', 'false'
-- );
-- INSERT INTO student2 VALUES(
--     'Jason', 'jason@dc.com', 'thejason', 6, 'm','2021-06-01', 'false'
-- );

-- CREATE TABLE student3(
--     id SERIAL PRIMARY KEY,
--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohart_start_date date,
--     graduated boolean
-- );

-- INSERT INTO student3 VALUES
--     (DEFAULT, 'Andreana','andreana@me.com','theandreana',7, 'F', '2021-06-01',FALSE),
--     (DEFAULT, 'Jason H.','jason@me.com','jasonjasonjason',56, 'M', '2021-06-01',FALSE),
--     (DEFAULT, 'Jennifer','jenn@me.com','jennifer123',70, 'F', '2021-06-01',FALSE),
--     (DEFAULT, 'Victoria','Victoria@me.com','NotVicky',100, 'F', '2021-06-01',FALSE);

-- SELECT * FROM student3;

-- UPDATE student3 SET points = 8 WHERE  id = 1;

-- SELECT * FROM student3;

-- UPDATE student3 SET graduated = TRUE;
-- SELECT * FROM student3;

-- UPDATE student3 SET graduated = TRUE WHERE gender = 'F';
-- SELECT * FROM student3;

-- DELETE FROM student3 WHERE id = 1;
-- SELECT * FROM student3;

-- DELETE FROM student3;
-- SELECT * FROM student3;

-- SELECT name,website,gender FROM student3;

-- SELECT name,website,gender FROM student3 WHERE gender = 'M';

-- SELECT * FROM student3 WHERE gender = 'M';
-- SELECT * FROM student3 WHERE points > 60 AND id > 10;

-- SELECT * FROM student3 WHERE github_username ilike '%j%'
-- ALTER TABLE student3 ADD city varchar(50);
-- ALTER TABLE student3 ADD state varchar(50) DEFAULT 'Georgia';
-- ALTER TABLE student3 ADD isValid boolean DEFAULT FALSE;

-- ALTER TABLE student3 DROP COLUMN city;
-- ALTER TABLE student3 ALTER COLUMN website TYPE varchar(100);
-- SELECT * FROM student3;
-- SELECT COUNT(*) FROM student3;


-- SELECT SUM(points) FROM student3;
--SELECT MAX(points) FROM student3;

-- SELECT * FROM student3 ORDER BY name DESC;
-- SELECT * FROM student3 ORDER BY points DESC;

SELECT * FROM student3 ORDER BY name DESC LIMIT 2 OFFSET 3;
