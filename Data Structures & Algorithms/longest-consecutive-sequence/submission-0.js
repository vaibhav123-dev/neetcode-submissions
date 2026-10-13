class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0
        let set = new Set(nums)

        for(let num of nums){
            let streak = 0
            let curr = num
            while(set.has(curr)){
                streak++
                curr++
            }

            res = Math.max(streak, res)
        }
    return res
    }
}
