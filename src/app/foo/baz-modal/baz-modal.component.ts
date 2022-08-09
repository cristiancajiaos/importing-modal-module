import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-baz-modal',
  templateUrl: './baz-modal.component.html',
  styleUrls: ['./baz-modal.component.scss']
})
export class BazModalComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  public close(): void {
    this.activeModal.close('');
  }

  public dismiss(): void {
    this.activeModal.dismiss('');
  }

}
