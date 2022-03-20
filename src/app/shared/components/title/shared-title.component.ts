import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-title',
  templateUrl: './shared-title.component.html',
  styleUrls: ['./shared-title.component.scss']
})
export class SharedTitleComponent implements OnInit {
  
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
