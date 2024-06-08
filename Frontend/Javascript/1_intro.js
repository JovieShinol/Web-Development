//Data Types: let var const
//var:
{
    var a=20;
    console.log(a)//returns the value in console
    //document.write(a)//writes in the html docu,ment
    var a=21;//re-assigning of values is possible
    console.log(a)
}
console.log(a)
//const
{
    const b=20;
    console.log(b)
    // document.write(b)
}
const b=35;
console.log(b)
//let
{
    let c=20;
    console.log(c)
    // document.write(b)
}
let c=35;
console.log(c)

//To check the type of datatype:
var typ=undefined;
console.log(typeof(typ))
//Arrays and types
arr1=[10,20,30];//homogeneous array
arr2=[10,"name",56];//heterogeneous array
//Type of datatype
arr3=[10,20,30];
console.log(typeof(arr3))
//Array functions
arr=[10,20,30,40,50];
arr[3]='may'//replace the element based on index 
console.log(arr)
arr.push(60);//adds the element in the left 
console.log(arr)
arr.pop();//deletes the last element
console.log(arr)
//arr.pop(2);//pop based on index in not possible
arr.unshift(0)//adds to the start index/right
console.log(arr)
arr.unshift(10);//adds a group of values to the right
console.log(arr)
arr.shift();//deletes the first element
console.log(arr)
arr.splice(4,1,50);//splice(start position,no of elents to be added,new value)
console.log(arr)




