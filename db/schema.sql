

     CREATE DATABASE goodBurgersDB;
    
    USE goodBurgersDB;

    CREATE TABLE goodBurgers
    (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);