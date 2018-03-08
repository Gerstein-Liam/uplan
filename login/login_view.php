<div class="row">
   <div class="col-xs-6">
      <form name="myForm"  id="myform" method="post" action="">
         <div class="form-group">
         
            <input size="170" type="text" name="username" placeholder="Username">
         </div>
         <div class="form-group">
          
            <input size="170" type="password" name="password" placeholder="password">
         </div>
         <button type="button" class="btn btn-default" onclick="login()">
         Log in
         </button>
      </form>
   </div>
    <div class="col-xs-6">
  <button type="button" id="sign_bt" class="main_menu_button" onclick="load_mainsection('signin')">
                  SignIn
                  </button>
             
   </div>
   
   
   
   
</div>
<div class="row">
   <div class="col-xs-12">
      <p >
      <div  id="etat_connexion_loginview"></div>
      </p>
   </div>
</div>

