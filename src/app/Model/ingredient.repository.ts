import { Injectable, OnInit } from "@angular/core";
import { Ingredient } from './Ingredient.model';
import { RestService } from './rest.service';

@Injectable()
export class IngredientRepository implements OnInit {
    private ingredients: Ingredient[] = [];
    constructor(private restService: RestService) { }

    ngOnInit() {
        this.restService
            .getIngredients()
            .subscribe(ingredients => this.ingredients = ingredients)

    }
    getIngredients(): Ingredient[] {
        return this.ingredients;
    }
    getIngredient(id: number): Ingredient {
        return this.ingredients.find(i => i.id === id);
    }

}