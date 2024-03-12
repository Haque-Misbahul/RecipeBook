import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://preview.redd.it/3splx63nx8c01.png?width=1080&crop=smart&auto=webp&s=bbb5413d0fefc1697b1cd1e142301911dca24262'),
  
    new Recipe('A Test Recipe', 'This is simply a test', 'https://preview.redd.it/3splx63nx8c01.png?width=1080&crop=smart&auto=webp&s=bbb5413d0fefc1697b1cd1e142301911dca24262')
  ];

  constructor(){

  }
  ngOnInit() {
    
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
