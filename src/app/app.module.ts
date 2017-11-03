import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { OperationService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
