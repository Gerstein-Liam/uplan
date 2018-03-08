<?php include 'connect_itrip_bd.php';?>
<?php
session_start();
error_reporting(0);
	$id_user=$_SESSION['id_user_s'];
	
	//$query=  "  SELECT username,text FROM utilisateur, publie, publication WHERE '" . $id_user . "'=publie.fk_id_user AND publie.fk_id_publication=publication.id_publication GROUP BY text " ;
	$query=   "SELECT username,text FROM publication WHERE fk_id_user = '" .  $id_user . "' " ;
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
    while($row = $result->fetch_assoc()) {
              $rows[] = $row;
			
	}
	echo "{\"Client\" : ",  json_encode($rows), "}";
?>

