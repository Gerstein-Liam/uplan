<?php include 'connect_itrip_bd.php';?>
<?php
session_start();
error_reporting(0);
	$id_user=$_SESSION['id_user_s'];
	$new_pub =htmlentities(trim($_POST['new_pub']));
		
	//echo $new_pub;
	// Recupere et transfert position des autres utilisateurs
	
	//$query=  "  SELECT username,text FROM utilisateur, publie, publication WHERE '" . $id_user . "'=publie.fk_id_user AND publie.fk_id_publication=publication.id_publication GROUP BY text " ;
	$query= "INSERT INTO `publication`(`fk_id_user`,`username`,`text`) VALUES ('" . $id_user . "','" .$_SESSION['username'] . "','" . $new_pub . "')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	

?>


