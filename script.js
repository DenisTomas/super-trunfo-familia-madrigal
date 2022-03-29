var carta1 = {
  nome: "Mirabel",
  imagem:
    "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/11/encanto-doors-1s-mirabel-v31-mech4-fs.jpg",
  atributos: {
    Força: 6,
    Beleza: 8,
    Magia: 8
  }
};

var carta2 = {
  nome: "Luisa",
  imagem:
    "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2021/11/encanto-doors-1s-luisa-v24-mech3-fs.jpg",
  atributos: {
    Força: 10,
    Beleza: 7,
    Magia: 5
  }
};

var carta3 = {
  nome: "Bruno",
  imagem: "https://www.ixpap.com/images/2022/01/Bruno-Encanto-Wallpaper-6.jpg",
  atributos: {
    Força: 5,
    Beleza: 5,
    Magia: 10
  }
};

var carta4 = {
  nome: "Camilo",
  imagem:
    "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/11/07/1006486756-encantover8xlg.jpg",
  atributos: {
    Força: 4,
    Beleza: 5,
    Magia: 8
  }
};

var carta5 = {
  nome: "Antônio",
  imagem:
    "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/11/07/476470062-encantover15xlg.jpg",
  atributos: {
    Força: 2,
    Beleza: 7,
    Magia: 8
  }
};

var carta6 = {
  nome: "Abuela",
  imagem: "https://pbs.twimg.com/media/FDHtztbUUAIe1C5?format=jpg&name=large",
  atributos: {
    Força: 8,
    Beleza: 8,
    Magia: 10
  }
};

var carta7 = {
  nome: "Isabela",
  imagem:
    "https://static.wixstatic.com/media/737e63_4839b644b2c3425d8e2fc3eb13305368~mv2.jpg/v1/fill/w_1000,h_1481,al_c,q_90,usm_0.66_1.00_0.01/737e63_4839b644b2c3425d8e2fc3eb13305368~mv2.jpg",
  atributos: {
    Força: 5,
    Beleza: 10,
    Magia: 7
  }
};

var carta8 = {
  nome: "Pepa",
  imagem:
    "https://geekantenado.com/wp-content/uploads/2021/11/252124281_412001850482135_957068468192611263_n.jpg",
  atributos: {
    Força: 5,
    Beleza: 7,
    Magia: 8
  }
};

var carta9 = {
  nome: "Pepa",
  imagem:
    "https://static.wixstatic.com/media/737e63_864000ce68bb4d82b12a83d7c84ec8f7~mv2.jpg/v1/fill/w_1000,h_1481,al_c,q_90,usm_0.66_1.00_0.01/737e63_864000ce68bb4d82b12a83d7c84ec8f7~mv2.jpg",
  atributos: {
    Força: 4,
    Beleza: 6,
    Magia: 9
  }
};

var carta10 = {
  nome: "Julieta",
  imagem:
    "https://uploads.metropoles.com/wp-content/uploads/2021/11/03184345/julieta-e-agustin-encanto.jpg",
  atributos: {
    Força: 6,
    Beleza: 7,
    Magia: 8
  }
};

var cartas = [carta1, carta2, carta3, carta7, carta10];
var cartasNPC = [carta4, carta5, carta6, carta8, carta9];
var cartaMaquina;
var cartaJogador;
var divResultadoElement = document.getElementById("resultado");
var btnSortearElement = document.getElementById("btnSortear");

function sortearCarta() {
  if (cartas.length == 0) {
    alert(
      "Você não tem mais carta para jogar...pix para denistomas03@gmail.com para liberar mais cartas"
    );
    return;
  }

  if (cartasNPC.length == 0) {
    alert(" parabéns, você rapelou a máquina");
    return;
  }
  var numeroCartaMaquina = parseInt(Math.random() * cartasNPC.length);
  cartaMaquina = cartasNPC[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];

  btnSortearElement.disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnReset").disabled = true;
  exibirCartas(false);
}

function reset() {
  btnSortearElement.disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnReset").disabled = true;
  //reset result
  divResultadoElement.innerHTML = "";
  //reset Player Card
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("carta-subtitle").innerHTML = "";
  //reset NPC Card
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("opcoesNPC").innerHTML = "";
  document.getElementById("carta-subtitleNPC").innerHTML = "";
  showDeck();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

//Remove List Element
function newArrayWithoutCard(originalArray, cardToRemove) {
  return originalArray.filter(function (ele) {
    return ele != cardToRemove;
  });
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (atributoSelecionado == undefined) {
    divResultadoElement.innerHTML =
      "<p class='resultado-final'>Choose an attribute</p>";
    return;
  }

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    cartas.push(cartaMaquina);
    cartasNPC = newArrayWithoutCard(cartasNPC, cartaMaquina);
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    cartasNPC.push(cartaJogador);
    cartas = newArrayWithoutCard(cartas, cartaJogador);
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultadoElement.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnReset").disabled = false;
  exibirCartas(true);
  console.log(cartas.length);
  console.log(cartasNPC.length);
}

function exibirCartas(fromJogar) {
  if (fromJogar == false) {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br></input>";
    }

    var nomePersonagem = `<p class="carta-subtitle" id="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML =
      moldura + nomePersonagem + tagHTML + opcoesTexto + "</div>";
  }

  if (fromJogar == true) {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoesNPC' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }

    var nomePersonagem = `<p class="carta-subtitle" id="carta-subtitleNPC">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML =
      moldura + nomePersonagem + tagHTML + opcoesTexto + "</div>";
  }
}

function showDeck() {
  var showDeckElement = document.getElementById("showDeck");
  showDeckElement.innerHTML = "";

  cartas.forEach(function (item, i) {
    var newGainedCard = "";
    newGainedCard += "<img class=newCard src=" + item.imagem + ">";

    showDeckElement.innerHTML += newGainedCard;
  });
}

//excuções iniciais quando JS é carregado
showDeck();
