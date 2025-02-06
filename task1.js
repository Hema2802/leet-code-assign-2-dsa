
var twoSum = function(nums, target) {
    let length=nums.length; // represent array length
    let ans=[]; // empty array to display ans
    let map= new Map(); //create new map function

    for(let i=0;i<length;i++){  //iterating process
        let a=nums[i];   // declare the array element index
        let b=target-a;
        if(map.has(b)==true){//checking sum value 
            ans.push(i);   // if true push the value to ans array
            ans.push(map.get(b));
            break;
        }
        else{
            map.set(a,i);  // if false set into map
        }
    }
    return ans; // to return the answer
    
};

let nums=[3,2,4];
let target=6;
const result=twoSum(nums, target);
console.log(result);