<?php include 'connect_itrip_bd.php';?>
<?php
session_start();
error_reporting(0);
	
	
	
	$id_user=$_SESSION['id_user_s'];
	$quick_pres   = $_REQUEST['quick_pres'];
	echo  $quick_pres;
	

    $query= "UPDATE `utilisateur` SET `quick_pres`='" . $quick_pres ."'  WHERE id_user='" . $id_user . "'" ;
    $result = $mysqli->query($query) or die($mysqli->error . __line__);
	mysqli_close($mysqli);
						              
?>

