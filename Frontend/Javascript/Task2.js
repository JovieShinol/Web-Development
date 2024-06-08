//To check whether the given letter is vowel or not
// var letter=prompt("Enter a letter:");
// if (letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'||letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U'){
//     document.write("It is a vowel");
// }
// else{
//     document.write("It is not a vowel");
// }

//To count the vowels
// function vowel_check(letter)
var letter=window.prompt("Enter a letter:");
var len=input.length;
var count=0
for (var i=0;i<len;i++){
    if (letter[i]=='a'||letter[i]=='e'||letter=='i'||letter=='o'||letter=='u'||letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U'){
        count=count+1;
        console.log("It is a vowel of count:",count);
}
    else{
        console.log("It is not a vowel");
} 
}

