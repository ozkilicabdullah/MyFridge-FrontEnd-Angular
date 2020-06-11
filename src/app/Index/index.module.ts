import { NgModule } from "@angular/core";
import { IndexComponent } from './index.component';
import { FoodDetailComponent } from './FoodDetail/fooddetail.component';
import { SignInComponent } from './Signin/signin.component';
import { SignUpComponent } from './Signup/signup.component';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index.routing.module';
import { ModelModule } from '../Model/model.module';


@NgModule({
    declarations:[
        IndexComponent,
        FoodDetailComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports:[
        CommonModule,
        IndexRoutingModule
    ],
    exports:[IndexComponent,FoodDetailComponent,SignInComponent,SignUpComponent]

})
export class IndexModule{}