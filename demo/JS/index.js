 $(function(){
    
 
 $('#navigation').ready(function(){
  
    
    
    $.ajax({
        
        type:"POST",
        url: "ajax/json/json_index.php",
        data:{"select": "1","selectchange":centro,"selectchange2":empleado},        
        success: function(datos){            
            
            $('#navigation').html(datos);
                
            
        }//final de success
        
        });//final de ajax
        
  
     
 } 
);



});