import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { SolicitacoesService } from './solicitacoes.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PagamentoModule } from "./pagamento/pagamento.module";
import {PagamentosService} from "./pagamentos.service";
import {AuthService} from "./auth.service";
import {UploadFileService} from "./upload-file.service";
import {UsuariosModule} from "./usuarios/usuarios.module";
import {TokenInterceptor} from "./token.interceptor";
import {TipoPedidoService} from "./tipoPedido.service";

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
    SolicitacoesModule,
    PagamentoModule,
    UsuariosModule
  ],
  providers: [
    SolicitacoesService,
    PagamentosService,
    AuthService,
    UploadFileService,
    TipoPedidoService,
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
