import { BazModalComponent } from './../foo/baz-modal/baz-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  openModal(): void {
    this.modal.open(BazModalComponent, { size: 'lg' })
      .result
      .then((res) => {
        console.log(res);
      }, (rej) => {
        console.log(rej);
      });
  }

}
