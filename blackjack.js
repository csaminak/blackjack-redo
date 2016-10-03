(function runGame() {

    var display = document.getElementById('cards');
    var cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    /**
     *  Takes a number from 0 to the length of the cards array as the index
     *  value and then returns a card from that position in the array.
     *
     * @return {String}  a card from the cards array.
     */
    function getNewCard() {
        return cards[Math.round(Math.random() * cards.length)];
    }


    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {
        var displayCards = display.innerHTML.split(' ');

        var cardValue = 0;

        displayCards.forEach(function (card) {
            if (card === 'J' || card === 'Q' || card === 'K') {
                card = 10;
            } else if (card === 'A') {
                card = 11;
            } else {
                card = Number(card);
            }
            cardValue += card;
        });

        var loseValue = cardValue < 16;
        var tieValue = cardValue >= 16 && cardValue <= 18;
        var winValue = cardValue >= 19 && cardValue <= 21;

        if (standing) {
            if (loseValue) {
                alert('Dealer wins.');
            } else if (tieValue) {
                alert('Push!');
            } else if (winValue) {
                alert('You win!');
            }
        }

        if (hitting) {
            if (winValue) {
                alert('You win!');
            } else if (cardValue > 21) {
                alert('You Bust.');
            }
        }

        if (cardValue === 21) {
            alert('You win!');
        }

    display.innerHTML = '';
    display.innerHTML = getNewCard();
    }

    /**
     * Produces a new card when called and will display that card and then
     * checks to see what the status of the user is at this point.
     *
     * @return {void}
     */
    function hit() {
        display.innerHTML = cards[getNewCard()];
        checkResult(false, true);
    }


    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });
    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    display.innerHTML = getNewCard();
    display.innerHTML = display.innerHTML + ' ' + getNewCard();

})();
