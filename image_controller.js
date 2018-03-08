function update_image()
{
    //alert("");


var file = document.getElementById("filename").files[0] //!!!!!!!!!!!!!!!!!
    alert(file);
  var fd = new FormData();
    fd.append("MAX_FILE_SIZE", 524288);
  fd.append("filename", file);
  // These extra params aren't necessary but show that you can include other data.

  //fd.append("accountnum", 123456);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'handle_file_upload.php', true);
  
  xhr.upload.onprogress = function(e) {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      console.log(percentComplete + '% uploaded');
    }
  };
  xhr.onload = function() {
    if (this.status == 200) {
      var resp = JSON.parse(this.response);
      console.log('Server got:', resp);
      var image = document.createElement('img');
      image.src = resp.dataUrl;
      document.body.appendChild(image);
    };
  };
  xhr.send(fd);
};
