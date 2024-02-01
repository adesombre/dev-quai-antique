import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "la galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup", "inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "mon compte", "/pages/auth/account.html", "/js/auth/account.js"),
    new Route("/editPassword", "changer mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "vos reservations", "/pages/reservations/allResa.html"),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html"),









];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";