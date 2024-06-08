//Arrays

/*var fruits=new Array("Apple","Orange","Mango")
document.write(fruits)
for (var i in fruits)
    {
    document.write("</br/>"+fruits[i]+"<br/>")//creates a break in displaying text
}*/

//For Loop using arrays

/*var arr=new Array(10,20,30,40,50);
for(i=0;i<=4;i++)
    {
        document.write(arr[i]+"<br/>")
    }
*/

//If ..Else in prompt

// var Name=prompt("Enter your name:","Name");
// var tamil=parseInt(prompt("Enter your Tamil Mark","Tamil Mark"));
// var english=parseInt(prompt("Enter your English Mark","English Mark"));
// var maths=parseInt(prompt("Enter your Maths Mark","Maths Mark"));
// var science=parseInt(prompt("Enter your Science Mark","Science Mark"));
// var social=parseInt(prompt("Enter your Social Mark","Social Mark"));
// var total=tamil+english+maths+science+social;
// var percent=(total/500)*100;
// document.write("Name:"+ Name +"<br/>");
// document.write("Tamil Mark:"+ tamil +"<br/>");
// document.write("English Mark:"+ english +"<br/>");
// document.write("Maths Mark:"+ maths +"<br/>");
// document.write("Science Mark:"+ science +"<br/>");
// document.write("Social Mark:"+ social +"<br/>");
// if(percent>=90)
//     {
//         alert("Grade A")
//     }
// else if(percent>=60)
//     {
//         alert("Grade B")
//     }
// else if(percent>40)
//     {
//         alert("Grade C")
//     }
// else
//     {
//         alert("Grade D")
//     }

//prompt,confirm,alert
// let user=window.prompt("your name:")
// console.log(user)

var person=function(f_name,l_name){
    this.f_name=f_name
    this.l_name=l_name
}
var em=new person("besant","tech")
console.log(em)
console.log(typeof(em))
