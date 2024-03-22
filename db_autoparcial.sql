-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-03-2024 a las 08:25:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_autoparcial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puestos_parqueadero`
--

CREATE TABLE `puestos_parqueadero` (
  `id_puesto` int(11) NOT NULL,
  `estado` enum('ocupado','libre') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `puestos_parqueadero`
--

INSERT INTO `puestos_parqueadero` (`id_puesto`, `estado`) VALUES
(1, 'libre'),
(2, 'libre'),
(3, 'libre'),
(4, 'ocupado'),
(5, 'ocupado'),
(6, 'ocupado'),
(7, 'libre'),
(8, 'ocupado'),
(9, 'libre'),
(10, 'libre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos_estacionados`
--

CREATE TABLE `vehiculos_estacionados` (
  `id_vehiculo` int(10) NOT NULL,
  `placa` varchar(10) NOT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `hora_ingreso` varchar(15) NOT NULL,
  `hora_salida` varchar(15) DEFAULT NULL,
  `id_puesto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculos_estacionados`
--

INSERT INTO `vehiculos_estacionados` (`id_vehiculo`, `placa`, `modelo`, `color`, `hora_ingreso`, `hora_salida`, `id_puesto`) VALUES
(1, 'xlq123', 'audi', 'negro', '12:00', '17:00', 6),
(2, 'nmv234', 'camaro', 'amarillo', '14:00', '16:00', 7),
(3, 'aka635', 'maserati', 'verde', '13:00', '15:00', 6),
(4, 'klm467', 'cadillac', 'negro', '13:00', '18:00', 9),
(5, 'nms654', 'ford', 'rojo', '16:00', '19:00', 5),
(6, 'lajs877', 'lexus', 'blanco', '10:00', '13:00', 1),
(7, '007', 'Aston Martin', 'gris', '18:00', '20:00', 8),
(8, 'lks124', 'mazda', 'rojo', '13:00', '18:00', NULL),
(9, 'lop364', 'jaguar', 'amarillo', '13:00', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `puestos_parqueadero`
--
ALTER TABLE `puestos_parqueadero`
  ADD PRIMARY KEY (`id_puesto`);

--
-- Indices de la tabla `vehiculos_estacionados`
--
ALTER TABLE `vehiculos_estacionados`
  ADD PRIMARY KEY (`id_vehiculo`),
  ADD KEY `id_puesto` (`id_puesto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `puestos_parqueadero`
--
ALTER TABLE `puestos_parqueadero`
  MODIFY `id_puesto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `vehiculos_estacionados`
--
ALTER TABLE `vehiculos_estacionados`
  MODIFY `id_vehiculo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `vehiculos_estacionados`
--
ALTER TABLE `vehiculos_estacionados`
  ADD CONSTRAINT `vehiculos_estacionados_ibfk_1` FOREIGN KEY (`id_puesto`) REFERENCES `puestos_parqueadero` (`id_puesto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
