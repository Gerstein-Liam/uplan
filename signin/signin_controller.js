function signin()
{
  var file = document.getElementById("filename").files[0]; //!!!!!!!!!!!!!!!!!
  //alert(file);
  var fd = new FormData();
 
  fd.append("MAX_FILE_SIZE", 524288);
  fd.append("filename", file);
 
  
  fd.append("email", document.forms["myForm"].elements["email"].value);
  fd.append("username", document.forms["myForm"].elements["username"].value);
  fd.append("password", document.forms["myForm"].elements["password"].value);
  fd.append("repeated_password", document.forms["myForm"].elements["repeated_password"].value);
  fd.append("quick_pres", document.forms["myForm"].elements["quick_pres"].value);
  
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', './signin/signin_model.php', true);
  
  xhr.upload.onprogress = function(e) 
  {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      console.log(percentComplete + '% uploaded');
    }
  };
  xhr.onload = function() 
  {
    if (this.status == 200) {
      var resp = JSON.parse(this.response);
      console.log('Server got:', resp);
    ///  var image = document.createElement('img');
     // image.src = resp.dataUrl;
      document.getElementById("signin_photo").src=resp.dataUrl;
	};
  };
  xhr.send(fd);
};


