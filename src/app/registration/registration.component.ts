import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  
  firstName: string;
  lastName: string;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  onSubmit() {
    let user = {
      firstName: this.firstName,
      lastName: this.lastName
    }
    this.registerService.setUserProfile(user);
  }
}
