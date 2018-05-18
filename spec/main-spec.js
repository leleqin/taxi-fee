let main = require('../main/main');

describe('main', function () {
    // write your tests here...
    let km = [1,5,9];
    let min = 3;
    let pay = [7,9,13];

    it('两公里以内车费多少', function () {
        let result = main(km[0],min);
        expect(result).toEqual(pay[0]);
    });

    it('八公里以内车费多少', function () {
        let result = main(km[1],min);
        expect(result).toEqual(pay[1]);
    });

    it('八公里外车费多少', function () {
        let result = main(km[2],min);
        expect(result).toEqual(pay[2]);
    });


});
