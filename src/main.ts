import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // <-- Importación necesaria
import { HttpClientModule } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), 
    provideClientHydration(),
    provideRouter(routes) // <-- Agregar esta línea
  ]
}).catch(err => console.error(err));
