import {Solicitacao} from "../solicitacoes/solicitacao";
import {Observable} from "rxjs";
import {PagamentosService} from "../pagamentos.service";

export class Pagamento {
  id: number;
  tributo: string;
  nomeFornecedor: string;
  dataCadastro: string;
  dataEmissao: string;
  dataVencimento: string;
  observacao: string;
  valorLiquido: number;
  valorBruto: number;
  desconto: number;

  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;

}
