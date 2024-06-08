var dog={name:"rocky",cost:5000,breed:"husky",color:"black"};
console.log(typeof(dog));//to check the type of data
console.log(dog);
console.log(dog["name"]);// method-1 of accessing values
console.log(dog.name);//method-2 of accessing values
// To change the values 
console.log(dog.name="ram");// method-1 of new values is assigned
console.log(dog);
console.log(dog['color']='blue');//method-2 of new values assigned
console.log(dog);
//To access the keys(or display keys)
for (var i in dog){
    console.log(i);
}
//To access the values(or display values)
for (var i in dog){
    console.log(dog[i]);
}
//If..Else
var a=10;var b=20;
if(a>b){
    console.log("a greater than b");
}
else if(a<b){
    console.log("a lesser than b");
}
else{
    console.log("a equal to b");
}