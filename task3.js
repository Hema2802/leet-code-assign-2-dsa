

let name1="alex";
let typed="aaleex";

let str1=[...name1];
// console.log(str1);
let str2=[...typed];
// console.log(str2);

let i=0;
let j=0;

while(i<str1.length){
    if(str1[i]===str2[j]){
          i++;
          j++;
    }else if(str2[j]==str2[j-1]){
        j++;
    }else{
        console.log("False");
        return false;
    }

    }

    const result= i=== str1.length; 
    console.log(result ? "True":"False"); 
    return result;
    
    
