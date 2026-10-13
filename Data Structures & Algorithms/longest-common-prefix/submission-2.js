class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let x = 0
        while(x < strs[0].length){
            let char = strs[0][x]
            for(let j=1; j<strs.length; j++){
                if(char != strs[j][x] || x == strs[j].length){
                    return strs[0].slice(0, x)
                }
            }
            x++
        }
        return strs[0]
    }
}
