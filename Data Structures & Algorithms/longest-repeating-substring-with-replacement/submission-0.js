class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}
        let left = 0
        let maxLen = 0
        let maxFreqCount = 0
        for(let right=0; right<s.length; right++){
            map[s[right]] = (map[s[right]] || 0) + 1
            maxFreqCount = Math.max(maxFreqCount, map[s[right]])

            if((right-left+1)-maxFreqCount > k){
                map[s[left]]--
                left++
            }
            maxLen = Math.max(maxLen, (right-left+1))
        }

        return maxLen
    }
}
