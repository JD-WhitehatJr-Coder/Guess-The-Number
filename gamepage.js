var y = Math.floor(Math.random() * 10 + 1);

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}

function submit()
{
    
// random value generated

// counting the number of guesses

// made for correct Guess

  
// function for number guessed by user     

var x = document.getElementById("guessField").value;
if(x == y)
{
    var playername = localStorage.getItem('player_name');
    alert("Congatulations!! " + playername + " You Gussed it Right in "
            + x + " GUESS ");
    x = 1;
}

else if(x > y)
{
    alert("Opss Sorry!! Try a lot smaller number");

}
else
{
    x++;
    alert("opss Sorry!! Try a Greater Number")
}

}