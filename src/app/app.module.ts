import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostformComponent } from './postform/postform.component';
import { PosttempComponent } from './posttemp/posttemp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostformComponent,
    PosttempComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
