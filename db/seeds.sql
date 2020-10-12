use tester;

INSERT INTO users (email, password, firsName, lastName)
VALUES ("gringoFlemingo@gmail.com", "password", "Alex", "Fleming"),("King_Canales@gmail.com", "password1", "Jonathan", "Canales"),
("commanderCameron@gmail.com", "password2", "Cameron", "Lay"), ("LordLowery@gmail.com", "password3", "Joseph", "Lowery");


INSERT INTO items (name, price, category, stock)
VALUES ("Potatos", .75 , "produce", 5),("Banans", .5, "produce", 15),("Steak", 12, "produce", 10)("Jameson Whiskey", 30, "liquor", 2);

SELECT * FROM items; 