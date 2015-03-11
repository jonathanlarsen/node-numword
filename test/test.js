var assert = require('assert'),
    numword = require('../');

describe('numword', function() {
    describe('numbers', function() {
        it('should return zero', function() {
            assert.equal(numword('0'), 'zero');
            assert.equal(numword(0), 'zero');
        });

        it('should still return zero', function() {
            assert.equal(numword('-0'), 'zero');
            assert.equal(numword(-0), 'zero');
        });

        it('should return one', function() {
            assert.equal(numword('1'), 'one');
            assert.equal(numword(1), 'one');
        });

        it('should return negative one', function() {
            assert.equal(numword('-1'), 'negative one');
            assert.equal(numword(-1), 'negative one');
        });

        it('should return one point one two', function() {
            assert.equal(numword('1.12'), 'one point one two');
            assert.equal(numword(1.12), 'one point one two');
        });

        it('should return two', function() {
            assert.equal(numword('2'), 'two');
            assert.equal(numword(2), 'two');
        });

        it('should return three', function() {
            assert.equal(numword('3'), 'three');
            assert.equal(numword(3), 'three');
        });

        it('should return four', function() {
            assert.equal(numword('4'), 'four');
            assert.equal(numword(4), 'four');
        });

        it('should return five', function() {
            assert.equal(numword('5'), 'five');
            assert.equal(numword(5), 'five');
        });

        it('should return six', function() {
            assert.equal(numword('6'), 'six');
            assert.equal(numword(6), 'six');
        });

        it('should return seven', function() {
            assert.equal(numword('7'), 'seven');
            assert.equal(numword(7), 'seven');
        });

        it('should return eight', function() {
            assert.equal(numword('8'), 'eight');
            assert.equal(numword(8), 'eight');
        });

        it('should return nine', function() {
            assert.equal(numword('9'), 'nine');
            assert.equal(numword(9), 'nine');
        });

        it('should return ten', function() {
            assert.equal(numword('10'), 'ten');
            assert.equal(numword(10), 'ten');
        });

        it('should return eleven', function() {
            assert.equal(numword('11'), 'eleven');
            assert.equal(numword(11), 'eleven');
        });

        it('should return twelve', function() {
            assert.equal(numword('12'), 'twelve');
            assert.equal(numword(12), 'twelve');
        });

        it('should return thirteen', function() {
            assert.equal(numword('13'), 'thirteen');
            assert.equal(numword(13), 'thirteen');
        });

        it('should return fourteen', function() {
            assert.equal(numword('14'), 'fourteen');
            assert.equal(numword(14), 'fourteen');
        });

        it('should return fifteen', function() {
            assert.equal(numword('15'), 'fifteen');
            assert.equal(numword(15), 'fifteen');
        });

        it('should return sixteen', function() {
            assert.equal(numword('16'), 'sixteen');
            assert.equal(numword(16), 'sixteen');
        });

        it('should return seventeen', function() {
            assert.equal(numword('17'), 'seventeen');
            assert.equal(numword(17), 'seventeen');
        });

        it('should return eighteen', function() {
            assert.equal(numword('18'), 'eighteen');
            assert.equal(numword(18), 'eighteen');
        });

        it('should return nineteen', function() {
            assert.equal(numword('19'), 'nineteen');
            assert.equal(numword(19), 'nineteen');
        });

        it('should return twenty', function() {
            assert.equal(numword('20'), 'twenty');
            assert.equal(numword(20), 'twenty');
        });

        it('should return thirty', function() {
            assert.equal(numword('30'), 'thirty');
            assert.equal(numword(30), 'thirty');
        });

        it('should return forty', function() {
            assert.equal(numword('40'), 'forty');
            assert.equal(numword(40), 'forty');
        });

        it('should return fifty', function() {
            assert.equal(numword('50'), 'fifty');
            assert.equal(numword(50), 'fifty');
        });

        it('should return sixty', function() {
            assert.equal(numword('60'), 'sixty');
            assert.equal(numword(60), 'sixty');
        });

        it('should return seventy', function() {
            assert.equal(numword('70'), 'seventy');
            assert.equal(numword(70), 'seventy');
        });

        it('should return eighty', function() {
            assert.equal(numword('80'), 'eighty');
            assert.equal(numword(80), 'eighty');
        });

        it('should return ninety', function() {
            assert.equal(numword('90'), 'ninety');
            assert.equal(numword(90), 'ninety');
        });

        it('should return one hundred', function() {
            assert.equal(numword('100'), 'one hundred');
            assert.equal(numword(100), 'one hundred');
        });

        it('should return one thousand', function() {
            assert.equal(numword('1000'), 'one thousand');
            assert.equal(numword(1000), 'one thousand');
        });

        it('should return one million', function() {
            assert.equal(numword('1000000'), 'one million');
            assert.equal(numword(1000000), 'one million');
        });

        it('should return one billion', function() {
            assert.equal(numword('1000000000'), 'one billion');
            assert.equal(numword(1000000000), 'one billion');
        });

        it('should return one trillion', function() {
            assert.equal(numword('1000000000000'), 'one trillion');
            assert.equal(numword(1000000000000), 'one trillion');
        });

        it('should return one quadrillion', function() {
            assert.equal(numword('1000000000000000'), 'one quadrillion');
        });

        it('should return error message for number too large', function() {
            assert.equal(numword(1000000000000000), 'For numbers larger than 15 digits, please pass as a string due to precision errors');
        });

        it('should return one quintillion', function() {
            assert.equal(numword('1000000000000000000'), 'one quintillion');
        });

        it('should return one sextillion', function() {
            assert.equal(numword('1000000000000000000000'), 'one sextillion');
        });

        it('should return one septillion', function() {
            assert.equal(numword('1000000000000000000000000'), 'one septillion');
        });

        it('should return one octillion', function() {
            assert.equal(numword('1000000000000000000000000000'), 'one octillion');
        });

        it('should return one nonillion', function() {
            assert.equal(numword('1000000000000000000000000000000'), 'one nonillion');
        });

        it('should return one decillion', function() {
            assert.equal(numword('1000000000000000000000000000000000'), 'one decillion');
        });

        it('should return one undecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000'), 'one undecillion');
        });

        it('should return one duodecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000'), 'one duodecillion');
        });

        it('should return one tredecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000'), 'one tredecillion');
        });

        it('should return one quattuordecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000'), 'one quattuordecillion');
        });

        it('should return one quindecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000'), 'one quindecillion');
        });

        it('should return one sexdecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000'), 'one sexdecillion');
        });

        it('should return one septendecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000'), 'one septendecillion');
        });

        it('should return one octodecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000'), 'one octodecillion');
        });

        it('should return one novemdecillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000'), 'one novemdecillion');
        });

        it('should return one vigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000'), 'one vigintillion');
        });

        it('should return one unvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000'), 'one unvigintillion');
        });

        it('should return one duovigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000'), 'one duovigintillion');
        });

        it('should return one trevigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000'), 'one trevigintillion');
        });

        it('should return one quattuorvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuorvigintillion');
        });

        it('should return one quinvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinvigintillion');
        });

        it('should return one sexvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexvigintillion');
        });

        it('should return one septenvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septenvigintillion');
        });

        it('should return one octovigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octovigintillion');
        });

        it('should return one novemvigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemvigintillion');
        });

        it('should return one trigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one trigintillion');
        });

        it('should return one untrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one untrigintillion');
        });

        it('should return one duotrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duotrigintillion');
        });

        it('should return one tretrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one tretrigintillion');
        });

        it('should return one quattuortrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuortrigintillion');
        });

        it('should return one quintrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quintrigintillion');
        });

        it('should return one sextrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sextrigintillion');
        });

        it('should return one septentrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septentrigintillion');
        });

        it('should return one octotrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octotrigintillion');
        });

        it('should return one novemtrigintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemtrigintillion');
        });

        it('should return one quadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quadragintillion');
        });

        it('should return one unquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unquadragintillion');
        });

        it('should return one duoquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duoquadragintillion');
        });

        it('should return one trequadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one trequadragintillion');
        });

        it('should return one quattuorquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuorquadragintillion');
        });

        it('should return one quinquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinquadragintillion');
        });

        it('should return one sexquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexquadragintillion');
        });

        it('should return one septenquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septenquadragintillion');
        });

        it('should return one octoquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octoquadragintillion');
        });

        it('should return one novemquadragintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemquadragintillion');
        });

        it('should return one quinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinquagintillion');
        });

        it('should return one unquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unquinquagintillion');
        });

        it('should return one duoquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duoquinquagintillion');
        });

        it('should return one trequinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one trequinquagintillion');
        });

        it('should return one quattuorquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuorquinquagintillion');
        });

        it('should return one quinquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinquinquagintillion');
        });

        it('should return one sexquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexquinquagintillion');
        });

        it('should return one septenquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septenquinquagintillion');
        });

        it('should return one octoquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octoquinquagintillion');
        });

        it('should return one novemquinquagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemquinquagintillion');
        });

        it('should return one sexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexagintillion');
        });

        it('should return one unsexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unsexagintillion');
        });

        it('should return one duosexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duosexagintillion');
        });

        it('should return one tresexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one tresexagintillion');
        });

        it('should return one quattuorsexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuorsexagintillion');
        });

        it('should return one quinsexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinsexagintillion');
        });

        it('should return one sexsexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexsexagintillion');
        });

        it('should return one septensexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septensexagintillion');
        });

        it('should return one octosexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octosexagintillion');
        });

        it('should return one novemsexagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemsexagintillion');
        });

        it('should return one septuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septuagintillion');
        });

        it('should return one unseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unseptuagintillion');
        });

        it('should return one duoseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duoseptuagintillion');
        });

        it('should return one treseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one treseptuagintillion');
        });

        it('should return one quattuorseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuorseptuagintillion');
        });

        it('should return one quinseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinseptuagintillion');
        });

        it('should return one sexseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexseptuagintillion');
        });

        it('should return one septenseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septenseptuagintillion');
        });

        it('should return one octoseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octoseptuagintillion');
        });

        it('should return one novemseptuagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemseptuagintillion');
        });

        it('should return one octogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octogintillion');
        });

        it('should return one unoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unoctogintillion');
        });

        it('should return one duooctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duooctogintillion');
        });

        it('should return one treoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one treoctogintillion');
        });

        it('should return one quattuoroctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuoroctogintillion');
        });

        it('should return one quinoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinoctogintillion');
        });

        it('should return one sexoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexoctogintillion');
        });

        it('should return one septoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septoctogintillion');
        });

        it('should return one octooctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octooctogintillion');
        });

        it('should return one novemoctogintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemoctogintillion');
        });

        it('should return one nonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one nonagintillion');
        });

        it('should return one unnonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one unnonagintillion');
        });

        it('should return one duononagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one duononagintillion');
        });

        it('should return one trenonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one trenonagintillion');
        });

        it('should return one quattuornonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quattuornonagintillion');
        });

        it('should return one quinnonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one quinnonagintillion');
        });

        it('should return one sexnonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one sexnonagintillion');
        });

        it('should return one septennonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one septennonagintillion');
        });

        it('should return one octononagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one octononagintillion');
        });

        it('should return one novemnonagintillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one novemnonagintillion');
        });

        it('should return one centillion', function() {
            assert.equal(numword('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'), 'one centillion');
        });

        it('should return Huge number for huge number', function() {
            assert.equal(numword('485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263485719263'), 'four hundred eighty five centillion seven hundred nineteen novemnonagintillion two hundred sixty three octononagintillion four hundred eighty five septennonagintillion seven hundred nineteen sexnonagintillion two hundred sixty three quinnonagintillion four hundred eighty five quattuornonagintillion seven hundred nineteen trenonagintillion two hundred sixty three duononagintillion four hundred eighty five unnonagintillion seven hundred nineteen nonagintillion two hundred sixty three novemoctogintillion four hundred eighty five octooctogintillion seven hundred nineteen septoctogintillion two hundred sixty three sexoctogintillion four hundred eighty five quinoctogintillion seven hundred nineteen quattuoroctogintillion two hundred sixty three treoctogintillion four hundred eighty five duooctogintillion seven hundred nineteen unoctogintillion two hundred sixty three octogintillion four hundred eighty five novemseptuagintillion seven hundred nineteen octoseptuagintillion two hundred sixty three septenseptuagintillion four hundred eighty five sexseptuagintillion seven hundred nineteen quinseptuagintillion two hundred sixty three quattuorseptuagintillion four hundred eighty five treseptuagintillion seven hundred nineteen duoseptuagintillion two hundred sixty three unseptuagintillion four hundred eighty five septuagintillion seven hundred nineteen novemsexagintillion two hundred sixty three octosexagintillion four hundred eighty five septensexagintillion seven hundred nineteen sexsexagintillion two hundred sixty three quinsexagintillion four hundred eighty five quattuorsexagintillion seven hundred nineteen tresexagintillion two hundred sixty three duosexagintillion four hundred eighty five unsexagintillion seven hundred nineteen sexagintillion two hundred sixty three novemquinquagintillion four hundred eighty five octoquinquagintillion seven hundred nineteen septenquinquagintillion two hundred sixty three sexquinquagintillion four hundred eighty five quinquinquagintillion seven hundred nineteen quattuorquinquagintillion two hundred sixty three trequinquagintillion four hundred eighty five duoquinquagintillion seven hundred nineteen unquinquagintillion two hundred sixty three quinquagintillion four hundred eighty five novemquadragintillion seven hundred nineteen octoquadragintillion two hundred sixty three septenquadragintillion four hundred eighty five sexquadragintillion seven hundred nineteen quinquadragintillion two hundred sixty three quattuorquadragintillion four hundred eighty five trequadragintillion seven hundred nineteen duoquadragintillion two hundred sixty three unquadragintillion four hundred eighty five quadragintillion seven hundred nineteen novemtrigintillion two hundred sixty three octotrigintillion four hundred eighty five septentrigintillion seven hundred nineteen sextrigintillion two hundred sixty three quintrigintillion four hundred eighty five quattuortrigintillion seven hundred nineteen tretrigintillion two hundred sixty three duotrigintillion four hundred eighty five untrigintillion seven hundred nineteen trigintillion two hundred sixty three novemvigintillion four hundred eighty five octovigintillion seven hundred nineteen septenvigintillion two hundred sixty three sexvigintillion four hundred eighty five quinvigintillion seven hundred nineteen quattuorvigintillion two hundred sixty three trevigintillion four hundred eighty five duovigintillion seven hundred nineteen unvigintillion two hundred sixty three vigintillion four hundred eighty five novemdecillion seven hundred nineteen octodecillion two hundred sixty three septendecillion four hundred eighty five sexdecillion seven hundred nineteen quindecillion two hundred sixty three quattuordecillion four hundred eighty five tredecillion seven hundred nineteen duodecillion two hundred sixty three undecillion four hundred eighty five decillion seven hundred nineteen nonillion two hundred sixty three octillion four hundred eighty five septillion seven hundred nineteen sextillion two hundred sixty three quintillion four hundred eighty five quadrillion seven hundred nineteen trillion two hundred sixty three billion four hundred eighty five million seven hundred nineteen thousand two hundred sixty three');
        });
    });
});