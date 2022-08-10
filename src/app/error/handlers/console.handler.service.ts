import { Injectable } from '@angular/core';
import { ErrorUiHandler } from '../error.config';

@Injectable()
export class ConsoleErrorHandlerService implements ErrorUiHandler {
  showError(error: any) {
    console.log(error);
  }
}
