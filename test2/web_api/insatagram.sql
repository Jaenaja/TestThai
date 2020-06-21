-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 21 มิ.ย. 2020 เมื่อ 09:19 PM
-- เวอร์ชันของเซิร์ฟเวอร์: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insatagram`
--

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- dump ตาราง `item`
--

INSERT INTO `item` (`id`, `title`, `description`, `image`, `created_date`, `updated_date`) VALUES
(15, 'Omnis non quis corru', 'Ut assumenda repudia', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 18:28:33', '2020-06-21 18:28:33'),
(10, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 16:45:31', '2020-06-21 16:45:31'),
(9, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 16:45:26', '2020-06-21 16:45:26'),
(5, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 11:01:56', '2020-06-21 11:01:56'),
(6, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 11:01:57', '2020-06-21 11:01:57'),
(7, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 11:01:58', '2020-06-21 11:01:58'),
(8, 'dddddd', 'ssdad', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 11:02:13', '2020-06-21 11:02:13'),
(11, '', '', 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', '2020-06-21 18:10:31', '2020-06-21 18:10:31'),
(21, 'Qui ad assumenda fug', 'Accusantium atque ma', '22', '2020-06-21 21:02:15', '2020-06-21 21:02:15'),
(22, 'Dolor ducimus qui u', 'Aute voluptas doloru', '34', '2020-06-21 21:18:44', '2020-06-21 21:18:44'),
(23, 'Incididunt nihil ape', 'Rerum ea quo cupidit', '89', '2020-06-21 21:18:55', '2020-06-21 21:18:55'),
(17, '', '', '', '2020-06-21 21:00:01', '2020-06-21 21:00:01'),
(18, 'Consequatur Soluta ', 'Nisi ab aut laudanti', '20', '2020-06-21 21:00:30', '2020-06-21 21:00:30'),
(19, 'Itaque aut saepe iur', 'Sequi facere veritat', '91', '2020-06-21 21:02:03', '2020-06-21 21:02:03'),
(20, 'Tempore sint qui e', 'Vero dolorum officia', '86', '2020-06-21 21:02:10', '2020-06-21 21:02:10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
