import {TipoPedido} from "../TipoPedido";
import {TipoStatus} from "../TipoStatus";

export class PagamentoBusca {
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
}
