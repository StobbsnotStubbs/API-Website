const generateBtn = document.querySelector(".generate");

let randomCocktail = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

generateBtn.addEventListener("click", generateCocktail);

function generateCocktail(e) {
  fetch(randomCocktail)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => (cocktail = data.drinks[0]))
    .then(() => console.log(cocktail))

    .catch((error) => console.error("FETCH ERROR:", error));
  const cocktailName = cocktail.strDrink;

  header = document.querySelector(".recipe");
  ingredientsList = document.querySelector(".ingredients");
  instructions = document.querySelector(".instructions");

  header.innerHTML = `<h1>${cocktailName}</h1>`;
  ingredientsList.createElement;
}
