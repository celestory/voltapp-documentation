Pour l'instant, il n'y a pas de fonctionnalité integrée à Voltapp pour gérer l'internationalisation. Cependant il est quand même possible de gérer plusieurs langues en tirant partie de la puissance des variables.


Pour cela, créez un objet variable **message**, avec l'ensemble des textes à internationaliser :

```
blogTitle: "Welcome on my blog!"
navHome: "Home"
navAbout: "About"
navContact: "Contact"
```

Ensuite, vous créer des objets similaires pour chaque langues (**messageFR**, **messageES**, etc.). Vous pouvez ensuite utiliser les textes de l'objet **message** partout dans l'app. Enfin, lorsque vous voulez changer la langue, assignez simplement la variable **messages** à une des variables de langue, **messagesFR** pour le français par exemple.
