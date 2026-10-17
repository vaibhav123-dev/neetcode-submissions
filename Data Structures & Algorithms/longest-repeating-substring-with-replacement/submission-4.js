class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = new Array(26).fill(0);
        let n = s.length;
        let maxLen = 0;
        let left = 0;

        let maxFreq = 0;
        for (let right = 0; right < n; right++) {
            let idx = s.charCodeAt(right) - 65;
            freq[idx]++;

            maxFreq = Math.max(maxFreq, freq[idx]);

            while (right - left + 1 - maxFreq > k) {
                freq[s.charCodeAt(left) - 65]--;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
