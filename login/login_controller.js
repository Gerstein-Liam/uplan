function login()
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
	xmlhttp.open("POST","./login/login_model.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username="+document.forms["myForm"].elements["username"].value+"&"+"password="+document.forms["myForm"].elements["password"].value);
     // Chargement du contenu recu dans la div
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.getElementById("etat_connexion").innerHTML=xmlhttp.responseText;
			document.getElementById("etat_connexion_loginview").innerHTML=xmlhttp.responseText;
		}
	}
}



