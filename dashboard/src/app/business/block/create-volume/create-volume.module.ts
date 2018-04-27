import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreateVolumeComponent } from './create-volume.component';
import { ReplicationGroupComponent } from './replication-group/replication-group.component';

import { HttpService } from './../../../shared/api';
import { VolumeService } from './../volume.service';
import { ProfileService } from './../../profile/profile.service';
import { InputTextModule, CheckboxModule, ButtonModule, DropdownModule, DialogModule, Message, GrowlModule, SpinnerModule } from './../../../components/common/api';

let routers = [{
  path: '',
  component: CreateVolumeComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(routers),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    GrowlModule,
    SpinnerModule
  ],
  declarations: [
    CreateVolumeComponent,
    ReplicationGroupComponent
  ],
  providers: [
    HttpService,
    VolumeService,
    ProfileService
  ]
})
export class CreateVolumeModule { }