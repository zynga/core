apibrowser.callback({
  "package": "api", 
  "basename": "test", 
  "content": [
    {
      "link": "api.test.Animal", 
      "name": "Animal", 
      "summary": "This is the Base Class in the api Browser&#39;s demos."
    }, 
    {
      "link": "api.test.Dog", 
      "name": "Dog", 
      "summary": "This Dog class lets you create a Dog that you can feed, walk and just do things that you are used to while playing Tamagotchi."
    }, 
    {
      "link": "api.test.Food", 
      "name": "Food", 
      "summary": "This is the generic Food class  It has only a weight property to let animals get fat while you overfeed them :)  1new api.test.Food(20); // will produce 20kg of food."
    }, 
    {
      "link": "api.test.Mammalian", 
      "name": "Mammalian", 
      "summary": "This is a generic Interface for Mammalian Animals  Those class of Animals have different things in common - compared to other animal classes like api.test.Fish."
    }, 
    {
      "link": "api.test.Module", 
      "name": "Module", 
      "summary": "Just a simple test module."
    }
  ], 
  "uses": [], 
  "main": {
    "type": "Package", 
    "name": "api.test"
  }, 
  "id": "api.test"
},'api.test');