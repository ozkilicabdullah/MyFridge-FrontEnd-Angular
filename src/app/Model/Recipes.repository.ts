import { Injectable, OnInit } from "@angular/core";
import { RestService } from './rest.service';
import { Recipe } from './Recipe.model';
@Injectable()
export class RecipesRepository implements OnInit {
     private recipes: Recipe[] = [];
    constructor(private restService: RestService) {
        this.restService
            .getRecipes()
            .subscribe(data => this.recipes = data);
    }

    ngOnInit() {

    }
    getRecipes(): Recipe[] {
        return this.recipes;
    }
    getRecipe(id: number): Recipe {
        return this.recipes.find(i => i.foodId == id);
    }
  
}
