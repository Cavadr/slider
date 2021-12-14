$(document).ready(function(){

    let count=0
$(".right").click(function(){
    count++;
    if(count<=3){
        $(".images").animate({
            "margin-left": `-${count*100}%`
        })
    }

    else{
        count=0
        $(".images").animate({
            "margin-left": `-${count*100}%`
        })
    }
});


$(".left").click(function(){
    
});


})