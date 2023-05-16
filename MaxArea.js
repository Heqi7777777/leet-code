/**
 * https://leetcode.cn/problems/container-with-most-water/
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。

 * 说明：你不能倾斜容器。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea=0;
    let left = 0;
    let right = height.length-1;
    let curArea = 0;
    while(left<right){
        curArea = Math.min(height[left], height[right]) * (right - left);
        if(curArea > maxArea){
            maxArea = curArea;
        }
        if(height[left] > height[right]){
            right = right -1;
        } else{
            left = left +1;
        }
    }
    return maxArea;
};