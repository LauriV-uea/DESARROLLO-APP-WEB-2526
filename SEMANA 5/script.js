//Obtener los elmentos del DOM necesarios para la aplicación 


const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null; 


// para agreggar imagen

addImageBtn.addEventListener("click", () => {
    console.log("Botón Agregar Imagen presionado");
    const url = imageUrlInput.value;

    if (url === "")  {
        alert("Ingrese una URL válida ⚠️");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click" , () => {
        if (selectedImage) {
            selectedImage.classList.remove("selected");
        }
        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// eliminar la imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
    if(selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    } else {
        alert("Seleccione una imagen primero ✋");
    }
});


// Atajo de teclado (delete)

document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" && selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    }
});
