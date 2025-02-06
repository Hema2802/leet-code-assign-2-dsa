

let nums= [-2,1,-3,4,-1,2,1,-5,4];

let maxArr=nums[0];
let currSum=0;

for(let i=0;i<nums.length;i++){
    
    if(currSum<0){
        currSum=0;
    }
    
        currSum += nums[i];
        maxArr=Math.max(maxArr , currSum);
    
}

console.log(maxArr);