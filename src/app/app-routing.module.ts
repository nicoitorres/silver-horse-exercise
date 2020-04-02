import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: "Home Page"}
  },
  {
    path: 'user/:userId',
    component: UserComponent,
    data: {title: "Manage User"}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: "About"}
  },
  {
    path: '404',
    component: NotfoundComponent,
    data: {title: "Not Found"}
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules, scrollPositionRestoration: "enabled",
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
