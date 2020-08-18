import { Component, OnInit } from '@angular/core';
import {HomeModel} from '../models/Home.model';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product:HomeModel[];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
  }
}