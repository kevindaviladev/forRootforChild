import { Injectable } from '@angular/core';
import { ErrorUiHandler } from './error.config';

@Injectable()
export class ErrorService {
  constructor(private errorPresenter: ErrorUiHandler) {}

  showError(error: any) {
    this.errorPresenter.showError(error);
  }
}
