
function loadChart(){
    Highcharts.chart('container', {
data: {
    table: 'datatable'
},
chart: {
    type: 'spline'
},
title: {
    text: 'Data extracted from a HTML table in the page'
},
yAxis: {
    allowDecimals: false,
    title: {
        text: 'Grades',
        
    },
    max: 10
},
tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
            this.point.y + ' ';
    }
}
});
}
$(".popuptext").hide(); 
$(document).ready(function () {
    loadChart();
    // var popup='<div class="popup"><span class="popuptext" id="myPopup">Popup text...</span></div>';
    
    // $(".change").hover(function () {
    //     var pos=$(this).offset();
    //     $(".popuptext").css({left: pos.left-300, top: pos.top-100});
    //     $(".popuptext").show();

    //     // alert( pos.left);
    //     }, function () {

    //     $(".popuptext").hide(); 
    //     }
    // );
    $(".change").click(function (e) { 
        var pos=$(this).offset();
        clicked=$(this);
        $(".popuptext").css({left: pos.left-265, top: pos.top-100});
        $(".popuptext").children("input").val($(this).text());
        $(".popuptext").fadeIn();

        e.preventDefault();//ở đây
        // $(".popuptext").change(function (e) { //bỏ vào ở trên là lưu tất cả clicked
        //     clicked.html($("#changeVal").val());
        //     $(".popuptext").hide(); 
        //     e.preventDefault();
            
        // });
        
    });

    $(".popuptext").change(function (e) { //bỏ vào ở trên là lưu tất cả clicked
        clicked.html($("#changeVal").val());
        loadChart();
        $(".popuptext").fadeOut(); 
        e.preventDefault();
        
    });

    $(function () {
        $("input").keydown(function () {
          // Save old value.
          if (!$(this).val() || (parseInt($(this).val()) <= 10 && parseInt($(this).val()) >= 0))
          $(this).data("old", $(this).val());
        });
        $("input").keyup(function () {
          // Check correct, else revert back to old value.
          if (!$(this).val() || (parseInt($(this).val()) <= 10 && parseInt($(this).val()) >= 0))
            ;
          else
            $(this).val($(this).data("old"));
        });
      });
      
    $(document).mouseup(function(e) 
        {
            var container = $(".popuptext");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
                
            }
        });
});