$(document).ready(function(){

    $(".inpt").focus(function(){
        $(this).addClass("btndb");
        $("#adding").addClass("show");


    });

    $("#adding").click(function(){
       var value= $(".inpt").val();
       $(".inpt").val("");
       if(value!="" ){

        var result=$("<div class='task'></div>").text(value);
        $(".middle").append(result);

        var del=$("<i class='fas fa-trash  '></i> ").click(function(){
            

            var t=$(this).parent();
            t.fadeOut(function(){

                t.remove();
            })
          
        });
        var check=$(' <i class="fas fa-check-circle" id="i2"> </i>').click(function(){
            

            var t=$(this).parent();
            t.fadeIn(function(){

            $(".down").append(t);
            });

            $(this).remove();
        });
        
       }
       result.append(del,check);


       
    })

    

})