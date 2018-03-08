<?php
include 'connect_itrip_bd.php';
?>
<?php
session_start();
error_reporting(0);
$id_user = $_SESSION['id_user_s'];


$query   = "select username,quick_pres,longitude,latitude,id_photo_profil from utilisateur where id_user='" . $id_user . "' ";
$result = $mysqli->query($query) or die($mysqli->error . __line__);
while ($row = $result->fetch_assoc()) {
 
    $username    = $row['username'];
	$quick_pres    = $row['quick_pres'];
    $latitude    = $row['latitude'];
    $longitude   = $row['longitude'];
	$id_photo_profil   = $row['id_photo_profil'];
   

    $query    = "SELECT image,type FROM `image` WHERE id_image='" . $id_photo_profil . "' AND fk_id_user='" . $id_user . "' ";
	$result = $mysqli->query($query) or die($mysqli->error . __line__);
	while ($row = $result->fetch_assoc()) {
		    $fileType    = $row['type'];
			$fileContent = ($row['image']);
			$dataUrl     = 'data:' . $fileType . ';base64,' . base64_encode($fileContent);
			$json        = json_encode(array(
							'username' => $username,
							'quick_pres' => $quick_pres,
							'latitude' => $latitude,
							'longitude' => $longitude,
							
							'type' => $fileType,
							'dataUrl' => $dataUrl
							));
			echo $json;
			mysqli_close($mysqli);
	}
}
?>

