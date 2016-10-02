### Schema

CREATE DATABASE `ramen_db`;
USE `ramen_db`;

DROP TABLE IF EXISTS `ramen`;

CREATE TABLE `ramen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;