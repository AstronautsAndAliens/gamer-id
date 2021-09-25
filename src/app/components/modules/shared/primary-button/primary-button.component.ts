import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() onClick: any = () => console.log('primary-button click')
  @Input() label: string = 'primary-button label'

  constructor() { }

  ngOnInit(): void {
  }

}
