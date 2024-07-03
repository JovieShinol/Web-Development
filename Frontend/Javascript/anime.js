var animation_fun=function(){
    var circle_pixel=0
    var animation_start=setInterval(june_animation,5)
    function june_animation(){
        if (circle_pixel==400){
            ClearInterval(animation_start)
        }
        else{
            circle_pixel++
            circle.style.top=circle_pixel+"px"
            circle.style.left=circle_pixel+"px"
        }
    }
}