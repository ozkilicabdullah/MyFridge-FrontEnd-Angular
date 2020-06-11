import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { MyFridgeComponent } from '../MyFridge/myfridge.component';
import { FoodDetailComponent } from './FoodDetail/fooddetail.component';
import { SignUpComponent } from './Signup/signup.component';
import { SignInComponent } from './Signin/signin.component';

const routes:Routes =[
    {path:'index',component:IndexComponent},
    {path:'myfridge',component:MyFridgeComponent},
    {path:'fooddetail',component:FoodDetailComponent},
    {path:'signup', component:SignUpComponent},
    {path:'signin',component:SignInComponent},
    {path:'**',redirectTo:'index'}
];
@NgModule({
    imports:[],
    exports:[]
})
export class IndexRoutingModule{}