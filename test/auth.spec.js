// import MockFirebase from '../_mocks_/firebase-mock.js';
// import { signInUsers, createUsers } from '../src/components/auth.js';

// global.firebase = MockFirebase();

// describe('createUsers', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUsers).toBe('function');
//   });
//   it('debería retornar mar@gmail.com , M65%casa9', () => {
//     const newUser = createUsers('mar@gmail.com', 'M65%casa9');
//     console.log(newUser);
//     expect(newUser).toBe('mar@gmail.com, M65%casa9');
//   });
//   // it.skip('Debería retornar error con credenciales incorrectas', () => {
//   //   const newUser = createUsers('mar@gmail.com', '12345');
//   //   console.log(newUser);
//   //   expect(newUser).toBe('error');
//   // });
// });

// describe('signInUsers', () => {
//   it('debería ser una función', () => {
//     expect(typeof signInUsers).toBe('function');
//   });

//   it('Debería iniciar sesión con las credenciales correctas', () => {
//     const loginUser = signInUsers('mar@gmail.com', 'M65%casa9');
//     console.log(loginUser);
//     expect(loginUser).toBe('mar@gmail.com, M65%casa9');
//   });

//   it('Debería retornar error con credenciales incorrectas', () => {
//     const loginUser = signInUsers('mar@gmail.com', '12345');
//     console.log(loginUser);
//     expect(loginUser).toBe('error');
//   });
// });
// import * as user from '../src/views/404.js';

// jest.mock('../_mocks_/firebase-mock.js');

// // The assertion for a promise must be returned.
// it('works with promises', () => {
//   expect.assertions(1);
//   return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
// });
// it('works with resolves', () => {
//   expect.assertions(1);
//   return expect(user.getUserName(5)).resolves.toEqual('Paul');
// });
