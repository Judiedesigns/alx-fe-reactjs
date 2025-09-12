import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Replace all recipes
  setRecipes: (recipes) => set({ recipes }),

  // ✅ Update recipe by id
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // ✅ Delete recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}))

export default useRecipeStore;
