-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema Events
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Events` ;

-- -----------------------------------------------------
-- Schema Events
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Events` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
SHOW WARNINGS;
USE `Events` ;

-- -----------------------------------------------------
-- Table `Tel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Tel` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Tel` (
  `idTel` INT NOT NULL AUTO_INCREMENT,
  `raw_ID` INT NOT NULL,
  `tell` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idTel`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Adress`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Adress` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Adress` (
  `idAdress` INT NOT NULL AUTO_INCREMENT,
  `Raw_ID` INT NOT NULL,
  `Adress` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idAdress`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `User` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `Full_Name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `puntos` INT NULL,
  `Tell_idTell` INT NOT NULL,
  `Adress_idAdress` INT NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Promotor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Promotor` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Promotor` (
  `idPromotor` INT NOT NULL AUTO_INCREMENT,
  `Full_Name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `Qualificacion` INT NULL,
  `Tell_idTell` INT NOT NULL,
  `Adress_idAdress` INT NOT NULL,
  PRIMARY KEY (`idPromotor`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Event_Type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Event_Type` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Event_Type` (
  `idEvent_Type` INT NOT NULL AUTO_INCREMENT,
  `Type` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idEvent_Type`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Event_Idioma`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Event_Idioma` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Event_Idioma` (
  `idEvent_Idioma` INT NOT NULL AUTO_INCREMENT,
  `Idioma` VARCHAR(45) NULL,
  PRIMARY KEY (`idEvent_Idioma`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Events`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Events` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Events` (
  `idEvents` INT NOT NULL AUTO_INCREMENT,
  `event_title` VARCHAR(20) NOT NULL,
  `creation_date` DATETIME NOT NULL,
  `event_date_time` DATETIME NOT NULL,
  `location` VARCHAR(20) NOT NULL,
  `description` VARCHAR(255) NULL,
  `price` DOUBLE NOT NULL,
  `Event_Type_idEvent_Type` INT NOT NULL,
  `Event_Idioma_idEvent_Idioma` INT NOT NULL,
  PRIMARY KEY (`idEvents`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Rewievs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Rewievs` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Rewievs` (
  `idRewievs` INT NOT NULL AUTO_INCREMENT,
  `points` INT NOT NULL,
  `description` VARCHAR(255) NULL,
  `rewiev_Date` DATE NOT NULL,
  `Eventos_idEventos` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idRewievs`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
