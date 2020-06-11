import { Component, OnInit } from '@angular/core';
import { RestService } from '../../Model/rest.service';
import { User } from '../../Model/user.model';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

    constructor(
        private service: RestService
    ) { }

   
    ngOnInit() {
    }
    user:User;
    addUser(user) {
        let data: User = {
            id: 0,
            name: this.user.name,
            lastName: this.user.lastName,
            userName: this.user.userName,
            password: this.user.password,
            active: true
        }
        this.service.addUser(data).subscribe((u:User)=>(console.log(u)));
    }


}