class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length

        let res = new Array(n)

        res[0] = 1
        for(let i=1; i<n; i++){
            res[i] = res[i-1] * nums[i-1]
        }

        let suffProd = 1
        for(let i=n-1; i>=0; i--){
            res[i] *= suffProd
            suffProd *= nums[i]
        }

        return res
    }
}
