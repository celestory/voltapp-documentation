The node allows you to dynamically display the same node multiple times based on the items in the list attribute.

![preview](/images/list/preview.png)

It contains two children nodes:

-   **Item**, which corresponds to the node that displays an item in the list (it is repeated automatically for each item)
-   **Empty**, which is the node to display when the list contains no items

The **List** node declares two variables in each item:

-   **item** which contains the data corresponding to the item (it can be a variable of type text but also a more complex object)
-   **index**, a variable of type number which corresponds to the position of the item in the list (the first being 0 and so on)

By default, **List** is created with a list of text, and each item contains a Text connected to the **item** variable, thus a text. However, it is possible to create lists containing more complex objects.

Finally it's important to know that the node doesn't take care of the container appeareance. In other words, you can either create a list within a **Section**, a **Grid**, or any other container node.
