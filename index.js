var large = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintillion', 'trevigintillion', 'quattuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion', 'tretrigintillion', 'quattuortrigintillion', 'quintrigintillion', 'sextrigintillion', 'septentrigintillion', 'octotrigintillion', 'novemtrigintillion', 'quadragintillion', 'unquadragintillion', 'duoquadragintillion', 'trequadragintillion', 'quattuorquadragintillion', 'quinquadragintillion', 'sexquadragintillion', 'septenquadragintillion', 'octoquadragintillion', 'novemquadragintillion', 'quinquagintillion', 'unquinquagintillion', 'duoquinquagintillion', 'trequinquagintillion', 'quattuorquinquagintillion', 'quinquinquagintillion', 'sexquinquagintillion', 'septenquinquagintillion', 'octoquinquagintillion', 'novemquinquagintillion', 'sexagintillion', 'unsexagintillion', 'duosexagintillion', 'tresexagintillion', 'quattuorsexagintillion', 'quinsexagintillion', 'sexsexagintillion', 'septensexagintillion', 'octosexagintillion', 'novemsexagintillion', 'septuagintillion', 'unseptuagintillion', 'duoseptuagintillion', 'treseptuagintillion', 'quattuorseptuagintillion', 'quinseptuagintillion', 'sexseptuagintillion', 'septenseptuagintillion', 'octoseptuagintillion', 'novemseptuagintillion', 'octogintillion', 'unoctogintillion', 'duooctogintillion', 'treoctogintillion', 'quattuoroctogintillion', 'quinoctogintillion', 'sexoctogintillion', 'septoctogintillion', 'octooctogintillion', 'novemoctogintillion', 'nonagintillion', 'unnonagintillion', 'duononagintillion', 'trenonagintillion', 'quattuornonagintillion', 'quinnonagintillion', 'sexnonagintillion', 'septennonagintillion', 'octononagintillion', 'novemnonagintillion', 'centillion'],
    ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toWords(number) {
    var stringNumber, idx, numArray, str, sk, i;
    stringNumber = number.toString();
    stringNumber = stringNumber.replace(/[\, ]/g, '');
    if (typeof number === 'number' && stringNumber.length > 15) {
        var msg = 'For numbers larger than 15 digits, please pass as a string due to precision errors';
        console.error(msg);
        return msg;
    }
    if (stringNumber === '0') return 'zero';

    str = '';
    if (stringNumber.indexOf('-') === 0) {
        str += 'negative ';
        stringNumber = stringNumber.substring(1);
    }

    idx = stringNumber.indexOf('.');
    if (idx == -1) idx = stringNumber.length;
    numArray = stringNumber.split('');
    sk = 0;
    for (i = 0; i < idx; i++) {
        if ((idx - i) % 3 == 2) {
            if (numArray[i] == '1') {
                str += teens[Number(numArray[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (numArray[i] != 0) {
                str += tens[numArray[i] - 2] + ' ';
                sk = 1;
            }
        } else if (numArray[i] != 0) {
            str += ones[numArray[i]] + ' ';
            if ((idx - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
        if ((idx - i) % 3 == 1) {
            if (sk) str += large[(idx - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    if (idx != stringNumber.length) {
        var y = stringNumber.length;
        str += 'point ';
        for (i = idx + 1; i < y; i++) str += ones[numArray[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ').replace(/\s+$/, '');
};

console.log(module.exports('123456789012345678901234567890'));