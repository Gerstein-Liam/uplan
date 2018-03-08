-----------------------------------------------------------------
						VIDER/EFFACER TABLES AVEC CLE ETRANGERE
-----------------------------------------------------------------

			"LISTER ET EFFACER LES CONTRAINTES D'INTEGRITE CREERS"
select *from information_schema.table_constraints where constraint_schema = 'beemon_bd'

puis vider 
           "FORCER VIDAGE TABLE UTILISANT CONTRAINTES D'INTEGRITE"
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE utilisateur;
TRUNCATE publication;
SET FOREIGN_KEY_CHECKS=1;
-----------------------------------------------------------------
						UPLAN DATABASE V1
-----------------------------------------------------------------


/////////////////UTILISATEUR/////////////
		CREATE TABLE utilisateur (
		id_user MEDIUMINT NOT NULL AUTO_INCREMENT, 
		username varchar(100) NULL,
		password varchar(100) NULL,

		user_desc varchar(100) NULL,
		phone_nb varchar(100) NULL,

		latitude FLOAT NOT NULL , longitude FLOAT NOT NULL,
		Primary Key (id_user)
		) ENGINE=InnoDB ; 
		
!puis mettre comme valeur par defaut NULL a latitude et 
 longitude depuis le tableau!
 
 
/////////////////PUBLICATIONS/////////////
	
	CREATE TABLE IF NOT EXISTS `publication` (
	id_publication MEDIUMINT NOT NULL AUTO_INCREMENT, 
	fk_id_user MEDIUMINT NULL,
	username varchar(100) NOT NULL,	
	text varchar(100) NOT NULL,
	PRIMARY KEY (`id_publication`),
	Foreign Key (fk_id_user) references utilisateur(id_user)
	) ENGINE=InnoDB  ;
   
	ALTER TABLE publication ADD CONSTRAINT c_fk_user FOREIGN KEY (fk_id_user) REFERENCES utilisateur(id_user) ON DELETE CASCADE ON UPDATE CASCADE;

	



					
