//// worse runtime complexity

// function maxStockProfit(pricesArr) {
//     let max = -1;

//     for (let i = 0; i < pricesArr.length; i++) {
//         for (let j = i + 1; j < pricesArr.length; j++) {
//             if (pricesArr[j] - pricesArr[i] > max) {
//                 max = pricesArr[j] - pricesArr[i];
//             }
//         }
//     }

//     return max;
// }

//// better runtime complexity

function maxStockProfit(pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    let changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }

        sellPrice = pricesArr[i + 1];

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            const tempProfit = sellPrice - buyPrice;

            if (tempProfit > maxProfit) {
                maxProfit = tempProfit;
            }

            changeBuyPrice = false;
        }
    }

    return maxProfit;
}

module.exports = maxStockProfit;
