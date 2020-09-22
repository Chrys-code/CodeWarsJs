const counter = {
  cnt: 0,
  inc: function () {
    this.cnt++;
    console.log(this.cnt);
  },
};

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", counter.inc.bind(counter), false);
