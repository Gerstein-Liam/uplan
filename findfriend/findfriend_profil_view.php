<!--                            PRESENSATION                                          -->
<div class="row" id="myprofil_header_container" >
   <!--                            **IMAGE + DESC                                      -->  
   <div class="col-xs-2">
      <div class="row" >
         <figure>
         <img id="photo_profil_friend">
            <figcaption>
               <div id="username"></div>
            </figcaption>
         </figure>
      </div>
   </div>
      <div class="col-xs-1"> </div>

   <div class="col-xs-8">
      <dl>
         <dt>
            Quick presentation
         </dt>
		<dd>
            <div id="quick_pres"></div>
         </dd>

         <dt>
            My position
         </dt>
         <dd>
            <div id="location"></div>
         </dd>
      </dl>
   </div>
   
   
   
   
   

</div>
<!--                            PUBLIER                                             -->
<div class="row" id="myprofil_addpub_container">
   <div class="col-xs-7" id="myprofil-text_align">
      <form name="myForm" method="post" action="">
         <input size="170" type="text" name="new_pub_content">
      </form>
   </div>
   <div class="col-xs-2">
   
   	<button type="button" id="section_menu_buttons" class="btn btn-default" aria-label="Left Align" onclick="publish()"">
  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
</button>	   
   
   
     
   </div>
</div>
<!--                            PUBLICATION                                          -->
<div class="row" id="myprofil_pub_container" >
   <div class="col-xs-12">
      <fieldset>
         <legend>UWall </legend>
         <div id="publications"></div>
      </fieldset>
   </div>
</div>