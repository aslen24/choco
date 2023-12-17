-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema chocovaleria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chocovaleria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chocovaleria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `chocovaleria` ;

-- -----------------------------------------------------
-- Table `chocovaleria`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chocovaleria`.`carts` (
  `idcart` INT NOT NULL AUTO_INCREMENT,
  `cartName` VARCHAR(45) NOT NULL,
  `cartPrice` INT NOT NULL,
  PRIMARY KEY (`idcart`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `chocovaleria`.`choco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chocovaleria`.`choco` (
  `idchoco` INT NOT NULL AUTO_INCREMENT,
  `chocoName` VARCHAR(45) NOT NULL,
  `chocoDesc` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `chocoPrice` INT NOT NULL,
  PRIMARY KEY (`idchoco`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `chocovaleria`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chocovaleria`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `userPassword` VARCHAR(45) NOT NULL,
  `userType` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- mysql -u root -p
