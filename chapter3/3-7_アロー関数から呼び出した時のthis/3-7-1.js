let obj = {
  val: 'hoge',
  show: function() {
    console.log(this); // Object

    let fncA = function() {
      console.log(this);
    };
    fncA();

    let fncB = () => {
      console.log(this);
    };
    fncB();
  }
};

obj.show();