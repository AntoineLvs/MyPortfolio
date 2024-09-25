import React, { useState } from 'react';

const RecipeSection = () => {
    const [shoppingList, setShoppingList] = useState({});

    const recipes = [
        {
            name: "Penne & boeuf haché aux saveurs mexicaines",
            ingredients: [
                { name: "Viande hachée au boeuf", quantity: 1 },
                { name: "Epices mexicaine", quantity: 1 },
                { name: "Oignon", quantity: 1.5 },
                { name: "Gousse d'ail", quantity: 1 },
                { name: "Tomates semi-séchées", quantity: 1 },
                { name: "Penne", quantity: 270 },
                { name: "Chair de tomates", quantity: 1 },
                { name: "Cheddar râpé", quantity: 1 },
                { name: "Crème epaisse", quantity: 1 },
                { name: "Huile d'olive", quantity: 1.5 },
                { name: "Poivre & sel", quantity: 1 },

            ],
        },
        {
            name: "One Pot Pasta saucisse & champis à la crème",
            ingredients: [
                { name: "Chair à saucisse", quantity: 1 },
                { name: "Champignons de paris", quantity: 400 },
                { name: "gousse d'ail", quantity: 1 },
                { name: "Oignon", quantity: 1 },
                { name: "Herbe de provence", quantity: 1 },
                { name: "Crème liquide", quantity: 1 },
                { name: "Conchiglie", quantity: 1 },
                { name: "Persil", quantity: 1 },
                { name: "Fromage rapé", quantity: 1 },

            ],
        },
    ];

    const addToShoppingList = (recipe) => {
        const newList = { ...shoppingList };

        recipe.ingredients.forEach((ingredient) => {
            if (newList[ingredient.name]) {
                newList[ingredient.name] += ingredient.quantity;
            } else {
                newList[ingredient.name] = ingredient.quantity;
            }
        });

        setShoppingList(newList);
    };

    const removeFromShoppingList = (recipe) => {
        const newList = { ...shoppingList };

        recipe.ingredients.forEach((ingredient) => {
            if (newList[ingredient.name]) {
                newList[ingredient.name] -= ingredient.quantity;
                // Supprime l'ingrédient s'il atteint 0
                if (newList[ingredient.name] <= 0) {
                    delete newList[ingredient.name];
                }
            }
        });

        setShoppingList(newList);
    };

    return (
        <div>
            {/* Ta section de recettes ici */}
            <section className="relative w-full bg-cover bg-center py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-open-sans">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-black bg-opacity-50 rounded-lg p-8 text-xl pb-10">
                            <h3 className="text-3xl mb-4">{recipe.name}</h3>
                            <button
                                type="button"
                                className="inline-block mt-6 px-6 py-2 border-2 border-white text-white bg-transparent rounded-2xl transition ease-linear hover:bg-white hover:text-black text-sm"
                                onClick={() => addToShoppingList(recipe)}
                            >
                                Add !
                            </button>
                            <button
                                type="button"
                                className="inline-block mt-2 px-6 py-2 border-2 border-red-500 text-red-500 bg-transparent rounded-2xl transition ease-linear hover:bg-red-500 hover:text-white text-sm"
                                onClick={() => removeFromShoppingList(recipe)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Liste de course */}
            <section className="relative w-full bg-gray-100 py-24">
                <h2 className="text-4xl mb-8 text-center font-oswald">Liste de Course</h2>
                <div className="w-8/12 mx-auto">
                    <ul>
                        {Object.entries(shoppingList).map(([ingredient, quantity]) => (
                            <li key={ingredient} className="text-xl flex justify-between items-center">
                                {quantity} {ingredient}
                                <button
                                    className="ml-4 text-red-500 hover:text-red-700"
                                    onClick={() => removeFromShoppingList({ ingredients: [{ name: ingredient, quantity }] })}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default RecipeSection;
