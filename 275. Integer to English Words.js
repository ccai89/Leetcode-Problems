/**
 * @param {number} num
 * @return {string}
 */
 const numberToWords = function(num) {
    // establish the key for conversion
    const uniques = ['Zero ','One ','Two ','Three ','Four ','Five ',
                     'Six ','Seven ','Eight ', 'Nine ','Ten ',
                     'Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ',
                     'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    if (num < 20) return uniques[num].slice(0,-1);
    const tens = ['', 'Twenty ', 'Thirty ', 'Forty ', 'Fifty ', 
                  'Sixty ', 'Seventy ', 'Eighty ', 'Ninety ']
    const commaPlaces = ['','Thousand ', 'Million ', 'Billion ', 'Trillion ', 'Quadrillion ','Quintillion' ,'Sextillion ', 'Septillion ', 'Octillion ','Nonillion ','Decillion '] 
    
    let stringVersion = "";
    let power = 10;

    // helper method for each subset of three digits places
    const numset = (n) => {
        // grab 100s place for each subset
        let hundreds = Math.floor(n/100) > 0 ? uniques[Math.floor(n/100)] + "Hundred " : ""
        let tens_place = n%100-n%10 === 0 ? "" : // if 10s place is 0, ignore
                         n%100 < 20 ? uniques[n%100] : // value is 1-20 may have unique name so return that
                                      tens[(n%100 - n%10)/10 - 1]; // values > 20
        let ones = (n%100-n%10)/10 !== 1 && n%10 != 0 ? uniques[n%10] : ""; // return ones value
        return hundreds + tens_place + ones;
    }
    // starts with billins place then works its way down
    while(power >= 0){
        // finding each 3 digit set
        let temp = Math.floor(num / 10**(power * 3));
        // concatenating it to the stringVersion
        if(temp > 0) stringVersion += numset(temp) + commaPlaces[power];
        // getting rid of the converted 3 digit set
        num = num - temp * 10**(power-- * 3);
    }

    return stringVersion.slice(0,-1);
};

console.log(numberToWords(12345));
