
//unshift--it adds the value to the original array

//let data = [10,11,12];
//data.unshift(1,2,3,4,5,6,7,8,9);
//console.log(data);

//splice--deletes the data and update its original array
//splice(starting starting position,delete count,(elements to be added))

//let data = [10,11,12,13,14,15];
//data.splice(1,3);
//console.log(data);
//output will be [ 10, 14, 15 ]

//let data = [10,11,12,13,14,15];
//data.splice(1,3,22,23,24,25);
//console.log(data);
//output will be [10, 22, 23, 24,25, 14, 15]

//let data=[3,4,7,8];
//data.splice(2,0,5,6);
//console.log(data);
//output will be [ 3, 4, 5, 6, 7, 8 ]

//slice--it picks the elements from the array
//let data=[3,4,7,8,9];
//let data1=data.slice(4,5);
//console.log(data1);
//output: [9]

//let data = [3,4,7,8,9]
//let data1=data.slice(4)
//console.log(data1)
//output: [9]

//let data=[5,10,20];
//let data1=[6,7,8,9];
//let data3=[11,12,13,14,15,16,17,18,19];
//let newdata=[11,12,13,14,15,16,17,18,19,6,7,8,9,5,10,20];
//let sortdata=newdata.sort((a,b)=>{
//    return a-b;
//});
//console.log(sortdata);

// let data='emoclew';
// let datas=[...data];
// console.log(datas.reverse().join(''));
alert("hello world");
