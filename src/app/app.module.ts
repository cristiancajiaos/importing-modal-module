import { BazModalComponent } from './foo/baz-modal/baz-modal.component';
import { FooModule } from './foo/foo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BazModalComponent
  ]
})
export class AppModule { }
