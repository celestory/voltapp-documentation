For now, there is no build-in internationalization feature within Voltapp. However, there is an easy hack to make it work using variables.

Simply create an object variable **messages**, containing all your texts like so:

```
blogTitle: "Welcome on my blog!"
navHome: "Home"
navAbout: "About"
navContact: "Contact"
```

Then create similare objects for each language (**messageFR**, **messageES** and so on). You can then use the texts from your object into the different texts of your app for those you want to translate. Finally, simply assign **messages** to **messagesFR** if you want to change to language to french for instance.
