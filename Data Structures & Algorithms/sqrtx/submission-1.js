class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x < 2) return x

        let l = 0
        let r = Math.floor(x/2)
        while(l <= r){
            let m = l + Math.floor((r-l)/2)
            if(m**2 == x){
                return m
            }else if(m**2 > x){
                r = m - 1
            }else {
                l = m + 1
            }
        }
        return r
    }
}
