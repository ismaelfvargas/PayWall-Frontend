import {TipoPedido} from "../TipoPedido";
import {TipoStatus} from "../TipoStatus";
import {Usuario} from "../../login/usuario";

export class PagamentoBusca {
  id: number;
  tributo: string;
  nomeFornecedor: string;
  dataEmissao: string;
  dataVencimento: string;
  observacao: string;
  valorLiquido: number;
  valorBruto: number;
  desconto: number;
  centroDeCusto: string;
  tipoPedido: TipoPedido;
  tipoStatus: TipoStatus;
  usuario: Usuario;
}
