// Main game loop
let playAgain = true;

while (playAgain) {
  let playerScore = 0;
  let computerScore = 0;
  const winningScore = 3;

  alert("La partie se fait en 3 manches gagnantes");

  // The loop
  while (playerScore < winningScore && computerScore < winningScore) {
    // Ask for a valid choice
    let choice = prompt("Enter votre choix: pierre, papier ou ciseaux");

    while (choice !== "pierre" && choice !== "papier" && choice !== "ciseaux") {
      choice = prompt(
        "Please type 'pierre' or 'papier' or 'ciseaux':"
      ).toLowerCase();
    }

    // Generate the computer choice
    const computer = ["pierre", "papier", "ciseaux"];
    const indexAleatoire = Math.floor(Math.random() * computer.length);
    const computerAleatoire = computer[indexAleatoire];
    alert(" computer choice : " + computerAleatoire);

    // choice compare
    if (choice === "pierre" && computerAleatoire === "papier") {
      alert("1 point for the computer");
      computerScore++;
      // Avec "computerScore++" j'implémente la victoire de computerScore de 1
    } else if (choice === "pierre" && computerAleatoire === "ciseaux") {
      alert("1 point for you");
      playerScore++;
    } else if (choice === "papier" && computerAleatoire === "ciseaux") {
      alert("1 point for the computer");
      computerScore++;
    } else if (choice === "papier" && computerAleatoire === "pierre") {
      alert("1 point for you");
      playerScore++;
    } else if (choice === "ciseaux" && computerAleatoire === "pierre") {
      alert("1 point for the computer");
      computerScore++;
    } else if (choice === "papier" && computerAleatoire === "papier") {
      alert("1 point for you");
      playerScore++;
    } else if (choice === computerAleatoire) {
      alert("equality");
    }
  }

  // Final result
  if (playerScore === winningScore) {
    alert("Congratulations, you are the winner !!");
  } else {
    alert("Sorry loser !!");
  }

  // Ask to play again
  let again = prompt("Do you want to play again? (y/n)").toLowerCase();
  while (again !== "y" && again !== "n") {
    again = prompt("Please type 'y' or 'n':").toLowerCase();
  }

  playAgain = again === "y";

  // choice compare
  if (again === "n") {
    alert("Thanks for playing!");
  } else {
    alert("lets go!");
  }
}
