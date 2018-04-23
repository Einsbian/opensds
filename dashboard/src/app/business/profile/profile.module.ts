import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';

import { ProfileCardComponent } from './profileCard/profile-card.component';
import { ButtonModule,CardModule,ChartModule,MessageModule,OverlayPanelModule,DialogModule } from '../../components/common/api';
import { ProfileService } from './profile.service';
import { HttpService } from '../../shared/api';
let routers = [{
  path: '',
  component: ProfileComponent
},{
  path: '/:profileId',
  component: ProfileComponent
}]

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardComponent
  ],
  imports: [
    RouterModule.forChild(routers),
    ButtonModule,
    CommonModule,
    CardModule,
    ChartModule,
    MessageModule,
    OverlayPanelModule,
    DialogModule
  ],
  providers: [
    HttpService,
    ProfileService
  ]
})
export class ProfileModule { }