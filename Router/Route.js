export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/* []-> tout le monde peut y acceder
   ["disconnected"] -> page reserve au utilisateur deconnecte.
   ["connecter"] -> page reserve au utilisateur connecte.
   ["admin"] -> page reserver au utilisateur avec le role adminitrateur.
  ["client"] -> page reserve au utilisateur avec le role client.
  ["client", "admin"]-> page reserve au utilisateur avec le role client ou administrateur.
*/
