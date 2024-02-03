import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "la galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
    new Route("/signup", "inscription", "/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
    new Route("/account", "mon compte", "/pages/auth/account.html", ["client","admin"],"/js/auth/account.js"),
    new Route("/editPassword", "changer mot de passe", "/pages/auth/editPassword.html",["client","admin"]),
    new Route("/allResa", "vos reservations", "/pages/reservations/allResa.html",["client"]),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html",["client"]),









];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";