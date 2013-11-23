
import $ from 'jquery';

export class MyClass {
  constructor() {
    $(document.body).css('background-color', 'grey');
    this.writeMessage('es6 class method');
  }
  writeMessage(msg) {
    $(document.body).html(msg);
  }
}

