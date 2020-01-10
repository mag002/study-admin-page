$(document).ready(function(){
    var check=1;
    var idcolor=1;
    var dragnum=6;
    var idtable=3;
    var tagTop="<div draggable='true' ondragstart='drag(event)' class='drag' ondrag='changecolor()' ondragend='deleteZoomTrash()' id='drag"
    var tagBot="' ondragover='noAllowDrop(event)'><textarea rows='1' type='text' ondrop='noAllowDrop(event)'></textarea></div>"
    var tableTarea='<textarea name="" id=""  rows="1"></textarea>'
    loadTextarea();
    clickColor();
    $(".background").click(function(){
       
        if(check==1){
        $(".hello").toggleClass("hello-animate");
        $(".trapezoid").fadeIn(2000);
        $(".blur").fadeIn(500,function(){
            $("#hi").hide();
            if($(window).width() < 600){
                $(".hello").animate({height:'45%',
                                    width:'100%',
                                    backgroundColor:'#8d8f4be6',
                                    borderRadius:'10px',
                                    animationIterationCount: 'unset',})
            }else{
                $(".hello").animate({height:'45%',
                                width:'50%',
                                backgroundColor:'#8d8f4be6',
                                borderRadius:'10px',
                                animationIterationCount: 'unset',})
            }
            $("#login").show();
            $(".navbar").fadeIn(2000);
        });
        
        check=0;
        console.log(check);
        }
       

    });
    function clickColor(){
        $("td").click(function(e){
            e.stopPropagation();
            switch(idcolor) {
                case 1:
                    idcolor++;  
                    this.style.backgroundColor="rgba(224, 86, 253, 0.37)";
                    console.log(idcolor);
                    break;
                case 2:
                    idcolor++;
                    this.style.backgroundColor="#ffeeba";
                    
                    console.log(idcolor);
                    break;
                case 3:
                    idcolor++;
                    this.style.backgroundColor="rgba(0,0,0,.075)";
                    break;
                case 4:
                    idcolor++;
                    this.style.backgroundColor="#f5c6cb";
                    break;
                case 5:
                    idcolor++;
                    this.style.backgroundColor="#c3e6cb";
                    break;
                case 6:
                    idcolor++;
                    this.style.backgroundColor="#b8daff";
                    break;
                    
                default:
                
                    this.style.backgroundColor="transparent";
                    idcolor=1;
                    console.log(idcolor);
            }
            
        });
    };
    $("#morerow").click(function(){ //table plus
        var row='<tr><th scope="row"><input type="text" value="From - To"></th><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td></tr>';

        // $('#myTable > tbody:last-child').append('<tr><th scope="row"><input type="text" value="From - To"></th><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td><td>'+tableTarea+'</td></tr>').fadeIn(999);
        $(row).hide().appendTo("#myTable > tbody:last-child").fadeIn(1000);
        idtable++;
        clickColor();
        loadTextarea();
       
    });
    $("#lessrow").click(function(){ //table minus
        if(idtable>0){

            $('#myTable tr:last').remove();
            idtable--;
            clickColor();
        }
       
    });
   
    

    $("#add-ntdo").click(function(){
        dragnum=dragnum+1;
        // $("#div1").append(tagTop+dragnum+tagBot);
        $(tagTop+dragnum+tagBot).hide().appendTo("#div1").fadeIn(1000);
        loadTextarea();
       
    });
    $("#add-doing").click(function(){
        dragnum=dragnum+1;
        // $("#div2").append(tagTop+dragnum+tagBot);
        $(tagTop+dragnum+tagBot).hide().appendTo("#div2").fadeIn(1000);
        loadTextarea();
    });
    $("#add-done").click(function(){
        dragnum=dragnum+1;
        // $("#div3").append(tagTop+dragnum+tagBot);
        $(tagTop+dragnum+tagBot).hide().appendTo("#div3").fadeIn(1000);
        loadTextarea();
    });

    $(".close").click(function(){
        $(".hello").toggleClass("hello-animate");
        $(".trapezoid").fadeOut(2000);
        $(".blur").fadeOut(500,function(){
            $("#hi").show();
            $(".hello").animate({height:'200px',width:'200px', backgroundColor:'#8d8f4bf7',borderRadius:'100px'});
            $("#login").hide();
            check=1;
            // $(".navbar").fadeOut(2000,function(){
            //     check=1;
            //     console.log(check);
            // });

        });
  

    });

    $('.background').backgroundMove({
        movementStrength:'50'
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $("#trash").on("dragend",function(event){
        $("event").remove();
    })
    
});
function allowDrop(ev) {
    ev.preventDefault();
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
    
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}; 
function droptrash(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).remove();
}
function loadTextarea(){
    var textarea =document.querySelectorAll("textarea"); // Autoresize all TEXTAREA  **BuGS: Drop ca vao H1 va ca div con
    textarea.forEach(function(elem){
        elem.addEventListener('keydown',autosize)

    });
};
function autosize(){
    var el=this;
    setTimeout(function(){
        el.style.cssText='height:auto,padding:0';
        el.style.cssText='height:'+el.scrollHeight+'px';
    },0);
};
function noAllowDrop(ev) {
    
    ev.stopPropagation();
}
function changecolor(){
    document.getElementById("trash").classList.add("showTrash");
}
function deleteZoomTrash(){
    document.getElementById("trash").classList.remove("showTrash");
}