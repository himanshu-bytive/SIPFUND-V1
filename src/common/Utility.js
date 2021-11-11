class Utility {

    calculatorformula(data) {
        let lm1 = data.amount
        let lm2 = data.time
        let lm3 = data.inflation
        let lm4 = data.returnRate
        let lm5 = data.investment
        let returnData = {}
        if (lm1 && lm2 && lm3 && lm4 && lm5) {
            function currencyFormat(x) {
                x = x.toString();
                var afterPoint = '';
                if (x.indexOf('.') > 0)
                    afterPoint = x.substring(x.indexOf('.'), x.length);
                x = Math.floor(x);
                x = x.toString();
                var lastThree = x.substring(x.length - 3);
                var otherNumbers = x.substring(0, x.length - 3);
                if (otherNumbers != '')
                    lastThree = ',' + lastThree;
                var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
                return '₹. ' + res;
            };
            var requiredCorp = lm1 * (Math.pow((1 + (lm3 / 100)), lm2));
            if (requiredCorp <= 0 || !isFinite(requiredCorp)) {
                returnData.corpus = 0
            } else {
                returnData.corpus = currencyFormat(Math.round(requiredCorp))
            };
            var constant2 = requiredCorp - (lm5 * (Math.pow((1 + (lm4 / 100)), lm2)));
            let rate1 = lm4 / 1200;
            var sipAmount1 = constant2 * ((1 - (1 + rate1)) / (1 - Math.pow((1 + rate1), (lm2 * 12))));
            if (sipAmount1 <= 0 || !isFinite(sipAmount1)) {
                returnData.SIPAmount = 0
                returnData.totalInvestment = 0
                returnData.lumpsumAmount = 0
            } else {
                returnData.SIPAmount = currencyFormat(Math.round(sipAmount1))
                returnData.totalInvestment = currencyFormat(Math.round(sipAmount1 * lm2 * 12))
                var lumpSumAmount1 = constant2 / Math.pow((1 + (lm4 / 100)), lm2);
                returnData.lumpsumAmount = currencyFormat(Math.round(lumpSumAmount1))
            };
        }
        return returnData
    }
}
export default new Utility();