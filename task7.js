
//division method

/*let nums=[1,2,3,4];

let ans=[];
let product=1;

for(let i=0;i<nums.length;i++){
    product=product*nums[i]

}
for(let num of nums){
    ans.push(product/num);
}

console.log(ans); */

// without division

let nums=[1,2,3,4];

let ans=[];
let length=nums.length;

let leftProduct = 1;
for(let i=0;i<length;i++){
    ans[i] = leftProduct;
    leftProduct*=nums[i]; 
    
}

let rightProduct = 1;
for(let i=length-1;i>=0;i--){
    ans[i]*=rightProduct;
    rightProduct*=nums[i];
    
}

console.log(ans);