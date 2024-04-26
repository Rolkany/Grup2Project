-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
  `des` VARCHAR(255) NULL,
  `phone` INT NULL,
  `address` VARCHAR(45) NULL,
  `points` INT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `App`.`user` (`user_name`, `email`, `pass`, `img_url`, `first_name`, `last_name`, `age`, `desc`, `phone`, `address`, `coin`, `points`) 
VALUES
('juanperez', 'juanperez@example.com', 'contraseñaJuan1', 'https://ejemplo.com/imagen1.jpg', 'Juan', 'Pérez', 30, 'Usuario activo y entusiasta', 123456789, 'Calle Principal 123', 500),
('mariagarcia', 'mariagarcia@example.com', 'contraseñaMaria2', 'https://ejemplo.com/imagen2.jpg', 'María', 'García', 25, 'Amante de la naturaleza y los deportes al aire libre', 987654321, 'Avenida Secundaria 456', 300),
('carloslopez', 'carloslopez@example.com', 'contraseñaCarlos3', 'https://ejemplo.com/imagen3.jpg', 'Carlos', 'López', 40, 'Apasionado por la tecnología y la programación', 555555555, 'Plaza Central 789', 700),
('lauramartinez', 'lauramartinez@example.com', 'contraseñaLaura4', 'https://ejemplo.com/imagen4.jpg', 'Laura', 'Martínez', 35, 'Viajera empedernida y amante de la fotografía', 111122223, 'Calle Transversal 012', 800),
('pedrorodriguez', 'pedrorodriguez@example.com', 'contraseñaPedro5', 'https://ejemplo.com/imagen5.jpg', 'Pedro', 'Rodríguez', 28, 'Entusiasta del cine y la literatura', 999999999, 'Ruta de las Flores 345', 400),
('anasanchez', 'anasanchez@example.com', 'contraseñaAna6', 'https://ejemplo.com/imagen6.jpg', 'Ana', 'Sánchez', 45, 'Aventurera y amante de los deportes extremos', 777777777, 'Camino Costero 678', 900),
('diegofernandez', 'diegofernandez@example.com', 'contraseñaDiego7', 'https://ejemplo.com/imagen7.jpg', 'Diego', 'Fernández', 22, 'Jugador de videojuegos y fanático del anime', 333333333, 'Avenida Principal 901', 200),
('sofiagomez', 'sofiagomez@example.com', 'contraseñaSofia8', 'https://ejemplo.com/imagen8.jpg', 'Sofía', 'Gómez', 32, 'Amante de la gastronomía y la cocina internacional', 666666666, 'Calle de los Sabores 234', 600),
('miguelhernandez', 'miguelhernandez@example.com', 'contraseñaMiguel9', 'https://ejemplo.com/imagen9.jpg', 'Miguel', 'Hernández', 38, 'Emprendedor y apasionado por los negocios', 444444444, 'Avenida Empresarial 567', 1000),
('luciadiaz', 'luciadiaz@example.com', 'contraseñaLucia10', 'https://ejemplo.com/imagen10.jpg', 'Lucía', 'Díaz', 27, 'Artista y amante de la música clásica', 888888888, 'Calle de los Artistas 890', 700);

SELECT * FROM user;

-- -----------------------------------------------------
-- Table `App`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `App`.`rol` (`name`)
VALUES('user'), ('admin');

select * from rol;

-- -----------------------------------------------------
-- Table `App`.`language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`language` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(45) NULL DEFAULT 'Spanish',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `App`.`language` (`language`) VALUES
('Spanish'),
('English'),
('French'),
('German'),
('Italian'),
('Japanese'),
('Chinese'),
('Russian'),
('Catalan'),
('Portuguese');

select * from language;

-- -----------------------------------------------------
-- Table `App`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img_url` VARCHAR(255) NULL,
  `title` VARCHAR(45) NOT NULL,
  `event_date` VARCHAR(10) NOT NULL,
  `des` VARCHAR(255) NOT NULL,
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

INSERT INTO `App`.`event` (`img_url`, `title`, `event_date`, `desc`, `created_by`, `language_id`) VALUES
('https://example.com/event1.jpg', 'Concierto en el parque', '2024-05-10', 'Disfruta de un concierto al aire libre en el parque central', 1, 1),
('https://example.com/event2.jpg', 'Exposición de arte moderno', '2024-05-15', 'Ven a explorar las obras de artistas contemporáneos en nuestra galería', 2, 2),
('https://example.com/event3.jpg', 'Feria gastronómica internacional', '2024-05-20', 'Prueba delicias culinarias de todo el mundo en nuestra feria gastronómica', 3, 3),
('https://example.com/event4.jpg', 'Competencia de surf', '2024-05-25', 'Únete a la emoción de nuestra competencia anual de surf', 4, 4),
('https://example.com/event5.jpg', 'Curso de cocina italiana', '2024-06-01', 'Aprende a preparar auténticos platos italianos con nuestros chefs expertos', 5, 5),
('https://example.com/event6.jpg', 'Torneo de ajedrez', '2024-06-05', 'Demuestra tus habilidades en nuestro torneo de ajedrez de nivel nacional', 6, 6),
('https://example.com/event7.jpg', 'Festival de danza folclórica', '2024-06-10', 'Disfruta de las coloridas y vibrantes actuaciones de danza folclórica de todo el mundo', 7, 7),
('https://example.com/event8.jpg', 'Taller de fotografía de paisajes', '2024-06-15', 'Aprende técnicas avanzadas de fotografía de paisajes con nuestro taller intensivo', 8, 8),
('https://example.com/event9.jpg', 'Presentación de películas independientes', '2024-06-20', 'Descubre nuevas y emocionantes películas independientes en nuestra muestra anual', 9, 9),
('https://example.com/event10.jpg', 'Conferencia sobre inteligencia artificial', '2024-06-25', 'Explora el futuro de la inteligencia artificial en nuestra conferencia internacional', 10, 10);


UPDATE `App`.`event`
SET `img_url` = 'https://res.cloudinary.com/dicgppon6/image/upload/v1714063465/Conferencia_sobre_inteligencia_artificial_ou1z7u.jpg'
WHERE `title` = 'Conferencia sobre inteligencia artificial';

select * from event;

-- -----------------------------------------------------
-- Table `App`.`event_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`event_type` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;

INSERT INTO `App`.`event_type` (`type`) VALUES
('Concierto'),
('Exposición'),
('Feria'),
('Deportes'),
('Cursos'),
('Torneos'),
('Festivales'),
('Talleres'),
('Presentaciones'),
('Conferencias');

select * from event_type;
-- -----------------------------------------------------
-- Table `App`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `App`.`location` (`location`) VALUES
('Barcelona'),
('Nueva York'),
('París'),
('Berlín'),
('Roma'),
('Tokio'),
('Pekín'),
('Moscú'),
('El Cairo'),
('Lisboa');

select *from location;

-- -----------------------------------------------------
-- Table `App`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(255) NOT NULL,
  `rating_review` DOUBLE NOT NULL,
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

select * from review;

INSERT INTO `App`.`review` (`des`, `rating_review`, `User_id`, `event_id`)
SELECT 
    'Gran evento, lo disfruté mucho', '5', 1, 1
UNION ALL SELECT
    'Me encantó la variedad de obras de arte', '4', 2, 2
UNION ALL SELECT
    'La comida estaba deliciosa, definitivamente regresaré', '4.5', 3, 3
UNION ALL SELECT
    'Increíble competencia, emocionante de principio a fin', '4.7', 4, 4
UNION ALL SELECT
    'Aprendí mucho sobre la cocina italiana, excelente curso', '4.2', 5, 5
UNION ALL SELECT
    'Fue un torneo muy bien organizado, me divertí mucho', '4.8', 6, 6
UNION ALL SELECT
    'Las actuaciones fueron espectaculares, una experiencia inolvidable', '4.5', 7, 7
UNION ALL SELECT
    'El taller me ayudó a mejorar mis habilidades de fotografía', '4.3', 8, 8
UNION ALL SELECT
    'Interesantes películas independientes, definitivamente recomendado', '4.6', 9, 9
UNION ALL SELECT
    'Excelentes ponentes, aprendí mucho sobre IA', '4.9', 10, 10;


-- -----------------------------------------------------
-- Table `App`.`event_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `App`.`event_location` (
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
