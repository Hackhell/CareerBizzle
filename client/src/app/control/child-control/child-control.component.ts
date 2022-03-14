import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child-card',
  templateUrl: './child-control.component.html',
  styleUrls: ['./child-control.component.css']
})
export class ChildControlComponent implements OnInit {
  @Input() imagePath: string = ''
  @Input() header: string = 'Header'
  @Input() description: string = 'Description'
  @Input() width: string = ''
  @Input() height: string = ''
  @Input() iconType: string = ''
  @Input() src: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
