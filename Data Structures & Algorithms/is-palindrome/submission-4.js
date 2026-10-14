class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return /[a-zA-Z0-9]/.test(char);
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (!this.isAlphanumeric(s[l])) {
                l++;
                continue;
            }
            if (!this.isAlphanumeric(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() != s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
