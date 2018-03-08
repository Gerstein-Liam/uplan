





function load_edit_view() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./myprofil/myprofil_edit_view.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("reponse_server").innerHTML = xmlhttp.responseText;
            //obj = JSON.parse(xmlhttp.responseText);
           
			
			
			
			
			//var resp = JSON.parse(this.response);
			//console.log('Server got:', resp);
			

			//document.getElementById("photo_profil").appendChild(image);
		document.getElementById("publications").innerHTML = xmlhttp.responseText;

		
			
        }
    }


}



function load_profil_menu() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./myprofil/myprofil_menu.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("reponse_server").innerHTML = xmlhttp.responseText;
            //obj = JSON.parse(xmlhttp.responseText);
           
			
			
			
			
			//var resp = JSON.parse(this.response);
			//console.log('Server got:', resp);
			

			//document.getElementById("photo_profil").appendChild(image);
			document.getElementById("menu_section").innerHTML = xmlhttp.responseText;

		
			
        }
    }


}






function load_presentation() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./myprofil/myprofil_presentation_model.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("reponse_server").innerHTML = xmlhttp.responseText;
            //obj = JSON.parse(xmlhttp.responseText);
           
			
			
			
			
			var resp = JSON.parse(this.response);
			console.log('Server got:', resp);
			
				//var image = document.createElement('img');
			//image.src = resp.dataUrl;
				
	        document.getElementById("photo_profil").src=resp.dataUrl;
	  
			//document.getElementById("photo_profil").appendChild(image);
			document.getElementById("username").innerHTML = resp.username;
			document.getElementById("quick_pres").innerHTML = resp.quick_pres;
            document.getElementById("location").innerHTML = "    Lat:" + resp.latitude + "    Lon:" + resp.longitude;
		
			
			
        }
    }


}

function load_publications() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./myprofil/myprofil_publication_model.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           // document.getElementById("reponse_server").innerHTML = xmlhttp.responseText;
            obj2 = JSON.parse(xmlhttp.responseText);




           var i;
			var out="" ;

			for(i = 0; i < obj2.Client.length; i++) {
				out += "<li>" +
				obj2.Client[i].username+": " +
				obj2.Client[i].text +
		"</li>";
			}




            document.getElementById("publications").innerHTML = out;
        }
    }
}












function publish()
{
    //Objet ActiveX ou JavaScript qui permet d'obtenir des donnEes au format XML, JSON,HTML,texte
	//a l'aide de requêtes HTTP.
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	// Envoie de la requete
	
	//alert(document.forms["myForm"].elements["new_pub_content"].value);
	xmlhttp.open("POST","./myprofil/myprofil_addpublication_model.php",true);
	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("new_pub="+document.forms["myForm"].elements["new_pub_content"].value);
     // Chargement du contenu recu dans la div
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		load_publications();
		}
	}
	
	
	
}




function update_photo_profil()
{
  var file = document.getElementById("filename").files[0]; //!!!!!!!!!!!!!!!!!
  //alert(file);
  var fd = new FormData();
 
  fd.append("MAX_FILE_SIZE", 524288);
  fd.append("filename", file);
 
 
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', './myprofil/myprofil_editprofil_model.php', true);
  
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
       load_mainsection('myprofil'); 
	};
  };
  xhr.send(fd);
};



function update_pres_profil()
{

  var fd = new FormData();
 
  fd.append("quick_pres",document.getElementById("new_quick_pres").value);
 
 

  var xhr = new XMLHttpRequest();
  xhr.open('POST', './myprofil/myprofil_editpresprofil_model.php', true);
  
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
       load_mainsection('myprofil'); 
	};
  };
  xhr.send(fd);
};



