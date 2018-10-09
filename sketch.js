function setup() {
  createCanvas(800, 600);
  noLoop();
}


var colorList = ['#59BEBD',
  '#924C69',
  '#EE7D98',
  '#16404F'
]

function draw() {


  background(0);


  for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {

      fill(random(colorList));

      if (y % (50 * 2) == 0) {
        ellipse(x, y, 30, 30);
      } else {
        ellipse(x + 50 / 2, y, 40, 40);
      }
    }
  }

  fill(255,255,255);
textSize(40);
textFont('Andale Mono')
text("/ Click to change color",85,560);
noLoop();
}

function mousePressed() {
  redraw();
}
