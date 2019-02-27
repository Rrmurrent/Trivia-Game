var score = 0;
var time = 10;
var points= 0;
var i = 0;

// Div where everything is displayed
var mainDiv= $('#mainDiv');
// making object
var question = [{
    quote: '"The flower that blooms in adversity is the most rare and beautiful of them all"',
    choices: ["Alladin","Beauty and the Beast","Cinderella","Mulan"],
    validAnswer: "Mulan",
    imgSrc: "assets/images/mulan.jpg"
    
},
{
    quote: '"Love is putting someone else’s needs before yours."',
    choices:["Toy Story", "Treasure Planet", "Tarzan", "Frozen"],
    validAnswer: "Frozen",
    imgSrc: "assets/images/frozen.jpg"
},
{
    quote:  '"I was hiding under your porch because I love you"',
    choices:["Finding Nemo","Snow White","UP", "Alladin"],
    validAnswer:"UP",
    imgSrc:"assets/images/up.jpg"

},

{
    quote:  '"If you can’t say something nice, don’t say nothin’ at all."',
    choices:["Bambi","Sleeping Beauty","Alice in Wonderland", "The Jungle Book"],
    validAnswer:"Bambi",
    imgSrc:"assets/images/bambi.png"
},

{
    quote:  '"Ohana means family, and family means no one gets left behind or forgotten."',
    choices:["Moana","Mary Poppins","Peter Pan", "Lilo & Stitch"],
    validAnswer: "Lilo & Stitch",
    imgSrc:"assets/images/lilo.png"
},

{
    quote:  '"The past can hurt. But the way I see it, you can either run from it, or learn from it."',
    choices:["Lady and The Tramp","Beauty and the Beast","The Lion King", "Cinderella"],
    validAnswer: "The Lion King",
    imgSrc: "assets/images/lionKing.jpg"
},

{
    quote:  '"Ladies do not start fights, but they can finish them."',
    choices:["Snow White","Alladin","The Aristocats", "Mulan"],
    validAnswer: "The Aristocats",
    imgSrc:"assets/images/aristoCats.png"
},

{
    quote:  '"You’re braver than you believe, and stronger than you seem, and smarter than you think."',
    choices:["Pinocchio","Toy Story","Finding Nemo", "Winnie the Pooh"],
    validAnswer: "Winnie the Pooh",
    imgSrc:"assets/images/winnie/jpg"
},

{
    quote:  '"Our fate lives within us. You only have to be brave enough to see it."',
    choices:["Sleeping Beauty","Beauty and the Beast","Brave", "UP"],
    validAnswer: "Brave",
    imgSrc: "assets/images/brave.jpg"
    
    
},

{
    quote:  '"She warned him not to be deceived by appearances, for beauty is found within."',
    choices:["Mary Poppins","Beauty and the Beast","Finding Nemo", "Anastasia"],
    validAnswer: "Beauty and the Beast",
    imgSrc: "assets/images/beauty.jpg"
    
},


];

//Making variable for question.length to use in for loops
var qlength =  question.length;
// displays the questions and the button answers in the main div
var display = function () {
//    empties the main div, to be filled with button and question content.
    mainDiv.empty(); 
// stats contains the timer and the score
    var stats = $('<div><h3>timer:<div id = "timerDiv">'+ time +'</div>score:<div id = "scoreDiv">'+ score +'</div></h3></div>')
// variable for questions
    var q = question[i]
// Created div to put the questions and answer options in
    var qDiv = $('<div></div>')
// Created location for the quotes and answers to go
    var qQuote = $('<h2>' + q.quote + '</h2>')
    var a1 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[0] + '">'+ q.choices[0] +'</button>')
    var a2 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[1] + '">'+ q.choices[1] +'</button>')
    var a3 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[2] + '">'+ q.choices[2] +'</button>')
    var a4 = $('<button class = "ansBtn btn btn-lg btn-danger mx-1" value = "' + q.choices[3] + '">'+ q.choices[3] +'</button>')
// appending time and scoreboard to q.div
    $(stats).appendTo(qDiv);
    // appending quotes to qdiv
    $(qQuote).appendTo(qDiv);
    // appending answer option 1-4
    $(a1).appendTo(qDiv);
    $(a2).appendTo(qDiv);
    $(a3).appendTo(qDiv);
    $(a4).appendTo(qDiv);
    // appending qDiv containing all of the above to the mainDiv
    $(qDiv).appendTo(mainDiv);    
// checking if quotes work
    console.log(q.quote);

};

display();

$(document).on('click', '.ansBtn', function(event) {
    event.preventDefault();
    var userAns = this.value;
    var actualAns = question[i].validAnswer;
// console logging to see user answer and actual answer. Making sure they match.
    console.log (userAns);
    console.log(actualAns);
    
// timer variable created
    var timer = () =>{
        setInterval(() =>{
            time--;
            $('#timerDiv').empty();
            $('#timerDiv').append(time);
            console.log(time);
        },1000)
    }
    timer();

// conditional statement
    if(userAns === actualAns){
        alert('Good Job, keep it up!')
        i++
        score++
        time = 10 
    
        $("#scoreDiv").empty();
        $("#scoreDiv").append(score);
        if (i === qlength){
            endAlert();
        }
        else {
            display()
        }

    }
    
    else{

        alert('Boo!! You suck.')
        i++
        time = 10
        $("#scoreDiv").empty();
        $("#scoreDiv").append(score);
        
    
        if (i === qlength){
         
         endAlert();
        //  timer();
         
        }
        else {
            display();
            // timer();
        }
        
    }
});

// End alert
var endAlert =() =>{
    i++
    
    alert('!!You finished!!');
    alert("Your total score is"  + ' ' + score + "out of a possible 10");
        if (score === 10) {
            alert("You really know your Disney movies!!");
            $("#scoreDiv").empty();
            $('#timerDiv').empty();
        } 
        else {
            alert("Better grab some popcorn and study up!");
            $("#scoreDiv").empty();
            $('#timerDiv').empty();
            

        }            

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

// // timer
// var timer = () =>{
//     setInterval(() =>{
//         time--;
        
//         })
//         timer();
//     };
    