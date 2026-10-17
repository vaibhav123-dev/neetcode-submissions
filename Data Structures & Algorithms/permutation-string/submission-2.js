class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let m = s1.length;
        let n = s2.length;

        if (m > n) return false;

        let s1Count = new Array(26).fill(0);
        let windowCount = new Array(26).fill(0);

        for (let i = 0; i < m; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            windowCount[s2.charCodeAt(i) - 97]++;
        }

        if (s1Count.every((val, idx) => val == windowCount[idx])) return true;

        for (let i = m; i < n; i++) {
            windowCount[s2.charCodeAt(i) - 97]++;
            windowCount[s2.charCodeAt(i - m) - 97]--;
            if (s1Count.every((val, idx) => val == windowCount[idx])) return true;
        }

        return false;
    }
}
