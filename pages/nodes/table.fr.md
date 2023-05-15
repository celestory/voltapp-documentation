Ce nœud affiche un tableau avec des lignes et des colonnes.

![preview](/documentation/nodes/table/preview.png)

Pour le remplir vous devez utiliser une liste d'objets dans l'attribut **Liste** comme ceci :

```
[
    {"name": "Vincent", "email": "vincent@voltapp.tech", "online": true},
    {"name": "Jeremie", "email": "jeremie@voltapp.tech", "online": false},
    {"name": "Jonathan", "email": "jonathan@voltapp.tech", "online": false},
]
```

Les colonnes "name", "email" et "online" seront automatiquement déduites de la liste d'objets.

Le nœud a deux nœuds enfants : "Entête" pour gérer l'affichage de l'entête de chaque colonne, et "Ligne" pour chaque ligne.
