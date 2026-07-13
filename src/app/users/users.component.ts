import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  implements OnInit{
  countries: any[] = [];

  constructor(private countryService: UserService) {  }

    ngOnInit() {
  this.countryService
      .getCountries()
      .then((result:any

      ) => {

        this.countries = result?.data?.countries;
        console.log('Countries:', this.countries); 

      });
  }

}
