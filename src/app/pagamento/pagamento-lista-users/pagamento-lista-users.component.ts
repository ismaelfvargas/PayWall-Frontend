import {Component, Input, OnInit} from '@angular/core';
import {PagamentoBusca} from "../pagamento-lista/pagamentoBusca";
import {PagamentosService} from "../../pagamentos.service";
import {AuthService} from "../../auth.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pagamento-lista-users',
  templateUrl: './pagamento-lista-users.component.html',
  styleUrls: ['./pagamento-lista-users.component.css']
})
export class PagamentoListaUsersComponent implements OnInit {

  nomeFornecedor: string;
  nomeStatus: string;
  lista: PagamentoBusca[];
  botaoPrestacaoAtivo: boolean = true;
  pagamentoSelecionado: PagamentoBusca;
  closeResult = '';
  idPedidoSelecionado: number;
  mensagemSucesso: string;
  mensagemErro: string;
  documentoArquivo: any;

  constructor(
    private service: PagamentosService,
    private userService : AuthService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }

  consultarListaUsers(){
    this.service
      .buscarUser(this.nomeFornecedor, this.nomeStatus)
      .subscribe(response => this.lista = response);
  }

  trocaStatusAdto(idPedido, idStatusAdto){
    this.botaoPrestacaoAtivo = false;
    this.service
      .trocaStatusAdto(idPedido, idStatusAdto)
      .subscribe(response => {
        this.consultarListaUsers();
        this.botaoPrestacaoAtivo = true;
      })
  }

  openDocumentos(idPedido, content) {
    this.service
      .buscarDocumentos(idPedido)
      .subscribe(reponse => {
        console.log(this.documentoArquivo)
        this.documentoArquivo = reponse
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReasonDocumentos(reason)}`;
        });
      })


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

  downloadFile(url, type) {
    this.http.get(url, {responseType: "blob"})
      .subscribe(response => {
        const blob = new Blob([response], { type: type });
        const url= window.URL.createObjectURL(blob);
        window.open(url);
      })
  }


}
