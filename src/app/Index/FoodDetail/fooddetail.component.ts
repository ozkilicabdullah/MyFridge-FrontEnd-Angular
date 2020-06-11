import { Component, OnInit } from '@angular/core';
import { RecipesRepository } from '../../Model/recipes.repository';
import { Recipe } from '../../Model/Recipe.model';

@Component({
    selector:'fooddetail',
    templateUrl:'./fooddetail.component.html',
    styleUrls:['./fooddetail.component.scss']
})
export class FoodDetailComponent implements OnInit{
    constructor(private recipeService:RecipesRepository){}

ngOnInit(){

}
 i :number =1;
get recipe():Recipe{
    return this.recipeService.getRecipe(this.i);
}
}