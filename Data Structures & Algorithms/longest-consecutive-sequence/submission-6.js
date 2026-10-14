class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0
        nums.sort((a, b) => a - b);

        let longestStrek = 1
        let currStrek = 1

        for(let i=1; i<nums.length; i++){
            if(nums[i] == nums[i-1]){
                continue
            }else if(nums[i]==nums[i-1]+1){
                currStrek += 1
            }else{
                currStrek = 1
            }

            longestStrek = Math.max(longestStrek, currStrek)
        }

        return longestStrek
    }
}
