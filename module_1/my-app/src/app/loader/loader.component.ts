import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class AppLoader {
  @Input() public isLoading: boolean = false;
}
