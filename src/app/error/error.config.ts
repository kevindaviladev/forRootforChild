export interface ErrorUiConfig {
  handler: ErrorUiHandlerType;
}

type ErrorUiHandlerType = new (...args: any) => ErrorUiHandler;

export abstract class ErrorUiHandler {
  abstract showError(error: any): void;
}
