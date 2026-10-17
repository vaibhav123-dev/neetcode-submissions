class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;

        let window = new Set();
        let left = 0;
        let maxLen = 0;
        for (let right = 0; right < n; right++) {
            while (window.has(s[right])) {
                window.delete(s[left]);
                left++;
            }
            window.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
