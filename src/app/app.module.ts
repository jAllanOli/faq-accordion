import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AccordionItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
