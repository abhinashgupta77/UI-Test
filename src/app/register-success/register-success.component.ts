import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.getUserProfile().subscribe(res => {
      this.firstName = res.firstName;
      this.lastName = res.lastName;
    })
  }
}
