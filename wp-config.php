<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iBRLE-JQWc,d@V3!yUNrHw`^4g$px5R49_sv$v.BmJ1++=CWp_+`m&s@=Sh0O]k(' );
define( 'SECURE_AUTH_KEY',  'Hz|W> LxeM^uh*;9$ju@aNuk>5*]~dU[9h^-;zZx;BgH3xu+*Ez7/jBS,y;k?k*k' );
define( 'LOGGED_IN_KEY',    '?kb.7:%Om)6j8:GbR,~|&HBYFhZBBi>CP-`V4K@98|&2M)(B_%mFCgpoF;1plnW+' );
define( 'NONCE_KEY',        '.*S21-Ei[^3uqyQ;xpY#tg|+^O6LOR,-XkC;4%Z9NJWFk0pua6z-=YhAk o!fG3Z' );
define( 'AUTH_SALT',        'yJLyT+ivT6}7GHk`Df#uB?uTzk$W>(04LpOJN&INU],+v*3Ot($[n3wkw>5+yx2:' );
define( 'SECURE_AUTH_SALT', 'du.RleqYR,W3}3JK)6O5}{s+U2DTk[QP:4N(~.Wi?f@7kdJUz_(NM{C4?ERry6!G' );
define( 'LOGGED_IN_SALT',   ' ]~c6*vo)96u}0::.w=_=|mV)%JvBQMDsal6E5p&P#IVHz 1#Mpa /I-1Q<2A7@x' );
define( 'NONCE_SALT',       'iG x_tUIT|(8=^q4KZ*M6zE!]8^vD{[G#=}`3+3H@}tIV:sf^aC07 !1e*X|NpSF' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
