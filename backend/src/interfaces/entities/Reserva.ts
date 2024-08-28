// src/domains/entities/Reserva.ts

export interface Reserva {
  id: string;
  status: string;
  notaAvaliacaoParaCliente: number;
  comentarioAvaliacaoParaCliente: string;
  notaAvaliacaoParaPrestador: number;
  comentarioAvaliacaoParaPrestador: string;
  dataSolicitacao: string;
  comentario: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  horarioInicio: string;
  motivoRejeicao?: string | null;
  horarioFim: string;
  servicoId: string;
  usuarioId: string;
}

export type reservaGetById = Omit<Reserva, 'motivoRejeicao'>;

export type reservaCreateInput = Omit<Reserva, 'id'>;