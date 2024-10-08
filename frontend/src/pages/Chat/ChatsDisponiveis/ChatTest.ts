import { ChatInterface } from '.'

export const hirerChatMock: ChatInterface[] = [
  {
    when: new Date(),
    clientName: 'João da Silva',
    serviceCategory: 'Faxina',
    serviceSubCategory: 'faxina de vidros',
    price: 100,
    location: 'Rua dos Bobos, 0',
    chatId: null,
    newMessages: 0,
  },
  {
    when: new Date(),
    clientName: 'Maria da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Hidráulica',
    price: 150,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 0,
  },
  {
    when: new Date(),
    clientName: 'José da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 2,
  },
  {
    when: new Date(),
    clientName: 'Amostradinho da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 5,
  },
  {
    when: new Date(),
    clientName: 'Amostradinho da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 5,
  },
]

export const workerChatMock: ChatInterface[] = [
  {
    when: new Date(),
    clientName: 'Irineu da Silva',
    serviceCategory: 'Faxina',
    serviceSubCategory: 'faxina de vidros',
    price: 100,
    location: 'Rua dos Bobos, 0',
    chatId: null,
    newMessages: 0,
  },
  {
    when: new Date(),
    clientName: 'Rodinei da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Hidráulica',
    price: 150,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 0,
  },
  {
    when: new Date(),
    clientName: 'Carimbo da Silva',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Elétrica',
    price: 50,
    location: 'Rua dos Bobos, 0',
    chatId: '/home',
    newMessages: 2,
  },
]
