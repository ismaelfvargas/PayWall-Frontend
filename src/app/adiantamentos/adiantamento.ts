import {Solicitacao} from "../solicitacoes/solicitacao";
import {Observable} from "rxjs";

export class Adiantamento {
  id: number;
  statusAdiantamento: string;
  solicitacao: Solicitacao;

  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;
}
