import { Component } from "@angular/core";
import { FridgeRepository } from '../Model/fridge.repository';
import { Fridge } from '../Model/fridge.model';
import { Ingredient } from '../Model/Ingredient.model';
import { IngredientRepository } from '../Model/ingredient.repository';

@Component({
    selector: 'myfridge',
    templateUrl: 'myfridge.component.html',
    styleUrls:['myfridge.component.scss']
})

export class MyFridgeComponent{
    constructor(private fridgeRepository:FridgeRepository,
        private ingredientRepository:IngredientRepository){

    }
    
    get  fridges():Fridge[]{
        return this.fridgeRepository.getFridges();
    }

    get ingredients():Ingredient[]{
        return this.ingredientRepository.getIngredients();
    }
}   