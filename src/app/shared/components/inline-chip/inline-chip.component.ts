import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inline-chip',
  templateUrl: './inline-chip.component.html',
  styleUrls: ['./inline-chip.component.scss']
})
export class InlineChipComponent implements OnInit {
  @Input() items = [];

  constructor() { }

  ngOnInit(): void {
  }

}
