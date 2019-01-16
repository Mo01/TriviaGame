
var myQuestions = [
    {
        question: "Q: What is the Most Used Herbs Across the Globe?",
        answers: {
            a: 'Chile',
            b: 'Clove',
            c: 'Garlic',
            d: 'olive oil'
        },
        correctAnswer: 'a'
    },
    {
        question: "Q: what is the most popular food in the middle east?",
        answers: {
            a: 'Hummus',
            b: 'Tahini',
            c: 'Falafel',
            d: 'Pia Bread'
        },
        correctAnswer: 'd'
    }
    
];
//  Display Qustion
//function displayQuestion() {
    $("#qustions").text(this.myQuestions[0].question);
    $("#answA").text(this.myQuestions[0].answers.a);
    $("#answB").html(this.myQuestions[0].answers.b);
    $("#answC").text(this.myQuestions[0].answers.c);
    $("#answD").html(this.myQuestions[0].answers.d);
    
 // }

 // Timer
 