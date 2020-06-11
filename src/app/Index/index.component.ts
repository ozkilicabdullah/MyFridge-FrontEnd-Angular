import { Component, OnInit } from '@angular/core';
import { RecipesRepository } from '../Model/recipes.repository';
import { Recipe } from '../Model/Recipe.model';
import { RestService } from '../Model/rest.service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    public recipesPage = 6;
    public selectedPage = 1;
    constructor(private recipeService: RecipesRepository) {

    }
    ngOnInit() {

    }
    //Tarif listesine göre sayfa sayısı hesaplama
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.recipeService.
            getRecipes().length / this.recipesPage))
            .fill(0)
            .map((a, i) => i + 1)
    }
    changePage(p: number) {
        this.selectedPage = p;
    }
    get recipes(): Recipe[] {
        let index = (this.selectedPage - 1) * this.recipesPage;

        return this.recipeService
            .getRecipes()
            .slice(index, index + this.recipesPage);
    }
}