
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Uplan Mobile</title>
      <script src="main_controller.js"></script>
      <script src="signin/signin_controller.js"></script>
      <script src="login/login_controller.js"></script>
      <script src="myprofil/myprofil_controller.js"></script>
      <script src="findfriend/findfriend_controller.js"></script>
      <!-- API Google pour faire de l'AJAX  --> 
      <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <!-- API Google pour construire les graphiques "google chart" --> 
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <!-- API GoogleMAP"---------------------------------------- --> 
      <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <!-- API Google pour construire les graphiques "google chart" --> 
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <!-- API GoogleMAP"---------------------------------------- --> 
      <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyAenSe-DxwiW8Tb04amIMmBckE_ed4He60"></script> 
      <!-- Controleurs pour les differentes fonctions (modele MVC) " --> 
      <meta name="description" content="Source code generated using layoutit.com">
      <meta name="author" content="LayoutIt!">
      <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <link href="style.css" rel="stylesheet">
   </head>
   <body>
      <!--                            BLOCK PAGE                                             -->
      <div class="container-fluid">
         <div class="row" id="header_container">
            <div class="col-md-1 col-xs-2">
               <img class="Image_titre" alt="Bootstrap Image Preview" src="images/logo.jpg">	
            </div>
            <div class="col-md-9 col-xs-6" id="main_bt" >
               <nav>
                  <button type="button" id="myprofil_bt" class="main_menu_button" onclick="load_mainsection('myprofil')">
                  Profil
                  </button>
                  <button type="button" id="find_bt" class="main_menu_button" onclick="load_mainsection('findfriend')">
                  Find 
                  </button>
               </nav>
            </div>
            <div class="col-md-1 col-xs-4">
                  <nav>
                     <button type="button" id="logs_bt" class="main_menu_button" aria-label="Left Align" onclick="load_mainsection('login')">
                     <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                     </button>
                     <button type="button" id="logs_bt" class="main_menu_button" aria-label="Left Align" onclick="load_mainsection('logout')">
                     <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                     </button>
                  </nav>
            </div>
         </div>
         <div class="row" id="main_section_container">
            <div class="col-md-1 col-xs-1" id="menu_section">
            </div>
            <div class="col-md-10 col-xs-10" id="mainsection_content">
            </div>
         </div>
         <div class="row" id="chat_section_container">
         </div>
      </div>
   </body>
</html>

