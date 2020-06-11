import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { RestService } from './rest.service';

@Injectable()
export class UsersRepository implements OnInit {
    private users: User[] = [];

    constructor(private restService: RestService) { }

    ngOnInit() {
        this.restService
            .getUsers()
            .subscribe(users => this.users = users);
    }

    getUser(id: number): User {
        return this.users.find(i => i.id === id);
    }
    
}