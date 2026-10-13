class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = {}

        for(let i=0; i<strs.length; i++){
            let key = Array(26).fill(0)
            for(let ch of strs[i]){
               key[ch.charCodeAt()-97]++
            }
            let hashKey = key.join('#')
            if(hashKey in map){
                map[hashKey].push(strs[i])
            }else{
                map[hashKey] = [strs[i]]
            }
        }

        return [...Object.values(map)]
    }
}
