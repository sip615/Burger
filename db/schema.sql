CREATE Database burgers_db;

Select burgers_db;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




