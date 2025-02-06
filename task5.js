

// sort colors

let nums=[2,0,2,1,1,0];

let length=nums.length;

for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
        if(nums[i]>nums[j]){
        [nums[i],nums[j]]=[nums[j],nums[i]]
        
        }
         
    }
}

console.log(nums);