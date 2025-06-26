-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table maintenance.drivers
CREATE TABLE IF NOT EXISTS `drivers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.drivers: ~2 rows (approximately)
INSERT INTO `drivers` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'อดิศักดิ์ ภูชื่นศรี (เกด)', '2024-07-27 19:25:03', '2024-07-27 19:25:03'),
	(2, 'โยธินทร์', '2024-07-27 20:22:42', '2024-07-27 20:22:42'),
	(3, '-', '2024-08-07 04:25:08', '2024-08-07 04:25:12'),
	(4, '-', '2024-08-16 04:08:37', '2024-08-16 04:08:38'),
	(5, 'วินัย', '2024-08-29 01:26:37', '2024-08-29 01:26:38'),
	(6, 'วุฒิชัย ศรีชาติ', '2024-09-02 01:28:19', '2025-02-18 03:14:38'),
	(7, 'สุทธิศักดิ์ นครชัย (โฮ่)', '2024-09-04 05:54:47', '2024-09-04 05:54:48'),
	(8, 'อดิศักดิ์ สิทธิวงศ์ (โจ็ก)', '2024-09-04 06:36:13', '2024-09-04 06:36:14'),
	(9, 'เดชา (ยอด)', '2024-09-12 06:27:34', '2024-09-12 06:27:35'),
	(10, 'น๊อต', '2024-09-12 06:29:10', '2024-09-12 06:29:11'),
	(11, 'ธวัช (เบน)', '2024-09-21 01:23:07', '2024-09-21 01:23:08'),
	(12, 'เปรม โดยเคน', '2024-10-08 07:05:57', '2024-10-08 07:05:57');

-- Dumping structure for table maintenance.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table maintenance.license_plates
CREATE TABLE IF NOT EXISTS `license_plates` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `number_plate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `driver_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.license_plates: ~8 rows (approximately)
INSERT INTO `license_plates` (`id`, `number_plate`, `driver_id`, `created_at`, `updated_at`) VALUES
	(1, '70-7210', 1, '2024-07-27 19:26:14', '2024-07-27 19:26:14'),
	(2, '71-0840', 2, '2024-07-28 04:42:59', '2024-07-28 04:42:59'),
	(3, '70-6647', 8, '2024-08-03 01:27:00', '2024-08-03 01:27:01'),
	(4, '70-6619', 3, '2024-08-07 04:25:31', '2024-08-07 04:25:31'),
	(5, '70-7211', 4, '2024-08-16 04:09:07', '2024-08-16 04:09:08'),
	(6, '70-5857', 5, '2024-08-29 01:26:56', '2024-08-29 01:27:00'),
	(7, '71-0839', 6, '2024-09-02 01:28:44', '2024-09-02 01:28:45'),
	(8, '70-6969', 7, '2024-09-04 05:54:59', '2024-09-04 05:55:00'),
	(9, '70-7209', 9, '2024-09-12 06:27:49', '2024-09-12 06:27:49'),
	(10, '70-6968', 10, '2024-09-12 06:29:21', '2024-09-12 06:29:21'),
	(11, '70-6648', 11, '2024-09-21 01:23:20', '2024-09-21 01:23:21'),
	(12, '70-6618', 12, '2024-10-08 07:06:19', '2024-10-08 07:06:20');

-- Dumping structure for table maintenance.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.migrations: ~9 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(11, '2014_10_12_000000_create_users_table', 1),
	(12, '2014_10_12_100000_create_password_reset_tokens_table', 1),
	(13, '2019_08_19_000000_create_failed_jobs_table', 1),
	(14, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(15, '2024_07_28_021544_create_license_plates_table', 1),
	(16, '2024_07_28_022230_create_drivers_table', 2),
	(21, '2024_07_28_030853_create_report_repairs_table', 3),
	(22, '2024_11_28_094917_create_oil_types_table', 4),
	(24, '2024_11_28_095214_create_oil_changes_table', 5);

-- Dumping structure for table maintenance.oil_changes
CREATE TABLE IF NOT EXISTS `oil_changes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `oil_type_id` int NOT NULL,
  `license_plate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lites` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.oil_changes: ~0 rows (approximately)

-- Dumping structure for table maintenance.oil_types
CREATE TABLE IF NOT EXISTS `oil_types` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.oil_types: ~2 rows (approximately)
INSERT INTO `oil_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'น้ำมันเครื่อง', '2024-11-28 02:50:44', '2024-11-28 02:50:45'),
	(2, 'น้ำมันเกียร์', '2024-11-28 02:51:00', '2024-11-28 02:51:01'),
	(3, 'น้ำมันเฟืองท้าย', '2024-11-28 02:51:11', '2024-11-28 02:51:12');

-- Dumping structure for table maintenance.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.password_reset_tokens: ~0 rows (approximately)

-- Dumping structure for table maintenance.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.personal_access_tokens: ~0 rows (approximately)

-- Dumping structure for table maintenance.report_repairs
CREATE TABLE IF NOT EXISTS `report_repairs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `license_plate_id` bigint NOT NULL,
  `repair` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.report_repairs: ~13 rows (approximately)
INSERT INTO `report_repairs` (`id`, `license_plate_id`, `repair`, `status`, `created_at`, `updated_at`) VALUES
	(60, 10, 'ซื้อชะแลง', 0, '2024-11-29 08:02:42', '2024-11-29 08:02:42'),
	(61, 10, 'ปั้มที่ปัดน้ำฝน', 0, '2024-11-29 08:03:00', '2024-11-29 08:03:00'),
	(62, 10, 'แอร์ไม่เย็น', 1, '2024-11-29 08:03:17', '2024-11-29 08:03:17'),
	(92, 10, 'ประตูปิดไม่สนิท', 1, '2025-02-18 03:53:32', '2025-02-18 03:53:32'),
	(93, 11, 'ปรับกล้อง เวลาไม่ตรง', 1, '2025-02-18 09:41:50', '2025-03-10 03:02:52'),
	(95, 5, 'เปลี่ยนน้ำมันเครื่อง', 1, '2025-02-26 01:18:50', '2025-02-26 01:18:50'),
	(96, 2, 'เปลี่ยนน้ำมันเครื่อง', 1, '2025-02-26 08:14:21', '2025-04-01 04:40:40'),
	(97, 6, 'เปลี่ยนน้ำมันเกียร์', 1, '2025-03-10 03:55:24', '2025-03-10 09:24:56'),
	(98, 11, 'เปลี่ยนน้ำมันเกียร์', 1, '2025-03-10 03:55:43', '2025-04-03 09:36:16'),
	(99, 3, 'เปลี่ยนน้ำมันเครื่อง', 1, '2025-03-10 03:56:37', '2025-04-03 01:47:44'),
	(100, 11, 'เปลี่ยนน้ำมันเครื่อง', 1, '2025-03-15 01:20:13', '2025-04-03 09:36:21'),
	(101, 6, 'เปลี่ยนน้ำมันเครื่อง', 0, '2025-03-15 01:20:21', '2025-03-15 01:20:21'),
	(102, 3, 'แอร์ไม่เย็น', 1, '2025-03-15 07:30:24', '2025-03-17 05:32:00'),
	(103, 9, 'เปลี่ยนน้ำมันเกียร์', 1, '2025-03-18 02:18:59', '2025-03-26 01:20:25'),
	(104, 8, 'เปลี่ยนน้ำมันเกียร์', 0, '2025-03-18 02:19:11', '2025-03-18 02:19:11'),
	(105, 7, 'เปลี่ยนน้ำมันเกียร์', 0, '2025-03-25 01:11:40', '2025-03-25 01:11:40'),
	(106, 10, 'เปลี่ยนน้ำมันเครื่อง', 1, '2025-03-26 09:20:44', '2025-04-03 09:36:36'),
	(107, 8, 'เปลี่ยนน้ำมันเครื่อง', 0, '2025-03-28 01:29:59', '2025-03-28 01:29:59'),
	(108, 7, 'เปลี่ยนน้ำมันเครื่อง', 0, '2025-04-03 09:37:13', '2025-04-03 09:37:13');

-- Dumping structure for table maintenance.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table maintenance.users: ~0 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Admin', 'admin@email.com', NULL, '$2y$12$XpQRZXzq5hXCBGMtLVtAW.T4YUIR5fAtkHzdT0CMjhpvJ2968Qrm6', NULL, '2024-07-27 19:32:11', '2024-07-27 19:32:11');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
