// To check whether the given letter is vowel or not
// var letter=prompt("Enter a letter:");
// if (letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'||letter=='A'||letter=='E'||letter=='I'||letter=='O'||letter=='U'){
//     document.write("It is a vowel");
// }
// else{
//     document.write("It is not a vowel");
// }

// To count the vowels
// var count=0;
// var word=window.prompt("Enter a word:");
// for (var i=0;i<=(word.length);i++){
//     if(word.charAt(i)=="a"||word.charAt(i)=='e'||word.charAt(i)=='i'||word.charAt(i)=='o'||word.charAt(i)=="u"||word.charAt(i)=='A'||word.charAt(i)=='E'||word.charAt(i)=='I'||word.charAt(i)=='O'||word.charAt(i)=="U")
//         {
//             count=count+1
//     }
// }
// document.write("Total vowels are:" + count)


// Factorial
var num=parseInt(prompt("Enter a number:"));
var fact=1;
var i=1;
for (i=1;i<=num;i++)
    {
        fact=fact*i
    }
document.write("Factorial:"+fact)


