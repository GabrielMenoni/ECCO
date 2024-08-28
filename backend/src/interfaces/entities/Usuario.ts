// src/domains/entities/Usuario.ts

export interface Usuario {
  id: string
  nome: string;
  email: string;
  senha: string,
  celular: string,
  avaliacao: number;
  fotoFrenteDocumento: string;
  fotoVersoDocumento: string;
  tipoDocumento: string;
  verificado: boolean;
  fotoPerfil: string;
}

// Add and export this type for creating a user
export type UsuarioCreateInput = Omit<Usuario, 'id'>;