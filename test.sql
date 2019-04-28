CREATE DATABASE  IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test`;
-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `token_management`
--

DROP TABLE IF EXISTS `token_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token_management` (
  `token` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_management`
--

LOCK TABLES `token_management` WRITE;
/*!40000 ALTER TABLE `token_management` DISABLE KEYS */;
/*!40000 ALTER TABLE `token_management` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(35) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(125) NOT NULL,
  `token` varchar(256) NOT NULL,
  `profile` varchar(20) DEFAULT NULL,
  `created_at` varchar(100) NOT NULL ,
  `token_created_time` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'sr','m.sti@gmail.com','1232456','55720d6f2095c1dd81c1fde539a52856a2236a477a6b12e144da2b9813e833eb','werrtt','2019-04-27 07:17:35','2019-04-27 06:52:29'),(4,'sreejith','m.srijiti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','19f5d7bcfd3f066fead857238f42d8933bb9da4d416ca992b80afa630c1fd2ee',NULL,'2019-04-27 05:58:50',NULL),(5,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','637954cc627f13ce89ab5c3907b9d051c6c1e7e7af3e62ce80e2b0634a7d93f6',NULL,'2019-04-27 06:08:42',NULL),(10,'sreejith','m.sijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','44ed578866b0cd6b227afebf81f62b80b7dc27495dc56a6b958b158a52e532ef',NULL,'2019-04-27 06:14:43','2019-04-27 06:14:43'),(12,'sreejith','m.siggjti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','546e0cce0f435599e9b16f0047da4daa51377e1ac3ecdcb0a753a18c20d07625',NULL,'2019-04-27 06:17:20','2019-04-27 06:17:20'),(13,'sreejith','m.siggjffti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','0268e4cd7a84ca7fd550868feddb64132006f5e9e75384e4affeadbd17077e86',NULL,'2019-04-27 06:17:47','2019-04-27 06:17:47'),(14,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','13e2d744fb921f6557c722dc8df1522d6cb51a36f6033c54c8b0792132b7f735',NULL,'2019-04-26 20:03:23','2019-04-26 20:03:23'),(15,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','6ed357e66ba69fc4b4eed70fd6c65b931a603045b2d3648a1a793c11a7afd878',NULL,'2019-04-26 20:04:46','2019-04-26 20:04:46'),(16,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','1244f9862b3a4a52af84a514742c5c9c2b917daaa2822e0a23b228460b1f54ae',NULL,'2019-04-26 20:05:27','2019-04-26 20:05:27'),(17,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','4375fcbf8f11570e29e0a039b3e940c0911aa02e9276ddf1adf1da917e7a15a5',NULL,'2019-04-26 20:06:17','2019-04-26 20:06:17'),(18,'sreejith','m.srijti@gmail.com','52c2915d5c274e259df134050ce0310f9d99e27512c44f868e4489d6677fb3d9','9e7eace141a6c49c08179bed19d2891d631247084e4d50d49333c59cdeedb8d4',NULL,'2019-04-26 20:07:21','2019-04-26 20:07:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-27 14:11:32
