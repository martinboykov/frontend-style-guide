import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './components/forms/forms.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CodeForAmericaComponent } from './components/buttons/code-for-america/code-for-america.component';
import { HomeComponent } from './home/home.component';
import { CodeGuideComponent } from './code-guide/code-guide.component';
import { BootstrapComponent } from './components/buttons/bootstrap/bootstrap.component';
import { ComponentComponent } from './components/component.component';
import {SidebarModule} from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    FormsComponent,
    CodeForAmericaComponent,
    HomeComponent,
    CodeGuideComponent,
    BootstrapComponent,
    ComponentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FieldsetModule,
    SidebarModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
