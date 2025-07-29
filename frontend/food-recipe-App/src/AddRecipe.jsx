
// src/AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        Title: '',
        Ingredients: '',
        Instructions: '',
        Time: '',
        coverImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5052/api/recipes', recipe);
            alert('Recipe added successfully!');
            setRecipe({
                Title: '',
                Ingredients: '',
                Instructions: '',
                Time: '',
                coverImage: ''
            });
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert('Failed to add recipe.');
        }
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Title" placeholder="Title" value={recipe.Title} onChange={handleChange} required />
                <input type="text" name="Ingredients" placeholder="Ingredients" value={recipe.Ingredients} onChange={handleChange} required />
                <input type="text" name="Instructions" placeholder="Instructions" value={recipe.Instructions} onChange={handleChange} required />
                <input type="text" name="Time" placeholder="Time" value={recipe.Time} onChange={handleChange} required />
                <input type="text" name="coverImage" placeholder="Cover Image URL" value={recipe.coverImage} onChange={handleChange} required />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
