import { Component } from "@angular/core";




@Component({
  selector: 'app-counter',
  template:`
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset(10)">Reset Counter</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }
  reset(value: number): void{
    this.counter = value;
  }
  decreaseBy(value: number): void{
    this.counter -= value;
  }

}
