import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { AboutComponent } from './pages/about/about.component';
import { AddItemModalComponent } from './components/add-item-modal/add-item-modal.component';

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
    NavbarComponent,
    UserPostsComponent,
    AboutComponent,
    AddItemModalComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [Title],
  bootstrap: [AppComponent],
  entryComponents: [GenericModalComponent, AddItemModalComponent]
})
export class AppModule { }
