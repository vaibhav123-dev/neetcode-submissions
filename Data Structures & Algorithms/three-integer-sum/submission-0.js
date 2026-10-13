class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length
        let arr = nums.sort((a,b)=>a-b)
        let ans = []

        for(let i=0; i<n; i++){
            if(arr[i-1] != arr[i]){
                this.twoSum(arr, i, ans)
            }
        }
        return ans
    }

    twoSum(arr, x, ans){
        let i = x+1
        let j = arr.length - 1
        while(i<j){
            let sum = arr[i] + arr[x] + arr[j]
            if(sum > 0){
                j--
            }else if(sum < 0){
                i++
            }else {
                ans.push([arr[i], arr[x], arr[j]])
                i++
                j--
                while(i<j && arr[i] == arr[i-1]){
                    i++
                }
            }
        }
    }
}
