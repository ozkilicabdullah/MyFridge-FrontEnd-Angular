import { Injectable, OnInit } from "@angular/core";
import { Fridge } from './fridge.model';
import { RestService } from './rest.service';

@Injectable()
export class FridgeRepository implements OnInit {
    private fridges: Fridge[] = [];
    constructor(private restService: RestService) {
        this.restService
            .getFridges()
            .subscribe(data => this.fridges = data);
            
     }

    ngOnInit() {
       
    }
    getFridges():Fridge[]{
        return this.fridges;
    }
    getFridge(id:number):Fridge{
        return this.fridges.find(i=> i.id === id);
    }
   
}