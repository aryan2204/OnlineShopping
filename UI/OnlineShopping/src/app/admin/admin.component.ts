import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { SharedService } from '../services/shared.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminEmail;
  public service;
  constructor(private routes:Router,private sharedService:SharedService) { 
    this.service=sharedService;
  }

  ngOnInit(): void {
    this.adminEmail=this.service.getadminEmail();
    if(this.adminEmail==null)
    {
      this.routes.navigate(["/adminlogin"]);
    }
  }

}
