<?php include 'connect_itrip_bd.php';?>
<?php
session_start();
error_reporting(0);
	$id_user=$_SESSION['id_user_s'];
	
				$maxsize    = $_REQUEST['MAX_FILE_SIZE'];
                $size       = $_FILES['filename']['size'];
				$imgdetails = getimagesize($_FILES['filename']['tmp_name']);
                $mime_type  = $imgdetails['mime'];
                //Test image valable
                if (($mime_type == 'image/jpeg') || ($mime_type == 'image/gif')) {
					if ($size < $maxsize) {
						
					
						
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
						
					
						mysqli_close($mysqli);
						}
                
                //echo "registered";
						
					 
					else 
						{echo "<font class='error'>image to be uploaded is too large..error uploading the image!!</font>";}
                } 
				else 
					{echo "<font class='error'>not a valid image file! please upload jpeg or gif image.</font>";}
?>

