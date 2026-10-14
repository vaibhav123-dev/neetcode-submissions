class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let window = new Set()
        let n = nums.length

        for(let i=0; i<n; i++){
            if(window.has(nums[i])){
                return true
            }
            window.add(nums[i])
            if(window.size > k){
                window.delete(nums[i-k])
            }
        }

        return false
    }
}
