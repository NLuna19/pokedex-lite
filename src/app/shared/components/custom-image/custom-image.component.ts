import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent implements OnInit {
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}


