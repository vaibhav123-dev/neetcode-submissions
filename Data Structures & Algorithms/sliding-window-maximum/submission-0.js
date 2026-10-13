class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deque = []
        let n = nums.length
        let ans = []
        for(let i=0; i<n; i++){
            
            if(deque.length && deque[0] <= i-k){
                deque.shift()
            }

            while(deque.length && nums[i] >= nums[deque[deque.length-1]]){
                deque.pop()
            }

            deque.push(i)

            if(i>=k-1){
                ans.push(nums[deque[0]])
            }
        }
        return ans
    }
}
