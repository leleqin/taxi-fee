function main(km,min) {

    let sum = 6;
    let minSum = min * 0.25;

    if (km <= 2){
        sum += minSum;
    }else if (km > 2 && km < 8){
        sum += (km - 2)*0.8+minSum;
    }else {
        sum += (km - 7)*(0.8+0.8*0.5)+(7-2)*0.8+minSum;
    }

    return Math.round(sum);
};
module.exports = main;