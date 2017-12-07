			
			var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
			var wins = 0;
			var losses = 0;
			var guesses = 10;
			var computerGuess = letters[Math.floor(Math.random() * letters.length)];
			var userGuessSoFar = [];



			document.onkeyup = function(event){

				var userGuess = event.key;

				//console.log("User Guess:" + userGuess);
				//console.log("Computer Guess:" +computerGuess);
				
				

				document.getElementById("guess-so-far").textContent = userGuess;

				if (userGuess == computerGuess){
					wins++;
					updateWins();
				}
				else{
					guesses--;
					userGuessSoFar.push(userGuess);
					document.getElementById("guess-so-far").textContent = userGuessSoFar;

					if(guesses==0){
						losses++
						startOver()
					}

				}

				console.log(guesses)


				updateGuesses();
				updateLosses();	

			}







			function updateWins(){
				document.getElementById("wins").textContent = "Wins: " + wins;

				startOver();
				}

			function updateGuesses(){
				document.getElementById("guessesleft").textContent = "Guesses Left: " + guesses;
				}

			function updateLosses(){
				document.getElementById("losses").textContent = "Losses: " + losses;
				}

			function startOver(){
				computerGuess = letters[Math.floor(Math.random() * letters.length)];
				document.getElementById("guess-so-far").textContent = "";
				guesses=10
				userGuessSoFar = [];
				}