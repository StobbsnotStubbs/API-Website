const generateBtn = document.querySelector(".generate");

let randomCocktail = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

fetch(randomCocktail)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => (cocktail = data))
  .then(() => console.log(cocktail))

  .catch((error) => console.error("FETCH ERROR:", error));

generateBtn.addEventListener("click", generateCocktail);

function generateCocktail(e) {
  const name = cocktail.drinks[0].strDrink;
  document.querySelector(".recipe").innerHTML = `<h1>${name}</h1>`;
}
