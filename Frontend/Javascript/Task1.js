// var n=4;
// for (i=0;i<n;i++){
//     var datas=[]
//     var data=prompt("Enter the age of Employees:");
//     datas.push(data)
// }
// console.log(datas)


//Asynchronous

// setTimeout(function(){
//     console.log("First line")
// },10)//seconds
// console.log("Second line")
// console.log("third line")
// console.log("fourth line")
// test()
// console.log("second line")
// function test(){
//     console.log("test line")
// }


// function Pattern2(){
//     var str="Besant Technologies";
//     var res=str.replace("T","O")
//     document.getElementById("june").innerHTML=res
// }
// Pattern2()

// function Pattern2(){
//     var str="Besant Technologies";
//     var res=str.replace("/T/i","@")
//     document.getElementById("june").innerHTML=res
// }
// Pattern2()

// function Pattern2(){
//     var str="Besant Technoloololologies";
//     var res=str.match(/ol+/g)
//     var res2=str.match(/ol*/g)
//     document.getElementById("june").innerHTML=res
//     document.getElementById("june").innerHTML=res2
// }
// Pattern2()

// search
// function pattern(){
//     var str="Besant Technologies"
//     var res=str.search("T")
//     document.getElementById("june").innerHTML=res
// }
// pattern()


// exception handling

// var fun=function(){
//     try{
//         // var a=10;
//         // var b=0;
//         // var c=a/b;
//         // console.log(c)
//         var name="use strict"
//         var str=name.toLowerCase()
//         alert ("Lowercase"+str)
//     }
//     catch(e){
//         console.log("Inside catch block")
//     }
//     finally{
//         console.log("inside finally block")
//     }
// }
// fun()


// promise
// let p=new Promise(
//     function(success,error){
//         let datacame=true//fulfilled  false-rejected comment let...error-pending
//         if(datacame){
//             success([1,2,3,4,5])
//         }
//         else{
//             error("promise not done")
//         }
//     }
// );
// console.log(p)
// p.then(function(data){
//     console.log(data)
// })
// p.catch(function(errordata){
//     console.log(errordata)
// })

async function test(){
    x=await 5+7;
    return x
}
let res=test()
res.then(function(data){
    console.log(data)
})