class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        let n = arr.length

        let maxL = []
        maxL[0] = arr[0]

        for(let i=1; i<n; i++){
            maxL[i] = Math.max(maxL[i-1], arr[i])
        }

         
        let maxR = []
        maxR[n-1] = arr[n-1]

        for(let i=n-2; i>=0; i--){
            maxR[i] = Math.max(maxR[i+1], arr[i])
        }


        let ans = 0
        for(let i=0; i<n; i++){
            let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i]
            ans += Math.max(waterTrapped, 0)
        }

        return ans
    }
}
