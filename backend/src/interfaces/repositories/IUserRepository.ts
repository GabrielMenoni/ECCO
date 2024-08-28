// src/interfaces/repositories/IUserRepository.ts
import { Usuario, UsuarioCreateInput } from "../entities/Usuario";

export interface IUserRepository {
    create(data: UsuarioCreateInput): Promise<Usuario>;
    update(id: string, data: Partial<Usuario>): Promise<void>; // Adjust to accept Partial<Usuario>
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    getAll(): Promise<Usuario[]>;
}
