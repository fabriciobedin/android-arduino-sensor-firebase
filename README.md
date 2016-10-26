### App Android that read sensor ldr data in arduino with Firmata, Johnny-five and Firebase
Aplicativo que recebe dados de um sensor de luz pelo firebase, esse sensor está conectado a um arduino, sendo lido pelo Firmata e Jhonny-five e enviando dados para o Firebase.

#### 1º - Ligar o sensor no arduino conforme imagem abaixo
<div class="img1" align="center">
  <img src="https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/photoresistor.png" width="450" height="450" al />
</div>

#### 2º - Abrir o Arduino, ir em File -> Example -> Firmata -> StandardFirmata
(caso você não tenha é só ir em arduino.cc, baixar e instalar)<br>
O Firmata faz a leitura do que estiver conectado ao arduino, sem precisar escrever 1 linha em C#.

#### 3º - Instalar o Node JS
Disponível em https://nodejs.org/

#### 4º - Executar esse comando no terminal para instalar o plugin Johnny-five
npm install johnny-five

#### 5º - Entrar no site do Johnny-Five pra copiar o código
http://johnny-five.io/api/light/<br>
o código pra leitura do sensor vai ser esse: <br>
<br>
<code>var five = require("johnny-five");</code><br>
<code>var board = new five.Board();</code><br>
<code>board.on("ready", function() {</code><br>
<code>     var light = new five.Light("A0");</code><br>
<code>     light.on("change", function() {</code><br>
<code>          console.log(this.level);</code><br>
<code>     });</code><br>
<code>});</code><br>

#### 6º - Criar um novo projeto no Firebase
https://console.firebase.google.com/

Após criado, vai em adicionar app e seleciona a opção WEB <br>
Vai abrir uma janela com um script, vai ser algo parecido com isso.. copie ele.<br>
<br>
<code>var config = {</code><br>
<code>    apiKey: "AIzaSyAFns36dXaJbFrRBYK_XsoU649M0loIPXo",</code><br>
<code>    authDomain: "cloudhomeautomation-cfde9.firebaseapp.com",</code><br>
<code>    databaseURL: "https://cloudhomeautomation-cfde9.firebaseio.com",</code><br>
<code>    storageBucket: "cloudhomeautomation-cfde9.appspot.com",</code><br>
<code>    messagingSenderId: "498048127162"</code><br>
<code>  };</code><br>
<code>firebase.initializeApp(config);</code><br>

#### 7º - Criar um novo arquivo script.js com algum editor (eu usei o Sublime Text)
• colar o código copiado no firebase pra esse arquivo<br>
• colar o código copiado do johnny-five no mesmo arquivo<br>
o script vai ficar parecido com o arquivo que está nesse projeto, dentro da pasta arduino, script.js<br>
https://github.com/fabriciobedin/ArduinoSensorWithFirebase/blob/master/arduino/script.js<br>
Eu apenas coloquei um "if" para apenas enviar os valores para o firebase quando forem alterados, ou seja, se não tiver variação de luz, ele mantém o mesmo valor e não fica enviando numeros iguais.

#### 8º - Abrir o terminal e acessar por ele o diretório onde o script.js foi salvo
exemplo: cd C:/Users/Fabricio/Desktop/Scripts<br>
Executar os seguintes comandos:<br>
• npm install -g firebase-tools<br>
(pra instalar o plugin do firebase)<br>
• firebase login<br>
(entre com os dados da sua conta google que você criou o projeto do firebase)<br>
(vai pedir pra confirmar umas coisas, pode ir colocando y e enter)<br>
• npm install firebase --save<br>
• firebase init<br>
• node script.js<br>
após executar isso, ele vai se conectar ao arduino e começar a passar os dados do sensor para o Firebase

#### 9º - Abrir o https://console.firebase.google.com/ e ver se os dados estão chegando na nuvem
Clicar na guia Database, e ver se apareceu uma chave com uma tag sensor com os dados dentro

#### 10º - Volte pro inicio do Firebase e selecione a opção Adicionar Projeto Android 
Tenha cuidado pra deixar o mesmo nome do pacote, no meu caso eu deixei esse:<br>
casca.upf.com.homeautomation

#### 11º - Após isso, você pode clonar esse projeto do github no seu Android Studio
E substituir o arquivo google-services.json que o Firebase gerou.

#### 12º - Pronto, pode executar o aplicativo que conforme a leitura do sensor vai aparecer a lampada acesa ou apagada
Caso a lampada não mude, apenas olhe o valor que o sensor está informando e mude no "if" da classe MainActivity



