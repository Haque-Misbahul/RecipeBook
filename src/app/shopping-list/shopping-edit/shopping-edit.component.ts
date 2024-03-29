import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent  implements OnInit{
  @ViewChild ('nameInput') nameInputRef: ElementRef;
  @ViewChild ('amountInput') amountInputRef: ElementRef;
 
  onAddItem(){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slSerice.addIngredient(newIngredient);
  }

  constructor( private slSerice: ShoppingListService){

  }
  ngOnInit() {
    
  }
}
