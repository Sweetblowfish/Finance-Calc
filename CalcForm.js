function calcForm() {
    var profit = parseInt(document.getElementById("profit").value);
    var avgNoShares = parseInt(document.getElementById("avgNoShares").value);
    var pricePerShare = parseFloat(document.getElementById("pricePerShare").value);
    var totalAssets = parseInt(document.getElementById("totalAssets").value);
    var totalLiabilities = parseInt(document.getElementById("totalLiabilities").value);
    var perExpectedGrowth = parseFloat(document.getElementById("perExpectedGrowth").value) / 100;

    //declare new variables
    var earningsPerShare;
    var priceToBook;
    
    var PERatio;
    var priceToEarningsRatio;

    //calculations
    earningsPerShare = profit / avgNoShares;
    assetLial = totalAssets-totalLiabilities;
priceToBook = pricePerShare / assetLial;
    PERatio = pricePerShare / earningsPerShare;
    priceToEarningsRatio = PERatio / perExpectedGrowth;


    //outputs
    document.getElementById("earningsPerShare").value = earningsPerShare;
    document.getElementById("priceToBook").value = priceToBook;
    document.getElementById("PERatio").value = PERatio;
    document.getElementById("priceToEarningsRatio").value = priceToEarningsRatio;

}