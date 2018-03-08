//  Controlleur de module de geolocatilisation_v5
//  Auteur: Liam Gerstein
//  http://jsbeautifier.org/   http://json.parser.online.fr/


function load_presentation_friend(id_friend)
{	var xmlhttp;
	if (window.XMLHttpRequest)
	{xmlhttp=new XMLHttpRequest();}
	else
	{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		xmlhttp.open("POST", "./findfriend/friendprofil_presentation_model.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     	xmlhttp.send("id_user="+id_friend);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var resp = JSON.parse(this.response);
			console.log('Server got:', resp);
			
					var image = document.createElement('img');
					//image.src = resp.dataUrl;
				
	  
	  document.getElementById("photo_profil_friend").src=resp.dataUrl;
		//	document.getElementById("photo_profil_friend").appendChild(image);
			document.getElementById("username").innerHTML = resp.username;
			document.getElementById("quick_pres").innerHTML = resp.quick_pres;
            document.getElementById("location").innerHTML = "    latitude:" + resp.latitude + "    longitude:" + resp.longitude;
            }
        }	
		
		
}



function load_publications_friend(id_friend)
{	var xmlhttp;
	if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
	else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
	xmlhttp.open("POST", "./findfriend/friendprofil_publication_model.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("id_user="+id_friend);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		   // document.getElementById("reponse_server").innerHTML= xmlhttp.responseText;
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



function showprofil(id_friend)
{
	
		//alert(id_friend);
	
	 //Objet ActiveX ou JavaScript qui permet d'obtenir des donnEes au format XML, JSON,HTML,texte
	//a l'aide de requêtes HTTP.
	var xmlhttp;
	if (window.XMLHttpRequest)
	{xmlhttp=new XMLHttpRequest();}
	else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
	// Envoie de la requete

	//alert(document.forms["myForm"].elements["new_pub_content"].value);
	xmlhttp.open("GET","./findfriend/findfriend_profil_view.php",true);
	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();
     // Chargement du contenu recu dans la div
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			
		showbuddyprofil();
		document.getElementById("friendprofil").innerHTML= xmlhttp.responseText;
		load_presentation_friend(id_friend);
		load_publications_friend(id_friend);
		}
	}
	
	
	
	
	
	

}



function load_find_menu() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "./findfriend/find_menu.php", true);
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


function showbuddyprofil() {
	
	var map = document.getElementById('map_canvas');
var settings = document.getElementById('div_settings');
var profile = document.getElementById('friendprofil');
		map.style.display = 'none';
      settings.style.display = 'none';
	   profile.style.display = 'block';
}


function setsearchparam() {
	
	var map = document.getElementById('map_canvas');
var settings = document.getElementById('div_settings');
var profile = document.getElementById('friendprofil');
		map.style.display = 'none';
      settings.style.display = 'block';
	   profile.style.display = 'none';
}

function show_map() {
	
	var map = document.getElementById('map_canvas');
var settings = document.getElementById('div_settings');
var profile = document.getElementById('friendprofil');
  map.style.display = 'block';
      settings.style.display = 'none';
	  profile.style.display = 'none';
}


function locatefriend() {
	
	//alert(document.forms["myform"].elements["distance"].value);
	show_map();

	
	
    //                               CONSTRUCTION CARTE 		
    map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 10,
        center: new google.maps.LatLng(48.858565, 2.347198),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //                               NOTRE LOCALISATION		

    //Check si navigateur fait Geolocalisation 
    if (navigator.geolocation)
        var watchId = navigator.geolocation.watchPosition(successCallback, null, {
            enableHighAccuracy: true
        });
    else
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

    //Recupere coordonnées et affiche marquer		 
    function successCallback(position) {

      //  var off_lat = parseFloat(document.forms["myFormdev"].elements["off_lat"].value);
       // var off_lon = parseFloat(document.forms["myFormdev"].elements["off_lon"].value);
	   var off_lat=0;
	   var off_lon=0;
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        lat = lat + off_lat;
        lon = lon + off_lon;

       

        // Sauvegarde de la position dans la BD
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.open("POST", "./findfriend/findfriend_model.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("latitude=" + lat + "&" + "longitude=" + lon);

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


               // document.getElementById("reponse_server").innerHTML = xmlhttp.responseText;


                obj = JSON.parse(xmlhttp.responseText);
                //	document.getElementById("reponse_server").innerHTML = obj.Client[1].latitude + " " + obj.Client[1].longitude;
				
				
				
				
				
				
		 map.panTo(new google.maps.LatLng(lat, lon));
        var MyPositionmarker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lon),
            map: map
        });
		
        lat = 0;
        lon = 0;
        off_lat = 0;
        off_lon = 0;
		
	
        //                               LOCALISATION VOYAGEURS
        //Personnnalisation icon
		
		

        var image;
        var marker = [];
        var shape;
        var myWindowOptions;
        var myInfoWindow;
		var infowindow = new google.maps.InfoWindow();
        var key, count = 0;
        for (key in obj.Client) {
            if (obj.Client.hasOwnProperty(key)) {

                image = {
                 // url: 'findfriend/images/traveller_icon.png', // adresse !!ATTENTION! Ca marche parce le client et le serveur sont sur la meme machine
					//		url: isIE11 ? "findfriend/images/traveller_icon.png" : "findfriend/images/traveller_icon.svg",
                    size: new google.maps.Size(25, 40), // taille
                    // Origine de l'image, souvent (0, 0)
                    origin: new google.maps.Point(0, 0), // origin
					
                    anchor: new google.maps.Point(0, 0) //Point d'ancrage,drapeur->mat
                };

                shape = {
                    coords: [1, 1, 1, 20, 18, 20, 18, 1],
                    type: 'poly'
                };

                //Fenetre contextuel icon
                myWindowOptions = {
                    content: '<h6>' + obj.Client[count].username + '</h6>' +
                        '<p><a href="http://www.cinemasgaumontpathe.com/cinemas/cinema-pathe-lyon-bellecour/" title="Site officiel">Visiter profil</a></p>'
                };
                //myInfoWindow = new google.maps.InfoWindow(myWindowOptions);

                //Creation marqueur avec icon personnalisé	
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(obj.Client[count].latitude, obj.Client[count].longitude),
                    map: map,
              
                    icon: image,
                    shape: shape,
					opacity: 1.0
		
                });

				google.maps.event.addListener(marker, 'click', (function(marker, count) {
				return function() {
				infowindow.setContent('<p>'+obj.Client[count].username+'</p><button type="button"  class="main_menu_button" style="width:130px" onclick="showprofil('+obj.Client[count].id_user+')">Visiter profil</button>');
				infowindow.setOptions({maxWidth: 200});
				infowindow.open(map, marker);
			}
		}) (marker, count));

            }
            count++;
        }
				
				
				
            }
        }
		
		
		
        	
    }
};