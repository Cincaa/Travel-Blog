window.onload=function() {
  function buildQuiz() {
    for(var index in myQuestions){
      var number = parseInt(index) + 1;
      var qwrap = document.createElement("div"); 
      qwrap.classList.add("question");

      var question = document.createElement("h1");
      question.innerHTML = number + ") " + myQuestions[index]['question'];
      qwrap.appendChild(question);

      for (var oindex in myQuestions[index]['answers']) {

        let label = document.createElement("label");
        qwrap.appendChild(label);

        //  <option> tag
        var option = document.createElement("input");
        option.type = "radio";
        option.value = oindex;
        option.required = true;
        option.classList.add("oquiz");
        //option.className = "oquiz";
        
        option.name.concat("quiz-", number);
        label.appendChild(option);

        // Add the option text
        var otext = document.createTextNode(myQuestions[index]['answers'][oindex]);
        label.appendChild(otext);
        var br=document.createElement("br");
        label.appendChild(br);
      }

      // Finally, add this question to the main HTML quiz wrapper
      quiz.appendChild(qwrap);
    }
  }

  function showResults(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    clearInterval(interval);
    var selected = document.querySelectorAll(".oquiz:checked");

    var qst=localStorage.getItem("myQuestions");
    var myQuestionJSON=JSON.parse(qst);

    // Get the score
    var score = 0;
    for (var index in myQuestionJSON) {
      if (selected[index].value == myQuestionJSON[index]['correctAnswer']) {
        score++;
      }
    }

    // We can calculate the score now
    var total = selected.length;
    var percent = score / total ;

    // Update and show the score
    // Instead of creating elements, we can also directly alter the inner HTML
    var html = "<h1>";
    if (percent>=0.7) {
      html += "WELL DONE!";
    } 
    else if (percent>=0.4) {
          html += "NOT BAD!";
          } 
          else {
            html += "TRY HARDER!";
          }
    html += "</h1>";
    html += "<div>You scored " + score + " out of " + total + ".</div>";
    //string method
    html.replace("</div>", "</div> <br>");
    document.getElementById("quiz").innerHTML = html;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What is the capital of Philippines?",
      answers: {
        a: "Jakarta",
        b: "Hanoi",
        c: "Manila"
      },
      correctAnswer: "c"
    },
    {
      question: "How many stars are there on the flag of China?",
      answers: {
        a: "5",
        b: "2",
        c: "7"
      },
      correctAnswer: "a"
    }
    
  ];
// array method
  myQuestions.push({
      question: "Which country has the world's highest waterfall?",
      answers: {
        a: "America",
        b: "Japan",
        c: "Venezuela",
        d: "Uganda"
      },
      correctAnswer: "c"
    });

    myJSON=JSON.stringify(myQuestions);
    localStorage.setItem("myQuestions",myJSON);
  // display quiz right away
  buildQuiz();

  var interval = setInterval(alerFunct, 30000,"continue playing?");
  function alerFunct(param1){
    alert(param1);
  }
/*
  const exemplu=['Nu', 'am', 'nicio', 'idee', 'cum', 'sa', 'folosesc', 'altfel', 'let', 'si', 'for of'];
  for(let i=0;i<exemplu.length;i++){
    let p = document.createElement("p");
    p.innerHTML = exemplu[i];
    document.body.appendChild(p);
    setTimeout(function(){alert(i);})
  }
  var x=10;
{
  let x=2;
}
 let p = document.createElement("p");
    p.innerHTML = x;
    document.body.appendChild(p); 

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

document.getElementById("myP").addEventListener("click", function() {
  alert("Am schimbat P");
  //this.style.transition = "1s";
  sleep(500).then(() => {
  this.style.backgroundColor = "red";
  
})
  
}, false);

document.getElementById("myDiv").addEventListener("click", function() {
  alert("Am schimbat Div");
  //this.style.transition = "1s";
  sleep(500).then(() => {
  this.style.backgroundColor = "blue";
  
})
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("Am schimbat P");
  //this.style.transition = "1s";
  sleep(500).then(() => {
  this.style.backgroundColor = "green";
  
})
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("Am schimbat Div");
  //this.style.transition = "1s";
  sleep(500).then(() => {
  this.style.backgroundColor = "yellow";
  
})
}, true);
document.querySelector("#id-checkbox").addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! Nu exista!<br>";
         event.preventDefault();
}, false);
*/
  submitButton.addEventListener("click", showResults, true);

  //date method

  var d = new Date();
  document.getElementById("data").innerHTML = d.getFullYear();


};