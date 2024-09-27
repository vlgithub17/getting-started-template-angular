import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { Skapi } from "skapi-js"
const skapi = new Skapi('new_service_id', 'new_owner_id');
export { skapi };