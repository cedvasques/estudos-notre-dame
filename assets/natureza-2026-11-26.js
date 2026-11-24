/* Ciências da Natureza · 3º ano · 26/11/2026 */
const NATUREZA3_EXAM = (() => {
  const areas = [
    {name:'O formato e a superfície da Terra', emoji:'🌍', description:'Formato, superfície, mapa-múndi, globo e fotografias de satélite.'},
    {name:'A água no planeta Terra', emoji:'💧', description:'Hidrosfera, estados da água, nascentes, atmosfera e rios voadores.'},
    {name:'Os sons à nossa volta', emoji:'🎵', description:'Origem dos sons, vibração, instrumentos, voz e comunicação.'},
    {name:'A audição e o som', emoji:'👂', description:'Caminho do som, acessibilidade, vibrações e saúde auditiva.'},
    {name:'A luz e os objetos', emoji:'🔦', description:'Fontes, reflexão, materiais, espelhos e formação de sombras.'},
    {name:'A luz e a visão', emoji:'👁️', description:'Ilusões de ótica, caminho da luz e cuidados com a visão.'}
  ];
  const lessons = [];
  const flashcards = [];
  const questions = [];

  const facts = (title, rows) => ({type:'facts', title, rows});
  const comparison = (title, items) => ({
    type:'comparison', title, items:items.map(([title, text]) => ({title, text}))
  });
  const add = (areaIndex, topic, title, text, front, back, bookPages, exercises, material) => {
    const {name:area, emoji} = areas[areaIndex];
    lessons.push({area, topic, title, emoji, text, bookPages, material});
    flashcards.push([front, back]);
    exercises.forEach(([q, correct, distractors, exp, stimulus], i) => {
      const a = [2, 0, 3, 1][questions.length % 4];
      const opts = [...distractors];
      opts.splice(a, 0, correct);
      questions.push({id:`cnnov-${topic}-${i + 1}`, area, topic, topicLabel:title, bookPages, q, opts, a, exp, material:stimulus});
    });
  };

  const mapLegend = facts('Legenda de um mapa imaginário', [
    ['Azul', 'Oceanos'], ['Verde', 'Terras baixas'], ['Triângulo marrom', 'Montanha']
  ]);
  const globeAndMap = comparison('Duas representações da Terra', [
    ['A', 'Uma folha com todos os continentes desenhados lado a lado.'],
    ['B', 'Uma bola com continentes e oceanos que pode girar em um suporte.']
  ]);

  add(0,'formato','O formato da Terra',
    'A Terra faz parte do Sistema Solar, que tem o Sol como estrela. Vista de longe, a Terra tem formato aproximadamente esférico, parecido com o de uma bola. Fotografias feitas do espaço permitem observar seu contorno arredondado.',
    'Qual é o formato geral da Terra?', 'Aproximadamente esférico, parecido com uma bola.',[134],[
    ['Qual objeto serve melhor para representar o formato geral da Terra?', 'Uma bola.', ['Um prato raso.', 'Uma caixa de sapatos.', 'Um cone.'], 'O formato geral da Terra é arredondado em todas as direções, como o de uma bola.'],
    ['Que registro ajuda a reconhecer o formato da Terra inteira?', 'Uma fotografia da Terra feita de muito longe no espaço.', ['Uma foto de perto de um morro.', 'Um mapa das ruas de um bairro.', 'Um desenho do caminho até a escola.'], 'Um registro feito de longe pode mostrar o contorno arredondado do planeta.'],
    ['No Sistema Solar, qual é a estrela em torno da qual a Terra gira?', 'O Sol.', ['A Lua.', 'Marte.', 'A própria Terra.'], 'O Sol é a estrela do Sistema Solar. A Terra é um dos planetas que giram em torno dele.']]);

  add(0,'superficie','Uma superfície irregular',
    'De longe, a Terra se parece com uma bola. De perto, sua superfície tem áreas altas e baixas, além de oceanos, montanhas, campos, florestas e cidades. Por isso, podemos dizer que o formato geral é arredondado e que a superfície é irregular.',
    'A superfície da Terra é toda lisa como uma bola de brinquedo?', 'Ela é irregular e tem diferentes alturas e formas, como montanhas, vales e fundos de oceanos.',[134],[
    ['Uma maquete redonda tem morros e vales no lado de fora. Que ideia ela representa?', 'A Terra é aproximadamente esférica e sua superfície é irregular.', ['A Terra tem formato de disco e superfície lisa.', 'A Terra é uma esfera feita só de montanhas.', 'A Terra é plana onde há água.'], 'O contorno geral arredondado pode ter irregularidades em sua superfície.'],
    ['Que observação ajuda a reconhecer que a superfície da Terra é irregular?', 'Um vale fica mais baixo do que as montanhas ao redor.', ['O mesmo vale recebe nomes diferentes.', 'Uma foto do vale foi feita pela manhã.', 'O vale aparece em dois mapas.'], 'A diferença de altura entre o vale e as montanhas é uma irregularidade do terreno.'],
    ['Qual conjunto reúne elementos que encontramos na superfície da Terra?', 'Oceanos, montanhas e cidades.', ['Sol, estrelas e galáxias.', 'Lua, planetas e cometas.', 'Apenas campos e florestas.'], 'A superfície inclui áreas cobertas de água, formas do terreno e construções humanas.']]);

  add(0,'planisferio','Mapa-múndi ou planisfério',
    'O mapa-múndi representa a superfície terrestre numa área plana, em papel ou na tela. Também é chamado de planisfério. É bidimensional: tem comprimento e largura na representação plana. Pode mostrar todos os continentes e oceanos de uma só vez.',
    'Como se chama o mapa plano que mostra a superfície do planeta?', 'Mapa-múndi ou planisfério.',[135,137,150],[
    ['Qual representação é um planisfério?', 'A.', ['B.', 'As duas, pois ambas ocupam espaço no suporte.', 'Nenhuma, pois um planisfério só mostra um país.'], 'A mostra o mundo numa superfície plana. B descreve um globo.',globeAndMap],
    ['A turma quer localizar todos os continentes numa única folha. Qual recurso resolve isso?', 'Um mapa-múndi.', ['Uma fotografia de uma praça.', 'Um mapa do corredor da escola.', 'Um desenho de uma montanha.'], 'O mapa-múndi pode representar o conjunto dos continentes numa página plana.'],
    ['Um mapa antigo foi desenhado numa placa de argila. Um mapa atual aparece na tela. O que eles têm em comum?', 'São formas planas de representar lugares.', ['Os dois são fotografias feitas do espaço.', 'Os dois giram em torno de um eixo.', 'Os dois são feitos do mesmo material.'], 'O suporte pode mudar. Tanto a placa desenhada quanto o mapa na tela apresentam a representação num plano.']],globeAndMap);

  add(0,'legenda','Ler cores e símbolos no mapa',
    'A legenda explica o que cada cor ou símbolo representa. Consulte-a antes de interpretar. Um triângulo pode representar uma montanha em um mapa e servir para outra coisa em outro. A posição do símbolo mostra onde fica o elemento representado.',
    'Para que serve a legenda de um mapa?', 'Para explicar o significado das cores e dos símbolos usados no mapa.',[135,137],[
    ['Neste mapa, como reconhecer uma montanha?', 'Procurando um triângulo marrom.', ['Procurando uma área azul.', 'Procurando uma área verde.', 'Procurando um círculo azul.'], 'Neste mapa, o triângulo marrom é o símbolo que a legenda atribui à montanha.',mapLegend],
    ['Um mapa de trilhas tem círculos amarelos. Qual é o primeiro passo para saber o que eles significam?', 'Consultar a legenda do mapa.', ['Supor que indicam sempre uma cidade.', 'Contar os círculos sem ler o mapa.', 'Procurar pelo mesmo símbolo no céu.'], 'O significado depende da legenda que acompanha aquele mapa.'],
    ['O que uma mancha verde representa neste mapa?', 'Uma área de terras baixas.', ['Uma floresta, pois verde sempre indica vegetação.', 'Um oceano.', 'Uma montanha.'], 'A legenda informa que, neste exemplo, verde significa terras baixas.',mapLegend]],mapLegend);

  add(0,'globo','Globo terrestre e eixo',
    'O globo é um modelo tridimensional da Terra. Ele tem comprimento, largura e profundidade, como uma bola. Em um suporte, o globo pode girar em torno de um eixo e mostrar as regiões que estavam viradas para o outro lado.',
    'Por que um globo terrestre é tridimensional?', 'Porque tem comprimento, largura e profundidade. Ele representa a Terra com volume.',[136,137],[
    ['Qual representação tem volume e pode girar no suporte para mostrar o outro lado?', 'B.', ['A.', 'As duas.', 'Nenhuma.'], 'B é o globo terrestre. Girá-lo muda a parte que fica voltada para quem observa.',globeAndMap],
    ['Uma criança só vê a frente de um globo. Como pode ver as regiões que estão atrás?', 'Girando o globo em torno de seu eixo.', ['Cobrindo o globo com papel.', 'Colocando uma régua sobre o globo.', 'Virando a folha de um mapa diferente.'], 'Ao girar o globo no suporte, outras partes de sua superfície entram no campo de visão.'],
    ['Qual frase compara corretamente um globo terrestre e um mapa no papel?', 'O globo tem volume e o mapa representa a superfície num plano.', ['Os dois têm o mesmo formato de bola.', 'Só o globo pode indicar oceanos.', 'O mapa tem volume e o globo é plano.'], 'O globo é tridimensional. O desenho no papel é uma representação bidimensional.']]);

  add(0,'satelites','Fotografias e imagens de satélite',
    'Uma fotografia é um registro bidimensional capturado com câmera. Satélites artificiais orbitam a Terra e usam câmeras ou outros sensores para registrar a superfície. Suas imagens podem mostrar rios, estradas e plantações. Comparar registros de datas diferentes ajuda a acompanhar mudanças.',
    'Que recurso permite comparar a área de uma cidade antes e depois de uma enchente?', 'Imagens de satélite da mesma área, obtidas antes e depois do evento.',[136,137,138],[
    ['Uma equipe quer descobrir até onde a água chegou numa enchente. Qual informação mais ajuda?', 'Registros de satélite do mesmo lugar antes e durante a inundação.', ['Um globo sem detalhes da cidade.', 'O nome da estrela mais próxima.', 'Um mapa sem rios de outro estado.'], 'A comparação das imagens permite observar onde a superfície ficou coberta pela água.'],
    ['De onde vêm os registros usados para montar uma vista de satélite de uma plantação?', 'De sensores em aparelhos que orbitam a Terra.', ['De uma régua embaixo do solo.', 'De um desenho feito numa bola.', 'De microfones montados no campo.'], 'Os sensores do satélite registram informações sobre a superfície a partir do espaço.'],
    ['O que distingue uma fotografia de uma cidade de um mapa desenhado da mesma cidade?', 'A fotografia registra uma imagem da cena. O mapa organiza informações com símbolos e traçados.', ['O mapa é obrigatoriamente tridimensional.', 'A fotografia só mostra áreas de água.', 'O mapa precisa ser fotografado do mesmo ponto.'], 'A imagem registra a aparência da área, e o mapa seleciona e representa informações para um objetivo.']]);

  const waterLandscape = facts('Observações de uma paisagem', [
    ['Nas montanhas', 'Há neve nos pontos mais frios.'],
    ['No vale', 'Um lago recebe água de um riacho.'],
    ['No ar', 'Há vapor de água misturado ao ar.']
  ]);

  add(1,'hidrosfera','A água da Terra e a hidrosfera',
    'A água cobre a maior parte da superfície da Terra. Chamamos de hidrosfera o conjunto de toda a água do planeta, em estado líquido, sólido ou gasoso. Ela é essencial aos seres vivos e participa de processos como a formação de chuvas e a regulação do clima.',
    'O que faz parte da hidrosfera?', 'Toda a água da Terra, incluindo oceanos, gelo, água subterrânea e vapor no ar.',[140,151],[
    ['Quais partes da paisagem descrita pertencem à hidrosfera?', 'Neve, água do lago e do riacho e vapor de água.', ['Apenas o lago e o riacho.', 'Apenas montanhas e rochas.', 'Todas as rochas e todo o ar, com ou sem água.'], 'Neve, água líquida e vapor são formas de água presentes na Terra.',waterLandscape],
    ['Se você pudesse observar toda a superfície terrestre, veria mais área de água ou de terra emersa?', 'Mais área coberta por água.', ['Mais terra emersa.', 'Exatamente a mesma área de cada uma.', 'Apenas terra emersa se estiver de dia.'], 'A água, principalmente a dos oceanos, cobre a maior parte da superfície terrestre.'],
    ['Qual exemplo mostra por que a água é essencial para os seres vivos?', 'Uma muda precisa de água para crescer.', ['Uma rocha tem a mesma forma no sol e na sombra.', 'Uma lente pode desviar a luz.', 'Uma corda de violão pode vibrar.'], 'Plantas e outros seres vivos precisam de água para manter seus processos vitais.']],waterLandscape);

  add(1,'liquida','Água líquida e onde encontrá-la',
    'A água líquida está nos oceanos, mares, lagos, rios, na chuva e em reservatórios subterrâneos. É o estado físico mais abundante da água da Terra, e a maior parte dessa água está nos oceanos. Rios, lagos e reservas subterrâneas podem fornecer água para as pessoas.',
    'Onde está a maior parte da água líquida da Terra?', 'Nos oceanos.',[140,141,144,150],[
    ['Qual conjunto tem apenas exemplos de água líquida?', 'Água do mar, gotas de chuva e água de um riacho.', ['Vapor de água, neve e gelo.', 'Água do lago, neve e gelo.', 'Chuva, vapor invisível e gelo.'], 'As gotas de chuva e a água que corre no riacho ou está no mar são líquidas.'],
    ['Onde está a maior reserva de água líquida no planeta?', 'O conjunto dos oceanos.', ['Todos os pequenos riachos.', 'As gotas que caem numa tempestade.', 'Os lagos de uma região fria.'], 'Os oceanos reúnem a maior parte da água líquida da Terra.'],
    ['Uma cidade capta água de um lago para abastecimento. Qual afirmação descreve essa reserva?', 'A água do lago é uma reserva de água líquida.', ['A água do lago é toda vapor.', 'A água do lago só passa a existir quando captada.', 'A água do lago é sólida por estar parada.'], 'Um lago contém água líquida mesmo quando sua superfície parece parada.']]);

  add(1,'subterranea','Infiltração, água subterrânea e nascentes',
    'Parte da chuva se infiltra, ou seja, entra no solo por poros e frestas. A água pode ficar armazenada abaixo da superfície. Em alguns pontos ela volta a sair naturalmente, formando uma nascente. Poços também podem alcançar a água subterrânea.',
    'O que acontece em uma nascente?', 'Água subterrânea sai naturalmente para a superfície e pode alimentar um riacho ou rio.',[140,141],[
    ['Depois de chover, parte da água penetrou no chão. Como se chama essa passagem para dentro do solo?', 'Infiltração.', ['Evaporação.', 'Congelamento.', 'Reflexão.'], 'Infiltração é a entrada da água no solo. Ela pode alimentar reservas subterrâneas.'],
    ['Na base de um morro, a água brota do chão e forma um córrego. O que há no início do córrego?', 'Uma nascente.', ['Um iceberg.', 'Uma geleira.', 'Uma gota em forma de vapor.'], 'A nascente é o ponto em que a água subterrânea volta à superfície naturalmente.'],
    ['Um poço é aberto até atingir uma reserva de água. De onde vem essa água captada?', 'De baixo da superfície, onde há água armazenada.', ['De uma nuvem que fica dentro do poço.', 'Da sombra projetada pelo poço.', 'De água congelada na abertura do poço.'], 'Poços podem alcançar reservatórios abastecidos, por exemplo, pela água da chuva que se infiltrou.']]);

  add(1,'solida','Água sólida, geleiras e icebergs',
    'Neve e gelo são água no estado sólido. A neve pode se acumular em regiões frias e se compactar, formando gelo de geleiras. Encontramos geleiras nos polos e em montanhas altas. Um iceberg é um grande bloco de gelo que se desprende de uma geleira ou plataforma de gelo e flutua no mar.',
    'Como diferenciar um iceberg de uma geleira em uma montanha?', 'O iceberg é um bloco de gelo flutuante no mar. A geleira é uma grande massa de gelo formada pelo acúmulo de neve.',[140,142,144,150,151],[
    ['Num pico frio vemos neve, e na encosta há uma geleira. Qual é o estado da água nessas duas formas?', 'Sólido.', ['Líquido nas duas.', 'Gasoso nas duas.', 'Líquido na neve e gasoso na geleira.'], 'Tanto a neve quanto o gelo de uma geleira são água sólida.'],
    ['Um grande pedaço de gelo se solta de uma massa de gelo e passa a flutuar no mar. O que ele pode formar?', 'Um iceberg.', ['Uma nascente.', 'Uma nuvem de vapor invisível.', 'Um rio subterrâneo.'], 'Um iceberg é formado por gelo que se desprendeu de uma massa de gelo e flutua no mar.'],
    ['Em uma montanha muito fria, a neve se acumula durante anos. O que ela pode formar ao se compactar?', 'Gelo de uma geleira.', ['Água salgada de oceano.', 'Apenas vapor de água.', 'A água líquida de uma nascente imediatamente.'], 'Sob o peso das camadas novas, a neve antiga pode se compactar e virar gelo.']]);

  add(1,'aquecimento','Aquecimento global e gelo terrestre',
    'Atividades humanas, como queimar combustíveis e desmatar, aumentam a quantidade de gases que retêm calor na atmosfera. O aquecimento do planeta pode acelerar o derretimento de geleiras sobre a terra. Quando a água desse gelo vai para os oceanos, contribui para a elevação do nível do mar.',
    'Como o derretimento de geleiras sobre a terra pode alterar o nível do mar?', 'A água do gelo derretido chega aos oceanos e contribui para elevar o nível do mar.',[142],[
    ['Uma geleira sobre terra perde gelo. A água do derretimento corre até o oceano. Qual efeito pode ocorrer?', 'O nível do mar pode se elevar.', ['O mar perde toda a água que recebeu.', 'Os rios deixam de correr em direção ao mar.', 'A água que chega ao mar permanece toda sólida.'], 'A água desse gelo que estava sobre a terra é acrescentada ao oceano.'],
    ['Qual ação pode aumentar a quantidade de gases que retêm calor na atmosfera?', 'Queimar combustíveis em muitos veículos.', ['Observar uma montanha num mapa.', 'Medir a sombra de uma árvore.', 'Escutar uma música em volume baixo.'], 'A queima de combustíveis libera gases que contribuem para o aquecimento global.'],
    ['Por que a elevação do nível do mar importa para quem vive no litoral?', 'Pode aumentar o risco de alagamentos em áreas baixas.', ['Impede que chova nas cidades litorâneas.', 'Transforma automaticamente toda praia em geleira.', 'Faz a água deixar de existir em cidades costeiras.'], 'Com o mar mais alto, a água alcança áreas costeiras baixas com maior facilidade.']]);

  add(1,'vapor','Vapor de água e umidade do ar',
    'O vapor de água é água no estado gasoso. Ele se mistura ao ar e é invisível. Um ar mais úmido contém mais vapor do que um ar mais seco na mesma temperatura. Uma nuvem visível é formada por gotinhas líquidas, cristais de gelo ou ambos.',
    'Uma nuvem visível é o mesmo que vapor de água?', 'O vapor é invisível. O que vemos na nuvem são gotículas, cristais de gelo ou ambos.',[140,143,144,150,151],[
    ['Há água na forma de gás no ar de um dia de céu limpo?', 'Pode haver. O vapor de água no ar é invisível.', ['Só existe água no ar quando podemos vê-la.', 'O vapor de água é a parte azul do céu.', 'Ela só existe no ar na forma de neve.'], 'A ausência de nuvens visíveis não indica ausência de vapor misturado ao ar.'],
    ['Em dois lugares de mesma temperatura, um tem o ar mais úmido. Qual diferença ajuda a explicar isso?', 'O ar mais úmido tem mais vapor de água.', ['O ar mais úmido tem menos vapor de água.', 'O ar mais úmido contém apenas gelo.', 'Nos dois lugares o ar é feito só de água.'], 'Na mesma temperatura, maior umidade indica maior quantidade de vapor de água no ar.'],
    ['Ao abrir um congelador aparece uma neblina branca. O vapor de água é essa parte branca?', 'A parte visível tem gotinhas muito pequenas. O vapor, como gás, é invisível.', ['Sim. Todo gás fica branco ao entrar em contato com o ar.', 'Sim. O vapor só aparece quando está congelado.', 'A parte branca é o ar inteiro mudando de cor.'], 'O ar úmido esfria e parte da água pode virar pequenas gotículas que conseguimos ver.']]);

  add(1,'evaporacao','Evaporação e mudanças de estado',
    'A água muda de estado quando ganha ou perde calor. Na evaporação, passa do estado líquido para o gasoso e se mistura ao ar. Isso pode ocorrer à temperatura ambiente, como quando uma poça seca. No derretimento, a água passa de sólida para líquida.',
    'Para onde vai a água de uma superfície molhada que seca ao ar?', 'Ela evapora e se mistura ao ar na forma de vapor de água.',[142,143,144,150],[
    ['Uma lousa molhada seca sem ninguém enxugá-la. Que mudança ajuda a explicar isso?', 'Água líquida virou vapor e se misturou ao ar.', ['Água líquida virou gelo e caiu da lousa.', 'Vapor virou água líquida na lousa.', 'A água se transformou em madeira.'], 'A secagem pode ocorrer pela evaporação da água que molhava a lousa.'],
    ['Uma pedra de gelo ficou num pires e virou uma poça. Qual mudança ocorreu primeiro?', 'De sólido para líquido.', ['De líquido para sólido.', 'De gasoso para líquido.', 'De líquido para gasoso.'], 'O gelo derreteu, formando água líquida no pires.'],
    ['Uma bacia rasa fica na varanda. Horas depois há menos água e o fundo não tem furos. O que pode ter acontecido?', 'Parte da água líquida evaporou.', ['Parte da água virou areia no fundo.', 'Todo o vapor do ar congelou na bacia.', 'A água virou gelo invisível.'], 'A água da superfície pode virar vapor mesmo sem ferver.']]);

  add(1,'rios-voadores','Floresta e rios voadores',
    'Na Floresta Amazônica, as plantas liberam vapor de água pelas folhas. A evaporação da água dos rios e do solo também umedece o ar. Ventos transportam essa umidade para outras regiões. Essas correntes de ar úmido são chamadas de rios voadores, e a umidade pode contribuir para a formação de chuva.',
    'O que os chamados rios voadores transportam?', 'Umidade, principalmente vapor de água, carregada por correntes de ar.',[143,145],[
    ['Como uma floresta pode ajudar a levar água para um lugar distante sem um rio no chão ligando os dois lugares?', 'Ela libera vapor, e os ventos levam parte da umidade.', ['Ela envia blocos de gelo por baixo da superfície.', 'Ela usa a sombra das árvores para empurrar água líquida.', 'Ela transforma chuva em rocha e depois em mar.'], 'A água liberada pelas plantas mistura-se ao ar, que pode se deslocar para outras regiões.'],
    ['O ar úmido chega a outra região, forma nuvens e finalmente chove. Em que estado está a água das gotas de chuva?', 'Líquido.', ['Sólido.', 'Gasoso.', 'No mesmo estado que a neve.'], 'A corrente leva umidade. Quando chove, as gotas que chegam ao chão são água líquida.'],
    ['Qual caminho representa um rio voador?', 'Vapor liberado pela floresta → transporte por ventos → possibilidade de chuva em outra região.', ['Água subterrânea → poço → cano.', 'Gelo de geleira → iceberg → mar.', 'Água do rio → represa → torneira.'], 'O nome se refere ao transporte de umidade pela atmosfera.']]);

  add(1,'atmosfera','A atmosfera e a água no ar',
    'A atmosfera é a camada de gases que envolve a Terra. Ela contém o ar que muitos seres vivos respiram e ajuda a regular a temperatura do planeta. O vapor de água está misturado aos gases da atmosfera e também faz parte da hidrosfera, porque é água.',
    'Por que o vapor de água no ar faz parte da hidrosfera?', 'Porque a hidrosfera inclui toda a água do planeta, até a que está no estado gasoso na atmosfera.',[140,143,151],[
    ['Num céu limpo não se vê todo o gás que envolve a Terra. Qual nome damos a essa camada de gases?', 'Atmosfera.', ['Hidrosfera.', 'Geleira.', 'Planisfério.'], 'A atmosfera envolve a Terra. Muitos de seus gases não são diretamente visíveis.'],
    ['Qual frase descreve uma função da atmosfera?', 'Ela ajuda a regular a temperatura do planeta.', ['Ela armazena toda a água dos oceanos como gás.', 'Ela é a camada de rochas e montanhas.', 'Ela representa a superfície numa folha.'], 'A camada de gases participa da regulação da temperatura e contém o ar que respiramos.'],
    ['Que elemento pode fazer parte da hidrosfera e estar misturado ao ar da atmosfera?', 'Vapor de água.', ['Cascalho do fundo do rio.', 'Rocha de uma montanha.', 'Madeira de uma árvore.'], 'O vapor é água gasosa presente no ar. Por ser água, ele integra a hidrosfera.']]);

  add(2,'origem','Sons naturais e sons de atividades humanas',
    'Podemos classificar um som pela origem. Ondas no mar, chuva e canto de aves são exemplos naturais. Motores, campainhas, vozes em uma conversa e instrumentos tocados por pessoas produzem sons ligados à atividade humana. Uma mesma paisagem pode ter sons dos dois tipos.',
    'Em uma praça, como classificar um trovão e a campainha de uma bicicleta?', 'O trovão é de origem natural. A campainha é um som produzido por uma atividade humana.',[14,15,26],[
    ['Quais sons têm origem natural?', 'O coaxar de uma rã e o vento nas folhas.', ['A buzina de um ônibus e uma sirene.', 'Os toques de um celular e um motor ligado.', 'O vento nas folhas e o som de uma furadeira.'], 'O coaxar vem de um animal e o outro som vem da ação do vento, sem depender de uma atividade humana.'],
    ['Na mesma rua ouvem-se um grilo e um portão automático. Qual classificação está correta?', 'O grilo produz som natural. O portão automático produz som ligado a uma atividade humana.', ['Os dois sons são naturais porque foram ouvidos ao ar livre.', 'O grilo produz som de origem humana. O portão produz som natural.', 'Os dois sons têm a mesma origem porque são da mesma rua.'], 'A origem depende do que gera cada som. Na mesma rua podem ocorrer sons dos dois tipos.'],
    ['Uma abelha passa perto de um jardim, e ouve-se um zumbido. Depois se ouve uma furadeira. Qual dos sons é natural?', 'O zumbido da abelha.', ['O da furadeira.', 'Os dois, porque foram ouvidos ao ar livre.', 'Nenhum, porque ambos podem ser intensos.'], 'O zumbido é o som da abelha. O outro vem de uma máquina usada por pessoas.']]);

  add(2,'altura','Sons graves e agudos',
    'A altura de um som indica se ele é grave ou agudo. Um som grave lembra uma nota grossa. Um som agudo lembra uma nota fina. Quando a fonte vibra mais depressa, emite uma altura mais aguda. Uma nota aguda pode ser tocada baixinho.',
    'Como chamamos uma nota fina e uma nota grossa?', 'A nota fina é aguda. A nota grossa é grave.',[14,16],[
    ['Numa gravação, um apito faz uma nota bem fina e um tambor faz uma nota grossa. Como são essas alturas?', 'O apito é agudo, e o tambor é grave.', ['O apito é grave, e o tambor é agudo.', 'Os dois são agudos porque os dois são instrumentos.', 'Os dois são graves porque foram gravados.'], 'A nota fina é aguda e a nota grossa é grave.'],
    ['Um aparelho passa a vibrar mais vezes por segundo. Que mudança na altura do som costuma ocorrer?', 'O som fica mais agudo.', ['O som fica mais grave.', 'O som passa a ser apenas mais longo.', 'O som é sempre interrompido.'], 'Vibrações mais rápidas produzem um som mais agudo.'],
    ['Um instrumento toca uma nota bem fina e baixinha. Quais palavras descrevem o som?', 'Agudo e fraco.', ['Grave e intenso.', 'Agudo e necessariamente intenso.', 'Grave e fraco.'], 'Fino indica altura aguda. Baixinho indica intensidade fraca.']]);

  add(2,'intensidade','Sons intensos e fracos',
    'A intensidade está ligada ao quanto um som é forte ou fraco. Aumentar o volume torna o som mais intenso. Um mesmo som pode ser confortável em um volume e incômodo em outro. Sons e sensações também variam conforme a pessoa e a situação.',
    'O que muda quando aumentamos o volume da mesma nota?', 'A intensidade aumenta. A nota pode continuar com a mesma altura.',[14,25,26],[
    ['Mila ouve a mesma nota duas vezes. A segunda sai com mais volume. O que aumentou?', 'A intensidade.', ['A altura da nota.', 'A duração da música, obrigatoriamente.', 'O número de instrumentos, obrigatoriamente.'], 'Mais volume indica maior intensidade, mesmo quando a nota permanece a mesma.'],
    ['Um som quase não se ouve em uma biblioteca silenciosa. O que podemos dizer sobre a intensidade com que ele chega?', 'É fraca.', ['É necessariamente aguda.', 'É necessariamente grave.', 'É sempre mais forte do que a de uma buzina próxima.'], 'Um som difícil de perceber porque chega baixinho é um exemplo de intensidade fraca.'],
    ['Duas crianças escutam uma música no recreio. Uma acha agradável, e a outra se incomoda. Como entender isso?', 'O mesmo som pode causar sensações diferentes.', ['As duas precisam ter escutado músicas distintas.', 'Todo som agradável é agudo.', 'O incômodo prova que o som era grave.'], 'As sensações provocadas por um som variam entre as pessoas e dependem da situação.']]);

  add(2,'vibracao','O que faz um som começar?',
    'Um som é produzido quando algo vibra, ou seja, faz movimentos repetidos de vai e volta. Uma régua flexível pode soar se sua ponta solta for puxada e liberada. O material, a forma e as partes que vibram ajudam a explicar por que instrumentos diferentes têm sons diferentes.',
    'O que uma régua que treme e uma corda tocada têm em comum?', 'As duas vibram e podem produzir som com esse movimento.',[16,17],[
    ['A ponta de uma régua solta da mesa vai para cima e para baixo e produz som. Como se chama esse movimento repetido?', 'Vibração.', ['Absorção de luz.', 'Evaporação.', 'Infiltração.'], 'A ponta se move rapidamente de um lado para o outro. Esse movimento repetido é uma vibração.'],
    ['Uma criança toca um elástico esticado. Ao segurá-lo, o som para. Por quê?', 'O elástico para de vibrar.', ['O elástico fica transparente.', 'A mão aumenta a vibração até ela sumir.', 'O elástico passa a produzir luz.'], 'Segurar o elástico interrompe a vibração que produzia o som.'],
    ['Duas peças, uma de metal e outra de madeira, fazem sons diferentes ao serem batidas. O que ajuda a explicar isso?', 'O material das peças influencia o modo como elas vibram.', ['O ouvido distingue a cor das peças.', 'As duas peças só podem produzir o mesmo som.', 'A sombra das peças determina o som.'], 'O material e a forma de um objeto interferem em como ele vibra e no som que produz.']]);

  const instruments = facts('Três maneiras de produzir som', [
    ['Corda', 'Uma corda esticada vibra.'], ['Sopro', 'O ar soprado faz o ar do instrumento ou uma de suas partes vibrar.'],
    ['Percussão', 'O objeto é batido, raspado ou chacoalhado.']
  ]);

  add(2,'instrumentos','Corda, sopro e percussão',
    'Nos instrumentos de corda, como o violino, as cordas vibram. Nos de sopro, como a flauta, o ar que entra ajuda a produzir a vibração. Nos de percussão, como o tambor, o som é produzido ao bater, raspar ou chacoalhar. A classificação depende de como o som é produzido.',
    'Como classificar um instrumento que soa quando é chacoalhado?', 'É de percussão, pois chacoalhar é uma maneira de produzir a vibração da percussão.',[16,17,26],[
    ['Uma pessoa pinça fios esticados de um instrumento para fazê-los vibrar. A que família ele pertence?', 'Corda.', ['Sopro.', 'Percussão.', 'Depende somente do material dos fios.'], 'O som se origina nos fios esticados que vibram, isto é, nas cordas.'],
    ['Em um instrumento de palheta, soprar faz a palheta vibrar. Qual é a família desse instrumento?', 'Sopro.', ['Corda.', 'Percussão.', 'Depende somente da parte externa ser de metal.'], 'O ar soprado provoca a vibração. É um instrumento de sopro.'],
    ['Numa apresentação, tocam flauta, violoncelo e um chocalho. Qual é a ordem das famílias?', 'Sopro → corda → percussão.', ['Corda → sopro → percussão.', 'Sopro → percussão → corda.', 'Percussão → corda → sopro.'], 'Sopra-se na flauta, vibram as cordas do violoncelo e chacoalha-se a percussão.']],instruments);

  add(2,'corporal','Percussão corporal e ritmo',
    'Na percussão corporal, o corpo é usado como instrumento. Podemos combinar palmas, estalos de dedos, batidas leves nas coxas ou batidas dos pés no chão. Ao repetir uma sequência dessas ações, podemos acompanhar ou criar um ritmo.',
    'Como produzir percussão corporal sem instrumentos?', 'Combine sons do corpo, como palmas e batidas leves nas coxas, e repita a sequência.',[18,19],[
    ['Qual grupo usa apenas percussão corporal?', 'O grupo que alterna palmas e batidas leves nas coxas.', ['O grupo que toca flauta e triângulo.', 'O grupo que só toca cordas de violão.', 'O grupo que liga um rádio e permanece parado.'], 'Nesse grupo, os próprios corpos produzem cada som.'],
    ['Uma sequência começa com palma, palma, pé; palma, palma, pé. Qual som inicia a próxima repetição?', 'Palma.', ['Pé.', 'Estalo.', 'O som de uma flauta.'], 'A sequência se repete na mesma ordem. Depois do pé, o padrão recomeça com a palma.'],
    ['Uma turma quer substituir o tambor por percussão corporal. Qual ideia funciona?', 'Marcar o ritmo com palmas.', ['Tocar uma gaita.', 'Usar o alto-falante de um celular.', 'Raspar dois pedaços de madeira.'], 'Palmas produzem som usando o corpo como instrumento.']]);

  add(2,'voz','Voz, ar e pregas vocais',
    'A fala permite transmitir informações. Para falar ou cantar com voz, o ar que sai dos pulmões passa pelas pregas vocais na garganta e faz com que elas vibrem. Os sons produzidos podem ser modificados pelos movimentos da língua e dos lábios.',
    'O que vibra na garganta quando cantamos uma nota?', 'As pregas vocais, com a passagem do ar.',[20],[
    ['Ao cantar de boca fechada, uma criança sente uma vibração no pescoço. O que produz essa vibração da voz?', 'As pregas vocais.', ['O pavilhão auricular.', 'O tímpano.', 'A pupila.'], 'As pregas vocais ficam na garganta e vibram quando o ar passa durante a produção da voz.'],
    ['Numa explicação sobre a voz, qual frase completa a ideia “o ar passa pela garganta e…”?', '… faz as pregas vocais vibrarem.', ['… faz a retina ouvir.', '… entra na orelha para criar palavras.', '… reflete luz para fora da boca.'], 'A passagem do ar põe as pregas vocais em vibração ao falar ou cantar.'],
    ['Em um jogo, Clara diz “a bola está atrás do banco” para orientar o time. Para que ela usou a voz?', 'Para comunicar uma informação.', ['Para mudar o tamanho da bola.', 'Para transformar a bola em fonte de luz.', 'Para produzir uma imagem no ar.'], 'A fala fez os colegas receberem uma informação sobre onde procurar a bola.']]);

  add(2,'animais','Como os animais usam sons',
    'Muitos animais se comunicam com sons. Eles podem avisar sobre perigo, chamar outros do grupo, atrair parceiros ou sinalizar a presença em um território. Alguns fazem isso com vocalizações, como o miado do gato e o coaxar de um sapo. Há também animais que produzem sons ao bater ou vibrar outras partes do corpo.',
    'Que mensagens um animal pode transmitir por som?', 'Pode chamar o grupo, alertar sobre perigo, sinalizar território ou atrair parceiros.',[15,21],[
    ['Um pássaro faz um chamado quando vê um gavião. Os outros se escondem. O que o som provavelmente comunicou?', 'Um alerta de perigo.', ['A indicação exata da hora.', 'Que havia um novo instrumento tocando.', 'Um convite para aumentar o volume de uma música.'], 'O chamado e a reação do grupo indicam que o som funcionou como aviso.'],
    ['Um animal faz um som repetido e outro da mesma espécie vem até ele durante a época de reprodução. Que função o som pode ter?', 'Atrair um parceiro.', ['Evaporar água do ambiente.', 'Refletir luz para as folhas.', 'Impedir que o som chegue longe.'], 'Alguns animais usam sinais sonoros para que possíveis parceiros os encontrem.'],
    ['Uma ave repete batidas num tronco e outras da mesma espécie mantêm distância. O que essas batidas podem sinalizar?', 'Que aquela área está ocupada.', ['Que a ave perdeu a capacidade de produzir sons.', 'Que o tronco virou um corpo luminoso.', 'Que o som só serve para chamar filhotes.'], 'Sons repetidos podem indicar a presença de um animal em seu território.']]);

  const hearingRoute = facts('Do ambiente ao cérebro', [
    ['Entrada', 'O pavilhão auricular capta e ajuda a guiar o som.'],
    ['Vibrações', 'O tímpano vibra, move os ossículos e a vibração chega à cóclea.'],
    ['Sinais', 'A cóclea transforma a informação em sinais. O nervo auditivo os leva ao cérebro.']
  ]);

  add(3,'pavilhao','Audição e pavilhão auricular',
    'A audição é o sentido que permite perceber os sons. O pavilhão auricular é a parte externa visível da orelha. Ele ajuda a captar e guiar os sons para o canal da orelha. Fazer uma concha com a mão atrás da orelha pode ajudar a captar o som vindo de uma direção.',
    'Qual é o papel do pavilhão auricular?', 'Captar e ajudar a guiar o som do ambiente para o canal da orelha.',[22,23,27],[
    ['Que parte visível da orelha ajuda a captar o som de alguém que está falando?', 'Pavilhão auricular.', ['Cóclea.', 'Nervo auditivo.', 'Retina.'], 'O pavilhão é a parte externa visível, que ajuda a captar e guiar o som.'],
    ['Ao colocar a mão em concha atrás da orelha, o que uma pessoa tenta fazer?', 'Captar melhor o som de uma direção.', ['Enviar luz para dentro da orelha.', 'Retirar os ossículos do lugar.', 'Transformar o ar em água.'], 'A mão em concha pode ajudar a direcionar mais som para a entrada da orelha.'],
    ['Qual sentido usamos para reconhecer pelo som que o sinal do recreio tocou?', 'Audição.', ['Visão.', 'Tato.', 'Olfato.'], 'A audição permite perceber o sinal sonoro mesmo sem ver a origem dele.']]);

  add(3,'timpano-ossiculos','Tímpano e ossículos',
    'O som percorre o canal da orelha e faz vibrar o tímpano, uma membrana. Essa vibração movimenta pequenos ossos chamados ossículos. Eles ajudam a transmitir a vibração para a orelha interna, onde está a cóclea.',
    'O que ocorre com o tímpano e os ossículos ao chegar um som?', 'O tímpano vibra e movimenta os ossículos, que transmitem a vibração adiante.',[22,23,27],[
    ['Qual estrutura funciona como uma membrana que vibra depois que o som passa pelo canal da orelha?', 'Tímpano.', ['Pavilhão auricular.', 'Nervo óptico.', 'Pupila.'], 'O tímpano é uma membrana que vibra quando o som chega a ele.'],
    ['O tímpano começou a vibrar. Que estruturas recebem essa vibração logo depois?', 'Os ossículos.', ['A íris e a pupila.', 'As pregas vocais.', 'As sobrancelhas.'], 'Os ossículos são pequenos ossos que se movem com a vibração do tímpano.'],
    ['O que os ossículos levam para a orelha interna?', 'A vibração que veio do tímpano.', ['A luz que veio dos olhos.', 'O ar que sai do nariz.', 'Uma imagem pronta para o cérebro.'], 'Os ossículos transmitem o movimento do tímpano até a entrada da orelha interna.']]);

  add(3,'coclea-nervo','Cóclea, nervo auditivo e cérebro',
    'A vibração movimenta o líquido no interior da cóclea. Células sensíveis ali ajudam a transformar esse movimento em sinais. O nervo auditivo leva os sinais ao cérebro. O cérebro os interpreta, permitindo perceber e reconhecer sons.',
    'Que estrutura leva os sinais da cóclea até o cérebro?', 'O nervo auditivo. O cérebro interpreta os sinais que recebe.',[22,23,27],[
    ['Em que estrutura da orelha o movimento do líquido participa da formação dos sinais sonoros?', 'Na cóclea.', ['No pavilhão auricular.', 'Na íris.', 'No tímpano.'], 'O movimento do líquido na cóclea estimula células que ajudam a formar os sinais enviados ao cérebro.'],
    ['Qual estrutura conduz os sinais da orelha ao cérebro?', 'Nervo auditivo.', ['Nervo óptico.', 'Pavilhão auricular.', 'Prega vocal.'], 'O nervo auditivo conduz ao cérebro a informação que começou com a vibração sonora.'],
    ['O que permite reconhecer que o som veio de uma campainha conhecida?', 'O cérebro interpreta os sinais que recebeu.', ['O tímpano dá um nome a cada som.', 'A retina reconhece a origem pelo som.', 'O pavilhão auricular manda a campainha tocar.'], 'A identificação do som acontece quando o cérebro interpreta a informação enviada pelo nervo auditivo.']]);

  add(3,'caminho-som','O caminho do som na audição',
    'O som é captado pelo pavilhão auricular e segue ao tímpano. A vibração passa pelos ossículos e chega à cóclea. Dali seguem sinais pelo nervo auditivo até o cérebro, que interpreta a informação. Esse percurso costuma ocorrer muito rapidamente.',
    'Qual é a sequência da audição, da parte externa até a interpretação?', 'Pavilhão auricular → tímpano → ossículos → cóclea → nervo auditivo → cérebro.',[22,23,27],[
    ['Qual é a ordem do caminho ligado à audição?', 'Pavilhão → tímpano → ossículos → cóclea → nervo auditivo → cérebro.', ['Tímpano → pavilhão → cóclea → ossículos → cérebro.', 'Pavilhão → nervo auditivo → tímpano → ossículos → cérebro.', 'Cóclea → tímpano → pavilhão → ossículos → cérebro.'], 'A orelha capta e transmite a vibração à cóclea, e o nervo auditivo leva os sinais ao cérebro.'],
    ['Qual par está na ordem correta depois de o tímpano vibrar?', 'Ossículos → cóclea.', ['Cóclea → ossículos.', 'Nervo auditivo → pavilhão auricular.', 'Cérebro → tímpano.'], 'Os ossículos recebem a vibração do tímpano antes que ela chegue à cóclea.'],
    ['Qual é a última etapa para uma pessoa perceber o sentido de um som ouvido?', 'O cérebro interpreta os sinais.', ['O pavilhão capta o som.', 'O tímpano começa a vibrar.', 'Os ossículos passam a vibração adiante.'], 'Após a captação e a transmissão, o cérebro interpreta as informações que chegam pelo nervo auditivo.']],hearingRoute);

  add(3,'libras','Libras e acesso à comunicação',
    'Libras é a Língua Brasileira de Sinais. Ela usa sinais, movimentos corporais e expressões faciais, e é usada por muitas pessoas surdas. A interpretação em Libras amplia o acesso a aulas e eventos. Aparelhos auditivos podem ajudar algumas pessoas a perceber melhor certos sons.',
    'Como uma pessoa intérprete de Libras pode ajudar em uma apresentação?', 'Pode traduzir para Libras o que é dito, ampliando o acesso para quem usa essa língua.',[23],[
    ['Em um evento, a janela com uma intérprete de Libras serve para quê?', 'Dar acesso às falas para quem usa Libras.', ['Deixar o áudio mais alto.', 'Mostrar apenas o título do evento.', 'Fazer o papel de um aparelho auditivo.'], 'A pessoa intérprete traduz o que é dito para a Língua Brasileira de Sinais.'],
    ['De quais recursos Libras faz uso?', 'Sinais, movimentos e expressões faciais.', ['Apenas de sons emitidos pela boca.', 'Somente de letras lidas em voz alta.', 'Apenas de batidas iguais em uma mesa.'], 'Libras é uma língua visual que também utiliza expressões e movimentos para comunicar.'],
    ['Por que facilitar o acesso a aparelhos auditivos pode ser importante?', 'Algumas pessoas conseguem perceber melhor sons com o aparelho adequado.', ['Qualquer aparelho substitui Libras para todas as pessoas.', 'Todos precisam de um aparelho para participar de uma conversa.', 'O aparelho transforma a luz do ambiente em sinais de vídeo.'], 'Quando indicado, o aparelho pode ampliar a percepção de sons para quem tem perda auditiva.']]);

  add(3,'vibracoes-tato','Sentir música por vibrações',
    'Vibrações ligadas aos sons também podem ser sentidas pelo tato. Uma superfície que vibra no ritmo de uma música pode ajudar uma pessoa a acompanhar as batidas. Pessoas surdas podem participar de experiências musicais de várias maneiras, inclusive pelo contato com essas vibrações.',
    'Como alguém pode acompanhar batidas sem depender da audição?', 'Pode sentir as vibrações da música pelo tato, por exemplo numa superfície que vibra com as batidas.',[24],[
    ['Em uma atividade, um estudante apoia a mão em uma mesa que vibra no ritmo de um tambor. Que sentido o ajuda a acompanhar o ritmo?', 'Tato.', ['Olfato.', 'Paladar.', 'Visão, obrigatoriamente.'], 'O tato permite perceber com a mão o movimento repetido da superfície.'],
    ['Uma equipe quer tornar o ritmo de uma música perceptível pelo tato. Qual ideia ajuda?', 'Usar uma plataforma que vibra junto com as batidas.', ['Esconder todos os instrumentos atrás de uma cortina.', 'Repetir o título da música num cartaz sem indicar o ritmo.', 'Mudar a cor do chão antes de começar.'], 'A plataforma transmite vibrações que podem ser sentidas pelo corpo.'],
    ['Uma pessoa registra duas batidas com a mão apoiada numa superfície que treme. O que chegou até a mão?', 'Vibrações da superfície.', ['Luz produzida pelas mãos.', 'Sinais levados pelo nervo óptico.', 'A imagem projetada do instrumento.'], 'A superfície se movimentou com as batidas e o tato percebeu o movimento.']]);

  add(3,'higiene-auditiva','Higiene da parte externa da orelha',
    'Para a higiene do dia a dia, limpe com cuidado somente a parte externa da orelha. Uma toalha macia e úmida pode ajudar. Inserir hastes, lápis ou outros objetos no canal pode machucar estruturas necessárias à audição, como o tímpano.',
    'Como limpar a orelha com segurança no dia a dia?', 'Limpe suavemente a parte externa e evite introduzir objetos no canal.',[25],[
    ['Qual atitude cuida da orelha após o banho?', 'Limpar suavemente a parte externa com uma toalha macia.', ['Inserir o canto da toalha no canal.', 'Introduzir uma haste para alcançar o tímpano.', 'Usar a ponta de um lápis para limpar por dentro.'], 'A higiene de rotina deve se limitar à parte externa da orelha.'],
    ['Por que guardar a ponta de um lápis longe do canal da orelha?', 'Ela pode machucar o canal e outras estruturas importantes para a audição.', ['Ela faz a orelha produzir luz.', 'Ela muda a cor da íris.', 'Ela protege o tímpano de vibrações.'], 'Objetos introduzidos no canal podem ferir a orelha e danificar o tímpano.'],
    ['Na aula, alguém sugere limpar a orelha por dentro com uma haste. Qual resposta demonstra cuidado?', 'A limpeza de rotina é só na parte externa. Objetos dentro do canal podem machucar.', ['Uma haste deve alcançar o fundo para limpar bem.', 'A haste é mais segura quando empurrada com força.', 'O canal deve ser limpo com a ponta de um grampo.'], 'Manter objetos fora do canal protege as estruturas delicadas por onde o som passa.']]);

  add(3,'ruido','Poluição sonora e proteção auditiva',
    'Poluição sonora é o excesso de barulho no ambiente. Sons muito intensos e exposições prolongadas podem prejudicar a audição. Ouça com volume moderado, faça pausas e fique longe de caixas de som muito altas. Em trabalhos barulhentos, usam-se protetores auditivos apropriados.',
    'Que duas atitudes protegem a audição ao usar fones?', 'Manter um volume moderado e fazer pausas.',[25,26],[
    ['Uma pessoa usa fones no volume máximo por muito tempo. Qual mudança ajuda a proteger sua audição?', 'Reduzir o volume e fazer pausas.', ['Aumentar ainda mais o volume.', 'Ouvir o dobro do tempo sem pausa.', 'Trocar de música e manter o volume máximo.'], 'Diminuir a intensidade e o tempo de exposição reduz o risco para a audição.'],
    ['Perto de uma escola, máquinas e buzinas geram barulho excessivo durante horas. Como chamamos o problema?', 'Poluição sonora.', ['Ilusão de ótica.', 'Poluição luminosa.', 'Aquecimento provocado por luz refletida.'], 'O excesso de ruídos no ambiente caracteriza a poluição sonora.'],
    ['Por que uma pessoa que trabalha perto de máquinas muito barulhentas usa protetores auditivos adequados?', 'Para reduzir o som intenso que chega às orelhas.', ['Para transformar sons graves em agudos.', 'Para aumentar o tempo de exposição sem reduzir o barulho.', 'Para que o cérebro deixe de interpretar todos os sons.'], 'A proteção diminui a exposição a ruídos intensos que podem prejudicar a audição.']]);

  add(4,'reflexao','A luz permite enxergar objetos',
    'A luz é uma forma de energia que possibilita a visão. Para enxergar um objeto que não emite luz, precisamos que uma fonte o ilumine. Parte da luz que atinge o objeto é refletida e chega aos olhos. Na escuridão completa, essa luz não chega aos olhos.',
    'Qual é o caminho da luz quando vemos uma cadeira iluminada?', 'Fonte de luz → cadeira → olhos. A cadeira reflete parte da luz que recebe.',[30,31,40],[
    ['Uma caixa colorida fica num local totalmente escuro. Por que não dá para ver sua cor?', 'A caixa não recebe luz que possa refletir até os olhos.', ['A caixa deixa de ter cor para sempre.', 'Os olhos precisam emitir luz para a caixa.', 'A superfície da caixa vira um espelho.'], 'Para ver a caixa, luz de alguma fonte precisa atingi-la e parte dessa luz precisa chegar aos olhos.'],
    ['À noite, Léo aponta a lanterna para uma caneca e consegue vê-la. Qual é o caminho da luz nesse caso?', 'Lanterna → caneca → olhos de Léo.', ['Olhos de Léo → caneca → lanterna.', 'Caneca → lanterna → olhos de Léo.', 'Olhos de Léo → lanterna → caneca.'], 'A lanterna ilumina a caneca. A luz refletida pela caneca chega aos olhos de Léo.'],
    ['O que ocorre na reflexão quando a luz bate na superfície de uma bola?', 'Parte da luz sai da superfície em outra direção.', ['Toda a luz vira som.', 'A bola sempre começa a emitir luz própria.', 'Os olhos passam a produzir a luz que ilumina a bola.'], 'Na reflexão, parte da luz volta a se propagar a partir da superfície atingida.']]);

  add(4,'fontes','Fontes naturais e artificiais de luz',
    'Uma fonte de luz é algo que emite luz. O Sol e os relâmpagos são exemplos naturais. Lâmpadas, lanternas e telas acesas são fontes artificiais, criadas por pessoas. A iluminação artificial permite atividades à noite e em lugares onde a luz do Sol é insuficiente.',
    'Qual é a diferença entre a luz de um relâmpago e a de uma lanterna ligada?', 'O relâmpago é uma fonte natural. A lanterna ligada é uma fonte artificial.',[31],[
    ['Qual par apresenta primeiro uma fonte natural e depois uma artificial?', 'Uma estrela e uma luminária acesa.', ['Uma lanterna ligada e um relâmpago.', 'Uma placa de madeira e uma árvore.', 'Uma luminária acesa e um computador ligado.'], 'A estrela produz luz naturalmente. A luminária ligada é uma fonte feita por pessoas.'],
    ['O corredor está escuro à noite. Qual ação fornece luz artificial ao corredor?', 'Acender as lâmpadas do teto.', ['Esperar a próxima manhã.', 'Colocar uma folha branca no chão sem acender nada.', 'Colocar um espelho num canto sem luz.'], 'As lâmpadas acesas emitem luz e iluminam o espaço.'],
    ['Quais são duas fontes naturais de luz?', 'Sol e relâmpago.', ['Sol e lanterna ligada.', 'Relâmpago e lâmpada acesa.', 'Lanterna ligada e tela acesa.'], 'O Sol e o relâmpago emitem luz por processos naturais.']]);

  add(4,'luminoso','Corpos luminosos e corpos iluminados',
    'Um corpo luminoso emite luz própria, como um abajur aceso. Um corpo iluminado recebe luz de outra fonte e reflete parte dela. A Lua vista da Terra brilha porque reflete a luz do Sol. Um mesmo objeto, como a lanterna, pode emitir luz quando está ligado e só refletir luz quando está desligado.',
    'Por que vemos a Lua mesmo que ela não produza luz própria?', 'Ela reflete a luz do Sol, e parte dessa luz chega aos nossos olhos.',[30,31,34],[
    ['Uma tela ligada está ao lado de um caderno sobre a mesa. Qual está emitindo luz?', 'A tela ligada.', ['O caderno.', 'Os dois, porque podem ser vistos.', 'A mesa, porque sustenta os objetos.'], 'A tela produz luz. O caderno pode ser visto porque reflete luz que recebe.'],
    ['Uma lanterna desligada continua visível perto de uma janela durante o dia. Como classificá-la nessa situação?', 'Corpo iluminado.', ['Corpo luminoso, porque toda lanterna emite luz mesmo desligada.', 'Fonte natural, porque o Sol existe.', 'Fonte de luz própria, porque tem uma pilha dentro.'], 'Desligada, a lanterna é visível graças à luz que recebe e reflete.'],
    ['Vemos a Lua iluminada no céu. De onde vem a maior parte da luz refletida por ela?', 'Do Sol.', ['Da própria Lua, que produz essa luz.', 'Dos nossos olhos.', 'Dos postes da rua.'], 'A Lua recebe luz do Sol e parte da luz refletida chega até nós.']]);

  const materials = comparison('Três placas diante de um desenho', [
    ['Placa A', 'Dá para ver todos os detalhes do desenho através dela.'],
    ['Placa B', 'Passa luz, mas os contornos vistos através dela ficam borrados.'],
    ['Placa C', 'A luz visível não atravessa a placa, que esconde o desenho.']
  ]);

  add(4,'transmissao','Transparente, translúcido e opaco',
    'Um material transparente deixa passar luz e permite ver com nitidez através dele, como um vidro limpo. Um translúcido deixa passar luz espalhada e os detalhes ficam pouco nítidos. Um opaco bloqueia a passagem da luz visível. Parte da luz que chega ao material pode ser refletida ou absorvida.',
    'Como distinguir uma placa transparente de uma translúcida?', 'Pela transparente vemos detalhes. Pela translúcida passa luz, mas os detalhes ficam borrados.',[32,33,36],[
    ['Quais são as classificações das placas A, B e C, nessa ordem?', 'Transparente → translúcida → opaca.', ['Translúcida → transparente → opaca.', 'Opaca → transparente → translúcida.', 'Transparente → opaca → translúcida.'], 'A permite ver detalhes, B deixa passar luz espalhada e C bloqueia a passagem da luz.',materials],
    ['Ao olhar através de uma folha leitosa, vê-se claridade e apenas o contorno borrado de uma mão. Como é o material?', 'Translúcido.', ['Opaco.', 'Transparente.', 'Luminoso.'], 'Há passagem de luz, mas a imagem perde nitidez. Essa é a característica de um material translúcido.'],
    ['Uma placa grossa de madeira não deixa ver a lanterna acesa atrás dela. Qual comportamento explica isso?', 'A placa é opaca e bloqueia a passagem da luz visível.', ['A placa é transparente e deixa ver os detalhes.', 'A placa muda a lanterna para o estado gasoso.', 'A placa é luminosa e emite a luz da lanterna.'], 'A madeira da placa bloqueia o feixe. A luz que bate nela pode ser absorvida ou refletida.']],materials);

  add(4,'escolha-material','Escolher materiais pela passagem da luz',
    'O uso desejado ajuda a escolher o material. Uma vitrine transparente permite ver o que está dentro. Um vidro fosco translúcido ilumina sem mostrar detalhes do outro lado. Uma divisória opaca bloqueia a passagem da luz através dela.',
    'Que tipo de janela pode deixar entrar claridade e esconder os detalhes do lado de dentro?', 'Uma janela translúcida, como a de vidro fosco.',[32,33],[
    ['Um museu precisa de uma tampa que permita enxergar os detalhes da peça protegida. Qual material funciona melhor?', 'Uma placa de vidro transparente e limpo.', ['Uma placa grossa de madeira.', 'Uma chapa opaca de metal.', 'Uma tampa de vidro fosco translúcido.'], 'A tampa transparente deixa a luz passar e mantém nítidos os detalhes vistos através dela.'],
    ['Para receber luz do corredor sem mostrar rostos com nitidez, qual material é adequado para a divisória?', 'Um vidro fosco translúcido.', ['Um vidro transparente sem textura.', 'Uma chapa sem furos de metal opaco.', 'Um painel de madeira maciça.'], 'O material translúcido espalha a luz que atravessa, reduzindo a nitidez dos detalhes.'],
    ['A turma quer improvisar uma divisória que bloqueie o feixe da lanterna. Qual material atende ao objetivo?', 'Uma chapa opaca de papelão grosso.', ['Uma placa transparente e limpa.', 'Uma folha de plástico translúcido.', 'Uma placa de vidro transparente.'], 'O material opaco bloqueia a passagem da luz visível pelo local que cobre.']]);

  add(4,'espelhos','Espelhos, superfícies lisas e nitidez',
    'Um espelho liso reflete a luz de modo organizado e permite ver uma imagem nítida. Água calma e metal bem polido também podem produzir reflexos. Num espelho plano, a imagem fica de pé e parece trocada de lado quando comparada com o objeto. As letras podem parecer escritas ao contrário.',
    'Por que a água bem calma pode mostrar uma imagem nítida de uma árvore?', 'A superfície lisa reflete a luz de modo organizado, como um espelho.',[30,34],[
    ['Uma pessoa coloca uma palavra escrita diante de um espelho plano. Como a escrita pode aparecer na imagem?', 'Parece escrita ao contrário e continua de pé.', ['Aparece sempre de ponta-cabeça.', 'Troca de cor e desaparece.', 'Fica sempre igual à vista direta, sem mudança aparente.'], 'Em um espelho plano, a troca aparente de lado faz a escrita parecer invertida.'],
    ['Em qual superfície é mais fácil ver um reflexo nítido de um prédio?', 'Na água de um lago bem calmo.', ['Na água do lago agitada por ondas.', 'Em um tecido felpudo.', 'Numa parede de tijolos ásperos.'], 'Uma superfície bem lisa reflete a luz de modo mais organizado do que uma superfície irregular.'],
    ['O espelho de uma sala parece muito claro quando se acende uma lâmpada. De onde vem essa luz?', 'Da lâmpada, cuja luz é refletida pelo espelho.', ['Do próprio espelho, que gera luz quando está perto de pessoas.', 'Dos olhos, que enviam a luz para o espelho.', 'De uma sombra produzida pela parede.'], 'O espelho devolve parte da luz recebida e essa luz pode atingir os olhos.']]);

  add(4,'sombra','Como a sombra se forma',
    'Quando um objeto opaco bloqueia a luz, fica uma região menos iluminada do lado oposto à fonte. É a sombra. O contorno depende da forma e da posição do objeto. Ao aproximar um recorte de uma lanterna com a parede fixa, a sombra costuma ficar maior.',
    'Qual é a ordem entre a fonte, o objeto opaco e o local onde vemos a sombra?', 'Fonte de luz → objeto opaco → sombra do lado oposto à fonte.',[35,36],[
    ['Uma luminária está à esquerda de uma garrafa opaca. Em que lado da garrafa se forma a sombra?', 'Do lado oposto à luminária.', ['Entre a luminária e a garrafa.', 'Dentro da luminária.', 'Do mesmo lado por onde chega o feixe.'], 'A luz bate na garrafa, que bloqueia o feixe. A região atrás dela recebe menos luz daquela fonte.'],
    ['Que arranjo funciona para projetar a sombra de um recorte de papelão numa tela?', 'Lanterna acesa → recorte → tela.', ['Recorte → lanterna acesa → tela.', 'Tela → recorte → lanterna apontada para o lado oposto da tela.', 'Lanterna apagada → recorte → tela.'], 'O recorte opaco deve ficar entre a fonte de luz e a superfície onde a sombra aparece.'],
    ['Uma criança projeta a sombra de um recorte triangular numa parede. O recorte e a lanterna continuam alinhados. Qual mudança tende a aumentar a sombra?', 'Aproximar o recorte da lanterna e manter a parede no lugar.', ['Apagar a lanterna.', 'Trocar o recorte por vidro transparente.', 'Remover o recorte do feixe.'], 'Mais perto da fonte de luz, o recorte bloqueia um feixe que se espalha por uma área maior da parede.']]);

  add(4,'relogio-solar','A sombra no relógio de Sol',
    'Em um relógio de Sol, uma haste, chamada gnômon, projeta sombra sobre marcações. Ao longo do dia, o Sol parece mudar de posição no céu. A sombra da haste muda de direção e pode indicar a hora ao cair sobre marcas diferentes. O relógio precisa de luz solar suficiente para formar sombra.',
    'Como o relógio de Sol usa a sombra para indicar a hora?', 'A sombra da haste muda de posição durante o dia e aponta para diferentes marcas.',[35,36],[
    ['Ao voltar ao jardim horas depois, a turma vê a sombra do relógio de Sol em outra marca. O que explica a mudança?', 'O Sol parece estar em outra posição no céu.', ['A haste passou a emitir luz.', 'A sombra se transformou em água.', 'A haste ficou transparente.'], 'Com a iluminação chegando de outra direção, a sombra da haste muda de posição.'],
    ['Que parte de um relógio de Sol projeta a sombra sobre as marcas?', 'A haste chamada gnômon.', ['A própria marca desenhada no chão.', 'Um vidro que deixa a luz passar sem interferência.', 'Um motor escondido dentro da marca.'], 'A haste bloqueia luz solar e sua sombra cai na superfície marcada.'],
    ['Por que um relógio de Sol não indica bem a hora quando a luz solar está toda encoberta?', 'Pode faltar uma sombra bem definida sobre as marcações.', ['O tempo deixa de passar quando há nuvens.', 'As marcações sempre mudam de lugar.', 'A haste desaparece na chuva.'], 'O relógio depende de uma sombra que se consiga observar para ler a marca indicada.']]);

  const illusion = facts('Duas linhas num desenho', [
    ['O que parecia', 'A linha de cima parecia maior. As pontas tinham setas em posições diferentes.'],
    ['O que a régua mostrou', 'O trecho reto de cima media 5 cm. O de baixo também media 5 cm.']
  ]);
  const sightRoute = facts('Da luz à imagem que percebemos', [
    ['Entrada', 'A luz passa pela córnea e entra pela pupila.'],
    ['Foco', 'A lente ajuda a focar a luz na retina.'],
    ['Sinais', 'A retina transforma a informação luminosa em sinais. O nervo óptico leva os sinais ao cérebro.']
  ]);

  add(5,'ilusao','Ilusão de ótica e interpretação',
    'O cérebro interpreta o que os olhos captam. Numa ilusão de ótica, essa interpretação pode sugerir algo diferente do que podemos medir. Por exemplo, dois traços iguais podem parecer de tamanhos diferentes por causa do desenho ao redor. Uma régua ajuda a testar a impressão.',
    'O que fazer se duas linhas parecem diferentes, mas você suspeita que têm o mesmo comprimento?', 'Medir as duas com uma régua e comparar os resultados.',[39],[
    ['Por que o caso descrito pode ser uma ilusão de ótica?', 'As linhas parecem ter comprimentos diferentes, mas a medida mostra que são iguais.', ['A régua mostra que uma linha é realmente bem maior.', 'As linhas se esticam enquanto são medidas.', 'A luz chega aos ouvidos antes de chegar aos olhos.'], 'O desenho ao redor influencia a interpretação, mesmo quando o comprimento medido é igual.',illusion],
    ['Uma figura parada, cheia de padrões, parece girar para quem olha. O que pode explicar essa sensação?', 'Uma ilusão de ótica ligada à interpretação do cérebro.', ['O papel com certeza está girando.', 'A figura produz uma música que move o papel.', 'A visão depende apenas do que a pupila tem de colorido.'], 'O cérebro pode interpretar padrões visuais como movimento mesmo quando a figura está parada.'],
    ['Duas pessoas percebem formas diferentes no mesmo desenho. Qual ideia ajuda a entender esse caso?', 'O cérebro pode interpretar o mesmo desenho de mais de uma forma.', ['Cada pessoa recebeu necessariamente um desenho diferente.', 'A pessoa que olha mudou as linhas no papel.', 'O desenho só pode ser visto por quem já conhece a forma.'], 'Uma imagem com pistas ambíguas pode ter mais de uma interpretação visual.']],illusion);

  add(5,'pupila-iris','Pupila, íris e entrada da luz',
    'A luz atravessa a córnea, a parte transparente à frente do olho. Em seguida, passa pela pupila, uma abertura no centro da íris. A íris é a parte colorida do olho e controla o tamanho da abertura, ajudando a regular quanta luz entra.',
    'Qual é o nome da abertura no centro da íris por onde passa a luz?', 'Pupila.',[40],[
    ['Em um desenho do olho, a seta aponta para a abertura que fica no centro da parte colorida. Qual etiqueta completa o desenho?', 'Pupila.', ['Retina.', 'Nervo óptico.', 'Sobrancelha.'], 'A pupila é a abertura no centro da íris por onde a luz passa.'],
    ['Qual estrutura dá cor à região em volta da pupila e ajuda a controlar o tamanho dessa abertura?', 'Íris.', ['Retina.', 'Lente.', 'Nervo óptico.'], 'A íris é a parte colorida. Ela controla a abertura da pupila e regula a entrada de luz.'],
    ['O que a luz atravessa primeiro entre córnea, pupila e lente?', 'A córnea.', ['A pupila.', 'A lente.', 'A retina.'], 'A córnea é transparente e fica na frente do olho. Depois dela, parte da luz passa pela pupila.']]);

  add(5,'lente','A lente e o foco da luz',
    'A lente do olho, também chamada de cristalino, fica atrás da pupila. Ela trabalha com a córnea para focar a luz sobre a retina, no fundo do olho. Focar ajuda a formar uma imagem nítida. Na sequência simplificada, a luz passa pela pupila, pela lente e chega à retina.',
    'Para onde a córnea e a lente ajudam a focar a luz?', 'Para a retina, no fundo do olho.',[40],[
    ['Entre pupila, lente e retina, por qual a luz passa logo depois da pupila?', 'Pela lente.', ['Pela retina.', 'Pelo nervo auditivo.', 'Pelo cérebro.'], 'A lente fica atrás da pupila e ajuda a direcionar a luz para a retina.'],
    ['Qual é a ordem correta entre as três estruturas do olho, acompanhando a luz?', 'Pupila → lente → retina.', ['Lente → pupila → retina.', 'Retina → lente → pupila.', 'Pupila → retina → lente.'], 'A luz passa pela abertura chamada pupila, atravessa a lente e alcança a retina.'],
    ['Que tarefa a lente do olho realiza junto com a córnea?', 'Ajudar a focar a luz na retina.', ['Transformar os sinais em pensamentos.', 'Criar luz para iluminar um objeto distante.', 'Levar ao cérebro os sinais produzidos na retina.'], 'A córnea e a lente desviam a luz para ajudar a formar uma imagem focada na retina.']]);

  add(5,'retina-cerebro','Retina, nervo óptico e cérebro',
    'A retina fica no fundo do olho e possui células sensíveis à luz. Essas células ajudam a transformar a informação luminosa em sinais. O nervo óptico leva sinais da retina ao cérebro. O cérebro interpreta o que recebe e assim percebemos a imagem.',
    'Quem envia os sinais da retina ao cérebro, e quem os interpreta?', 'O nervo óptico conduz os sinais. O cérebro os interpreta.',[39,40],[
    ['Qual estrutura sensível à luz fica no fundo do olho?', 'Retina.', ['Pupila.', 'Lente.', 'Pálpebra.'], 'Na retina há células que respondem à luz e ajudam a produzir sinais para o cérebro.'],
    ['Depois que a luz chega à retina, o que segue pelo nervo óptico?', 'Sinais com informação visual.', ['O mesmo feixe de luz viajando até o cérebro.', 'Ar empurrado pela pupila.', 'Vibração dos ossículos.'], 'A retina transforma a informação luminosa em sinais que o nervo óptico conduz.'],
    ['Ao reconhecer uma bicicleta no pátio, que estrutura interpreta os sinais da visão?', 'O cérebro.', ['A pupila.', 'A sobrancelha.', 'A lente.'], 'Os olhos captam luz e enviam informação. O reconhecimento da imagem depende do cérebro.']],sightRoute);

  add(5,'protecao-visual','Higiene e proteção dos olhos',
    'Lave as mãos e evite levar mãos sujas aos olhos ou coçá-los. Isso ajuda a diminuir a transmissão de infecções como a conjuntivite. Fumaça e poeira podem irritar os olhos. Proteja-os da exposição excessiva ao sol e nunca olhe diretamente para o Sol.',
    'Que hábito ajuda a evitar que microrganismos cheguem aos olhos pelas mãos?', 'Lavar as mãos e evitar tocar ou coçar os olhos.',[41],[
    ['Qual hábito ajuda a proteger os olhos depois de brincar com terra?', 'Lavar as mãos e evitar esfregar os olhos.', ['Esfregar os olhos para limpar a poeira.', 'Colocar os dedos sujos nos olhos para tirar a areia.', 'Compartilhar um lenço usado para limpar os olhos.'], 'Higienizar as mãos e evitar tocar os olhos ajuda a reduzir irritações e a transmissão de infecções.'],
    ['A turma vai observar como o Sol ilumina o pátio. Qual observação é segura para os olhos?', 'Observar as sombras no chão sem olhar diretamente para o Sol.', ['Olhar diretamente para o Sol para comparar seu brilho.', 'Mirar o Sol com uma lupa.', 'Usar um espelho para mandar a luz do Sol aos olhos.'], 'É possível estudar a iluminação e as sombras observando as superfícies, com os olhos voltados para longe do Sol.'],
    ['Qual situação pode irritar os olhos?', 'Ficar em um local cheio de fumaça e poeira.', ['Lavar as mãos depois de brincar.', 'Observar as sombras numa parede.', 'Evitar coçar os olhos durante a brincadeira.'], 'Poeira e fumaça em contato com os olhos podem causar irritação.']]);

  add(5,'oftalmologista','Exames de visão e lentes corretivas',
    'O oftalmologista é o médico especializado nos olhos e na visão. Uma avaliação pode identificar alterações, mesmo quando a pessoa se acostumou a enxergar com dificuldade. Quando indicadas, as lentes de óculos ou de contato ajudam a corrigir alguns problemas de foco.',
    'Para que servem os testes de visão na escola?', 'Ajudam a identificar quem pode precisar de uma avaliação com o oftalmologista.',[41],[
    ['Uma estudante tem dificuldade para ler as palavras no quadro. Que profissional é especializado em avaliar a visão?', 'Oftalmologista.', ['Dentista.', 'Professor de música.', 'Especialista em mapas.'], 'O oftalmologista examina os olhos e pode indicar cuidados ou lentes quando necessário.'],
    ['Por que uma escola pode oferecer testes de visão?', 'Para perceber dificuldades e encaminhar quem precisa de avaliação.', ['Para escolher a cor dos olhos de cada estudante.', 'Para dispensar qualquer avaliação médica futura.', 'Para decidir quem deve evitar toda leitura.'], 'O teste pode revelar uma dificuldade que ainda não tinha sido percebida.'],
    ['Quando são indicadas para corrigir um problema de foco, como as lentes dos óculos ajudam?', 'Elas desviam a luz para que a imagem possa ficar mais nítida.', ['Elas produzem luz no fundo do olho.', 'Elas substituem o cérebro na interpretação das imagens.', 'Elas bloqueiam toda a luz antes da pupila.'], 'Lentes corretivas mudam o caminho da luz antes que ela entre no olho, auxiliando o foco.']]);

  const finalCount = lessons.length;
  return {
    id:'natureza-2026-11-26', subject:'Ciências da Natureza', icon:'🔬', teacher:'3º ano',
    term:'3º trimestre', status:'Completa', assessmentStatus:'Próxima avaliação',
    assessmentDate:'26 de novembro de 2026', assessmentShortDate:'26/11/2026',
    areasLabel:'Terra, água, som, audição, luz e visão',
    intro:'Explore por que as poças secam, como ouvimos uma campainha e como uma sombra se forma.',
    description:'Prepare-se para a prova de Ciências da Natureza com cards, flashcards e questões comentadas.',
    topics:areas.map(({name}) => name).join(' · '),
    studyPlan:`1. Leia os cards de um bloco. 2. Tente responder aos flashcards antes de virar cada um. 3. Faça a fase do bloco e leia as explicações. 4. Faça o Simulado Final, com ${finalCount} questões e uma por tópico. 5. Retome os tópicos em que errou antes de refazer.`,
    lessons, flashcards, questions,
    modes:[
      ...areas.map(({name, emoji, description}, i) => ({
        key:`fase-${i + 1}`, title:`Fase ${i + 1} · ${name}`, emoji, description,
        count:lessons.filter(lesson => lesson.area === name).length * 2,
        includeAreas:[name], balancedByTopic:true
      })),
      {
        key:'all', title:'Simulado Final', emoji:'🎯',
        description:`${finalCount} questões, uma por tópico, com exemplos variados a cada tentativa.`,
        count:finalCount, includeAreas:'all', balancedByTopic:true
      }
    ]
  };
})();
