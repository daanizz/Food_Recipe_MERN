// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5052/api/recipes');
                setRecipes(response.data.body);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            <div className="recipe-cards">
                {recipes.map(recipe => (
                    <div key={recipe._id} className="recipe-card">
                        <img src={recipe.coverImage} alt={recipe.Title} />
                        <h3>{recipe.Title}</h3>
                        <p>Time: {recipe.Time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
