// src/use-cases/reserve/reserveCreationUseCase.ts

import { Reserva, reservaCreateInput } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";

export class ReserveCreationUseCase {
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(data: reservaCreateInput): Promise<Reserva> {

        // set some default values
        /**
            - [X] status
            - [X] notaAvaliacaoParaCliente
            - [X] comentarioAvaliacaoParaCliente
            - [X] notaAvaliacaoParaPrestador
            - [X] comentarioAvaliacaoParaPrestador
            - [ ] dataSolicitacao
            - [X] comentario
            - [ ] cep
            - [ ] estado
            - [ ] cidade
            - [ ] bairro
            - [ ] rua
            - [ ] numero
            - [ ] horarioInicio
            - [X] motivoRejeicao
            - [ ] horarioFim
            - [ ] servicoId
            - [ ] usuarioId
         */
        data.comentario = ''
        data.comentarioAvaliacaoParaCliente = ''
        data.comentarioAvaliacaoParaPrestador = ''
        data.motivoRejeicao = ''
        data.notaAvaliacaoParaCliente = 0
        data.notaAvaliacaoParaPrestador = 0
        data.status = 'CRIADO'

        try {
            const createdreserve = await this.reserveRepository.create(data);
            return createdreserve;
        } catch (error) {
            // Handle errors if necessary, e.g., log them, wrap them in custom errors, etc.
            if (error instanceof Error) {
                throw new Error(`Error creating reserve: ${error.message}`);
                
            }
            else {
                throw new Error('Unkown Error') // TODO: Upgrade the error handling
            }
        }
    }
}
