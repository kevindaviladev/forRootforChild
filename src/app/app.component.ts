import { Component } from '@angular/core';
import { ErrorService } from './error/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'forRootforChild';

  constructor(private errorService: ErrorService) {
    errorService.showError('Timeout :c');
  }
}
