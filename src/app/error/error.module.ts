import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from './error.service';
import { ErrorUiConfig, ErrorUiHandler } from './error.config';
import { ConsoleErrorHandlerService } from './handlers/console.handler.service';
import { AlertErrorHandlerService } from './handlers/alert.handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ErrorService],
})
export class ErrorModule {
  static forRoot(): ModuleWithProviders<ErrorModule> {
    return {
      ngModule: ErrorModule,
      providers: [
        { provide: ErrorUiHandler, useClass: AlertErrorHandlerService },
      ],
    };
  }

  static forChild(config: ErrorUiConfig): ModuleWithProviders<ErrorModule> {
    return {
      ngModule: ErrorModule,
      providers: [{ provide: ErrorUiHandler, useClass: config.handler }],
    };
  }
}
