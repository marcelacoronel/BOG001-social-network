/* eslint-disable no-param-reassign */
import { userSignOff } from '../components/auth.js';

export default () => {
  const view = `
  <div class="dashboard">
  <div id="user-header">
  <div id="user">
    
    <div id="user-picture">
      <div id="picture-box">
      <img src="" id="userphoto" alt="user-Avatar">
    </div>
      </div>
    <div id="user-info">
      <h2 class="user_name" id="nombre"></h2>
    <hr>
    <ul id="user_list">
      <li ><span class="info_icon"><i class="fas fa-envelope"></i></span><span id="email"></span></li>
      <li><span class="info_icon"><i class="fas fa-paw"></i></span><span id="raza"></span></li>
      <li ><span class="info_icon"><i class="fas fa-map-marker-alt"></i></span><span id="ciudad"></span></li>
    </ul>
    </div>
  </div>
       <div id="nav-btn">
  
       <button id="add" class="edit-post"><i class="fas fa-plus-circle"></i></button>
    <button id="signOff">Cerrar sesion</button> 
  </div>
      </div>
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>

          <div class="soulmates-post-modal">
          <div class="soulmates-post-top">
            <div class="soulmates-post-avatar">
              <img class="post-header-avatar" src="">
            </div>
          
            <div class="soulmates-post-name">
            </div>
          
            <div class="soulmates-post-title">
            </div>
            <div class="soulmates-post-date">
            <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="soulmates-post-bookmark">
              <span class="th th-bookmark-1-o"></span>
            </div>
          </div>
          <form id="post-user">
          <div class="soulmates-post-image">
          <input type="file" name="photoPost" id="postPhoto" />
          <label class="post-label" for ="postPhoto">Sube tu imagen</label>            
          </div>
          <div class="soulmates-post-bottom">
            <div class="soulmates-post-desc">
              <div class"description-post"><input type="text" id="description"></div>
            </div>
            <div class="soulmates-post-icons">
            <button type="submit" id="submit-post">submit</button>
            </div>
            </form>
          </div>
          </div>
        </div>
</div>

        

<section class="board">   

      <div id="post-container"></div>
      
      </section>
<aside>
<div id="post-aside-info">
<p>BIENVENIDO</p>
<ul>
<li><span class="aside-icon"><i class="fas fa-dog"></i></span>Postea fotos de tu mejor amigo</li>
<li><span class="aside-icon"><i class="fas fa-portrait"></i></span>Describe tu imagen en menos de 120 caracteres, una imagen vale mas que mil palabras</li>
<li><span class="aside-icon"><i class="fas fa-heart"></i></span>Dale like a tus post favoritos</li>
<li><span class="aside-icon"><i class="fas fa-users"></i></span>Invita a amigos y haz crecer la comunidad</li>

</ul>
</div>
</aside>
</div>
  
`;

  // VARIABLES
  const nav = document.getElementById('headerNav');
  nav.style.display = 'none';
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  // CAMPOS FORMULARIO

  const nombre = divElement.querySelector('#nombre');
  const ciudad = divElement.querySelector('#ciudad');
  const btnSingOff = divElement.querySelector('#signOff');
  const email = divElement.querySelector('#email');
  const img = divElement.querySelector('#userphoto');
  const raza = divElement.querySelector('#raza');
  const post = divElement.querySelector('#post-user');
  const postSubmit = divElement.querySelector('#submit-post');
  const postContainer = divElement.querySelector('#post-container');

  // CAMPOS INFO POST USUARIO
  const imgAvatarHeaderPost = divElement.querySelectorAll('.post-header-avatar');
  // const imgAvatarPost = divElement.querySelectorAll('.post-image-avatar');
  const postHeaderName = divElement.querySelectorAll('.soulmates-post-name');
  const postHeaderCity = divElement.querySelectorAll('.soulmates-post-title');

  // INPUT SUBIR FOTO DE POST
  const postImage = divElement.querySelector('#postPhoto');

  // MODAL
  const modal = divElement.querySelector('#myModal');
  const btn = divElement.querySelectorAll('.edit-post');
  const span = divElement.getElementsByClassName('close')[0];

  // USER UID
  const userex = JSON.parse(localStorage.getItem('usuario'));
  const idex = userex.uid;
  console.log(idex);
  console.log(userex.email);

  // VARIABLE EDITAR
  let editStatus = false;
  let idUser = '';

  // FUNCIONES

  // MODAL  CREAR POST
  btn.forEach((bn) => {
    bn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });
  // CERRAR EL MODAL
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // CERRAR EL MODAL HACIENDO CLICK EN CUALQUIER PARTE DE LA VENTANA
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };


  // FUNCION IMAGEN POST
  let imagerute;
  postImage.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const refIma = await firebase
      .storage()
      .ref('profileImgUsers/')
      .child('userPostImages/')
      .child(file.name);
    const task = refIma.put(file);

    task.snapshot.ref.getDownloadURL().then((url) => {
      console.log(`nueva ruta${url}`);
      imagerute = url;
    });
  });

  // MOSTRAR LA FOTO DE PERFIL DEL USUARIO
  async function storage() {
    try {
      const storageRef = await firebase
        .storage()
        .ref(`profileImgUsers/${idex}`);
      storageRef.getDownloadURL().then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        // Or inserted into an <img> element
        img.src = url;

        imgAvatarHeaderPost.forEach((datos) => {
          console.log(datos);
          datos.src = url;
        });
      });
    } catch (error) {
      console.log(error);
    }
    return img;
  }

  // MOSTRAR EN EL HEAD LA INFORMACION DEL USUARIO
  function loadInfo() {
    email.innerHTML = userex.email;
    // Data usurio de firestore
    const docRef = firebase.firestore().collection('user').doc(idex);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();

          nombre.innerHTML = data.Pet.PetName;
          ciudad.innerHTML = data.City;
          raza.innerHTML = data.Pet.PetBreed;

          // Para que cada publicacion tenga los datos del usuario
          postHeaderName.forEach((datos) => {
            // eslint-disable-next-line no-param-reassign
            datos.innerHTML = data.Pet.PetName;
          });
          postHeaderCity.forEach((datos) => {
            // eslint-disable-next-line no-param-reassign
            datos.innerHTML = data.City;
          });
          console.log(data.Pet.PetName);
          console.log('Document data:', data);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }
  storage();
  loadInfo();

  // CREAR POST USUARIO

  // REF DEL DOC Y SUBCOLECCION DEL USUARIO/POST
  const savePost = (description, image) => {
    firebase
      .firestore()
      .collection('user')
      .doc(idex)
      .collection('post')
      .doc()
      .set({
        description,
        image,
      });
  };

  // OBTENER TODOS LOS POST DEL USUARIO

  // OBTENER LA SUBCOLECCION DE POST USUARIO
  const onGetPost = callback => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .onSnapshot(callback);

  // BORRAR LOS POST DEL USUARIO
  const deletePost = id => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .delete();

  // EDITAR LOS POST DEL USUARIO
  const editPost = id => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .get();

  // CONST UPDATE POST

  const updatePost = (id, updatePost) => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .update(updatePost);

  // FUNCION PARA MOSTRAR Y EDITAR POST
  async function getPost() {
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const postId = doc.data();
        postId.id = doc.id;
        // console.log(postId)
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        postContainer.innerHTML += `
        <div class="soulmates-post">
        <div class="soulmates-post-top">
          <div class="soulmates-post-avatar">
            <img class="post-header-avatar" src="">
          </div>
        
          <div class="soulmates-post-name">
          </div>
        
          <div class="soulmates-post-title">
          </div>
          <div class="soulmates-post-date">
          <i class="fas fa-ellipsis-h"></i>
          </div>
          <div class="soulmates-post-bookmark">
            <span class="th th-bookmark-1-o"></span>
          </div>
        </div>
        <div class="soulmates-post-image">
          <img class="post-image-avatar" src="${doc.data().image}">
        </div>
        <div class="soulmates-post-bottom">
          <div class="soulmates-post-desc">
            <div class"description-post">${doc.data().description}</div>
          </div>
          <div class="soulmates-post-icons">
          <span>1</span><span class="th th-heart-1-o"><i class="fas fa-heart"></i></span>
            <span class="th th-chat-bubble-o"></span>
            <span>1</span><span class="th th-share-o"><i class="fas fa-laugh-beam"></i></span>
              <button class="delete-post" data-id="${postId.id}">Borrar</button>
          <button class="edit-post" data-id="${postId.id}">Editar</button>
         
            </div>
        
        </div>
        </div>
           `;

        // VARIABLES BOTONES
        const btnDeletePost = divElement.querySelectorAll('.delete-post');
        const btnEditPost = divElement.querySelectorAll('.edit-post');

        // BOTON DELETE POST
        btnDeletePost.forEach((btnuno) => {
          btnuno.addEventListener('click', async (e) => {
            // console.log();
            await deletePost(e.target.dataset.id);
          });
        });

        // BOTON EDIT POST
        btnEditPost.forEach((btndos) => {
          btndos.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            const postUser = await editPost(e.target.dataset.id);
            console.log(postUser.data());
            const data = doc.data();
            editStatus = true;
            idUser = postUser.id;
            post.description.value = data.description;
            postSubmit.innerText = 'Actualizar';
          });
        });
      });
    });
  }


  async function loadPost() {
    await getPost();
  }
  loadPost();
  // ENVIAR INFORMACION DEL POST
  postSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const description = post.description;
    console.log(description.value);
    const image = imagerute;
    console.log(image);

    if (!editStatus) {
      await savePost(description.value, image);
    } else {
      await updatePost(idUser, {
        description: description.value,
      });
      editStatus = false;
      idUser = '';
      postSubmit.innerText = 'Guardar';
    }

    post.reset();
  });

  // CERRAR SESION
  btnSingOff.addEventListener('click', (e) => {
    e.preventDefault();
    // Cerrar sesion
    userSignOff();
  });

  return divElement;
};
import {
  userSignOff,
} from '../components/auth.js';
import {
  imageStorage,
  addPostUserData,
} from '../components/database.js';

export default () => {
  const view = `
  <div class="dashboard">
    <div id="user-header">
      <div id="user">

        <div id="user-picture">
          <div id="picture-box">
            <img src="" id="userphoto" alt="user-Avatar">
          </div>
        </div>
        <div id="user-info">
          <h2 class="user_name" id="nombre"></h2>
          <hr>
          <ul id="user_list">
            <li><span class="info_icon"><i class="fas fa-envelope"></i></span><span id="email"></span></li>
            <li><span class="info_icon"><i class="fas fa-paw"></i></span><span id="raza"></span></li>
            <li><span class="info_icon"><i class="fas fa-map-marker-alt"></i></span><span id="ciudad"></span></li>
          </ul>
        </div>
      </div>
      <div id="nav-btn">

        <button id="addPost">Crear post</button>
        <button id="signOff">Cerrar sesion</button>
      </div>
    </div>
    <section class="board">
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
      <div class="post-form">
        <div class="post-header"></div>

        <form action="#" name="post-user-form" id="post-user" >

        <div>
        <input type="file" name="postPreview" id="postPreview" />
        <div class="post-preview" id="postPreviewImage">
          <img src="" alt="postpreview" class="post-preview-image" />
          <span class="post-preview-text">Image preview</span>
        </div>
      </div>

          <div class="infoPostUser">
            <input type="text" id="title" required>
            <input type="text" id="description" required>
            <input type="submit" id="submit-post" value="submit" >
          </div>
        </form>
      </div>
      </div>
      </div>
      <div id="post-container"></div>

      <img id="prueba" src="">

    </section>
    <aside>
      <div id="post-aside-info">
        <p>BIENVENIDO</p>
        <ul>
          <li><span class="aside-icon"><i class="fas fa-dog"></i></span>Postea fotos de tu mejor amigo</li>
          <li><span class="aside-icon"><i class="fas fa-portrait"></i></span>Describe tu imagen en menos de 120
            caracteres, una imagen vale mas que mil palabras</li>
          <li><span class="aside-icon"><i class="fas fa-heart"></i></span>Dale like a tus post favoritos</li>
          <li><span class="aside-icon"><i class="fas fa-users"></i></span>Invita a amigos y haz crecer la comunidad</li>

        </ul>
      </div>
    </aside>
  </div>
     <!-- <div class="soulmates-post">
  <div class="soulmates-post-top">
    <div class="soulmates-post-avatar">
      <img src="">
    </div>
    <div class="soulmates-post-name">
      soulmatesname
    </div>
    <div class="soulmates-post-title">
      Small Title For Photo
    </div>
    <div class="soulmates-post-date">
      Sept 1
    </div>
    <div class="soulmates-post-bookmark">
      <span class="th th-bookmark-1-o"></span>
    </div>
  </div>
  <div class="soulmates-post-image">
    <img class="post-image-avatar" src="">
  </div>
  <div class="soulmates-post-bottom">
    <div class="soulmates-post-desc">
      <div><name>instaname</name> Small description here! Keep it simple because you wanna add the <i>#hashtags #forflare</i></div>
    </div>
    <div class="soulmates-post-icons">
      <span class="th th-heart-1-o"></span>
      <span class="th th-chat-bubble-o"></span>
      <span class="th th-share-o"></span>
    </div>
    <div class="soulmates-post-likes">
      2300 <span>likes</span>
    </div>
    <div class="soulmates-post-comment">
      <div>Add a comment <span>∙∙∙</span></div>
    </div>
  </div>
</div>-->
     
`;

  // VARIABLES
  const nav = document.getElementById('headerNav');
  nav.style.display = 'none';
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  // CAMPOS FORMULARIO

  const nombre = divElement.querySelector('#nombre');
  const ciudad = divElement.querySelector('#ciudad');
  const email = divElement.querySelector('#email');
  const img = divElement.querySelector('#userphoto');
  const raza = divElement.querySelector('#raza');
  const post = divElement.querySelector('#post-user');
  const postContainer = divElement.querySelector('#post-container');
  // CAMPOS INFO POST USUARIO
  // const imgAvatarPost = divElement.querySelector('.post-image-avatar');
  // INPUT SUBIR FOTO DE POST
  const filePost = divElement.querySelector('#postPreview');
  const imagePostPreview = divElement.querySelector('#postPreviewImage');
  const previewImage = divElement.querySelector('.post-preview-image');
  const defaultText = divElement.querySelector('.post-preview-text');
  // BOTONES
  const addPost = divElement.querySelector('#addPost');
  const btnSingOff = divElement.querySelector('#signOff');
  const postSubmit = divElement.querySelector('#submit-post');
  // MODAL
  const modal = divElement.querySelector('#myModal');
  const span = divElement.getElementsByClassName('close')[0];
  // USER UID
  const userex = JSON.parse(localStorage.getItem('usuario'));
  const idex = userex.uid;
  console.log(idex);
  console.log(userex.email);
  // RUTA STORAGE
  const pathUserStorage = localStorage.getItem('pathStorage');
  const idUserStorage = localStorage.getItem('idUserPost');
  console.log(`hola ${idUserStorage}`);
  // VARIABLE EDITAR
  let editStatus = false;
  let idUser = '';

  // FUNCIONES
  // MODAL  CREAR POST
  addPost.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  // CERRAR EL MODAL
  span.onclick = () => {
    modal.style.display = 'none';
  };

  // CERRAR EL MODAL HACIENDO CLICK EN CUALQUIER PARTE DE LA VENTANA
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // FUNCION PREVIEW IMAGEN POST
  filePost.addEventListener('change', () => {
    const file = filePost.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      defaultText.style.display = 'none';
      previewImage.style.display = 'block';
      reader.addEventListener('load', () => {
        // console.log(this) ;
        previewImage.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(file);
    } else {
      defaultText.style.display = null;
      previewImage.style.display = null;
      previewImage.setAttribute('src', '');
    }
  });

  // MOSTRAR LA FOTO DE PERFIL DEL USUARIO
  let urlProfileUser = '';
  async function storage() {
    try {
      const storageRef = await firebase
        .storage()
        .ref(`${pathUserStorage}/profile/${idex}`);
      storageRef.getDownloadURL().then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        // Or inserted into an <img> element
        urlProfileUser = url;
        img.src = url;
        // imgAvatarPost.src = url;
      });
    } catch (error) {
      console.log(error);
    }
    return img;
  }
  // MOSTRAR EN EL HEAD LA INFORMACION DEL USUARIO
  function loadInfo() {
    email.innerHTML = userex.email;
    // Data usurio de firestore
    const docRef = firebase.firestore().collection('user').doc(idex);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          nombre.innerHTML = data.Pet.PetName;
          ciudad.innerHTML = data.City;
          raza.innerHTML = data.Pet.PetBreed;
          console.log(data.Pet.PetName);
          console.log('Document data:', data);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }
  storage();
  loadInfo();

  // CREAR POST USUARIO
  const postIdu = '';
  // REF DEL DOC Y SUBCOLECCION DEL USUARIO/POST
  //  const file = postImage.files[0];
  //     console.log(file)

  async function savePostInfo(title, description) {
    await firebase
      .firestore()
      .collection('user')
      .doc(idex)
      .collection('post')
      .add({
        title,
        description,
      })

      // await addPostUserData(idex, { title, description })
      .then((postDoc) => {
        console.log('GUARDAR POST ');
        console.log(postDoc.id);
        const postIdUser = postDoc.id;
        console.log('JAJAJA');
        console.log(postIdUser);
        const file = filePost.files[0];
        // localStorage.setItem('idUserPost', postIdUser);
        imageStorage(`${pathUserStorage}/post/${postDoc.id}/`, postDoc.id, file);
        // downloadUrl(postDoc.postIdu);
      });
  }

  // OBTENER LA SUBCOLECCION DE POST USUARIO
  const onGetPost = (callback) => {
    firebase
      .firestore()
      .collection('user')
      .doc(idex)
      .collection('post')
      .onSnapshot(callback);
  };


  // BORRAR LOS POST DEL USUARIO
  const deletePost = (id) => {
    console.log('Delete post ', id);
    // console.log(firebase
    //   .firestore()
    //   .collection('user')
    //   .doc(idex)
    //   .collection('post')
    //   .doc(id)
    //   .delete())
  };

  // EDITAR LOS POST DEL USUARIO
  const editPost = id => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .get();

  // CONST UPDATE POST

  const updatePost = (id, updatePost) => firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .update(updatePost);

  // FUNCION PARA MOSTRAR Y EDITAR POST
  function getPost() {
    console.log('Entra GetPost');
    postContainer.innerHTML = '';
    let text;
    const ids =
    // downloadUrl();
    onGetPost((querySnapshot) => {
      querySnapshot.forEach((postQ) => {
        // const postId = doc.data();
        // postId.id = doc.id;
        // console.log(postId)
        // doc.data() is never undefined for query doc snapshots

        console.log(postQ.id, ' => ', postQ.data());


        firebase
          .storage()
          .ref(`${pathUserStorage}/post/${postQ.id}/${postQ.id}`)
          .getDownloadURL()
          .then((url) => {
            postContainer.innerHTML += `
        
           <div id="${postQ.id}" class="soulmates-post">
           <div class="soulmates-post-top">
             <div class="soulmates-post-avatar">
               <img class="post-header-avatar" src='' >
             </div>
           
             <div class="soulmates-post-name">
             </div>
           
             <div class="soulmates-post-title">
             </div>
             <div class="soulmates-post-date">
             <i class="fas fa-ellipsis-h"></i>
             </div>
             <div class="soulmates-post-bookmark">
               <span class="th th-bookmark-1-o"></span>
             </div>
           </div>
           <div class="soulmates-post-image">
             <img id ="${postQ.id}-image" class="post-image-avatar" src="${url}">            
           </div>
           <div class="soulmates-post-bottom">
             <div class="soulmates-post-desc">
               <div class"description-post">
               <p>${postQ.data().title}</p>
               <p>${postQ.data().description}</p></div>
             </div>
             <div class="soulmates-post-icons">
             <span>1</span><span class="th th-heart-1-o"><i class="fas fa-heart"></i></span>
               <span class="th th-chat-bubble-o"></span>
               <span>1</span><span class="th th-share-o"><i class="fas fa-laugh-beam"></i></span>
                 <button class="delete-post" onclick="" id="${postQ.id}-borrar">Borrar</button>
             <button class="edit-post" id="${postQ.id}-editar">Editar</button>
            
               </div>
           
           </div>
           </div>

           `;


            //  document.getElementById(`${postQ.id}-borrar`).addEventListener('click', async (e) => {
            //   console.log("Holaaa" + postQ.id)
            //   await myFunction()
            // });
          });


        //    console.log(`${postQ.id}-image`)
        // const imgPost = document.getElementById(`${postQ.id}-image`);

        //  function getUrl() {
        //    firebase
        //     .storage()
        //     .ref(`${pathUserStorage}/post/${postQ.id}/${postQ.id}`)
        //     .getDownloadURL()
        //     .then((url) => {
        //       // `url` is the download URL for 'images/stars.jpg'

        //       console.log(url);
        //       // Or inserted into an <img> element
        //       imgPost.src = "https://firebasestorage.googleapis.com/v0/b/social-network-7.appspot.com/o/user%2FOLk8FDG8A0VAjuJPWOZHLknyBcM2%2Fpost%2FSAILz0hIj1keu3j3ItuW%2FSAILz0hIj1keu3j3ItuW?alt=media&token=e9f61620-f7b7-4cbf-9507-c3a5fdd23fff";
        //       console.log(imgPost);
        //       // imgPost.forEach((postimage)=>{
        //       // postimage.src = url;
        //       // })

        //       // imgAvatarPost.src = url;
        //     });
        // }
        // getUrl();

        // VARIABLES BOTONES

        const btnEditPost = document.getElementById(`${postQ.id}-editar`);

        // BOTON DELETE POST


        // BOTON EDIT POST
        // btnEditPost.forEach((btn) => {
        //   btn.addEventListener('click', async (e) => {
        //     console.log(e.target.dataset.id);
        //     const postUser = await editPost(e.target.dataset.id);
        //     console.log(postUser.data());
        //     const data = postQ.data();
        //     editStatus = true;
        //     idUser = postUser.id;
        //     post.title.value = data.title;
        //     post.description.value = data.description;
        //     postSubmit.innerText = 'Actualizar';
        //   });
        // });
      });

      document.getElementById(`${postQ.id}-borrar`).onclick = function () {
        console.log(postQ.id);
        myFunction();
      };
    });
    // postContainer.innerHTML = text;
  }
  async function loadPost() {
    await getPost();
  }

  function myFunction() {
    alert('Hello World!');
  }
  loadPost();

  // ENVIAR INFORMACION DEL POST
  post.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = post.title;
    const description = post.description;

    if (!editStatus) {
      await savePostInfo(title.value, description.value);
    } else {
      await updatePost(idUser, {
        title: title.value,
        description: description.value,
      });
      editStatus = false;
      idUser = '';
      postSubmit.innerText = 'Guardar';
    }
    // inputPhoto.value ='';
    // await getPost();
    previewImage.style.display = 'none';

    post.reset();
  });

  postSubmit.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  // CERRAR SESION
  btnSingOff.addEventListener('click', (e) => {
    e.preventDefault();
    // Cerrar sesion
    userSignOff();
    window.location.hash = '';
  });

  return divElement;
};


//-------------------------------------------------------------------------------------------------//

import { userSignOff } from '../components/auth.js';
import { imageStorage, addPostUserData } from '../components/database.js';

export default () => {
const view = `
<div class="dashboard">
  <div id="user-header">
    <div id="user">

      <div id="user-picture">
        <div id="picture-box">
          <img src="" id="userphoto" alt="user-Avatar">
        </div>
      </div>
      <div id="user-info">
        <h2 class="user_name" id="nombre"></h2>
        <hr>
        <ul id="user_list">
          <li><span class="info_icon"><i class="fas fa-envelope"></i></span><span id="email"></span></li>
          <li><span class="info_icon"><i class="fas fa-paw"></i></span><span id="raza"></span></li>
          <li><span class="info_icon"><i class="fas fa-map-marker-alt"></i></span><span id="ciudad"></span></li>
        </ul>
      </div>
    </div>
    <div id="nav-btn">

      <button id="addPost">Crear post</button>
      <button id="signOff">Cerrar sesion</button>
    </div>
  </div>
  <section class="board">
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
    <div class="post-form">
      <div class="post-header"></div>

      <form action="#" name="post-user-form" id="post-user" >

      <div>
      <input type="file" name="postPreview" id="postPreview" />
      <div class="post-preview" id="postPreviewImage">
        <img src="" alt="postpreview" class="post-preview-image" />
        <span class="post-preview-text">Image preview</span>
      </div>
    </div>

        <div class="infoPostUser">
          <input type="text" id="title" required>
          <input type="text" id="description" required>
          <input type="submit" id="submit-post" value="submit" >
        </div>
      </form>
    </div>
    </div>
    </div>
    <div id="post-container"></div>

    <img id="prueba" src="">

  </section>
  <aside>
    <div id="post-aside-info">
      <p>BIENVENIDO</p>
      <ul>
        <li><span class="aside-icon"><i class="fas fa-dog"></i></span>Postea fotos de tu mejor amigo</li>
        <li><span class="aside-icon"><i class="fas fa-portrait"></i></span>Describe tu imagen en menos de 120
          caracteres, una imagen vale mas que mil palabras</li>
        <li><span class="aside-icon"><i class="fas fa-heart"></i></span>Dale like a tus post favoritos</li>
        <li><span class="aside-icon"><i class="fas fa-users"></i></span>Invita a amigos y haz crecer la comunidad</li>

      </ul>
    </div>
  </aside>
</div>
   <!-- <div class="soulmates-post">
<div class="soulmates-post-top">
  <div class="soulmates-post-avatar">
    <img src="">
  </div>
  <div class="soulmates-post-name">
    soulmatesname
  </div>
  <div class="soulmates-post-title">
    Small Title For Photo
  </div>
  <div class="soulmates-post-date">
    Sept 1
  </div>
  <div class="soulmates-post-bookmark">
    <span class="th th-bookmark-1-o"></span>
  </div>
</div>
<div class="soulmates-post-image">
  <img class="post-image-avatar" src="">
</div>
<div class="soulmates-post-bottom">
  <div class="soulmates-post-desc">
    <div><name>instaname</name> Small description here! Keep it simple because you wanna add the <i>#hashtags #forflare</i></div>
  </div>
  <div class="soulmates-post-icons">
    <span class="th th-heart-1-o"></span>
    <span class="th th-chat-bubble-o"></span>
    <span class="th th-share-o"></span>
  </div>
  <div class="soulmates-post-likes">
    2300 <span>likes</span>
  </div>
  <div class="soulmates-post-comment">
    <div>Add a comment <span>∙∙∙</span></div>
  </div>
</div>
</div>-->
   
`;

// VARIABLES
const nav = document.getElementById('headerNav');
nav.style.display = 'none';
const divElement = document.createElement('div');
divElement.innerHTML = view;

// CAMPOS FORMULARIO

const nombre = divElement.querySelector('#nombre');
const ciudad = divElement.querySelector('#ciudad');
const email = divElement.querySelector('#email');
const img = divElement.querySelector('#userphoto');
const raza = divElement.querySelector('#raza');
const post = divElement.querySelector('#post-user');
const postContainer = divElement.querySelector('#post-container');
// CAMPOS INFO POST USUARIO
// const imgAvatarPost = divElement.querySelector('.post-image-avatar');
// INPUT SUBIR FOTO DE POST
const filePost = divElement.querySelector('#postPreview');
const imagePostPreview = divElement.querySelector('#postPreviewImage');
const previewImage = divElement.querySelector('.post-preview-image');
const defaultText = divElement.querySelector('.post-preview-text');
// BOTONES
const addPost = divElement.querySelector('#addPost');
const btnSingOff = divElement.querySelector('#signOff');
const postSubmit = divElement.querySelector('#submit-post');
// MODAL
const modal = divElement.querySelector('#myModal');
const span = divElement.getElementsByClassName('close')[0];
// USER UID
const userex = JSON.parse(localStorage.getItem('usuario'));
const idex = userex.uid;
console.log(idex);
console.log(userex.email);
// RUTA STORAGE
const pathUserStorage = localStorage.getItem('pathStorage');
const idUserStorage = localStorage.getItem('idUserPost');
console.log(`hola ${idUserStorage}`);
// VARIABLE EDITAR
let editStatus = false;
let idUser = '';

// FUNCIONES
// MODAL  CREAR POST
addPost.addEventListener('click', () => {
  modal.style.display = 'block';
});
// CERRAR EL MODAL
span.onclick = () => {
  modal.style.display = 'none';
};

// CERRAR EL MODAL HACIENDO CLICK EN CUALQUIER PARTE DE LA VENTANA
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// FUNCION PREVIEW IMAGEN POST
filePost.addEventListener('change', () => {
  const file = filePost.files[0];
  console.log(file);
  if (file) {
    const reader = new FileReader();
    defaultText.style.display = 'none';
    previewImage.style.display = 'block';
    reader.addEventListener('load', () => {
      // console.log(this) ;
      previewImage.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
  } else {
    defaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute('src', '');
  }
});

// MOSTRAR LA FOTO DE PERFIL DEL USUARIO
let urlProfileUser = '';
async function storage() {
  try {
    const storageRef = await firebase
      .storage()
      .ref(`${pathUserStorage}/profile/${idex}`);
    storageRef.getDownloadURL().then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      console.log(url);
      // Or inserted into an <img> element
      urlProfileUser = url;
      img.src = url;
      // imgAvatarPost.src = url;
    });
  } catch (error) {
    console.log(error);
  }
  return img;
}
// MOSTRAR EN EL HEAD LA INFORMACION DEL USUARIO
function loadInfo() {
  email.innerHTML = userex.email;
  // Data usurio de firestore
  const docRef = firebase.firestore().collection('user').doc(idex);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        nombre.innerHTML = data.Pet.PetName;
        ciudad.innerHTML = data.City;
        raza.innerHTML = data.Pet.PetBreed;
        console.log(data.Pet.PetName);
        console.log('Document data:', data);
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}
storage();
loadInfo();

// CREAR POST USUARIO
const postIdu = '';
// REF DEL DOC Y SUBCOLECCION DEL USUARIO/POST
//  const file = postImage.files[0];
//     console.log(file)

async function savePostInfo(title, description) {
  await firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .add({
      title,
      description,
    })

    // await addPostUserData(idex, { title, description })
    .then((postDoc) => {
      console.log('GUARDAR POST ');
      console.log(postDoc.id);
      const postIdUser = postDoc.id;
      console.log('JAJAJA');
      console.log(postIdUser);
      const file = filePost.files[0];
      // localStorage.setItem('idUserPost', postIdUser);
      imageStorage(
        `${pathUserStorage}/post/${postDoc.id}/`,
        postDoc.id,
        file
      );
      // downloadUrl(postDoc.postIdu);
    });
}

// OBTENER LA SUBCOLECCION DE POST USUARIO
const onGetPost = (callback) => {
  firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .onSnapshot(callback);
};

// BORRAR LOS POST DEL USUARIO
const deletePost = (id) => {
  console.log('Delete post ', id);
  console.log(
    firebase
      .firestore()
      .collection('user')
      .doc(idex)
      .collection('post')
      .doc(id)
      .delete()
  );
};

// EDITAR LOS POST DEL USUARIO
const editPost = (id) =>
  firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .get();

// CONST UPDATE POST

const updatePost = (id, updatePost) =>
  firebase
    .firestore()
    .collection('user')
    .doc(idex)
    .collection('post')
    .doc(id)
    .update(updatePost);

// FUNCION PARA MOSTRAR Y EDITAR POST
function getPost() {
  
  
  var docRef = firebase.firestore().collection("user").doc(idex).collection.doc

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});







  console.log('Entra GetPost');
  postContainer.innerHTML = '';
  let text;
  let ids =
    // downloadUrl();
    onGetPost((querySnapshot) => {
      querySnapshot.forEach((postQ) => {
        // const postId = doc.data();
        // postId.id = doc.id;
        // console.log(postId)
        // doc.data() is never undefined for query doc snapshots

        console.log(postQ.id, ' => ', postQ.data());

        firebase
          .storage()
          .ref(`${pathUserStorage}/post/${postQ.id}/${postQ.id}`)
          .getDownloadURL()
          .then((url) => {
            //postContainer.innerHTML +=             `

            let card = document.createElement("div");
            postContainer.appendChild(card);
        
            let img = document.createElement("img");
            img.setAttribute("src", url);
            img.setAttribute("width", "100px");
            card.appendChild(img);
        
            let tag = document.createElement("h3");
            let text = document.createTextNode(postQ.data().title);
            tag.appendChild(text);
            tag.style.textTransform = "uppercase";
            tag.style.fontWeight = "600";
            card.appendChild(tag);
        
            let type = document.createElement("p");
            let textType = document.createTextNode(postQ.data().description);
            type.appendChild(textType);
            card.appendChild(type);

            let buttondDelete = document.createElement("button")
            let 

      
      //  <!--  <div id="${postQ.id}" class="soulmates-post">
      //    <div class="soulmates-post-top">
      //      <div class="soulmates-post-avatar">
      //        <img class="post-header-avatar" src='' >
      //      </div>
         
      //      <div class="soulmates-post-name">
      //      </div>
         
      //      <div class="soulmates-post-title">
      //      </div>
      //      <div class="soulmates-post-date">
      //      <i class="fas fa-ellipsis-h"></i>
      //      </div>
      //      <div class="soulmates-post-bookmark">
      //        <span class="th th-bookmark-1-o"></span>
      //      </div>
      //    </div>
      //    <div class="soulmates-post-image">
      //      <img id ="${
      //        postQ.id
      //      }-image" class="post-image-avatar" src="${url}">            
      //    </div>
      //    <div class="soulmates-post-bottom">
      //      <div class="soulmates-post-desc">
      //        <div class"description-post">
      //        <p>${postQ.data().title}</p>
      //        <p id="postDescription">${postQ.data().description}</p></div>
      //      </div>
      //      <div class="soulmates-post-icons">
      //      <span>1</span><span class="th th-heart-1-o"><i class="fas fa-heart"></i></span>
      //        <span class="th th-chat-bubble-o"></span>
      //        <span>1</span><span class="th th-share-o"><i class="fas fa-laugh-beam"></i></span>
      //        <button class="delete-post" data-id="${postQ.id}">Borrar</button>
      //        <button class="edit-post" data-id="${postQ.id}">Editar</button>
          
      //        </div>
         
      //    </div>
      //    </div>
         
      //    `-->
;
            // const btnEditPost = document.getElementById(`${postQ.id}-editar`);
            // const btnDeletePost = divElement.querySelectorAll('.delete-post');
            // // console.log(btnDeletePost);
            // const btnEditPost = divElement.querySelectorAll('.edit-post');
            // // console.log(btnEditPost);
            // const postDescr = divElement.querySelector('#postDescription');
            // // BOTON DELETE POST
            // btnDeletePost.forEach((btnuno) => {
            //   btnuno.addEventListener('click', async (e) => {
            //     console.log('click');
            //     await deletePost(e.target.dataset.id);
            //   });
            // });

            // // BOTON EDIT POST
            // btnEditPost.forEach((btndos) => {
            //   btndos.addEventListener('click', async (e) => {
            //     console.log(e.target.dataset.id);
            //     const postUser = await editPost(e.target.dataset.id);
            //     console.log(postUser.data());
            //     const data = postQ.data();
            //     editStatus = true;
            //     idUser = postUser.id;
            //     post.description.value = data.description;
            //     postSubmit.innerText = 'Actualizar';
            //   });
            // });

            //  document.getElementById(`${postQ.id}-borrar`).addEventListener('click', async (e) => {
            //   console.log("Holaaa" + postQ.id)
            //   await myFunction()
            // });
          });

        //    console.log(`${postQ.id}-image`)
        // const imgPost = document.getElementById(`${postQ.id}-image`);

        //  function getUrl() {
        //    firebase
        //     .storage()
        //     .ref(`${pathUserStorage}/post/${postQ.id}/${postQ.id}`)
        //     .getDownloadURL()
        //     .then((url) => {
        //       // `url` is the download URL for 'images/stars.jpg'

        //       console.log(url);
        //       // Or inserted into an <img> element
        //       imgPost.src = "https://firebasestorage.googleapis.com/v0/b/social-network-7.appspot.com/o/user%2FOLk8FDG8A0VAjuJPWOZHLknyBcM2%2Fpost%2FSAILz0hIj1keu3j3ItuW%2FSAILz0hIj1keu3j3ItuW?alt=media&token=e9f61620-f7b7-4cbf-9507-c3a5fdd23fff";
        //       console.log(imgPost);
        //       // imgPost.forEach((postimage)=>{
        //       // postimage.src = url;
        //       // })

        //       // imgAvatarPost.src = url;
        //     });
        // }
        // getUrl();

        // VARIABLES BOTONES

        // BOTON EDIT POST
        // btnEditPost.forEach((btn) => {
        //   btn.addEventListener('click', async (e) => {
        //     console.log(e.target.dataset.id);
        //     const postUser = await editPost(e.target.dataset.id);
        //     console.log(postUser.data());
        //     const data = postQ.data();
        //     editStatus = true;
        //     idUser = postUser.id;
        //     post.title.value = data.title;
        //     post.description.value = data.description;
        //     postSubmit.innerText = 'Actualizar';
        //   });
        // });
      });
    });

  // document.getElementById(`${postQ.id}-borrar`).onclick = function () {
  //   console.log(postQ.id);
  //   myFunction();
  // };
}
async function loadPost() {
  await getPost();
}

// function myFunction() {
//   alert('Hello World!');
// }
loadPost();

// ENVIAR INFORMACION DEL POST
post.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = post.title;
  const description = post.description;

  if (!editStatus) {
    await savePostInfo(title.value, description.value);
  } else {
    await updatePost(idUser, {
      title: title.value,
      description: description.value,
    });
    editStatus = false;
    idUser = '';
    postSubmit.innerText = 'Guardar';
  }
  // inputPhoto.value ='';
  // await getPost();
  previewImage.style.display = 'none';

  post.reset();
});

postSubmit.addEventListener('click', () => {
  modal.style.display = 'none';
});
// CERRAR SESION
btnSingOff.addEventListener('click', (e) => {
  e.preventDefault();
  // Cerrar sesion
  userSignOff();
  window.location.hash = '';
});

return divElement;
};

