let randomCocktail = "http://www.thecocktaildb.com/api/json/v1/1/random.php";

fetch(randomCocktail)
  .then((response) => response.json())
  .then((data) => (responseData = data))
  .then(() => {
    console.log(responseData);
    document.querySelector("p").innerHTML = responseData.strDrink;
  });
