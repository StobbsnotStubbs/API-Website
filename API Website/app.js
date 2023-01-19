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

  //elements on the DOM
  header = document.querySelector(".recipe");
  ingredientsList = document.querySelector(".ingredients");
  instructions = document.querySelector(".instructions");

  const cocktailName = cocktail.strDrink;
  header.innerHTML = `<h1>${cocktailName}</h1>`;

  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    ingredientsList.appendChild(listItem);
  }
}
