import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from './rest.service';
import { UsersRepository } from './Users.repository';
import { FridgeRepository } from './fridge.repository';
import { IngredientRepository } from './ingredient.repository';
import { RecipesRepository } from './recipes.repository';
@NgModule({
    imports:[HttpClientModule],
    providers:[RestService,UsersRepository,FridgeRepository,IngredientRepository,RecipesRepository]
})
export class ModelModule{}