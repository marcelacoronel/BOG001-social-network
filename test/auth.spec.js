import { createUsers, signInUsers } from '../src/components/auth.js';

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
});


describe('signInUsers', () => {
  it('debería ser una función', () => {
    expect(typeof signInUsers).toBe('function');
  });

//   it('Should show SignIn when auth state changes and no user', () => {
//     const firebase = createFirebaseMock();
//     expect(firebase.auth.mock.calls.length).tobe(1);
//   });
});

describe("collection('user')", () => {
  it('should add data to a collection', () => {
    const db = firebase.firestore();
    const output = db.collection('user').add({
      City: 'bogota',
      DateBirth: '2020-07-28',
      Name: 'pepo png',
      Phone: '626697',
    });
    return output;
  });
});
