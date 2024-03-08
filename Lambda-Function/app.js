window.onload = function() {
    fetch('https://1my8oti7cj.execute-api.us-east-1.amazonaws.com/prod/recipies')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipeList');
            const recipes = JSON.parse(data.body);
            recipes.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.textContent = `${recipe.name}: ${recipe.instructions}`;
                recipeList.appendChild(recipeItem);
            });
        });
};
