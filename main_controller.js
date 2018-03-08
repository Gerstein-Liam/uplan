
function load_mainsection(command) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Test choix effectuee et requetes du contenu associe
    switch (command) {
        case "signin":
            xmlhttp.open("GET", "./signin/signin_view.php", true);
            break;
        case "login":
            xmlhttp.open("GET", "./login/login_view.php", true);
            break;
        case "logout":
            xmlhttp.open("GET", "./login/logout.php", true);
            break;


        case "myprofil":
            xmlhttp.open("GET", "./myprofil/myprofil_view.php", true);
            break;


        case "findfriend":
            xmlhttp.open("GET", "./findfriend/findfriend_view.php", true);
            break;

    }
    // Envoie de la requete
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    // Chargement du contenu recu dans la section
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
			
			if(command=="logout")
			{   
				document.getElementById("etat_connexion").innerHTML="deconnected";}
		    else
			{
			document.getElementById("mainsection_content").innerHTML = xmlhttp.responseText;
			if (command == "myprofil") {
			load_profil_menu();	
            load_presentation();
            load_publications();}
			
			
					if (command == "findfriend") {
			load_find_menu();	
          
		  
			}
			
			
        }
        }
       
    }
	
	 


}