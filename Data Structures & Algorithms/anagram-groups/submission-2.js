class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n = strs.length;
        let map = new Map();

        for (let s of strs) {
            const strSort = s.split("").sort().join("");

            if (!map.has(strSort)) {
                map.set(strSort, []);
            }

            map.get(strSort).push(s);
        }

        return Array.from(map.values());
    }
}
