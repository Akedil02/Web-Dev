import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {importProvidersFrom} from '@angular/core';

bootstrapApplication(AppComponent,{
  providers: [provideHttpClient(),importProvidersFrom(CommonModule)]
}).catch((err) => console.error(err));
