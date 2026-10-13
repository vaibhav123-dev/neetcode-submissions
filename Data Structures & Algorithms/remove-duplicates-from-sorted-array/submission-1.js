class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let x = 0
        for(let i=1; i<nums.length; i++){
            if(nums[i] > nums[x]){
                nums[x+1] = nums[i]
                x++
            }
        }
        return x+1
    }
}
