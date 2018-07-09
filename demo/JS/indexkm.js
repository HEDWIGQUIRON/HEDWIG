       $(document).on("ready",inicio);
               
               function inicio()
               {
                  cargarcontroles();
                  $("#historia0").load('/paginas/inicio.html');
               }

               function cargarcontroles()
               {
                 cargaracordion();
               
               }
      function cargaracordion()
      {
        $("#ini").on("click",ini);
        $("#conctactos").on("click",contactos);
        $("#conocenos").on("click",conocenos);
    
      }

function ini()
{

  $("#historia0").load('/paginas/inicio.html');
}

function contactos()
{
 $("#historia0").load('/paginas/contactos.html');
  
}

function conocenos()
{

  $("#historia0").load('/paginas/conocenos.html');

   // $.ajax({
        
   //      type:"POST",
   //      url: "ajax/json/json_index.php",
   //      data:{"select": "1","selectchange":centro,"selectchange2":empleado},        
   //      success: function(datos){            
            
   //          $('#navigation').html(datos);
                
            
   //      }//final de success
        
   //      });//final de ajax
}