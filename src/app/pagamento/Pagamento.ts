import {Solicitacao} from "../solicitacoes/solicitacao";
import {Observable} from "rxjs";
import {PagamentosService} from "../pagamentos.service";

export class Pagamento {
  id: number;
  tributo: string;
  solicitacao: Solicitacao;

  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;

}
