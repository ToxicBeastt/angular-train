import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonitorModule } from '../monitor/monitor.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, SharedModule, MonitorModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }