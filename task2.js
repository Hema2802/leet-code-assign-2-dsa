

let nums = [-1,0,1,2,-1,-4];
let length=nums.length;

const ans = [];
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
             

        let leftEle = i + 1;
        let rightEle = length - 1;

        while (leftEle < rightEle) {
            const sum = nums[i] + nums[leftEle] + nums[rightEle];

            if (sum === 0) {
                ans.push([nums[i], nums[leftEle], nums[rightEle]]);

                
                while (leftEle < rightEle && nums[leftEle] === nums[leftEle + 1]) {
                    leftEle++;
                }
                    
                while (leftEle < rightEle && nums[rightEle] === nums[rightEle - 1]){
                    rightEle--;
                } 

                leftEle++;
                rightEle--;
            } else if (sum < 0) {
                leftEle++;
            } else {
                rightEle--;
            }
        }
    }

    console.log(ans);
    

