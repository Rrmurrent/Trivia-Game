var score = 0;
var time = 90;
var points= 0;



var mainDiv= $('#mainDiv');

var question = [{
    quote: 'The flower that blooms in adversity is the most rare and beautiful of them all',
    choices: ["Alladin","Beauty and the Beast","Cinderella","Mulan"],
    validAnswer: "Mulan",
    imgSrc: "assets/images/mulan.jpg"
    
},
{
    quote: 'Love is putting someone else’s needs before yours.',
    choices:["Toy Story", "Treasure Planet", "Tarzan", "Frozen"],
    validAnswer: "Frozen",
    imgSrc: "assets/images/frozen.jpg"
},
{
    quote:  'I was hiding under your porch because I love you',
    choices:["Finding Nemo","Snow White","UP", "Alladin"],
    validAnswer:"UP",
    imgSrc:"assets/images/up.jpg"

},

{
    quote:  'If you can’t say something nice, don’t say nothin’ at all.',
    choices:["Bambi","Sleeping Beauty","Alice in Wonderland", "The Jungle Book"],
    validAnswer:"Bambi",
    imgSrc:"assets/images/bambi.png"
},

{
    quote:  'Ohana means family, and family means no one gets left behind or forgotten.',
    choices:["Moana","Mary Poppins","Peter Pan", "Lilo & Stitch"],
    validAnswer: "Lilo & Stitch",
    imgSrc:"assets/images/lilo.png"
},

{
    quote:  'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
    choices:["Lady and The Tramp","Beauty and the Beast","The Lion King", "Cinderella"],
    validAnswer: "The Lion King",
    imgSrc: "assets/images/lionKing.jpg"
},

{
    quote:  'Ladies do not start fights, but they can finish them.',
    choices:["Snow White","Alladin","The Aristocats", "Mulan"],
    validAnswer: "The Aristocats",
    imgSrc:"assets/images/aristoCats.png"
},

{
    quote:  'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
    choices:["Pinocchio","Toy Story","Finding Nemo", "Winnie the Pooh"],
    validAnswer: "Winnie the Pooh",
    imgSrc:"assets/images/winnie/jpg"
},

{
    quote:  'Our fate lives within us. You only have to be brave enough to see it.',
    choices:["Sleeping Beauty","Beauty and the Beast","Brave", "UP"],
    validAnswer: "Brave",
    imgSrc: "assets/images/brave.jpg"
    
    
},

{
    quote:  'She warned him not to be deceived by appearances, for beauty is found within.',
    choices:["Mary Poppins","Beauty and the Beast","Finding Nemo", "Anastasia"],
    validAnswer: "Beauty and the Beast",
    imgSrc: "assets/images/beauty.jpg"
    
},


];



//Making variable for question.length to use in for loops
var qlength =  question.length;
var display = function (i) {
    mainDiv.empty();
    var q = question[i]
    var qDiv = $('<div></div>')
    var qQuote = $('<h2>' + q.quote + '</h2>')
    var a1 = $('<button class = "btn btn-lg btn-danger mx-1">'+ q.choices[0] +'</button>')
    var a2 = $('<button class = "btn btn-lg btn-danger mx-1">'+ q.choices[1] +'</button>')
    var a3 = $('<button class = "btn btn-lg btn-danger mx-1">'+ q.choices[2] +'</button>')
    var a4 = $('<button class = "btn btn-lg btn-danger mx-1">'+ q.choices[3] +'</button>')
    $(qQuote).appendTo (qDiv);
    $(a1).appendTo (qDiv);
    $(a2).appendTo (qDiv);
    $(a3).appendTo (qDiv);
    $(a4).appendTo (qDiv);
    $(qDiv).appendTo(mainDiv);    

    console.log(q.quote);

}
for (var i = 0; i < qlength; i++) {
    display(i);
}




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