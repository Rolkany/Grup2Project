-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema App
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema App
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `App` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `App` ;

-- -----------------------------------------------------
-- Table `App`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(45) NOT NULL,
  `img_url` VARCHAR(255) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `age` INT NULL,
  `desc` VARCHAR(255) NULL,
  `phone` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `coin` DOUBLE NULL DEFAULT 0,
  `points` INT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`language` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(45) NOT NULL DEFAULT 'Spanish',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img_url` VARCHAR(255) NULL,
  `title` VARCHAR(45) NOT NULL,
  `event_date` DATETIME NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  `created_by` INT NULL,
  `language_id` INT NOT NULL,
  PRIMARY KEY (`id`, `language_id`),
  INDEX `fk_Event_User1_idx` (`created_by` ASC) VISIBLE,
  INDEX `fk_event_language1_idx` (`language_id` ASC) VISIBLE,
  CONSTRAINT `fk_Event_User1`
    FOREIGN KEY (`created_by`)
    REFERENCES `App`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_language1`
    FOREIGN KEY (`language_id`)
    REFERENCES `App`.`language` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`event_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`event_type` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(45) NOT NULL,
  `rating_review` VARCHAR(45) NULL,
  `User_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `event_id`),
  INDEX `fk_review_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_review_event1_idx` (`event_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `App`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_review_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `App`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`Event_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`Event_location` (
  `Event_id` INT NOT NULL,
  `Location_id` INT NOT NULL,
  PRIMARY KEY (`Event_id`, `Location_id`),
  INDEX `fk_Event_has_Location_Location1_idx` (`Location_id` ASC) VISIBLE,
  INDEX `fk_Event_has_Location_Event1_idx` (`Event_id` ASC) VISIBLE,
  CONSTRAINT `fk_Event_has_Location_Event1`
    FOREIGN KEY (`Event_id`)
    REFERENCES `App`.`event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Event_has_Location_Location1`
    FOREIGN KEY (`Location_id`)
    REFERENCES `App`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `App`.`rol_has_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`rol_has_User` (
  `rol_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`rol_id`, `User_id`),
  INDEX `fk_rol_has_User_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_rol_has_User_rol1_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `fk_rol_has_User_rol1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `App`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rol_has_User_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `App`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
