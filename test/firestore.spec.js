import MockFirebase from '../_mocks_/firebase-mock.js';

import { addPostUserData, getUserData } from '../src/components/database.js';

global.firebase = MockFirebase();

describe('Añadir informacion del usuario', () => {
  it('debería ser una función', () => {
    expect(typeof addPostUserData).toBe('function');
  });
});
describe('addPostUserData', () => {
  it('Deberia agregar los datos del post', () => addPostUserData('soy un perro').then((data) => {
    expect(data).tobe('soy un lindo perro');
  }));
});
describe('Obtener informacion del usuario', () => {
  it('debería ser una función', () => {
    expect(typeof getUserData).toBe('function');
  });
});
