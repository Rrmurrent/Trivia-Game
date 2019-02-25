var score = 0;
var time = 90;
i = 0;
var points;

var imageArray = ["assets/images/mulan.jpg", "assets/images/lionKing.jpg", "assets/images/lilo.png", "assets/images/frozen.jpg", "assets/images/up.jpg", "assets/images/bambi.png", "assets/images/aristoCats.png", "assets/images/winnie/jpg","assets/images/brave.jpg","assets/images/beauty.jpg"];

var mainDiv= $('#mainDiv');

var question = [{
    quote: 'The flower that blooms in adversity is the most rare and beautiful of them all',
    choices: ["Alladin","Beauty and the Beast","Cinderella","Mulan"],
    validAnswer: choices [3],
    imageArray=[0]
},

{
    quote:  'I was hiding under your porch because I love you',
    choices:["Finding Nemo","Snow White","UP", "Alladin"],
    validAnswer: choices[2],
    imageArray = [4]

},

{
    quote:  'f you can’t say something nice, don’t say nothin’ at all.',
    choices:["Bambi","Sleeping Beauty","Alice in Wonderland", "The Jungle Book"],
    validAnswer: choices[0],
    imageArray = [5]
},

{
    quote:  'Ohana means family, and family means no one gets left behind or forgotten.',
    choices:["Moana","Mary Poppins","Peter Pan", "Lilo & Stitch"],
    validAnswer: choices[3],
    imageArray = [2]
},

{
    quote:  'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
    choices:["Lady and The Tramp","Beauty and the Beast","The Lion King", "Cinderella"],
    validAnswer: choices[2],
    imageArray = [1]
},

{
    quote:  'Ladies do not start fights, but they can finish them.',
    choices:["Snow White","Alladin","The Aristo Cats", "Mulan"],
    validAnswer: choices[2],
    imageArray = [6]
},

{
    quote:  'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
    choices:["Pinocchio","Toy Story","Finding Nemo", "Winnie the Pooh"],
    validAnswer: choices[3],
    imageArray = [7]
},

{
    quote:  'Our fate lives within us. You only have to be brave enough to see it.',
    choices:["Sleeping Beauty","Beauty and the Beast","Brave", "UP"],
    validAnswer: choices[2],
    imageArray = [8]
},

{
    quote:  'She warned him not to be deceived by appearances, for beauty is found within.',
    choices:["Mary Poppins","Beauty and the Beast","Finding Nemo", "Anastasia"],
    validAnswer: choices[1],
    imageArray = [9]
},


];

var qlength =  question.length;

    //Instructions
var instruct = function(){
    $('#mainDiv').empty();
    console.log('instructions for the game');
    var instructions = document.createElement('div');
        $(instructions).attr('id','infoText');
        $(instructions).append("Show off how well you know your disney quotes! Each questions has one correct answer. Chose wisely and beat the clock.");
        $(instructions).appendTo('#mainDiv');

    var startButton = document.createElement('button');
        $(startButton).html('Begin the Game!');
        $(startButton).attr('class', 'btn btn-primary');
        $(startButton).attr('id', 'startButton')
        $(startButton).appendTo('#mainDiv');
    $(document).on('click', '#startButton', letsGo);
};

console.log ("hello");