/**
 * https://leetcode.cn/problems/3sum/
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
 

var threeSum = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    let results = [];
    const len = nums.length;
    for(let i = 0; i<len-2; i++){
        if(nums[i] >0) {
            break;
        }
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        } 
        let left = i+1;
        let right = len-1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum===0){
                results.push([nums[i], nums[left], nums[right]]);
                while(nums[left]===nums[left+1]) left++;
                while(nums[right]===nums[right-1]) right--;
                // 容易忽略更新left和right
                right--;
                left++;
            }else{
                if(sum>0){
                   right--;
                }else{
                    left++;
                }
            }  
        }
        
    }

    return results;

};