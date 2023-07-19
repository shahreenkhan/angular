import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.scss']
})
export class InterpolationBindingComponent implements OnInit {
  name = 'ram'
  city = 'gwalior'
  num1= 2
  num3=4

  constructor() { }

  ngOnInit(): void {
  }

}
