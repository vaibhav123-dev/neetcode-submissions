class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let a = s.split('').sort().join('')
        let b = t.split('').sort().join('')
        console.log(a, b)
        return a == b
    }
}
