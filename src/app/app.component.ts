import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  showOnSuccessRegistration:boolean = false;

  constructor(private registerService: RegisterService) {}

  ngOnInit() {
    this.registerService.getUserProfile().subscribe((res) => {
      if(res != undefined && res != null){
         this.showOnSuccessRegistration = true;
      }
    });
  }
}
