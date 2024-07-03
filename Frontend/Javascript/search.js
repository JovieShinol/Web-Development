// search

// function pattern(){
//     var str="Besant Technologies"
//     var res=str.search("T")
//     document.getElementById("june").innerHTML=res
// }
// pattern()


// match

// function pattern(){
//     var str="Besant Technologies"
//     var res=str.match(/ol+/g)
//     var res=str.match(/ol*/g)
//     document.getElementById("one").innerHTML=res
//     document.getElementById("two").innerHTML=res
// }
// pattern()


// form validation

var validate=function(){
    var res=document.getElementById("phone").value
    var regex=/^[6-9]{1}[0-9]{9}$/.test(res)
    if (regex==false){
        document.getElementById("msg").innerHTML="Invalid Input!"
        return false
    }
}




