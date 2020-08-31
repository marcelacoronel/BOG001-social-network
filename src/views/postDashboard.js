import { userSignOff } from '../components/auth.js';
import {
  imageStorage, // getUserData,// addPostUserData,
  deletePostUserData,
  deletePostImageData,
  editPostUserData,
} from '../components/database.js';

export default () => {
  const view = `
  <!--HEADER INFORMACION DEL USUARIO-->

  <div class="dashboard">
    <div id="user-header">
      <div id="user">

        <div id="user-picture">
          <div id="picture-box">
            <img src="" id="userphoto" alt="user-Avatar">
          </div>
        </div>
        <div id="user-info">
          <h2 class="user_name" id="name"></h2>
          <hr>
          <ul id="user_list">
            <li class="email-head"><span class="info_icon"><i class="fas fa-envelope"></i></span><span id="email"></span></li>
            <li><span class="info_icon"><i class="fas fa-paw"></i></span><span id="breed"></span></li>
            <li><span class="info_icon"><i class="fas fa-map-marker-alt"></i></span><span id="city"></span></li>
          </ul>
        </div>
      </div>
      <div id="nav-btn">
        <button id="mainPage"><i class="fas fa-home"></i></button>
        <button id="addPost"><i class="fas fa-plus-circle"></i></button>
        <button id="editUser"><i class="fas fa-user-edit"></i></button>
        <button id="signOff"><i class="fas fa-times-circle"></i></button>
      </div>
    </div>
    <section class="board">


    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        
     
        <div class="post-header">
        <span class="close"><i class="fas fa-times-circle"></i></span>
        <h2>Crear post</h2>
        </div>
       <div class="post-form">
        <form name="post-user-form" id="post-user" >
        <div>
        <div class="post-preview" id="postPreviewImage">
          <img src="" alt="postpreview" class="post-preview-image" />
          <span class="post-preview-text">Image preview</span>
        </div>
         <input type="file" name="postPreview" id="postPreview" >
      </div>

          <div class="infoPostUser">
            <textarea type="text" id="description" rows="2" cols="100" maxlength="120" required></textarea>
            </br>
            <input type="submit" id="submit-post" value="submit" >
          </div>
        </form>
      </div>
      </div>
      </div>


      <!--Donde se muestran todos los post-->
      <div id="post-container"></div>


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

  // CAMPOS INFORMACION DEL HEADER DEL USUARIO
  const name = divElement.querySelector('#name');
  const city = divElement.querySelector('#city');
  const email = divElement.querySelector('#email');
  const img = divElement.querySelector('#userphoto');
  const breed = divElement.querySelector('#breed');
  // CAMPOS FORMULARIO
  const postForm = divElement.querySelector('#post-user');
  const postContainer = divElement.querySelector('#post-container');
  // const descriptionPostText = divElement.querySelector('#description');

  // INPUT SUBIR FOTO DE POST
  const filePost = divElement.querySelector('#postPreview');
  // const imagePostPreview = divElement.querySelector('#postPreviewImage');
  const previewImage = divElement.querySelector('.post-preview-image');
  const defaultText = divElement.querySelector('.post-preview-text');

  // BOTONES
  const btnAddpost = divElement.querySelector('#addPost');
  const btnSingOff = divElement.querySelector('#signOff');
  const postSubmit = divElement.querySelector('#submit-post');

  // MODAL
  const modal = divElement.querySelector('#myModal');
  const span = divElement.getElementsByClassName('close')[0];

  // USER UID
  const getUserUid = JSON.parse(localStorage.getItem('usuario'));
  const uidUser = getUserUid.uid;
  console.log(uidUser);
  console.log(getUserUid.email);

  // RUTA STORAGE
  // const pathUserStorage = localStorage.getItem('pathStorage');
  const idUserStorage = localStorage.getItem('idUserPost');
  console.log('PATH STORAGGE');
  console.log(`hola ${idUserStorage}`);

  // VARIABLE EDITAR
  let editStatus = false;
  let idUser = '';

  // FUNCIONES
  // FUNCION LIMITAR EL NUMERO DE PALABRAS DEL POST
  // descriptionPostText.addEventListener('keypress', validateCharacterLength);
  // const maxLength = 120;
  // function maxCharacter() {
  //   if (descriptionPostText.value.length > descriptionPostText.maxLength) {
  //     alert('sifuncione');
  //     return false;
  //   }
  //   return true;
  // }

  // descriptionPostText.addEventListener('keypress', maxCharacter);

  // MODAL  CREAR POST
  btnAddpost.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  // CERRAR EL MODAL
  span.onclick = () => {
    modal.style.display = 'none';
    postForm.reset();
  };

  // CERRAR EL MODAL HACIENDO CLICK EN CUALQUIER PARTE DE LA VENTANA
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      postForm.reset();
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

  function storage() {
    const storageRef = firebase.storage().ref(
      // `${pathUserStorage}/
      // eslint-disable-next-line comma-dangle
      `user/${uidUser}/profile/${uidUser}`
    );
    storageRef
      .getDownloadURL()
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        // Or inserted into an <img> element
        urlProfileUser = url;
        img.src = url;
        // imgAvatarPost.src = url;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // MOSTRAR EN EL HEAD LA INFORMACION DEL USUARIO

  // Variables para almacenar la informacion del usuario y mostrarlo en cada post
  let nameUser = '';
  let cityUser = '';

  function loadInfo() {
    email.innerHTML = getUserUid.email;
    // await getUserData(uidUser)
    // Data usurio de firestore
    firebase
      .firestore()
      .collection('user')
      .doc(uidUser)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          name.innerHTML = data.Pet.PetName;
          nameUser = data.Pet.PetName;

          city.innerHTML = data.City;
          cityUser = data.City;

          breed.innerHTML = data.Pet.PetBreed;
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

  // FUNCION MOSTRAR MENSAJE INPUT POST

  // CREAR POST USUARIO
  // REF DEL DOC Y SUBCOLECCION DEL USUARIO/POST
  const myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
  async function savePostInfo(description, date) {
    await firebase
      .firestore()
      .collection('user')
      .doc(uidUser)
      .collection('post')
      .add({
        description,
        date,
      })
      // await addPostUserData(uidUser, { description })
      .then((postDoc) => {
        console.log('GUARDAR POST ');
        console.log(postDoc.id);
        const postIdUser = postDoc.id;
        console.log('JAJAJA');
        console.log(postIdUser);
        const file = filePost.files[0];
        // localStorage.setItem('idUserPost', postIdUser);
        imageStorage(
          // `${pathUserStorage}
          `user/${uidUser}/post/${postDoc.id}/`,
          postDoc.id,
          // eslint-disable-next-line comma-dangle
          file
        );
      });
  }
  // OBTENER LA SUBCOLECCION DE POST USUARIO
  const onGetPost = (callback) => {
    firebase
      .firestore()
      .collection('user')
      .doc(uidUser)
      .collection('post')
      .orderBy('date', 'desc')
      .onSnapshot(callback);
  };

  firebase
    .firestore()
    .collection('user')
    .doc(uidUser)
    .collection('post')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    });

  // eslint-disable-next-line no-shadow
  function createElementHTML(typeElement, object, father) {
    const element = document.createElement(typeElement);
    Object.keys(object).map(function (a) {
      element.setAttribute(a, object[a]);
      console.log('key with value: ' + a + ' = ' + object[a]);
    });
    father.appendChild(element);
    return element;
  }

  function createPost(postQ, url) {
    // console.log(dataPoke.length)
    let text;
    console.log(postQ.id, ' => ', postQ.data());
    // Create main div
    const post = createElementHTML(
      'div',
      { class: 'soulmates-post', id: postQ.id }, postContainer);
    // Modal confirmacion borrar post
    const deleteModalPost = createElementHTML(
      'div',
      { class: 'modal-delete', id: 'modal' }, postContainer);

    // Div contenedor top
    const topPostDiv = document.createElement(
      'div',
      { class: 'soulmates-post-top' },post);

    // Div user info
    const UserImageProfileDiv = document.createElement(
      'div',
      { class: 'soulmates-post-avatar' },topPostDiv);
    console.log(UserImageProfileDiv);
    // Imagen de perfil
    const imgUserProfile = createElementHTML(
      'img',
      { class: 'post-header-avatar', src: urlProfileUser }, UserImageProfileDiv );

    // Nombre Perfil
    const nameUserDiv = document.createElement('div');
    nameUserDiv.classList.add('soulmates-post-name');
    text = document.createTextNode(nameUser);
    nameUserDiv.appendChild(text);
    topPostDiv.appendChild(nameUserDiv);
    const cityUserDiv = document.createElement('div');
    cityUserDiv.classList.add('soulmates-post-title');
    text = document.createTextNode(cityUser);
    cityUserDiv.appendChild(text);
    topPostDiv.appendChild(cityUserDiv);

    // Body post
    // Div user info
    const postImageDiv = document.createElement('div');
    postImageDiv.classList.add('soulmates-post-image');
    post.appendChild(postImageDiv);

    // Imagen de perfil
    const imgPost = document.createElement('img');
    imgPost.classList.add('post-image-avatar');
    imgPost.setAttribute('src', url);
    postImageDiv.appendChild(imgPost);

    // Bottom post
    const bottomPostDiv = document.createElement('div');
    bottomPostDiv.classList.add('soulmates-post-bottom');
    post.appendChild(bottomPostDiv);

    // Descr post Div
    const descrPost = document.createElement('div');
    descrPost.classList.add('soulmates-post-desc');
    // P element Descr
    const pDesc = document.createElement('p');
    pDesc.classList.add('post-text');
    text = document.createTextNode(postQ.data().description);
    pDesc.appendChild(text);
    descrPost.appendChild(pDesc);
    bottomPostDiv.appendChild(descrPost);

    // Icons post Div
    const IconPost = document.createElement('div');
    IconPost.classList.add('soulmates-post-icons');
    bottomPostDiv.appendChild(IconPost);
    // Span icons
    const iconSpan = document.createElement('span');
    IconPost.classList.add('heart-counter');
    text = document.createTextNode('4');
    iconSpan.appendChild(text);
    IconPost.appendChild(iconSpan);
    // Button like incon
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('heart');
    IconPost.appendChild(buttonLike);
    // i element likes
    const iButtonLike = document.createElement('i');
    iButtonLike.name = 'like';
    iButtonLike.classList.add('fas', 'fa-heart');
    buttonLike.appendChild(iButtonLike);
    // Span Me encanta
    const mencantaSpan = document.createElement('span');
    // mencantaSpan.classList.add("heart-counter");
    text = document.createTextNode('Me encanta');
    mencantaSpan.appendChild(text);
    IconPost.appendChild(mencantaSpan);
    // Edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-post');
    editButton.setAttribute('data-id', postQ.id)
    editButton.textContent = 'Editar';
    IconPost.appendChild(editButton);
    // editButton.addEventListener("click", function () {
    //     editPostUserData(uidUser, postQ.id);
    //     editStatus = true;
    //     const data = postQ.data();
    //     idUser = postQ.id;
    //     post.description.value = data.description;
    //     modal.style.display = 'block';
    //     postSubmit.value = 'Actualizar';
    // })

    // Delete post
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-post');
   deleteButton.setAttribute('data-id', postQ.id)
    deleteButton.textContent = 'Borrar';
    IconPost.appendChild(deleteButton);
    // editButton.addEventListener("click", function () {
    //     editPostUserData(uidUser, postQ.id);
    //     editStatus = true;
    //     const data = postQ.data();
    //     idUser = postQ.id;
    //     post.description.value = data.description;
    //     modal.style.display = 'block';
    //     postSubmit.value = 'Actualizar';
    // })
  }
  // eslint-disable-next-line no-shadow
  const updatePost = (id, updatePost) =>
    firebase
      .firestore()
      .collection('user')
      .doc(uidUser)
      .collection('post')
      .doc(id)
      .update(updatePost);

  // FUNCION PARA MOSTRAR Y EDITAR POST
  // function getPost() {
  window.addEventListener('DOMContentLoaded', (e) => {
    firebase
      .firestore()
      .collection('user')
      .doc(uidUser)
      .collection('post')
      .get()
      .then((querySnapshot) => {
        postContainer.innerHTML = '';
        querySnapshot.forEach((postQ) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, ' => ', doc.data());
          // });
          //});
          // downloadUrl();
          //onGetPost((querySnapshot) => {

          // querySnapshot.forEach((postQ) => {
          // const postId = doc.data();
          // postId.id = doc.id;
          // console.log(postId)
          // doc.data() is never undefined for query doc snapshots

          console.log(postQ.id, ' => ', postQ.data());

          firebase
            .storage()
            .ref(
              // `${pathUserStorage}
              // eslint-disable-next-line comma-dangle
              `user/${uidUser}/post/${postQ.id}/${postQ.id}`
            )
            .getDownloadURL()
            .then((url) => {
              //             //postContainer.innerHTML +=
              //             `

              //             <div id="${postQ.id}" class="soulmates-post">
              //             <div class="soulmates-post-top">
              //               <div class="soulmates-post-avatar">
              //                 <img class="post-header-avatar" src="${urlProfileUser}">
              //               </div>
              //               <div class="soulmates-post-name">${nameUser}
              //               </div>
              //               <div class="soulmates-post-title">${cityUser}
              //               </div>
              //             </div>
              //             <div class="soulmates-post-image">
              //               <img id="${
              //   postQ.id
              // }-image" class="post-image-avatar" src="${url}">
              //             </div>
              //             <div class="soulmates-post-bottom">
              //               <div class="soulmates-post-desc">
              //                 <div class"description-post">
              //                   <p class="post-text">${postQ.data().description}</p>
              //                 </div>
              //               </div>
              //               <div class="soulmates-post-icons">
              //                 <span class="heart-counter">4</span><button class="heart"><i id="like"
              //                     class="fas fa-heart"></i></button><span>Me encanta</span>
              //                 <button class="edit-post" data-id="${postQ.id}">Editar
              //                 </button>
              //                 <button class="delete-post" data-id="${
              //   postQ.id
              // }">Borrar</button>
              //               </div>
              //             </div>
              //           </div>
              //            Contenedor modal confirmacion borrar post
              //           <div class="modal-delete" id="modal">
              //           </div>
              //         `;
              createPost(postQ, url);
              // VARIABLES
              const modalDelete = divElement.querySelector('.modal-delete');
              const btnDeletePost = divElement.querySelectorAll('.delete-post');
              const btnEditPost = divElement.querySelectorAll('.edit-post');
              // FUNCIONES

              // MODAL CONFIRMACION BORRAR POST
              // MOSTRAR EL MODAL
              function openModal() {
                modalDelete.classList.add('modal-open');
              }
              // CREAR MODAL Y FUNCIONALIDAD DE LOS BOTONES
              function createModal(id) {
                modalDelete.innerHTML = `
              <div class="modal-delete-container">
              <div class="modal-delete-content">
                <header class="delete-post-title">
                  <p> ¿Esta seguro de querer borrar la publicación? </p>
                </header>
                <div class="delete-post-content">
                  <p>Esta acción no se puede deshacer </p>
                </div>
              </div>
              <div class="modal-delete-box-button">
                <button class="cancel" id="cancel" class="btn-delete">Cancelar</button>
                <button id="deletePost" data-id="${id}" class="btn-delete delete-modal">Borrar</button>
              </div>
            </div>
  
  `;
                const cancelDeletePost = divElement.querySelector('.cancel');
                const deletePostBtnModal = divElement.querySelector(
                  '#deletePost'
                );
                // LISTENER DE BOTONES
                cancelDeletePost.addEventListener('click', () => {
                  modalDelete.classList.remove('modal-open');
                });
                deletePostBtnModal.addEventListener('click', () => {
                  console.log('otro intento');
                  console.log(id);
                  deletePostUserData(uidUser, id);
                  deletePostImageData(`user/${uidUser}/post/${id}/${id}`);
                  modalDelete.classList.remove('modal-open');
                });
              }

              // BOTON DELETE POST

              btnDeletePost.forEach((btnuno) => {
                btnuno.addEventListener('click', (e) => {
                  console.log(e.target.dataset.id);
                  const buttonId = e.target.dataset.id;
                  console.log(buttonId);
                  // console.log(`click${e.target.dataset.id}`);
                  openModal(createModal(buttonId));
                  // deletePostImageData(`user/${uidUser}/post/${postQ.id}/${postQ.id}`);
                });
              });

              // BOTON EDIT POST
              btnEditPost.forEach((btndos) => {
                btndos.addEventListener('click', (e) => {
                  console.log(e.target.dataset.id);
                  // const postUser = await editPost(e.target.dataset.id);
                  editPostUserData(uidUser, e.target.dataset.id);
                  // console.log(postUser.data());
                  const data = postQ.data();
                  editStatus = true;
                  idUser = e.target.dataset.id;
                  postForm.description.value = data.description;
                  modal.style.display = 'block';
                  postSubmit.value = 'Actualizar';
                });
              });
            });
        });
      });
  });

  // ENVIAR INFORMACION DEL POST
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = postForm.description;

    if (!editStatus) {
      await savePostInfo(description.value, myTimestamp);
    } else {
      updatePost(idUser, {
        description: description.value,
        myTimestamp,
      });
      editStatus = false;
      idUser = '';
      postSubmit.value = 'Guardar';
    }
    // inputPhoto.value ='';

    previewImage.style.display = 'none';

    postForm.reset();
    // getPost();
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
