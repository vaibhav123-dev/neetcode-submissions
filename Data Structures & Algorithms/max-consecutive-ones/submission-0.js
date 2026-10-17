class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;
        let count = 0;
        let n = nums.length;

        for (let i = 0; i < n; i++) {
            if (nums[i] == 1) {
                count++;
            } else {
                maxOnes = Math.max(maxOnes, count);
                count = 0;
            }
        }

        return maxOnes > count ? maxOnes : count;
    }
}
