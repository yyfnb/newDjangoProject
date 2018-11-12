-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: szpy0
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

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
-- Table structure for table `App_cart`
--

DROP TABLE IF EXISTS `App_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `App_cart_goods_id_7f683fdc_fk_App_hanfengshishang_id` (`goods_id`),
  KEY `App_cart_user_id_4853be0b_fk_App_user_id` (`user_id`),
  CONSTRAINT `App_cart_goods_id_7f683fdc_fk_App_hanfengshishang_id` FOREIGN KEY (`goods_id`) REFERENCES `App_hanfengshishang` (`id`),
  CONSTRAINT `App_cart_user_id_4853be0b_fk_App_user_id` FOREIGN KEY (`user_id`) REFERENCES `App_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_cart`
--

LOCK TABLES `App_cart` WRITE;
/*!40000 ALTER TABLE `App_cart` DISABLE KEYS */;
INSERT INTO `App_cart` VALUES (19,3,1,10,6);
/*!40000 ALTER TABLE `App_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_f_img`
--

DROP TABLE IF EXISTS `App_f_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_f_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_img_img` varchar(256) NOT NULL,
  `fl_img` varchar(256) NOT NULL,
  `fl_img21` varchar(256) NOT NULL,
  `fl_img22` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_f_img`
--

LOCK TABLES `App_f_img` WRITE;
/*!40000 ALTER TABLE `App_f_img` DISABLE KEYS */;
INSERT INTO `App_f_img` VALUES (1,'/static/img/index_img/1469842178550783119.jpg','/static/img/index_img/1474507070145036803.png','/static/img/index_img/1473842129132469779.jpg','/static/img/index_img/1473843763717757766.jpg'),(2,'/static/img/index_img/1469763145598257010.jpg','/static/img/index_img/1473140801010377822.jpg','/static/img/index_img/1473843541775698155.jpg','/static/img/index_img/1469763568385151094.jpg');
/*!40000 ALTER TABLE `App_f_img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_hanfengshishang`
--

DROP TABLE IF EXISTS `App_hanfengshishang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_hanfengshishang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(256) NOT NULL,
  `price` int(11) NOT NULL,
  `del_price` int(11) NOT NULL,
  `buy` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_hanfengshishang`
--

LOCK TABLES `App_hanfengshishang` WRITE;
/*!40000 ALTER TABLE `App_hanfengshishang` DISABLE KEYS */;
INSERT INTO `App_hanfengshishang` VALUES (1,'/static/img/index_img/1474511664413928404.jpg',139,268,'立即抢购'),(2,'/static/img/index_img/1474511664413928404.jpg',139,268,'立即抢购'),(3,'/static/img/index_img/1474511664413928404.jpg',139,268,'立即抢购'),(4,'/static/img/index_img/1474511664413928404.jpg',139,268,'立即抢购'),(5,'/static/img/index_img/1474511664413928404.jpg',139,268,'立即抢购'),(6,'/static/img/index_img/1047366_thumb_G_1469848690665.jpg',136,168,'立即抢购'),(7,'/static/img/index_img/1047315_thumb_G_1470107213331.jpg',176,228,'立即抢购'),(8,'/static/img/index_img/1047310_thumb_G_1470109084528.jpg',118,118,'立即抢购'),(9,'/static/img/index_img/1046795_thumb_G_1469587603359.jpg',138,138,'立即抢购'),(10,'/static/img/index_img/1046795_thumb_G_1469587603359.jpg',138,138,'立即抢购'),(11,'/static/img/index_img/1469773456237865772.jpg',134,111,'立即抢购'),(12,'/static/img/index_img/1469550108179062470.jpg',146,143,'立即抢购'),(13,'/static/img/index_img/1046242_thumb_G_1468545450846.jpg',158,123,'立即抢购'),(14,'/static/img/index_img/1468254034381579762.jpg',159,142,'立即抢购'),(15,'/static/img/index_img/1045897_thumb_G_1469178287112.jpg',169,131,'立即抢购');
/*!40000 ALTER TABLE `App_hanfengshishang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_order`
--

DROP TABLE IF EXISTS `App_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `identifier` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `App_order_user_id_040b7227_fk_App_user_id` (`user_id`),
  CONSTRAINT `App_order_user_id_040b7227_fk_App_user_id` FOREIGN KEY (`user_id`) REFERENCES `App_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_order`
--

LOCK TABLES `App_order` WRITE;
/*!40000 ALTER TABLE `App_order` DISABLE KEYS */;
INSERT INTO `App_order` VALUES (1,'2018-11-12 02:16:21.674748',1,'Mon Nov 12 02:16:21 201822089',10),(2,'2018-11-12 02:17:14.888697',1,'Mon Nov 12 02:17:14 201861074',10),(3,'2018-11-12 02:26:06.279223',1,'1541989566.278705661533',10),(4,'2018-11-12 02:27:14.683762',1,'154198963494389',10),(5,'2018-11-12 02:27:16.973697',1,'154198963672421',10),(6,'2018-11-12 02:27:36.105712',1,'154198965669493',10),(7,'2018-11-12 02:42:34.479021',1,'154199055491100',10),(8,'2018-11-12 02:48:27.380211',1,'154199090797338',10),(9,'2018-11-12 02:52:29.319691',1,'154199114941194',10);
/*!40000 ALTER TABLE `App_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_ordergoods`
--

DROP TABLE IF EXISTS `App_ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `App_ordergoods_goods_id_870997c9_fk_App_hanfengshishang_id` (`goods_id`),
  KEY `App_ordergoods_order_id_1d9efb59_fk_App_order_id` (`order_id`),
  CONSTRAINT `App_ordergoods_goods_id_870997c9_fk_App_hanfengshishang_id` FOREIGN KEY (`goods_id`) REFERENCES `App_hanfengshishang` (`id`),
  CONSTRAINT `App_ordergoods_order_id_1d9efb59_fk_App_order_id` FOREIGN KEY (`order_id`) REFERENCES `App_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_ordergoods`
--

LOCK TABLES `App_ordergoods` WRITE;
/*!40000 ALTER TABLE `App_ordergoods` DISABLE KEYS */;
INSERT INTO `App_ordergoods` VALUES (1,1,2,1),(2,2,3,1),(3,3,6,1),(4,1,10,2),(5,1,5,3),(6,1,1,6),(7,1,9,7),(8,3,10,8),(9,1,1,9),(10,1,2,9),(11,1,6,9);
/*!40000 ALTER TABLE `App_ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_tip`
--

DROP TABLE IF EXISTS `App_tip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_tip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `H_list` varchar(30) NOT NULL,
  `s_cate1` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_tip`
--

LOCK TABLES `App_tip` WRITE;
/*!40000 ALTER TABLE `App_tip` DISABLE KEYS */;
INSERT INTO `App_tip` VALUES (1,'2016秋装新品','衬衫'),(2,'T恤','T恤'),(3,'衬衫','卫衣'),(4,'外套','牛仔裤'),(5,'休闲裤','休闲裤'),(6,'牛仔裤','短外套'),(7,'针织衫','短外套'),(8,'更多>','短外套');
/*!40000 ALTER TABLE `App_tip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_user`
--

DROP TABLE IF EXISTS `App_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_user`
--

LOCK TABLES `App_user` WRITE;
/*!40000 ALTER TABLE `App_user` DISABLE KEYS */;
INSERT INTO `App_user` VALUES (3,'124@qq.com','yyf199604'),(4,'124@qq.com','yyf199604'),(5,'1234@qq.com','yyf199604'),(6,'111@qq.com','yyf199604'),(8,'333@qq.com','yyf199604'),(9,'000@qq.com','yyf199604'),(10,'999@qq.com','yyf199604');
/*!40000 ALTER TABLE `App_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_wheel`
--

DROP TABLE IF EXISTS `App_wheel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_wheel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(256) NOT NULL,
  `word` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_wheel`
--

LOCK TABLES `App_wheel` WRITE;
/*!40000 ALTER TABLE `App_wheel` DISABLE KEYS */;
INSERT INTO `App_wheel` VALUES (1,'/static/img/index_img/勇往世界.jpg','敢往世界'),(2,'/static/img/index_img/招商合作.jpg','双11招商合作'),(3,'/static/img/index_img/等你来.jpg','AMH男装'),(4,'/static/img/index_img/童装潮品站.jpg','韩风快时尚童装'),(6,'/static/img/index_img/等你来.jpg','AMH男装');
/*!40000 ALTER TABLE `App_wheel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add user',7,'add_user'),(20,'Can change user',7,'change_user'),(21,'Can delete user',7,'delete_user'),(22,'Can add wheel',8,'add_wheel'),(23,'Can change wheel',8,'change_wheel'),(24,'Can delete wheel',8,'delete_wheel'),(25,'Can add hanfengshishang',9,'add_hanfengshishang'),(26,'Can change hanfengshishang',9,'change_hanfengshishang'),(27,'Can delete hanfengshishang',9,'delete_hanfengshishang'),(28,'Can add f_img',10,'add_f_img'),(29,'Can change f_img',10,'change_f_img'),(30,'Can delete f_img',10,'delete_f_img'),(31,'Can add tip',11,'add_tip'),(32,'Can change tip',11,'change_tip'),(33,'Can delete tip',11,'delete_tip'),(34,'Can add cart',12,'add_cart'),(35,'Can change cart',12,'change_cart'),(36,'Can delete cart',12,'delete_cart'),(37,'Can add order goods',13,'add_ordergoods'),(38,'Can change order goods',13,'change_ordergoods'),(39,'Can delete order goods',13,'delete_ordergoods'),(40,'Can add order',14,'add_order'),(41,'Can change order',14,'change_order'),(42,'Can delete order',14,'delete_order');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(12,'App','cart'),(10,'App','f_img'),(9,'App','hanfengshishang'),(14,'App','order'),(13,'App','ordergoods'),(11,'App','tip'),(7,'App','user'),(8,'App','wheel'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'App','0001_initial','2018-10-31 10:15:27.627988'),(2,'contenttypes','0001_initial','2018-10-31 10:15:27.697538'),(3,'auth','0001_initial','2018-10-31 10:15:28.254029'),(4,'admin','0001_initial','2018-10-31 10:15:28.427571'),(5,'admin','0002_logentry_remove_auto_add','2018-10-31 10:15:28.476400'),(6,'contenttypes','0002_remove_content_type_name','2018-10-31 10:15:28.619512'),(7,'auth','0002_alter_permission_name_max_length','2018-10-31 10:15:28.708625'),(8,'auth','0003_alter_user_email_max_length','2018-10-31 10:15:28.785513'),(9,'auth','0004_alter_user_username_opts','2018-10-31 10:15:28.800193'),(10,'auth','0005_alter_user_last_login_null','2018-10-31 10:15:28.877646'),(11,'auth','0006_require_contenttypes_0002','2018-10-31 10:15:28.883458'),(12,'auth','0007_alter_validators_add_error_messages','2018-10-31 10:15:28.895322'),(13,'auth','0008_alter_user_username_max_length','2018-10-31 10:15:28.945859'),(14,'sessions','0001_initial','2018-10-31 10:15:29.028280'),(15,'App','0002_wheel','2018-11-01 04:30:11.557575'),(16,'App','0003_hanfengshishang','2018-11-01 07:41:29.623119'),(17,'App','0004_f_img','2018-11-02 09:14:21.008594'),(18,'App','0005_tip','2018-11-02 09:39:11.612454'),(19,'App','0006_auto_20181106_0813','2018-11-06 08:13:55.302421'),(20,'App','0007_cart','2018-11-06 09:09:42.860273'),(21,'App','0008_order_ordergoods','2018-11-12 01:47:22.775577');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-11 19:04:00
