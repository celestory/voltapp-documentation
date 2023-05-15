This node displays a table with rows and columns.

![preview](/images/table/preview.png)

To fill it you need to have a list of objects, like so:

```
[
    {"name": "Vincent", "email": "vincent@voltapp.tech", "online": true},
    {"name": "Jeremie", "email": "jeremie@voltapp.tech", "online": false},
    {"name": "Jonathan", "email": "jonathan@voltapp.tech", "online": false},
]
```

The columns "name", "email", and "online" would be automatically deduced from the list of objects.

The node has 2 children nodes, "Header" for how the header of each column should be displayed and "Row" for how the rows would be displayed.
