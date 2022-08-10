import { Injectable } from '@angular/core';
import { ErrorUiHandler } from '../error.config';

@Injectable()
export class AlertErrorHandlerService implements ErrorUiHandler {
  showError(error: any) {
    alert(error);
  }
}
