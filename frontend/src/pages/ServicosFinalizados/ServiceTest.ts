import { FinishedServiceInterface } from '.'

export const hirerServiceMock: FinishedServiceInterface[] = [
  {
    when: new Date(),
    clientName: 'João da Silva',
    serviceCategory: 'Faxina',
    serviceSubCategory: 'faxina de vidros',
    price: 100,
    rating: 5,
    message: 'Obrigado pelo serviço!',
  },
  {
    when: new Date(),
    clientName: 'Maria da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Hidráulica',
    price: 150,
    rating: 4,
    message: null,
  },
  {
    when: new Date(),
    clientName: 'José da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    rating: 3,
    message: 'Podia ser melhor...',
  },
  {
    when: new Date(),
    clientName: 'Amostradinho da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    rating: null,
    message: null,
  },
  {
    when: new Date(),
    clientName: 'Amostradinho da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    rating: 0,
    message: 'Vou chamar a policia!',
  },
]

export const workerServiceMock: FinishedServiceInterface[] = [
  {
    when: new Date(),
    clientName: 'Irineu da Silva',
    serviceCategory: 'Faxina',
    serviceSubCategory: 'faxina de vidros',
    price: 100,
    rating: 5,
    message: null,
  },
  {
    when: new Date(),
    clientName: 'Rodinei da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Hidráulica',
    price: 150,
    rating: 1,
    message:
      'O cara roubou meu gato velho não chamem esse canalha vou chamar a policia!',
  },
  {
    when: new Date(),
    clientName: 'Carimbo da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    rating: null,
    message: null,
  },
]
