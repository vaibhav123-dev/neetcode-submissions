class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {
        let count = 0

        for(let i=0; i<nums.length; i++){
            let sum = 0
            for(let j=i; j<nums.length; j++){
                sum += nums[j]
                if(sum % k === 0){
                    count++
                }
            }
        }

        return count
    }
}
