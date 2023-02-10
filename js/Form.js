class Form {
  constructor() {
    this.input3 = createInput("").attribute("placeholder", "Your Phone Number");
    this.input = createInput("").attribute("placeholder", "Child's name");
    this.input1 = createInput("").attribute("placeholder", "Child's age");
    this.input2 = createInput("").attribute("placeholder", "Child's adress");
    this.playButton = createButton("Submit");
    //this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    
    this.input3.position(width / 2 - 110, height / 2 - 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.input1.position(width / 2 - 110, height / 2 - 20);
    this.input2.position(width / 2 - 110, height / 2 + 40);
    this.playButton.position(width / 2 - 90, height / 2 + 160);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //this.titleImg.class("gameTitle");
    this.input3.class("customInput");
    this.input.class("customInput");
    this.input1.class("customInput");
    this.input2.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
     
      </br>Thanks for helping! The information given by you will early go to an orphange`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
    player.addPlayer();//aa
      player.updateCount(playerCount); // BP
     player.getDistance(); //aa
    });
  }
  update() {
    var ChildIndex = "Child" + this.index;
    database.ref(ChildIndex).update({
      name: this.name,
  address: this.address,
  age: this.age,
  image: this.image
    });
  }
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
