import { hirerServices, workerServices } from '.'
// test are being passed to index.tsx for development purposes

export const hirerServicesMock: hirerServices[] = [
  {
    when: new Date(),
    workerName: 'John Doe One',
    serviceCategory: 'Manutenção',
    serviceSubCategory: 'Pequenos reparos',
    price: 100,
    location: 'Rua dos Bobos, 0',
    status: 'pending',
  },
  {
    when: new Date(),
    workerName: 'John Doe Two',
    serviceCategory: 'Eletricista',
    serviceSubCategory: 'Instalação',
    price: 100,
    location: 'Rua dos Bobos, 0',
    status: 'inProgress',
  },
]

export const workerServicesMock: workerServices[] = [
  {
    when: new Date(),
    serviceCategory: 'Eletricista',
    serviceSubCategory: 'Instalação',
    price: 100,
    status: 'announced',
  },
  {
    when: new Date(),
    hirerName: 'John Doe Four',
    serviceCategory: 'Eletricista',
    serviceSubCategory: 'Instalação',
    price: 100,
    location: 'Rua dos Bobos, 0',
    status: 'inProgress',
  },
  {
    when: new Date(),
    hirerName: 'John Doe Three',
    serviceCategory: 'Eletricista',
    serviceSubCategory: 'Instalação',
    price: 100,
    location: 'Rua dos Bobos, 0',
    status: 'newOffer',
  },
]
