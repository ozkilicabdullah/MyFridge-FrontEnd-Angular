import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Ingredient } from './Ingredient.model';
import { Fridge } from './fridge.model';
import { Food } from './Food.model';
import { FoodIngredient } from './FoodIngredient.model';
import { IngredientType } from './IngredientType.model';
import { Quantity } from './Quantity.model';
import { Recipe } from './Recipe.model';
import { Admin } from './Admin.model';

@Injectable()
export class RestService {

  baseUrl: string = "https://localhost:44352/";
  constructor(private http: HttpClient) { }

  //List of Admins
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseUrl}admins`)
  }

  //List of Foods
  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>(this.baseUrl + 'foods')
      .pipe(catchError(this.handleError));
  }
  // List of FoodIngredients
  getFoodIngredient(): Observable<FoodIngredient[]> {
    return this.http.get<FoodIngredient[]>(this.baseUrl + 'foodingredients')
      .pipe(catchError(this.handleError));
  }
  //List of Fridges
  getFridges(): Observable<Fridge[]> {
    return this.http.get<Fridge[]>(this.baseUrl + 'fridges')
      .pipe(catchError(this.handleError));

  }
  //List of Ingredients
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}ingredients`)
      .pipe(catchError(this.handleError));
  }
  //List of IngredientTypes
  getIngredientTypes(): Observable<IngredientType[]> {
    return this.http.get<IngredientType[]>(`${this.baseUrl}ingredienttypes`)
      .pipe(catchError(this.handleError));
  }
  //List of Quantities
  getQuantities(): Observable<Quantity[]> {
    return this.http.get<Quantity[]>(`${this.baseUrl}quantities`)
      .pipe(catchError(this.handleError));
  }
  //List Of Recipes
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}recipes`)
      .pipe(catchError(this.handleError));
  }

  //List of Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users')
      .pipe(catchError(this.handleError));
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users/Add`,user).pipe();
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage)
  }
}
