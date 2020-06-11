import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFridgeModule } from './MyFridge/myfridge.module';
import { IndexComponent } from './Index/index.component';
import {RouterModule} from '@angular/router';
import { MyFridgeComponent } from './MyFridge/myfridge.component';
import { FoodDetailComponent } from './Index/FoodDetail/fooddetail.component';
import { SignInComponent } from './Index/Signin/signin.component';
import { SignUpComponent } from './Index/Signup/signup.component';
import { RestService } from './Model/rest.service';
import { RecipesRepository } from './Model/recipes.repository';
import { ModelModule } from './Model/model.module';
import { FormsModule } from '@angular/forms';
import { IndexModule } from './Index/index.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MyFridgeModule,
    IndexModule,
    ModelModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'**', redirectTo:"/index"},
      {path:'index',loadChildren:'./index/index.module#IndexModule'},
      {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},

    ])
  ],
  providers: [RecipesRepository,RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
