import { DataDogsService } from './services/data-dogs.service';
import { DataCatsService } from './services/data-cats.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatsComponent } from './components/cats/cats.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cats', component:CatsComponent},
  {path: 'dogs', component:DogsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatsComponent,
    DogsComponent,
    NavComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataCatsService, DataDogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
