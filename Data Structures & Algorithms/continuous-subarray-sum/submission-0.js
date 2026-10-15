class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let n = nums.length;

        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = i; j < n; j++) {
                sum += nums[j];
                if (j - i + 1 >= 2 && sum % k == 0) {
                    return true
                }
            }
        }
        return false;
    }
}
