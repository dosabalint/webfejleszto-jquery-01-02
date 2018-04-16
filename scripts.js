$(function() {
  // elem megkeresése
  let button = $('button#btn-random');

  button.click(function() {
    // rgb kód előállítása
    let max = 255;
    let red = Math.round(max * Math.random(), 0);
    let green = Math.round(max * Math.random(), 0);
    let blue = Math.round(max * Math.random(), 0);

    // rgb szín beálllítása
    button.css(
      'background-color',
      'rgb(' + red + ',' + green + ',' + blue + ')'
    );

    // avg
    let avg = (red + green + blue) / 3;
    if (avg / 255 > 0.5) {
      button.css('color', 'black');
    } else {
      button.css('color', 'white');
    }
  });
});
