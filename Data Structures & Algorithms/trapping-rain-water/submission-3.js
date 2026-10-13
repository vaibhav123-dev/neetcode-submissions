class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        // O(n), O(n)
        let n = arr.length

        // let maxL = []
        // maxL[0] = arr[0]

        // for(let i=1; i<n; i++){
        //     maxL[i] = Math.max(maxL[i-1], arr[i])
        // }

         
        // let maxR = []
        // maxR[n-1] = arr[n-1]

        // for(let i=n-2; i>=0; i--){
        //     maxR[i] = Math.max(maxR[i+1], arr[i])
        // }


        // let ans = 0
        // for(let i=0; i<n; i++){
        //     let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i]
        //     ans += Math.max(waterTrapped, 0)
        // }

        // return ans

        //O(n), O(1)
        
        let l = 0
        let r = n - 1
        let leftMax = arr[l]
        let rightMax = arr[r]
        let res = 0
        while(l<r){
            if(leftMax < rightMax){
                l++
                leftMax = Math.max(leftMax, arr[l])
                res += leftMax - arr[l]
            }else{
                r--
                rightMax = Math.max(rightMax, arr[r])
                res += rightMax - arr[r]
            }
        }

        return res
    }
}
