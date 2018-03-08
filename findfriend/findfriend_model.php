<?php include 'connect_itrip_bd.php';?>
<?php
session_start();
error_reporting(0);
if(isset($_POST))
{
	
	$latitude =htmlentities(trim($_POST['latitude']));
	$longitude =htmlentities(trim($_POST['longitude'])); 
	$id_user=$_SESSION['id_user_s'];
	
	// Mis a jour position utilisateur dans BD
	$query= "UPDATE `utilisateur` SET `latitude`=" . $latitude .",`longitude`=" . $longitude ." WHERE id_user='" . $id_user . "'" ;
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);


	// Recupere et transfert position des autres utilisateurs
	$query=   "SELECT id_user,username,longitude,latitude FROM utilisateur WHERE id_user!='" . $id_user . "'" ;
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
    while($row = $result->fetch_assoc()) {
              $rows[] = $row;
	}
	
	echo "{\"Client\" : ",  json_encode($rows), "}";


}

?>


