import MockFirebase from '../_mocks_/firebase-mock.js';
import { signInUsers, createUsers } from '../src/components/auth.js';

global.firebase = MockFirebase();

// const createFirebaseMock = () => {
//   const mock = {
//     onAuthStateChanged: null,
//     auth: () => ({
//       onAuthStateChanged: (cb) => {
//         mock.onAuthStateChangedCallback = cb;
//       },
//     }),
//   };
//   return mock;
// };

describe('createUsers', () => {
  it('debería ser una función', () => {
    expect(typeof createUsers).toBe('function');
  });
  it('debería retornar mar@gmail.com , ', () => {
    const newUser = createUsers('mar@gmail.com', 'M65%casa9');
    expect(newUser).toBe('mar@gmail.com , M65%casa9');
  });
});

describe('signInUsers', () => {
  it('debería ser una función', () => {
    expect(typeof signInUsers).toBe('function');
  });

  // it('Debería iniciar sesión con las credenciales correctas', () => {
  //   return signInUsers(email, password).then;
  //   expect(loginUser).toBe('mar@gmail.com', 'M65%casa9');
  // });
  it('Debería iniciar sesión con las credenciales correctas', () => {
    const loginUser = signInUsers('mar@gmail.com', 'M65%casa9');
    console.log(loginUser);
    expect(loginUser).toBe('mar@gmail.com, M65%casa9');
  });


//   it('Should show SignIn when auth state changes and no user', () => {
//     const firebase = createFirebaseMock();
//     expect(firebase.auth.mock.calls.length).tobe(1);
//   });
});

// describe("collection('user')", () => {
//   it('should add data to a collection', () => {
//     const db = firebase.firestore();
//     const output = db.collection('user').add({
//       City: 'bogota',
//       DateBirth: '2020-07-28',
//       Name: 'pepo png',
//       Phone: '626697',
//     });
//     return output;
//   });
// });
