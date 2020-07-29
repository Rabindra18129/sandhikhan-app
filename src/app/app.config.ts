import { InjectionToken } from '@angular/core';
import {environment} from '../environments/environment';

import {IApp_Con} from './app-config';
export {IApp_Con};

export const APP_Config=new InjectionToken<IApp_Con>('app.config');
export const Config:IApp_Con={
    API_URL:environment.api_url
}