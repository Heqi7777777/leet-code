/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;
    let pointer = 1;
    while (pointer < nums.length) {
        if (nums[pointer] === nums[pointer - 1]) {
            nums.splice(pointer, 1);
        } else {
            pointer++;
        }
    }
    return nums.length;
};