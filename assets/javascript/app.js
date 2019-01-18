



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
//****************************************/
//reset
// function reset() {
//     $('#onGoing').css('display', 'none');
//     setTimeout(function () {
//         displayQuestion(++i);
//     }, 3000);
//     clearTimeout(timeOut);
// }
//*********************************************************************//
//  Display Qustion

var correct = 0;
var incorrect = 0;
var unanswered = 0;

function displayQuestion(i) {
    $('#onGoing').css('display', 'block');
    if (i >= myQuestions.length) {
        $("#onGoing").css("display", "none");
        $("#end").css("display", "block");
        $("#correct").text("correct = " + correct);
        $("#incorrect").text("incorrect = " + incorrect);
        $("#unanswered").text("unanswered = " + unanswered);

    }
    else {
        //timer to display
        var remainingTime = 10;
        $("#timer").text(remainingTime);
        var counter = setInterval(function () {
            if (remainingTime >= 0) {
                remainingTime--;
                $("#timer").text(remainingTime);
            }
            else {
                clearInterval(counter);
            }
        }, 1000);

        // Timer to change pages
        var timeOut = setTimeout(function () {
            ++unanswered;
            //reset();
            $('#onGoing').css('display', 'none');
            setTimeout(function () {
                displayQuestion(++i);
            }, 3000);
            clearTimeout(timeOut);
            displayQuestion.bind(null, i + 1)();
        }, 10000);

        // display questions
        $("#qustions").text(myQuestions[i].question);
        $("#answA").text(myQuestions[i].answers.a);
        $("#answA").val(myQuestions[i].answers.a);
        $("#answB").text(myQuestions[i].answers.b);
        $("#answB").val(myQuestions[i].answers.b);
        $("#answC").text(myQuestions[i].answers.c);
        $("#answC").val(myQuestions[i].answers.c);
        $("#answD").text(myQuestions[i].answers.d);
        $("#answD").val(myQuestions[i].answers.d);

        // handle events
        $("#answA").off('click').on('click', function () {
            if ($(this).val() === myQuestions[i].correctAnswer) {
                ++correct;
                // reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            else {
                ++incorrect;
                //reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            clearInterval(counter);

        });
        $("#answB").off('click').on('click', function () {
            if ($(this).val() === myQuestions[i].correctAnswer) {
                ++correct;
                //reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            else {
                ++incorrect;
                //reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            clearInterval(counter);
            //clearTimeout(timeOut);
            //displayQuestion(++i);
        });
        $("#answC").off('click').on('click', function () {
            if ($(this).val() === myQuestions[i].correctAnswer) {
                ++correct;
                // reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            else {
                ++incorrect;
                // reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            clearInterval(counter);
            // clearTimeout(timeOut);
            // displayQuestion(++i);
        });
        $("#answD").off('click').on('click', function () {
            if ($(this).val() === myQuestions[i].correctAnswer) {
                ++correct;
                //  reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            else {
                ++incorrect;
                //   reset();
                $('#onGoing').css('display', 'none');
                setTimeout(function () {
                    displayQuestion(++i);
                }, 3000);
                clearTimeout(timeOut);
            }
            clearInterval(counter);
            // clearTimeout(timeOut);
            // displayQuestion(++i);
        });
    }
}
var i = 0;
displayQuestion(i);

