<?php
include 'connect_itrip_bd.php';
?>

<?php
error_reporting(0);
if (isset($_POST)) {
	$email  = htmlentities(trim($_REQUEST['email']));
    $username  = htmlentities(trim($_REQUEST['username']));
    $password  = htmlentities(trim($_REQUEST['password']));
    $rpass = htmlentities(trim($_REQUEST['repeated_password']));
	$quick_pres  = htmlentities(trim($_REQUEST['quick_pres']));
	$id_user;
	$id_photo_profil;
    //Test champs et redondance utilisateur
    if ($username && $password && $rpass) {     
      if ($password == $rpass) {
            $password  = md5($password);
            $query = "SELECT username FROM `utilisateur` WHERE username='" . $username . "'";
            $result = $mysqli->query($query) or die($mysqli->error . __LINE__);
            if ($result->num_rows == 0) { //Enregistre le nouveau membre
                
				
				$maxsize    = $_REQUEST['MAX_FILE_SIZE'];
                $size       = $_FILES['filename']['size'];
				$imgdetails = getimagesize($_FILES['filename']['tmp_name']);
                $mime_type  = $imgdetails['mime'];
                //Test image valable
                if (($mime_type == 'image/jpeg') || ($mime_type == 'image/gif')) {
					if ($size < $maxsize) {
						
						//Tout est OK, on enregistre l utilisateur 
						$query    = "insert into utilisateur(email,`username`, `password`,quick_pres) values ('" . $email. "','" . $username . "','" . $password . "','" . $quick_pres . "')";
                        $result = $mysqli->query($query) or die($mysqli->error . __line__);
						
					    $query    = "SELECT id_user FROM `utilisateur` WHERE username='" . $username . "'";
                        $result = $mysqli->query($query) or die($mysqli->error . __line__);
                        while ($row = $result->fetch_assoc()) {
							$id_user    = $row['id_user'];
						}
						
						$filename = $_FILES['filename']['name'];
                        $imgdata  = addslashes(file_get_contents($_FILES['filename']['tmp_name']));
                        $query    = "insert into image(`fk_id_user`, `image_name`,image,type,size) values ('" . $id_user . "','" . $filename . "','$imgdata','" . $mime_type . "','" . addslashes($imgdetails[3]) . "')";
                        $result = $mysqli->query($query) or die($mysqli->error . __line__);
						
						$query    = "SELECT id_image FROM `image` WHERE image_name='" . $filename . "' AND fk_id_user='" . $id_user . "' ";
                        $result = $mysqli->query($query) or die($mysqli->error . __line__);
                        while ($row = $result->fetch_assoc()) {
							$id_photo_profil    = $row['id_image'];
						}
						
						$query= "UPDATE `utilisateur` SET `id_photo_profil`=" . $id_photo_profil ."  WHERE id_user='" . $id_user . "'" ;
                        $result = $mysqli->query($query) or die($mysqli->error . __line__);
						
						$query    = "SELECT image,type FROM `image` WHERE id_image='" . $id_photo_profil . "' AND fk_id_user='" . $id_user . "' ";
						$result = $mysqli->query($query) or die($mysqli->error . __line__);
						while ($row = $result->fetch_assoc()) {
							$fileType    = $row['type'];
								$fileContent = ($row['image']);
								$dataUrl     = 'data:' . $fileType . ';base64,' . base64_encode($fileContent);
								$json        = json_encode(array(
																'type' => $fileType,
																'dataUrl' => $dataUrl
												));
						echo $json;
						mysqli_close($mysqli);
						}
                
                //echo "registered";
						
					} 
					else 
						{echo "<font class='error'>image to be uploaded is too large..error uploading the image!!</font>";}
                } 
				else 
					{echo "<font class='error'>not a valid image file! please upload jpeg or gif image.</font>";}
              	
            } 
			else 
				{echo "username already exist";}
        } 
		else 
			{echo "The passwords don't match, pls enter them again";}
    } 
	else 
	   {echo "Please fill all fields";
    }
}
?>