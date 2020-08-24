// const firestone = () => {
//   return {
//     collection: (nameCollection) => {
//       return {
//         add: (objData) => {
//           return new Promise((resolve) => {
//             resolve('mensaje')
//           })
//         }
//       }
//     }
//   }
// }

const auth = {
  createUserWithEmailAndPassword: (email, password) => {
    // const emailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // const passChar = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return new Promise ((resolve, reject) => {
      const user = {
        email: email,
        password: password
      };
      // if (emailChar.test(email) && passChar.test(password)) {
        user.email;
        user.password;
      // } else {
      //    reject('error');
      // };
      resolve(user.email, user.password);
    })
  },

      signInWithEmailAndPassword: (email, password) => {
        return new Promise ((resolve, reject) => {
          resolve(email, password);
          reject('error')
      })
    }
  }



const firebase = {
  // firestone: firestone,
  auth: auth
}

export default jest.fn(() => {
  return firebase;
})




// export const auth = {
//   email: 'mar@gmail.com',
//   password: 'M65%casa9',
// };
