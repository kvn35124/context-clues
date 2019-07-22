// var friend = ['Drew', 'Trent', 'Kyle', 'Josh', 'Brittany'];
// var locations = ['Kitchen', 'Den', 'Library', 'Living Room', 'Basement', 'Office', 'Bedroom', 'Bathroom', 'Cellar', 'Closet'];
// var weapon = ['knife', 'gun', 'candlestick', 'hammer', 'book', 'spear', 'shovel', 'ax', 'pen', 'chainsaw', 'boxing gloves', 'batter', 'bag', 'fork', 'spoon', 'plane', 'helicopter', 'baseball', 'football', 'soccerball'];
// var count = 1;

function accusation() {
    var friend = ['Drew', 'Trent', 'Kyle', 'Josh', 'Brittany'];
    var locations = ['Kitchen', 'Den', 'Library', 'Living Room', 'Basement', 'Office', 'Bedroom', 'Bathroom', 'Cellar', 'Closet'];
    var weapon = ['knife', 'gun', 'candlestick', 'hammer', 'book', 'spear', 'shovel', 'ax', 'pen', 'chainsaw', 'boxing gloves', 'batter', 'bag', 'fork', 'spoon', 'plane', 'helicopter', 'baseball', 'football', 'soccerball'];
    var count = 1;
    for (let i = 0; i <= 100; i++) {
        $('body').append('<h3>Accusation ' + count + ' </h3>');
        $('h3').click(function () {
            alert('I accuse ' + friend[i%5] + ', with the ' + weapon[i%10] + ' in the ' + locations[i%20] + '!');
        })
        if (count < 100) {
            count++;
            // $('h3').click(function () {
            //     alert('I accuse ' + friend[i%5] + ', with the ' + weapon[i%10] + ' in the ' + locations[i%20] + '!');
            // })
        } else {
            return;
        }
    }
}


// function accusation() {
//     $('body').append('<h3>Accusation ' + count + ' </h3>');
//     if (count <= 100) {
//         count++;
//     } else {
//         return;
//     }
// }

// $('h3').click(function () {
//     alert.('I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '!');
// }) 

accusation();