// Posição da Bolinha
let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2

// Velocidade da bolinha
let velocidadexBolinha = 3
let velocidadeyBolinha = 3

//Posição da Raquete
let xRaquete = 5
let yRaquete = 200
let compRaquete = 20
let alturaRaquete = 100


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  circle(xBolinha,yBolinha,diametro);
  
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
 
  // if = se
  
  if (xBolinha+raio>600  || xBolinha-raio<0 ) {
    velocidadexBolinha *= -1
  }
  if (yBolinha+raio>400 || yBolinha-raio<0 ) {
    velocidadeyBolinha *= -1
  }
  rect(xRaquete, yRaquete, compRaquete, alturaRaquete);
  
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
  
  if (xBolinha - raio < xRaquete + compRaquete && yBolinha-raio< yRaquete+alturaRaquete && yBolinha+ raio>yRaquete) {
    velocidadexBolinha *= -1
  }
  
  
}
