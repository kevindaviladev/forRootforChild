import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { AlertErrorHandlerService } from './error/handlers/alert.handler.service';
import { ConsoleErrorHandlerService } from './error/handlers/console.handler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorModule.forChild({ handler: AlertErrorHandlerService }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
