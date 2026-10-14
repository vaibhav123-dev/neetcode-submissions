class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0

        let numSet = new Set(nums)

        let longest = 0
        for(const num of nums){

            if(!numSet.has(num-1)){
                let curr = num
                let currStreak = 1

                while(numSet.has(curr+1)){
                    curr++
                    currStreak++
                }

                longest = Math.max(longest, currStreak)
            }
        }

        return longest
    }
}
