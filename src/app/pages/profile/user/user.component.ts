import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email: string;
  firstName: string;
  lastName: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.email = user.userEmail;
    this.firstName = user.userFirstName;
    this.lastName = user.userLastName;
  }

}
