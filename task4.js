

// max chunks to make sorted

        let arr=[4,3,2,1,0];

        let n=arr.length; 
        let count = 0;
        max= 0;  
        for (let i = 0; i < n; ++i) {  
 
            max = Math.max(max, arr[i]);
 
            if (max == i)
                count++;
        }
         
    console.log(count);
