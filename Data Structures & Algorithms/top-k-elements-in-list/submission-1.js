class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);

        for(let n of nums){
            map[n] = (map[n] || 0) + 1
        }

        for(let n in map){
            freqArr[map[n]].push(parseInt(n)) 
        }

        let res = []
        for(let i=freqArr.length - 1; i > 0; i--){
            for(let n of freqArr[i]){
                res.push(n)
                if(res.length == k){
                    return res
                }
            }
        }
    }
}
