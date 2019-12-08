function sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

    }

}

var bg = new sprite(0, 0, 7192, 600),
spriteSubmarino = new sprite(53,751,87,83);
spritePerdeu = new sprite(1582 ,598 ,298 ,266 ),
spriteJogar = new sprite(826,604 ,350 ,292 ),
spriteRecord = new sprite(1200,600 ,340 ,278 ),
spriteChao = new sprite(0,548,598,51),
spriteCeu = new sprite(0, 0, 7186, 152),
Escultura = new sprite(1952,711,132,179),
PedraAzul = new sprite(2099,801,669,78),
Mergulhador = new sprite(2098,675,102,77),
NavioBronze = new sprite(2399,749,90,145),
Torre = new sprite(2267,685,97,209),
Baleia =  new sprite(2391,656,163,69);