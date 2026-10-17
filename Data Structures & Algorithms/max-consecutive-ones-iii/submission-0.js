class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let maxLen = 0;
        for (let i = 0; i < nums.length; i++) {
            let zeroCount = 0;
            for (let j = i; j < nums.length; j++) {
                if (nums[j] === 0) {
                    zeroCount++;
                }
                if (zeroCount > k) {
                    break;
                }
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
        return maxLen;
    }
}
