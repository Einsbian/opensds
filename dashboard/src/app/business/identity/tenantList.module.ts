import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantListComponent } from './tenantList.component';
import { ButtonModule, DataTableModule, DropMenuModule } from '../../components/common/api';
import { TenantDetailModule } from './tenantDetail/tenantDetail.module';

@NgModule({
  declarations: [ TenantListComponent ],
  imports: [ CommonModule, ButtonModule, DataTableModule, DropMenuModule, TenantDetailModule ],
  exports: [ TenantListComponent ],
  providers: []
})
export class TenantListModule { }