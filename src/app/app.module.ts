import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserBasicComponent } from './components/user-basic/user-basic.component';
import { MapComponent } from './components/map/map.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NotfoundComponent,
    UserBasicComponent,
    MapComponent,
    GenericModalComponent,
    DeleteUserModalComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GenericModalComponent]
})
export class AppModule { }
