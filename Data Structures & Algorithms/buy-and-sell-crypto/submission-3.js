class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let minBuy = prices[0]
        let maxProfit = 0

        // for(let i=1; i<n; i++){
        //     if(prices[i] < minBuy){
        //         minBuy = prices[i]
        //     }else{
        //         maxProfit = Math.max(maxProfit, (prices[i]- minBuy))
        //     }
        // }

        //better code
        for(let price of prices){
            maxProfit = Math.max(maxProfit, price-minBuy)
            minBuy = Math.min(minBuy, price)
        }

        return maxProfit
    }
}
