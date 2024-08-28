// src/interfaces/entities/Servico.ts

import { DiaServico } from './DiaServico';
import { Reserva } from './Reserva';

export interface Servico {
  id: string;
  momentoCriacao: string;
  precoFixo?: number | null;
  precoMin?: number | null;
  precoMax?: number | null;
  subcategoriaId: string;
  usuarioId: string;
  diasServico?: DiaServico[];
  reserva?: Reserva[]
}

export type servicoCreateInput = {
  momentoCriacao: string;
  precoFixo?: number | null;
  precoMin?: number | null;
  precoMax?: number | null;
  subcategoriaId: string;
  usuarioId: string;
  diasServico: {
    data: string;
    periodo: string;
  }[];
};
