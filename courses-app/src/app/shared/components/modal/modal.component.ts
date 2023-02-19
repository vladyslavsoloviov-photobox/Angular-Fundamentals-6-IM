import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() okButtonText: string;
  @Input() cancelButtonText: string;

  @Output() result = new EventEmitter<boolean>();

  @ViewChild('backdrop') backdrop:ElementRef;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  doResult(res: boolean) {
    this.result.emit(res);
  }

  backdropClick(event: Event) {
    if (this.backdrop.nativeElement === event.target) {
      this.doResult(true);
    }
  }
}
