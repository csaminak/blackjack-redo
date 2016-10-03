function runGame() {

    var display = document.getElementById('cards');
    var cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    /**
     * Produces a new card when called and will display that card and then
     * checks to see what the status of the user is at this point.
     *
     * @return {void}
     */
    function hit() {
        var card = Math.round(Math.random() * cards.length);
        display.innerHTML = cards[card];
        checkResult(false, true);
    }

    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {
        cards = display.innerHTML.split(' ');

        var cardValue = 0;

        cards.forEach(function (card) {
            if (Number(card)) {
                cardValue += card;
            }
            if (card === 'J' || card === 'Q' || card === 'K') {
                cardValue += 10;
            }
            if (card === 'A') {
                cardValue += 11;
            }
        });

        if (cardValue < 15 && standing) {
            alert('Dealer wins.');
        }
        if (cardValue < 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 18 && hitting || cardValue === 21) {
            alert('You win!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }

    display.innerHTML = '';
    card = Math.round(Math.random() * cards.length); //Need to create function for card
    display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    card = Math.round(Math.random() * cards.length);
    display.innerHTML = cards[card];
    card = Math.round(Math.random() * cards.length);
    display.innerHTML = display.innerHTML + ' ' + cards[card];

}
