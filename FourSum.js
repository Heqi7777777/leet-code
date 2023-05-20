/**
 * https://leetcode.cn/problems/4sum/
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。

 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>{
        return a-b;
    });
    let result = [];
    let len = nums.length;
    for(let i =0; i<len-3; i++){
        if(nums[i]+nums[len-3]+nums[len-2]+nums[len-1]<target){
            continue;
        }
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target){
            break;
        }
        if( i>0 && nums[i] === nums[i-1]){
            continue;
        }
        for(let j=i+1; j<len-2; j++){
            let left = j+1;
            let right = len-1;
            if( j>i+1 && nums[j] === nums[j-1]){//这一行容易写成j>1...
                continue;
            }
            while(left < right){
                if(nums[i]+nums[j]+nums[left]+nums[right]===target){
                    // console.log(result);
                    result.push([nums[i], nums[j],nums[left],nums[right]]);
                    while(nums[left+1]===nums[left]) left++;
                    while(nums[right-1]===nums[right]) right--;
                    left++;
                    right--;
                }else{
                    if(nums[i]+nums[j]+nums[left]+nums[right]<target){
                        left++;
                    }else{
                        right--;
                    }
                }
            }
        }
    }
    return result;
};