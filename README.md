What code draws the blades of grass?

"line(x, height-10, x+random(-10, 10), height-10-random(h));"

What code makes the "lawnmower" come by? How often does it come by?
  
  "if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }"

What's the point of the h variable?

The height of the grass

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

it sets both source of where the grass is growing from and how far its tip will be from the source
