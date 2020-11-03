import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path:'about', component:AboutComponent
  },
  {
    path:'product', component:NavigationComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'weather', component:WeatherComponent
  }
  // {path:"**", component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
