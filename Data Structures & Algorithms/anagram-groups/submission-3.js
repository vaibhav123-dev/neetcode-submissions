class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n = strs.length;
        let map = new Map();

        for(let s of strs){
            let count = Array(26).fill(0)

            for(let ch of s){
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',')
            if(!map.has(key)){
                map.set(key, [])
            }

            map.get(key).push(s)
        }

        return Array.from(map.values())
    }
}
