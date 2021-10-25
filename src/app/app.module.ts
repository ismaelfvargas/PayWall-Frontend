import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PagamentoModule } from "./pagamento/pagamento.module";
import {PagamentosService} from "./pagamentos.service";
import {AuthService} from "./auth.service";
import {UploadFileService} from "./upload-file.service";
import {UsuariosModule} from "./usuarios/usuarios.module";
import {TokenInterceptor} from "./token.interceptor";
import {TipoPedidoService} from "./tipoPedido.service";
import {TipoStatusService} from "./tipoStatus.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PagamentoModule,
    UsuariosModule
  ],
  providers: [
    PagamentosService,
    AuthService,
    UploadFileService,
    TipoPedidoService,
    TipoStatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
