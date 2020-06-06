import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './components/forms/forms.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CodeForAmericaComponent } from './components/buttons/code-for-america/code-for-america.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, FormsComponent, CodeForAmericaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}