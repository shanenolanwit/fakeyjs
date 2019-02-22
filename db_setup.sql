SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `fakeyjs`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

CREATE TABLE IF NOT EXISTS `atgersf` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(200) DEFAULT NULL,
  `contact` varchar(200) DEFAULT NULL,
  `pin` int(8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

CREATE TABLE IF NOT EXISTS `exfsark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;



INSERT INTO `product` (`id`, `name`, `price`) VALUES
(1, 'Product 1', 2000),
(2, 'Product 2', 2000),
(3, 'Product 3 <b style="color: blue">NEW</b>', 3000),
(4, 'Product 4', 2000),
(5, 'Product 5 <b style="color: red">low stock</b>', 1500);

INSERT INTO `atgersf` (`id`, `reference`, `contact`, `pin`) VALUES
(1, 'AA002SS', 'james@contonso.com', 1234321),
(2, 'AB00244', 'maggie@contonso.com', 12871),
(3, 'AA709XV6', 'james@contonso.com', 7788),
(4, 'BBPL887', 'belinda@contonso.com', 018271),
(5, 'AB887C1', 'maggie@contonso.com', 42130);

INSERT INTO `exfsark` (`id`, `username`, `password`) VALUES
(1, 'amanda', 'NWQ0MTQwMmFiYzRiMmE3NmI5NzE5ZDkxMTAxN2M1OTI='),
(2, 'brian', 'N2Q3OTMwMzdhMDc2MDE4NjU3NGIwMjgyZjJmNDM1ZTc='),
(3, 'catherine', 'ZTk5YTE4YzQyOGNiMzhkNWYyNjA4NTM2Nzg5MjJlMDM='),
(4, 'gordon', 'MjQzYTk4ZDIzYjY3YWFlY2MyZjZkNzIyZDVhODViZTQ='),
(5, 'root', 'NjNhOWYwZWE3YmI5ODA1MDc5NmI2NDllODU0ODE4NDU='),
(6, 'shane', 'N2JmMjM5NzlhMTBhY2EwNjc1OGUzZjY1ZDYxNmFkODY='),
(7, 'yvonne', 'NDgyYzgxMWRhNWQ1YjRiYzZkNDk3ZmZhOTg0OTFlMzg=')



