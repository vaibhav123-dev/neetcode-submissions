class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let m = s1.length; 
        let n = s2.length

        let hash1 = Array(26).fill(0)
        let hash2 = Array(26).fill(0)

        for(let ch of s1){
            hash1[ch.charCodeAt() - 97]++
        }

        let left = 0
        for(let right = 0; right < n; right++){
            hash2[s2[right].charCodeAt()-97]++

            if((right - left + 1) > m){
                hash2[s2[left].charCodeAt()-97]--
                left++
            }

            if(this.arrayEq(hash1, hash2)) return true
        }
        return false
    }


    arrayEq(a, b){
        for(let i=0; i<a.length; i++){
            if(a[i]!=b[i]){
                return false
            }
        }
        return true
    }
}
