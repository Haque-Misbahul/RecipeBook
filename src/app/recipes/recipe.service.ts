import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe [] = [
        new Recipe(
        'Medium-Rare Steak', 
        'A medium-rare steak has a warm, red center that oozes with juicy, beef-forward flavor.', 
        'https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Tomato', 1)
        ]),
      
        new Recipe(
        'Traditonal Biriyani', 
        'Biriyani is the most loved dish by all. Blended with the fragrance of spices and aromatic rice.', 
        'https://images.slurrp.com/prodarticles/b3rhx2ap4vf.webp',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Masala', 1)
        ])
      ];
      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}