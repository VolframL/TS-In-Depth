var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('«This is a private function»');
    }
})(Utility || (Utility = {}));
/// <reference path='./utility-functions.ts'/>
console.log(Utility.Fees.calculateLateFee(5));
console.log(Utility.maxBooksAllowed(569));
console.log(Utility.maxBooksAllowed(10));
var util = Utility.Fees;
console.log(util.calculateLateFee(547));
