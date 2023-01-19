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
    .then((data) => (cocktail = data))
    .then(() => console.log(cocktail))

    .catch((error) => console.error("FETCH ERROR:", error));
  const name = cocktail.drinks[0].strDrink;
  document.querySelector(".recipe").innerHTML = `<h1>${name}</h1>`;
}

//making a change to try and push
