import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Services --> ng g service services/<service-name>
 */
import { AuthenticationService } from './services/authentication.service';
import { BatchService } from './services/batch.service';
import { UserService } from './services/user.service';

/**
 * Angular Components --> ng g component views/<component-name>
 */
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TransformIdPipe } from './pipes/transform-id.pipe';

/**
 * define routes here
 * path: '**' --> stands for when a route is not found (404 erorr handling)
 */
const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

/**
 * needed Modules needs to go into the imports array
 * all Services goes into the providers array
 */
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    TransformIdPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // <-- debugging purposes only
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    BatchService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
