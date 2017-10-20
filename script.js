/*console.log(getProblem());

const problem = document.getElementById('problem');

problem.innerHTML = getProblem();

function getProblem() {
    let ans = getNumber() + "*" + getNumber();
    return ans;
}

function getNumber(){
    return Math.floor(Math.random()*9)+1;
}*/


const problem = document.getElementById('Problem');
const answer = document.getElementById('Answerbox')
const feedback = document.getElementById('Feedback');
const level_text = document.getElementById('Level');
const score_text = document.getElementById('Score')
var score = 0;
var correct = 0;
var level = 1;
var first_Number = 0;
var second_Number = 0;
var third_Number = 0;
var forth_Number = 0;

score_text.innerHTML = "Jouw score is:" + "<br>" + score;
level_text.innerHTML = "Je bent op level:" + "<br>" + level;

var prob = getProblem();
problem.innerHTML = "Problem:" + "<br>" + prob;



function getProblem(){
    let ans = null;
    switch (level) {

        case 1:
            ans = getNumber() + "*" + getNumber();
            break;
        case 2:
            first_Number = getNumber();
            second_Number = getNumber() * first_Number;
            ans = first_Number + "*" + "X" + "= " + second_Number + ". X = ?";
            break;
        case 3:
            ans = getNumber() + "+" + getNumber() + "*" + getNumber();
            break;
        case 4:
            first_Number = getNumber();
            second_Number = getNumber();
            third_Number = getNumber();
            forth_Number = second_Number * third_Number + first_Number;
            ans = first_Number + "+" + second_Number + "*" + "X" + "= " + forth_Number + ". Wat is X? ";
            break;
        default:

    }

    //let ans = getNumber() + "*" + getNumber();
    return ans;
}

function getNumber() {
    return Math.floor(Math.random()*9)+1;
}

addEventListener('keydown',(e)=>{
    if (e.key == "Enter"){
        //console.log(answer.value);



        if (level == 2 || level >= 4){
            if (level == 2) {

                if (answer.value == second_Number / first_Number) {
                    feedback.innerHTML = "Je hebt het goed!";
                    score+= 10;
                    correct++;
                }
                else {
                    feedback.innerHTML = "Je hebt het foute antwoord ingevoerd probeer het nog een keer.";
                    score-= 5;
                }

            } else {

                if (answer.value == third_Number){
                    feedback.innerHTML = "Je hebt het goed!";
                    score+= 10;
                    correct++;
                }
                else {
                    feedback.innerHTML = "Je hebt het foute antwoord ingevoerd probeer het nog een keer.";
                    score-= 5;
                }

            }






        }  else {

            if(answer.value == eval(prob)){
                feedback.innerHTML = "Je hebt het goed!";
                score+= 10;
                correct++;
            }
            else {
                feedback.innerHTML = "Je hebt het foute antwoord ingevoerd probeer het nog een keer.";
                score-= 5;
            }

        }

        if (correct >= 5 && level != 4){
            level++;
            correct = 0;
        }

        prob = getProblem();
        answer.value = null;
        problem.innerHTML = "Problem:" + "<br>" + prob;
        score_text.innerHTML = "Jouw score is:" + "<br>" + score;
        console.log(correct);
        level_text.innerHTML = "Je bent op Level:" + "<br>" + level;

    }



})

