import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  {path: '', redirectTo: '/edit-reports', pathMatch: 'full'},
  {path: 'edit-reports', component: AppComponent},  
  {path: 'edit-reports/:id', component: AppComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }