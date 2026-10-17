class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let n = nums.length;
        let minLen = n + 1;
        let left = 0;
        let currSum = 0;
        for (let right = 0; right < n; right++) {
            currSum += nums[right];

            while (currSum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                currSum -= nums[left];
                left++;
            }
        }

        return minLen == n + 1 ? 0 : minLen;
    }
}
