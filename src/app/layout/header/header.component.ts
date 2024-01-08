import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private _title: string;
  constructor() {
    this._title = 'Petinder'
  }
  get title(): string {
    return this._title;
  }
  ngOnInit(): void {
    
  }
}
