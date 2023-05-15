Ce nœud permet d'afficher dynamiquement le même nœud plusieurs fois en fonction des items de l'attribut **Liste**.

![preview](/documentation/nodes/list/preview.png)

Il contient 2 nœuds enfants :

-   **Item** qui correspond au nœud qui affiche un item (il est répété automatiquement pour chaque item)
-   **Empty** qui est affiché lorsque la liste ne contient aucun item

Le nœud **Liste** déclare également 2 variables sur chaque nœud **Item**:

-   **item** correspondant à la donnée de l'item courant dans la liste
-   **index** une variable de type nombre correspondant à la position de l'item dans la liste (0, 1, 2, 3, etc.)

Par défaut, le nœud **Liste** est créé avec une liste de textes, chaque item contenant un **Texte** connecté à la variable **item**. Cependant, il est tout à fait possible de créer des listes avec des objets plus complexes et d'autres nœuds enfants.

Pour finir, il faut savoir que le nœud **Liste** ne prend pas en charge l'apparence du contenant. Vous pouvez donc utiliser une liste avec une **Section**, une **Grille** ou tout autre contenant.
