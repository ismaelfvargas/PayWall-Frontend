import { Component, OnInit } from '@angular/core';
import {PagamentoBusca} from "./pagamentoBusca";
import {PagamentosService} from "../../pagamentos.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css']
})
export class PagamentoListaComponent implements OnInit {

  nomeFornecedor: string;
  nomeStatus: string;
  lista: PagamentoBusca[];
  usuarioLogado: string;
  permissaoUsuario: boolean;
  permissaoAssistente: boolean;
  botaoAprovadoAtivo: boolean = true;
  closeResult = '';
  idPedidoSelecionado: number;
  mensagemRepovacao: string;

  constructor(
      private service: PagamentosService,
      private authService: AuthService,
      private router: Router,
      private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoUsuario = false;
    this.permissaoAssistenteTeste();
    this.authService
      .permissaoUsuariosMenu()
      .subscribe(response => {
        this.permissaoUsuario = true;
      });
  }

  permissaoAssistenteTeste(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoAssistente = false;
    this.authService
      .permissaoUsuarioAssistente()
      .subscribe(response => {
        this.permissaoAssistente = true;
      })
  }

  consultar(){
    this.service
      .buscar(this.nomeFornecedor, this.nomeStatus)
      .subscribe(response => this.lista = response);
  }

  trocaStatus(idPedido, idStatus){
    this.botaoAprovadoAtivo = false;
    this.service
      .trocaStatus(idPedido, idStatus)
      .subscribe(response => {
        this.consultar();
        this.botaoAprovadoAtivo = true;
      })
  }

  insereMensagemReprovacao(){
    this.botaoAprovadoAtivo = false;
    this.service
      .inserindoMensagemReprovacao(this.idPedidoSelecionado, this.mensagemRepovacao)
      .subscribe(reponse => {
      })
  }

  open(idPedido, content) {
    this.idPedidoSelecionado = idPedido;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

  openDocumentos(idPedido, content) {
    this.idPedidoSelecionado = idPedido;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonDocumentos(reason)}`;
    });
  }

  private getDismissReasonDocumentos(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

}
