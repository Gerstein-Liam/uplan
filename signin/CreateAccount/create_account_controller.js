function AddUser()
{
    //Objet ActiveX ou JavaScript qui permet d'obtenir des donnEes au format XML, JSON,HTML,texte
	//a l'aide de requ�tes HTTP.
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
	xmlhttp.open("POST","./CreateAccount/create_account_model.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username="+document.forms["myForm"].elements["username"].value+"&"+"password="+document.forms["myForm"].elements["password"].value+"&"+"repeated_password="+document.forms["myForm"].elements["repeated_password"].value);
     // Chargement du contenu recu dans la div
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("reg_rsp").innerHTML=xmlhttp.responseText;
		}
	}
}



