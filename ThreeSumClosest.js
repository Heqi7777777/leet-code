/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => {
        return a-b;
    });
    let sum = 0;
    let len = nums.length;
    let result = nums[0] + nums[1] + nums[len-1];

    for(let i=0;i<len-2;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        let left = i+1;
        let right = len-1;       
        while(left < right){
            sum = nums[i] + nums[left] + nums[right];
            if(sum === target) return target;
            
            if(sum>target){
                right--;
            }else{
                left++;
            }
            result = Math.abs(sum - target) > Math.abs(result-target) ? result : sum;
        }
    }
    return result;
    
};