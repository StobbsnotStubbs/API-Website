//elements on the DOM

const generateBtn = document.querySelector(".generate");
const header = document.querySelector(".cocktailTitle");
const ingredientsList = document.querySelector(".ingredients");
const instructions = document.querySelector(".instructions");

let randomCocktail = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

generateBtn.addEventListener("click", generateCocktail);

async function generateCocktail(e) {
  await fetch(randomCocktail)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => (cocktail = data.drinks[0]))
    // .then(() => console.log(cocktail))

    .catch((error) => console.error("FETCH ERROR:", error));

  const cocktailName = cocktail.strDrink;
  header.textContent = cocktailName;
  ingredientsList.replaceChildren("");
  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredientsAll, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredientsAll[ingredient] = cocktail[ingredient];
      }
      return ingredientsAll;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    ingredientsList.appendChild(listItem);
  }
  // measures
  // const getMeasures = Object.keys(cocktail)
  //   .filter(function (ingredient) {
  //     return ingredient.indexOf("strMeasure") == 0;
  //   })
  //   .reduce(function (ingredientsAll, ingredient) {
  //     if (cocktail[ingredient] != null) {
  //       ingredientsAll[ingredient] = cocktail[ingredient];
  //     }
  //     return ingredientsAll;
  //   }, {});

  // for (let key in getMeasures) {
  //   let value = getMeasures[key];
  //   listItem = document.createElement("li");
  //   listItem.innerHTML = value;
  //   ingredientsList.appendChild(listItem);
  // }git
}
