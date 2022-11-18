-- Active: 1666715468048@@SG-curved-roast-6734-6831-mysql-master.servers.mongodirector.com@3306@MyFirstDatabase
CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture'
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS pokemon(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255),
        evolutions VARCHAR(255),
        weight INT,
        height INT,
        url VARCHAR(750),
        types VARCHAR(255),
        abilities varchar(255),
        forms VARCHAR(255),
        moves varchar(255),
        img VARCHAR(255)
    ) default charset utf8 COMMENT '';