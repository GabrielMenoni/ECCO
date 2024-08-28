// src/domains/entities/Mensagem.ts

export interface Mensagem {
  id: string;
  momento: string;
  conteudo: string;
  reservaId: string;
  usuarioId: string;
}

export type MensagemCreateInput = Omit<Mensagem, 'id'>;
