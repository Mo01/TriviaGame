

// To start the game
//$("#start").click(start);


var myQuestions = [
    {
        question: "Q: What is the Most Used Herbs Across the Globe?",
        answers: {
            a: 'Chile',
            b: 'Clove',
            c: 'Garlic',
            d: 'olive oil'
        },
        correctAnswer: 'Chile'
    },
    {
        question: "Q: what is the most popular food in the middle east?",
        answers: {
            a: 'Hummus',
            b: 'Tahini',
            c: 'Falafel',
            d: 'Pia Bread'
        },
        correctAnswer: 'Pia Bread'
    },
    {
        question: "3",
        answers: {
            a: 'Hummus',
            b: 'Tahini',
            c: 'Falafel',
            d: 'Pia Bread'
        },
        correctAnswer: 'Tahini'
    },
    {
        question: "4",
        answers: {
            a: 'Hummus',
            b: 'Tahini',
            c: 'Falafel',
            d: 'Pia Bread'
        },
        correctAnswer: 'Hummus'
    }
    

];
//*********************************************************************//
//  Display Qustion

var correct = 0;
var incorrect = 0;
function displayQuestion(i) {
    var timeOut = setTimeout(displayQuestion.bind(null, i + 1), 10000);
    $("#qustions").text(myQuestions[i].question);
    $("#answA").text(myQuestions[i].answers.a);
    $("#answA").val(myQuestions[i].answers.a);
    $("#answB").text(myQuestions[i].answers.b);
    $("#answB").val(myQuestions[i].answers.b);
    $("#answC").text(myQuestions[i].answers.c);
    $("#answC").val(myQuestions[i].answers.c);
    $("#answD").text(myQuestions[i].answers.d);
    $("#answD").val(myQuestions[i].answers.d);
    $("#answA").off('click').on('click', function() {
        if($(this).val() === myQuestions[i].correctAnswer) {
            ++correct;
        }
        else {
            ++incorrect;
        }
        clearTimeout(timeOut);
        displayQuestion(++i);
    });
    $("#answB").off('click').on('click', function() {
        if($(this).val() === myQuestions[i].correctAnswer) {
            ++correct;
        }
        else {
            ++incorrect;
        }
        clearTimeout(timeOut);
        displayQuestion(++i);
    });
    $("#answC").off('click').on('click', function() {
        if($(this).val() === myQuestions[i].correctAnswer) {
            ++correct;
        }
        else {
            ++incorrect;
        }
        clearTimeout(timeOut);
        displayQuestion(++i);
    });
    $("#answD").off('click').on('click', function() {
        if($(this).val() === myQuestions[i].correctAnswer) {
            ++correct;
        }
        else {
            ++incorrect;
        }
        clearTimeout(timeOut);
        displayQuestion(++i);
    });
}

var i = 0;
displayQuestion(i);

//******************************************************************//
// Timer
//var timeLeft = 5;
//var timerId = setInterval(countdown, 1000);


        //doSomething**************************//
   // } 
//}
//}
//*****************************************************************//
