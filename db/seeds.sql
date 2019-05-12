DROP TABLE IF EXISTS `burgers`;

CREATE TABLE `burgers`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar
(255) NOT NULL,
  `devoured` tinyint
(1) DEFAULT '0',
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `burgers` WRITE;
/*!40000 ALTER TABLE `burgers` DISABLE KEYS */;

INSERT INTO `burgers` (`
id`,
`burger_name
`, `devoured`)
VALUES
(1,'Cheese Burger',0),
(2,'Hamburger',0),
(3,'Pizza Burger',0);

/*!40000 ALTER TABLE `burgers` ENABLE KEYS */;
UNLOCK TABLES;