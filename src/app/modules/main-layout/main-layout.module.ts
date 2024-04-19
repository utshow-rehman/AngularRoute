import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconsProviderModule } from 'src/app/icons-provider.module';
@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent
    
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    IconsProviderModule

  ]
})
export class MainLayoutModule { }
