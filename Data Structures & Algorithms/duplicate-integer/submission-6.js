class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length
        let map = new Map()

        for(let i=0; i<n; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        for(let i=0; i<n; i++){
            if(map.get(nums[i]) > 1){
                return true
            }
        }

        return false

    }
}
