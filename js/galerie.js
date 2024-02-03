const galeriImage = document.getElementById("allImages");

//recupere information des images
const titre = 'titre';
const imageSource = "/images/chef-939436_1280.jpg";
let monImage = getImage(titre, imageSource);
galeriImage.innerHTML= monImage;


function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return  ` <div class="col p-3">
                <div class="image-card text-white" >
                    <img src="${urlImage}" class="rounded w-100" />
                    <p class="titre-image">${titre}</p>
                <div class="action-image-buttons" data-show="admin">
                    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#SuppressionPhotoModal"><i class="bi bi-trash3"></i></button>
                </div>
                
                </div>
            </div>`;

}
