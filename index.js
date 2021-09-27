var readlineSync = require('readline-sync');


var UserName = readlineSync.question('what is your name')

console.log("welcome " + UserName + " make some gk question")
var score = 0
const Play = (question,answer) =>{
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log('right')
    score = score +1;
    console.log(`your score is ${score}`)
    console.log('--------------')
  }else{
     console.log('wrong')
     score = score - 1;
    console.log(`your score is ${score}`)
    console.log('--------------')
  }

  console.log(`your current score is ${score}`)
}


questions = [{
  question:"who is the current prime minister of the India?",
  answer :"narendra modi"
},
{
  question:"What is the capital of the India?",
  answer :"new delhi"
},{
  question:"what is the pink city of India?",
  answer :"arendra modi"
},{
  question:"In which day independence of the India celebrated?",
  answer :"15 august"
},{
  question:"In which day Republic of the India celebrated?",
  answer :"26 january"
},
]

for(var i=0;i<questions.length;i++){
  var ques = questions[i]
  Play(ques.question,ques.answer)
}