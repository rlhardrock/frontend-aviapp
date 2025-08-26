import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { withInterceptors } from '@angular/common/http';
import { authInterceptorFn } from './app/shared/interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptorFn])),
    provideRouter(routes), provideAnimationsAsync(),
  ]
})
  .catch((err) => console.error(err));
