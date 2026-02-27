/* Challenge 2: Complete the function generateProblem by ,
       1) Create a variable for the <span> with id of problem
       2) Generate two random numbers between 0 and 20
       3) Store the correct answer in the variable correct.  This will be used in checkProblem( )
       4) Using string interpolation, display an addition problem like "2 + 2 =" except using the random numbers generated. 
*/
let correct;
function generateProblem(){
       let p1 = Math.floor(Math.random()*(20-0+1)+0);
       let p2 = Math.floor(Math.random()*(20-0+1)+0);
       problem.innerHTML = `${p1} + ${p2} =`;
       correct = p1 + p2;
}

/* Challenge 3: Complete the function checkProblem by ,
       1) Create a variable for the users response
       2) Create a variable for the <div> with id of output
       3) Create a variable msg for the output
       4) Using an if / else statement check to see if the user response is correct. 
           a) if the reponse is correct, set msg to "Correct!" along with the correct image
           b) otherwise set msg to "Incorrect. The answer is " followed by the correct answer.  Also include incorrect image
       4) Display msg in the output
*/
function checkResponse(){
       let B = parseInt(document.getElementById("response").value);
       let op = document.getElementById("output");
       let ans = "";
       let img = "";
       if(correct==B){
              ans="Answer is correct";
              img="correct.webp";
       }else{
              ans="Answer is incorrect";
              img="incorrect.avif";
       }
       op.innerHTML = `${ans}<br><img src="${img}">`;
}


