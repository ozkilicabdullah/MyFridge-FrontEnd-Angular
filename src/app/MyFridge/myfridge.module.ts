import {NgModule} from '@angular/core';
import { ModelModule } from '../Model/model.module';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyFridgeComponent } from './myfridge.component';

@NgModule({
    imports:[
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    declarations:[MyFridgeComponent],// Componentler
    providers:[],//Servisler
    exports:[MyFridgeComponent]// Componentleri dışarıya açar
})
export class MyFridgeModule{
    
    
}