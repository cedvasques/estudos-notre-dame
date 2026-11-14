/* Português: conceitos e aplicação em textos inéditos, prova de 16/11/2026. */
const PT_NOV_EXAM = (() => {
  const lessons = [], flashcards = [], questions = [];
  const areas = ['Contos e suspense','Tipos de narrador','Adjetivos','Palavras que evitam repetições','Sílaba tônica','Pontuação em diálogos','Gênero','Número','Grau'];
  const icons = ['📖','🗣️','🎨','🔗','👏','💬','🔤','🔢','🔎'];
  const text = (title,content) => ({type:'text',title,text:content});
  const add = (areaIndex,topic,title,explanation,front,back,bookPages,exercises,material) => {
    const area=areas[areaIndex];
    lessons.push({area,topic,title,emoji:icons[areaIndex],text:explanation,bookPages,material});
    flashcards.push([front,back]);
    exercises.forEach(([q,correct,distractors,exp,stimulus],i)=>{
      const a=[2,0,3,1][questions.length%4],opts=[...distractors]; opts.splice(a,0,correct);
      questions.push({id:`ptnov-${topic}-${i+1}`,area,topic,topicLabel:title,bookPages,q,opts,a,exp,material:stimulus});
    });
  };
  const biblioteca=text('O ruído da biblioteca',
    'No fim da tarde, Bia e seu avô guardavam livros na biblioteca do bairro. Tudo estava tranquilo.\n\nDe repente, ouviram três batidas dentro de um armário fechado. Bia parou, apertando um livro contra o peito. O avô pegou a chave.\n\nQuando ele encostou na fechadura, a porta tremeu e o barulho aumentou. Os dois prenderam a respiração.\n\nO avô abriu o armário. Uma bolinha rolou para fora, seguida do gato da bibliotecária. Ele havia entrado ali para brincar. Bia soltou o ar e sorriu. O mistério estava resolvido.');
  const jardim=text('O bilhete molhado',
    'Na manhã de sábado, Davi e Rosa cuidavam do jardim. Encontraram um bilhete preso ao regador: “Procurem debaixo do banco”.\n\nA chuva tinha apagado o resto da mensagem. Eles olharam sob o banco, mas só havia um vaso vazio. Rosa levantou o vaso e encontrou um saquinho de sementes.\n\nA avó apareceu e explicou que preparara aquela surpresa para os dois. Juntos, plantaram as sementes.');
  const hq={type:'comic',title:'O barulho no jardim',panels:[
    {face:'🧒',caption:'1 · Ivo entra no jardim com uma lanterna. Está de cabeça erguida.',speaker:'Ivo',speech:'Nenhum barulho me assusta!'},
    {face:'😨',caption:'2 · Uma folha estala sob o pé de Ivo. Ele dá um pulo e arregala os olhos.',speaker:'Ivo',speech:'Quem está aí?'},
    {face:'🍂',caption:'3 · Ivo vê a folha amassada no chão e esconde o rosto com a mão.',speaker:'Ivo',speech:'Era só uma folha...'}]};

  add(0,'conto','O que é um conto?',
    'O conto é uma narrativa curta, geralmente com poucos personagens e um acontecimento central. Conta ações que se ligam: uma situação inicial, um conflito, seu desenvolvimento e um desfecho. Leia o texto inteiro para entender como as partes se relacionam.',
    'Como reconhecer um conto?', 'Ele narra uma história curta, com personagens, acontecimentos, tempo e espaço. Em geral, há um conflito e um desfecho.',[212,213,214,215,227,228,229,230],[
    ['Qual característica faz de “O ruído da biblioteca” um conto?','Narra uma sequência de acontecimentos vividos por personagens.',['Lista instruções para organizar uma biblioteca.','Apresenta somente o horário de atendimento.','Reúne palavras com seus significados.'],'Há personagens, um mistério e acontecimentos que levam à descoberta final.',biblioteca],
    ['Qual proposta é a de um conto?','Uma criança encontra uma chave e descobre a que porta ela pertence.',['Uma lista de chaves com seus preços.','Uma receita para preparar pão.','Um quadro com os horários de uma loja.'],'A proposta apresenta uma personagem e acontecimentos que podem formar uma narrativa.'],
    ['Um texto curto apresenta duas amigas, um problema no caminho e a solução encontrada. Que característica de conto ele apresenta?','Acontecimentos ligados por um conflito.',['Palavras organizadas em ordem alfabética.','Instruções sem personagens.','Apenas dados separados em campos.'],'O problema movimenta a história e conecta as ações das personagens.']],biblioteca);
  add(0,'elementos','Personagens, tempo e espaço',
    'Personagens participam dos fatos. O tempo indica quando a ação acontece; o espaço indica onde. Procure pistas: “de madrugada” marca o tempo; “na cozinha” marca o espaço. Quem escreveu o livro não é automaticamente uma personagem.',
    'Em “De manhã, Eva e Rui chegaram à praça”, quem, quando e onde?', 'Personagens: Eva e Rui. Tempo: de manhã. Espaço: a praça.',[212,213,215,216,227,230],[
    ['Que expressão informa QUANDO acontece “O ruído da biblioteca”?','No fim da tarde.',['Na biblioteca do bairro.','Bia e seu avô.','Dentro de um armário.'],'“No fim da tarde” situa os acontecimentos no tempo.',biblioteca],
    ['Em “O bilhete molhado”, qual é o espaço em que acontecem as ações?','O jardim.',['A manhã de sábado.','O bilhete.','Davi e Rosa.'],'O jardim é o lugar da narrativa; manhã de sábado indica tempo.',jardim],
    ['Leia: “Durante a noite, a coruja e o coelho procuraram abrigo na árvore.” Quem são as personagens?','A coruja e o coelho.',['A noite e a árvore.','A árvore e o abrigo.','O autor e o leitor.'],'São a coruja e o coelho que participam das ações.']]);
  add(0,'sequencia','A ordem dos acontecimentos',
    'Para recontar, organize o que aconteceu primeiro, depois e por fim. Palavras como “antes”, “então” e “em seguida” ajudam. Confira também a relação entre as ações: alguém precisa encontrar o bilhete antes de seguir sua pista.',
    'Como recontar sem trocar a ordem dos fatos?', 'Identifique o começo, acompanhe as ações e termine com o desfecho. Use pistas de tempo e relações entre as ações.',[212,213,214,215,227,228,229],[
    ['Qual sequência respeita “O ruído da biblioteca”?','Ouvir batidas → abrir o armário → descobrir o gato.',['Descobrir o gato → ouvir batidas → buscar a chave.','Abrir o armário → ouvir as primeiras batidas → guardar a chave.','Sorrir de alívio → começar a ouvir batidas → procurar o gato.'],'As batidas iniciam o mistério; a abertura permite descobrir sua causa.',biblioteca],
    ['No jardim, qual fato acontece antes de Rosa levantar o vaso?','As crianças encontram um bilhete no regador.',['A avó explica a surpresa.','Todos plantam as sementes.','Rosa encontra o saquinho sob o vaso.'],'O bilhete leva as crianças ao banco e ao vaso.',jardim],
    ['Ordene: 1. O broto apareceu. 2. Nara colocou a semente na terra. 3. Nara regou a terra por vários dias.','2 → 3 → 1.',['1 → 2 → 3.','3 → 1 → 2.','2 → 1 → 3.'],'Primeiro vem o plantio, depois o cuidado por vários dias e, por fim, o broto.']]);
  add(0,'inicio','A situação inicial',
    'A situação inicial apresenta o contexto da história: quem participa, onde e quando os fatos começam. Ela mostra como estavam as coisas antes do problema principal. Não confunda o começo com a solução final.',
    'Para que serve a situação inicial?', 'Para apresentar personagens e o contexto em que a história começa.',[227,230],[
    ['Qual trecho apresenta a situação inicial da história da biblioteca?','Bia e seu avô guardavam livros no fim da tarde.',['A porta tremeu e o barulho aumentou.','O gato saiu do armário.','Bia sorriu aliviada.'],'Esse trecho apresenta personagens, tempo, espaço e a atividade anterior ao mistério.',biblioteca],
    ['Qual seria uma situação inicial adequada para um conto?','Toda tarde, Olga cuidava das plantas de sua varanda.',['Por fim, Olga encontrou a planta perdida.','O mistério estava finalmente resolvido.','Assim, todos voltaram felizes para casa.'],'O trecho apresenta uma personagem e sua rotina, preparando o começo dos acontecimentos.'],
    ['Qual informação aparece no início de “O bilhete molhado”?','Davi e Rosa cuidavam do jardim numa manhã de sábado.',['A avó tinha organizado toda a surpresa.','O saquinho estava escondido sob o vaso.','As sementes já tinham virado flores.'],'O começo apresenta os dois personagens, o lugar e o momento da ação.',jardim]]);
  add(0,'conflito','O conflito movimenta a história',
    'O conflito é o problema, a dificuldade ou o fato novo que gera tensão e faz a história avançar. Pode ser algo que desaparece ou um mistério a resolver. Pergunte: “O que mudou e fez as personagens agir?”',
    'Como encontrar o conflito?', 'Procure o problema ou acontecimento novo que quebra a tranquilidade e provoca as ações seguintes.',[213,216,227,228,230],[
    ['O que inicia o mistério na biblioteca?','As batidas vindas de um armário fechado.',['O hábito de guardar livros.','O sorriso de Bia no final.','A explicação sobre o gato.'],'As batidas desconhecidas interrompem a tranquilidade e levam à investigação.',biblioteca],
    ['“A turma preparava uma peça. Pouco antes da apresentação, a caixa de figurinos sumiu.” Qual é o conflito?','O desaparecimento dos figurinos antes da peça.',['A existência de uma turma.','A informação de que há uma apresentação.','O título que a peça vai receber.'],'A falta dos figurinos cria o problema que exige uma solução.'],
    ['“Uma ponte caiu, e os viajantes precisavam atravessar o rio.” Qual ação faz a história avançar a partir desse conflito?','Procurar uma maneira segura de atravessar.',['Descrever a cor do chapéu sem relação com a travessia.','Listar os dias da semana.','Contar quantas letras tem a palavra rio.'],'A ação está ligada à dificuldade apresentada: atravessar sem a ponte.']]);
  add(0,'climax','Clímax: a maior tensão',
    'O clímax é o momento de maior tensão ou expectativa. Muitas vezes ocorre perto da solução, quando o leitor mais quer saber o que acontecerá. O conflito inicia o problema; o clímax é seu ponto de maior intensidade.',
    'Clímax e conflito são sempre a mesma coisa?', 'Não. O conflito é o problema; o clímax é o momento em que a tensão chega ao ponto mais alto.',[228,230],[
    ['Qual momento tem maior tensão na história da biblioteca?','A porta treme e o barulho aumenta quando o avô toca a fechadura.',['Os dois começam a guardar livros.','Bia sorri depois de ver o gato.','O narrador explica que o gato queria brincar.'],'O barulho se intensifica antes de a causa ser revelada.',biblioteca],
    ['Num conto, a mochila desaparece, a busca começa e uma porta se abre lentamente com um vulto atrás. Qual trecho pode ser o clímax?','A porta se abre e ninguém sabe ainda quem está atrás dela.',['A apresentação da escola no começo.','A explicação final de onde estava a mochila.','O agradecimento depois de tudo resolvido.'],'A incerteza chega ao ponto de maior expectativa antes da revelação.'],
    ['Qual frase explica melhor a função do clímax?','Concentrar a maior tensão da narrativa.',['Apresentar somente o nome do autor.','Mostrar sempre uma rotina tranquila.','Informar obrigatoriamente a moral da história.'],'Clímax se refere ao ponto de maior tensão, não a uma informação fixa do começo ou do fim.']]);
  add(0,'desfecho','Desfecho: como a história termina',
    'O desfecho mostra o resultado das ações e a solução do conflito ou do mistério. Volte ao problema inicial para entender o que foi resolvido. Uma surpresa no final pode mudar a explicação que imaginávamos.',
    'Como reconhecer o desfecho de um mistério?', 'Procure a revelação ou solução que explica o problema e encerra a história.',[214,229,230],[
    ['Como o mistério da biblioteca é resolvido?','Descobrem que um gato brincava dentro do armário.',['As batidas ficam mais fortes.','Bia prende a respiração.','O avô procura a chave.'],'A descoberta explica o ruído e encerra o mistério.',biblioteca],
    ['Qual final resolve o conflito “o ingresso sumiu antes da entrada no teatro”?','O ingresso estava entre as páginas do livro; eles o pegaram e entraram.',['O ingresso continuava desaparecido e surgiu outro problema.','O teatro tinha paredes amarelas e cadeiras vermelhas.','O personagem lembrou o nome de seu vizinho.'],'Encontrar o ingresso permite entrar e resolve a dificuldade apresentada.'],
    ['Qual informação esclarece a origem da surpresa em “O bilhete molhado”?','A avó explica que preparou a surpresa.',['A chuva apaga parte do bilhete.','As crianças veem um vaso vazio.','O bilhete fica preso ao regador.'],'A explicação da avó resolve a dúvida sobre quem preparou as pistas.',jardim]]);
  add(0,'pistas','Compreender e justificar com pistas',
    'Algumas informações estão escritas diretamente. Outras precisam ser concluídas a partir de pistas: mãos trêmulas e coração acelerado podem indicar medo. Justifique com o texto. O título sugere um assunto, mas não revela necessariamente todos os fatos. Expressões podem ter sentido figurado.',
    'Qual é a diferença entre concluir e inventar?', 'Concluir é usar pistas do texto. Inventar é acrescentar uma informação que o texto não sustenta.',[215,216,230,231,232,238],[
    ['Bia aperta o livro contra o peito e prende a respiração. O que essas pistas sugerem antes da descoberta?','Ela está tensa com o ruído desconhecido.',['Ela já sabe que o gato está brincando.','Ela está com fome desde cedo.','Ela quer levar todos os livros para casa.'],'Os gestos e a situação de mistério sustentam a ideia de tensão; as outras informações não aparecem.',biblioteca],
    ['“Ao ouvir que o objeto perdido fora encontrado, Lara tirou um peso das costas.” O que a expressão indica?','Lara ficou aliviada.',['Lara retirou uma mala que o texto afirma estar nas costas.','Lara ficou mais preocupada.','Lara começou uma corrida.'],'No contexto, a expressão representa o fim de uma preocupação, não a retirada literal de um objeto.'],
    ['O título de uma história é “A janela que assobiava”. Qual atitude ajuda a compreender o texto?','Ler para descobrir a causa do assobio e conferir a hipótese.',['Concluir só pelo título que existe um fantasma.','Decidir que a história se passa no mar.','Ignorar as pistas que aparecerem depois.'],'O título desperta uma hipótese, que deve ser conferida durante a leitura.']]);
  add(0,'suspense','Como se cria o suspense?',
    'O suspense provoca expectativa sobre algo ainda desconhecido. Ruídos sem explicação, silêncios, pouca luz, perguntas e revelações adiadas podem aumentar a tensão. Adjetivos e reticências ajudam a criar esse efeito. Suspense não exige um monstro real.',
    'O que mantém o leitor curioso em um conto de suspense?', 'Uma dúvida ainda sem resposta e pistas reveladas aos poucos, até a descoberta.',[212,213,216,227,228,231,232],[
    ['Por que as batidas criam suspense na biblioteca?','O leitor e as personagens ainda não sabem de onde vêm.',['A história explica imediatamente toda a brincadeira.','As batidas informam o horário de funcionamento.','O texto já havia mostrado o gato dentro do armário.'],'A causa é escondida por algum tempo, criando expectativa.',biblioteca],
    ['Qual reescrita cria mais expectativa antes de revelar o que há numa caixa?','A tampa se moveu devagar... O que haveria ali?',['A caixa estava vazia, e todos já sabiam disso.','A caixa tem quatro lados e uma tampa.','Uma caixa serve para guardar objetos.'],'O movimento e a pergunta adiam a revelação e criam dúvida.'],
    ['No conto, uma criança chama de “feroz” um passarinho que fugiu de uma pena. Por que usar aspas em “feroz”?','Para destacar uma ironia: ele não se mostrou feroz.',['Para afirmar que feroz é o nome do passarinho.','Para indicar que a palavra é um verbo.','Para marcar a divisão em sílabas.'],'As aspas podem destacar um uso irônico, diferente do sentido literal esperado.']]);
  add(0,'quadrinhos','Conto e quadrinhos: ler e comparar',
    'Contos costumam organizar a narrativa em parágrafos; quadrinhos usam quadros, imagens e balões. Nos dois, acompanhe ações, mudanças de sentimentos e desfecho. Nos quadrinhos, leia também gestos e expressões. O humor pode surgir de uma diferença entre o que alguém diz e o que faz.',
    'Por que olhar as imagens ao ler quadrinhos?', 'Elas mostram ações, emoções e pistas que podem não aparecer nas falas.',[236,237,238,113,177],[
    ['O que provoca humor em “O barulho no jardim”?','Ivo diz que nada o assusta, mas se assusta com uma folha.',['Ivo carrega uma lanterna desde o começo.','O jardim tem folhas no chão.','Os quadros aparecem em uma sequência.'],'Há uma surpresa entre a afirmação confiante e a reação de medo.',hq],
    ['Qual pista mostra a mudança de sentimento de Ivo no segundo quadro?','Ele pula e arregala os olhos.',['Ele continua de cabeça erguida e tranquilo.','A lanterna desaparece da história.','A folha passa a falar.'],'O gesto e os olhos indicam susto, mesmo antes de explicar o ruído.',hq],
    ['Um conto e uma HQ narram a mesma aventura. Qual comparação é adequada?','O conto pode usar parágrafos e diálogos; a HQ combina quadros, imagens e balões.',['Somente a HQ pode ter personagens.','Somente o conto pode apresentar acontecimentos inventados.','As imagens da HQ nunca ajudam a compreender os fatos.'],'Os dois podem narrar histórias; sua organização e seus recursos de linguagem diferem.']],hq);

  add(1,'participante','Narrador-personagem',
    'O narrador conta a história. Quando também participa dos fatos, é narrador-personagem. Marcas como “eu”, “nós”, “cheguei” e “encontramos” podem revelar essa participação. Examine a narração, não apenas uma fala entre travessões. Autor é quem cria o texto; narrador é a voz que conta.',
    '“Abri a gaveta e encontrei meu desenho.” O narrador participa?', 'Sim. Ele conta uma ação que realizou; é narrador-personagem.',[216,138,139],[
    ['“Entrei na sala e vi meu desenho na parede.” Que tipo de narrador aparece?','Narrador-personagem, porque participa da ação.',['Narrador-observador, porque só conta ações de outros.','Um leitor que ainda não começou o texto.','Uma personagem falando obrigatoriamente com outra.'],'“Entrei” e “vi” mostram que a voz narrativa realizou as ações.'],
    ['“Nós seguimos as pegadas até o jardim.” Qual palavra revela diretamente que quem narra está no grupo?','Nós.',['Pegadas.','Jardim.','Até.'],'“Nós” inclui quem fala ou narra.'],
    ['Reescreva “Marta encontrou uma concha” como se Marta contasse sua própria ação.','Eu encontrei uma concha.',['Ela encontrou uma concha.','Marta encontrou uma concha.','Marta e ela encontraram uma concha.'],'A primeira pessoa transforma Marta na voz que conta sua própria ação.']]);
  add(1,'observador','Narrador que não participa',
    'O narrador-observador conta os fatos sem participar como personagem. Costuma falar de “ele”, “ela”, “eles” ou usar os nomes das personagens. Para reconhecer o tipo, pergunte se a voz que narra faz parte das ações. A presença de um diálogo não muda, sozinha, o tipo de narrador.',
    '“Lia abriu a caixa. Ela sorriu.” O narrador está apresentado como personagem?', 'Não. Ele conta ações de Lia, sem se incluir nos fatos: é narrador-observador.',[216,230],[
    ['“Téo escutou o sinal e correu para a sala.” Como o narrador conta esse fato?','De fora da ação, falando de Téo.',['Como Téo, usando a primeira pessoa.','Como parte de um grupo indicado por nós.','Como uma fala iniciada por travessão.'],'A voz narrativa relata o que Téo fez, sem participar da ação.'],
    ['Qual trecho apresenta um narrador que NÃO participa dos fatos?','As duas amigas fecharam o portão e seguiram pelo caminho.',['Fechei o portão e segui pelo caminho.','Nós fechamos o portão e seguimos juntos.','Vi minhas amigas e fui com elas.'],'O trecho conta ações de outras personagens sem incluir quem narra.'],
    ['Troque a narração de Eva “Eu procurei minha mochila” por um narrador que não participa.','Eva procurou sua mochila.',['Eu procurei a mochila de Eva.','Nós procuramos minha mochila.','Eu, Eva, procurei minha mochila.'],'A mudança para Eva/ela e procurou coloca a narração em terceira pessoa.']]);
  add(1,'vozes','Fala da personagem ou narração?',
    'O narrador apresenta fatos e pode indicar quem falou. A personagem fala dentro da história. Em “Lina disse: — Eu volto cedo”, “eu” é Lina na fala; isso não transforma a voz que contou “Lina disse” em narrador-personagem. Leia sempre o contexto.',
    'Em “Luca disse: — Eu achei!”, a palavra eu prova que o narrador participa?', 'Não. Eu está na fala de Luca. É preciso examinar a voz que narra os fatos.',[216,230,217,218,219],[
    ['“Nina abriu a janela e disse: — Eu vi uma estrela!” Quem diz “eu”?','Nina, na fala da personagem.',['O autor, obrigatoriamente.','Um narrador-personagem não mencionado.','O leitor do texto.'],'O trecho “Nina disse” identifica quem fala; a narração continua em terceira pessoa.'],
    ['“— Vamos sair? — perguntou Bruno.” Qual parte pertence à voz do narrador?','perguntou Bruno.',['Vamos sair?','Vamos.','sair?'],'O narrador informa quem fez a pergunta.'],
    ['“Dora contou: — Eu subi no palco. Depois, Dora guardou a fantasia.” Só o eu na fala permite chamar o narrador de participante?','Não. O eu pertence a Dora; o narrador conta os fatos sem se incluir.',['Sim. Qualquer eu torna toda a narração participante.','Sim. Toda história com diálogo tem narrador-personagem.','Não, porque histórias com diálogo não têm narrador.'],'É necessário distinguir a voz da personagem da voz que apresenta suas ações.']]);

  add(2,'adjetivo','Substantivo nomeia; adjetivo caracteriza',
    'Substantivos dão nomes a seres, objetos, lugares e sentimentos. Adjetivos atribuem características: “ponte estreita”, “menino paciente”. Uma característica pode mostrar aparência, estado ou jeito de agir. O adjetivo não precisa indicar uma qualidade positiva: “cruel” também caracteriza.',
    'Em “A menina cuidadosa guardou o copo”, qual palavra caracteriza a menina?', 'Cuidadosa é o adjetivo. Menina e copo são substantivos.',[136,137,138,153,154],[
    ['Em “O coelho curioso olhou a cesta”, qual palavra é um adjetivo?','Curioso.',['Coelho.','Olhou.','Cesta.'],'Curioso informa uma característica do coelho; olhou indica uma ação.'],
    ['Qual par apresenta primeiro um substantivo e depois um adjetivo?','Janela estreita.',['Correu ontem.','Muito cedo.','Ela chegou.'],'Janela nomeia um objeto; estreita caracteriza esse objeto.'],
    ['“A menina esperou sua vez e ajudou o colega.” Qual adjetivo combina com esse comportamento?','Atenciosa.',['Redonda.','Barulhenta, porque não esperou sua vez.','Egoísta, porque recusou ajuda.'],'O modo de agir dá pistas para caracterizá-la como atenciosa.']]);
  add(2,'referente-adjetivo','A quem pertence a característica?',
    'Encontre o substantivo a que o adjetivo se refere. Em “O menino usa meias listradas”, listradas caracteriza meias. Um substantivo pode receber vários adjetivos: “um caminho longo e estreito”. Pergunte qual ser ou objeto tem aquela característica.',
    'Em “A artista pintou flores amarelas”, amarelas caracteriza quem?', 'As flores, e não a artista.',[137,139,153,154],[
    ['Em “O garoto encontrou uma caixa pesada”, o que é pesado?','A caixa.',['O garoto.','A ação de encontrar.','O narrador.'],'Pesada concorda e se relaciona com caixa.'],
    ['“A coruja tinha olhos grandes e brilhantes.” Quais palavras caracterizam os olhos?','Grandes e brilhantes.',['Coruja e tinha.','Olhos e coruja.','Tinha e grandes.'],'Os dois adjetivos dão características ao mesmo substantivo: olhos.'],
    ['“A menina alegre levava uma bolsa azul.” Qual relação está correta?','Alegre caracteriza menina; azul caracteriza bolsa.',['Azul caracteriza menina; alegre caracteriza bolsa.','Alegre e azul caracterizam somente menina.','Alegre e azul indicam as ações da bolsa.'],'Observe cada grupo: menina alegre e bolsa azul.']]);
  add(2,'concordancia-adjetivo','Faça o adjetivo combinar',
    'O adjetivo concorda com o substantivo em gênero e número: casaco limpo, blusa limpa, casacos limpos, blusas limpas. Alguns mantêm a forma nos dois gêneros: menino gentil, menina gentil. No plural, gentil vira gentis. Confira cada palavra ao reescrever.',
    'Como fica “o aluno atento e gentil” no feminino plural?', 'As alunas atentas e gentis. Atento muda para atentas; gentil muda para gentis.',[138,139,154],[
    ['Complete: “As janelas estavam ___”.','Abertas.',['Aberto.','Abertos.','Aberta.'],'Janelas é feminino plural, por isso o adjetivo fica abertas.'],
    ['Como fica “o vizinho simpático e alegre” no feminino?','A vizinha simpática e alegre.',['A vizinha simpático e alegre.','A vizinha simpática e alegra.','O vizinha simpática e alegres.'],'Simpático muda para simpática; alegre serve aos dois gêneros.'],
    ['Qual reescrita de “um animal veloz” está correta no plural?','Uns animais velozes.',['Uns animal veloz.','Um animais velozes.','Uns animais veloz.'],'Artigo, substantivo e adjetivo passam para o plural.']]);
  add(2,'efeito-descricao','Descrições que ajudam a imaginar',
    'Adjetivos ajudam a imaginar cenas e podem despertar emoções ou interesse. “Um corredor escuro e silencioso” cria uma impressão diferente de “um corredor claro e colorido”. Comparações também destacam características: “macio como algodão” ajuda a imaginar a maciez.',
    'O que “áspero como uma lixa” ajuda a imaginar?', 'A textura áspera, usando uma comparação com algo conhecido.',[137,138,153,216,228,231],[
    ['Qual descrição combina melhor com um momento de suspense?','Uma sala escura e silenciosa, com uma porta entreaberta.',['Uma sala clara e festiva, cheia de risadas.','Uma sala organizada para uma comemoração alegre.','Uma sala colorida em uma tarde tranquila.'],'Escura, silenciosa e entreaberta sugerem incerteza e ajudam a construir tensão.'],
    ['“A manta era macia como algodão.” Para que serve a comparação?','Ajudar o leitor a imaginar a textura da manta.',['Informar que a manta se transformou numa planta.','Dizer quem fabricou a manta.','Mostrar que algodão é o nome da personagem.'],'A comparação destaca a maciez por meio de uma referência conhecida.'],
    ['Um anúncio apresenta “uma aventura surpreendente e divertida”. Qual efeito esses adjetivos procuram produzir?','Despertar o interesse do leitor.',['Informar somente o número de páginas.','Substituir o nome do autor.','Mostrar o preço exato do livro.'],'Os adjetivos valorizam a experiência de leitura e convidam a conhecê-la.']]);

  const conversa={type:'comic',title:'A montagem da pipa',panels:[
    {face:'👧',caption:'1 · Sara mostra a pipa a Bento.',speaker:'Sara',speech:'Eu cortei o papel.'},
    {face:'👦',caption:'2 · Bento pega a linha e aponta para Sara.',speaker:'Bento',speech:'Ela cortou o papel. Eu vou amarrar a linha.'},
    {face:'👧👦',caption:'3 · Sara e Bento seguram a pipa pronta.',speaker:'Sara e Bento',speech:'Nós fizemos esta pipa!'}]};
  add(3,'retomada-pronome','Pronomes retomam nomes',
    'Pronomes podem evitar repetições e retomar pessoas, animais ou coisas: “A bicicleta caiu. Ela ficou riscada.” Descubra o referente olhando o contexto e a concordância. Se dois nomes puderem ser retomados, repita o nome ou use outra expressão para deixar claro.',
    '“As sementes brotaram. Elas receberam água.” A quem se refere elas?', 'Às sementes: um grupo no feminino plural.',[133,175,176,177],[
    ['“Os artistas chegaram. Eles trouxeram os instrumentos.” A quem se refere eles?','Aos artistas.',['Aos instrumentos.','A quem está lendo.','A uma artista sozinha.'],'Eles retoma o grupo de artistas mencionado na frase anterior.'],
    ['“A mochila caiu no chão. Ela ficou rasgada.” Qual palavra foi retomada por ela?','Mochila.',['Chão.','Rasgada.','Caiu.'],'Ela retoma mochila, no feminino singular; chão é masculino.'],
    ['“Lúcia avisou Helena que ela levaria o jogo.” Se quem levará é Lúcia, qual reescrita deixa isso claro?','Lúcia avisou Helena que Lúcia levaria o jogo.',['Lúcia avisou Helena que ela levaria o jogo.','Ela avisou ela que ela levaria o jogo.','Lúcia avisou Helena que Helena levaria o jogo.'],'Quando um pronome permite mais de uma leitura, repetir o nome pode eliminar a dúvida.']]);
  add(3,'pessoas','As pessoas do discurso',
    '1ª pessoa: quem fala, eu ou nós. 2ª pessoa: com quem se fala, tu ou vós. 3ª pessoa: de quem se fala, ele/ela ou eles/elas. Eu, tu, ele e ela são do singular; nós, vós, eles e elas são do plural. Vós aparece pouco na conversa cotidiana.',
    'Complete os pares singular/plural: eu, tu, ele ou ela.', 'Eu/nós: 1ª pessoa. Tu/vós: 2ª pessoa. Ele ou ela/eles ou elas: 3ª pessoa.',[176,177],[
    ['Qual par indica a primeira pessoa do singular e a primeira do plural?','Eu e nós.',['Tu e vós.','Ele e eles.','Ela e elas.'],'A primeira pessoa inclui quem fala: eu sozinho; nós em grupo.'],
    ['Como se classifica vós no quadro dos pronomes pessoais?','Segunda pessoa do plural.',['Primeira pessoa do plural.','Terceira pessoa do singular.','Segunda pessoa do singular.'],'Vós é a segunda pessoa do plural; tu é a segunda do singular.'],
    ['Qual alternativa classifica corretamente ela e eles?','Ela: terceira pessoa do singular; eles: terceira pessoa do plural.',['Ela: primeira do singular; eles: segunda do plural.','Ela: segunda do singular; eles: primeira do plural.','Ela e eles: terceira pessoa do singular.'],'Os dois são de terceira pessoa; o número muda de singular para plural.']]);
  add(3,'pronome-contexto','Quem fala? Com quem o pronome combina?',
    'Eu se refere a quem fala naquele momento. Se o falante muda, o referente de eu pode mudar. Nós inclui quem fala e pelo menos mais alguém. Ao substituir nomes, ajuste o verbo: “Eu e Lia lemos” pode virar “Nós lemos”; “as amigas chegaram” vira “elas chegaram”.',
    'Sara diz “Eu fiz”. Bento responde “Eu ajudei”. Os dois eu indicam a mesma pessoa?', 'Não. O primeiro é Sara; o segundo é Bento. Eu depende de quem está falando.',[176,177],[
    ['No segundo quadro de “A montagem da pipa”, a quem se referem ela e eu, nessa ordem?','Ela: Sara. Eu: Bento.',['Ela: Bento. Eu: Sara.','Ela e eu: Sara.','Ela e eu: Bento.'],'Bento fala: usa ela para retomar Sara e eu para falar de si.',conversa],
    ['Troque “Eu e meu irmão organizamos a estante” por um pronome, mantendo o sentido.','Nós organizamos a estante.',['Eles organizamos a estante.','Eu organizaram a estante.','Vós organizou a estante.'],'O grupo inclui quem fala, por isso usamos nós e mantemos organizamos.'],
    ['Como fica “Ela é cuidadosa” se falarmos de várias meninas?','Elas são cuidadosas.',['Elas é cuidadosa.','Ela são cuidadosas.','Eles são cuidadoso.'],'Pronome, verbo e adjetivo precisam combinar com o feminino plural.']],conversa);
  add(3,'sinonimos','Sinônimos: confira o sentido',
    'Sinônimos têm sentidos semelhantes e podem ajudar a evitar repetições: contente/alegre. A troca precisa funcionar na frase. Uma palavra pode ter vários sentidos, então leia o contexto antes de escolher. O dicionário ajuda a consultar significados.',
    'Basta escolher qualquer palavra do dicionário para evitar repetição?', 'Não. A palavra escolhida deve preservar o sentido da frase.',[133,134,112],[
    ['Qual palavra substitui contente em “A menina ficou contente com a visita”, preservando o sentido?','Alegre.',['Atrasada.','Triste.','Distante.'],'Alegre e contente expressam um sentimento semelhante nesse contexto.'],
    ['“A rua estava tranquila.” Qual substituição mantém a ideia de tranquilidade?','A rua estava sossegada.',['A rua estava agitada.','A rua estava estreita.','A rua estava comprida.'],'Sossegada mantém a ideia; as outras opções mudam a característica.'],
    ['Leia o verbete: “claro: 1. iluminado; 2. fácil de compreender”. Em “O aviso foi claro”, qual sentido ajuda a escolher uma substituição?','Fácil de compreender.',['Iluminado por uma lâmpada.','Com muitas cores.','Feito de vidro.'],'O aviso foi compreendido; o contexto seleciona o sentido adequado.']]);
  add(3,'outras-retomadas','Outras expressões que evitam repetir',
    'Também podemos retomar um nome por uma expressão: “A violinista chegou. A musicista afinou o instrumento.” A segunda expressão deve continuar indicando a mesma pessoa ou coisa. Nem toda retomada é um sinônimo exato: “a ave” pode retomar “o sabiá” naquele texto.',
    'Em “O tamanduá apareceu. O animal se aproximou”, animal é um nome de outro ser?', 'Não. Nesse contexto, o animal retoma o mesmo tamanduá e evita a repetição.',[133,134],[
    ['“Uma tartaruga apareceu. A tartaruga atravessou o jardim.” Qual troca evita a repetição sem mudar quem atravessou?','Uma tartaruga apareceu. O animal atravessou o jardim.',['Uma tartaruga apareceu. O pássaro atravessou o jardim.','Uma tartaruga apareceu. A árvore atravessou o jardim.','Uma tartaruga apareceu. O vizinho atravessou o jardim.'],'O animal pode retomar a tartaruga; as demais trocas introduzem outros referentes.'],
    ['“O padeiro abriu a loja. O profissional preparou os pães.” Quem é o profissional nesse trecho?','O padeiro.',['Um segundo trabalhador que o texto apresentou.','O comprador dos pães.','O dono de outra loja.'],'A expressão retoma a pessoa já mencionada.'],
    ['“O sabiá pousou. A ave cantou.” Qual explicação está correta?','A ave retoma o sabiá nesse texto, embora ave não signifique apenas sabiá.',['Ave e sabiá sempre nomeiam exatamente a mesma espécie.','O texto apresenta obrigatoriamente dois pássaros.','A ave retoma a ação de pousar.'],'Uma expressão mais geral pode retomar um nome específico, mantendo a referência.']]);

  add(4,'tonica','Encontre a sílaba mais forte',
    'A sílaba tônica é pronunciada com mais força. Fale a palavra naturalmente, separe as sílabas e perceba a mais forte: ja-NE-la. Ter sílaba tônica não significa ter acento escrito. Compare sa-BI-a e SÁ-bia: a pronúncia e o sentido mudam.',
    'Uma palavra sem acento escrito pode ter sílaba tônica?', 'Sim. Em janela, a sílaba forte é ne, mesmo sem acento gráfico.',[192,193],[
    ['Fale “sapato” naturalmente. Qual é sua sílaba tônica?','pa.',['sa.','to.','Todas têm a mesma força.'],'A divisão é sa-PA-to; pa é pronunciada com mais força.'],
    ['A palavra “caderno” não tem acento escrito. O que é correto?','Tem sílaba tônica: der.',['Não tem sílaba tônica.','Todas as sílabas são tônicas.','A sílaba tônica é sempre a primeira.'],'Ca-DER-no tem força em der, sem precisar de acento gráfico.'],
    ['Compare “Ela sabia a resposta” e “Ela era uma pessoa sábia”. O que muda em sabia/sábia?','A posição da sílaba forte e o sentido da palavra.',['Somente o tamanho das letras.','Apenas o número de personagens.','Nada: a pronúncia é sempre igual.'],'Sa-BI-a indica saber; SÁ-bia caracteriza quem tem sabedoria.']]);
  add(4,'ultima','Tônica na última sílaba',
    'Conte as posições a partir do fim. A última é a que termina a palavra. Em a-ba-ca-XI, xi é a última e a mais forte. Em ca-FÉ, fé é a última. Essas palavras têm a tônica na última sílaba, também chamada posição oxítona.',
    'Em “a-ba-ca-xi”, qual é a posição da sílaba tônica?', 'Xi: última sílaba.',[192,193],[
    ['Qual palavra tem a sílaba tônica na última posição?','Tambor.',['Janela.','Médico.','Caderno.'],'Tam-BOR termina com a sílaba mais forte.'],
    ['Em “ja-ca-ré”, qual é a sílaba tônica e sua posição?','Ré, última.',['Ja, antepenúltima.','Ca, penúltima.','Ré, penúltima.'],'Ré termina a palavra e é a sílaba mais forte.'],
    ['Qual par tem as duas palavras com tônica na última sílaba?','Sofá e papel.',['Mesa e sofá.','Pássaro e papel.','Caderno e lâmpada.'],'So-FÁ e pa-PEL têm força na última sílaba.']]);
  add(4,'penultima','Tônica na penúltima sílaba',
    'A penúltima é a segunda sílaba contando do fim. Em bo-NE-ca, ca é a última; ne é a penúltima e a mais forte. Observe palavras maiores: bor-bo-LE-ta também tem a tônica na penúltima. Essa posição é chamada paroxítona.',
    'Em bor-bo-le-ta, qual é a tônica e quantas sílabas há depois dela?', 'Le é a tônica. Há uma sílaba depois dela: ta. Portanto, le é a penúltima.',[192,193],[
    ['Qual é a posição da sílaba tônica em “mochila”?','Penúltima: chi.',['Última: la.','Antepenúltima: mo.','Última: chi.'],'Mo-CHI-la: chi é a segunda sílaba contando do fim.'],
    ['Qual palavra tem tônica na penúltima sílaba?','Cavalo.',['Jacaré.','Lâmpada.','Tambor.'],'Ca-VA-lo tem a sílaba forte va, antes da última.'],
    ['Em “borboleta”, a tônica le é a terceira sílaba contando do começo. Como se classifica sua posição contando do fim?','Penúltima.',['Última.','Antepenúltima.','Primeira.'],'Bor-bo-LE-ta termina em ta; le vem imediatamente antes e é penúltima.']]);
  add(4,'antepenultima','Tônica na antepenúltima sílaba',
    'A antepenúltima é a terceira sílaba contando do fim. Em LÂM-pa-da, lâmpada tem força em lâm. Em ma-te-MÁ-ti-ca, má é a antepenúltima, mesmo não sendo a primeira. Essa posição é chamada proparoxítona. Conte do fim para não confundir.',
    'A antepenúltima precisa ser a primeira sílaba da palavra?', 'Não. Em matemática, má é antepenúltima: depois dela vêm ti e ca.',[192,193],[
    ['Qual é a posição da sílaba tônica em “pássaro”?','Antepenúltima: pás.',['Penúltima: sa.','Última: ro.','Penúltima: pás.'],'PÁS-sa-ro tem duas sílabas depois da forte.'],
    ['Qual palavra tem a sílaba forte na antepenúltima posição?','Música.',['Cadeira.','Abacaxi.','Janela.'],'MÚ-si-ca tem a tônica na terceira sílaba contando do fim.'],
    ['Em “ma-te-má-ti-ca”, por que má é a antepenúltima?','Porque há duas sílabas depois dela: ti e ca.',['Porque é a primeira sílaba da palavra.','Porque toda palavra com cinco sílabas tem essa posição tônica.','Porque a última sílaba é sempre a mais forte.'],'A posição depende da distância até o fim, não do total de sílabas.']]);

  const dialogo=text('Uma conversa na horta', 'Lena olhou o canteiro e perguntou:\n— Você já regou as mudas?\n— Já reguei — respondeu Otávio.\n— Que bom! Elas estavam precisando de água.');
  add(5,'dois-travessao','Dois-pontos e travessão',
    'Num diálogo, os dois-pontos podem anunciar a fala: “Lena perguntou:”. O travessão marca o início da fala da personagem. Um novo falante costuma começar em outro parágrafo, com outro travessão. Repare que travessão (—) e hífen (-) são sinais diferentes.',
    'Que sinais completam “Lena perguntou” e anunciam “Você vem?” em outro parágrafo?', 'Dois-pontos depois de perguntou e travessão antes da fala: Lena perguntou: / — Você vem?',[217,218,219],[
    ['Em “Lena olhou o canteiro e perguntou:”, qual é a função dos dois-pontos?','Anunciar a fala que vem a seguir.',['Encerrar definitivamente a história.','Indicar que o narrador é Lena.','Separar sílabas da palavra perguntou.'],'Nesse contexto, os dois-pontos introduzem o que Lena vai dizer.',dialogo],
    ['Que sinal inicia as falas das personagens em “Uma conversa na horta”?','Travessão (—).',['Vírgula (,).','Hífen (-).','Ponto-final (.).'],'O travessão marca a entrada da fala no diálogo.',dialogo],
    ['Qual forma usa corretamente dois-pontos e travessão para anunciar uma fala?','O porteiro avisou:\n— A biblioteca abriu.',['O porteiro avisou?\nA biblioteca abriu:','O porteiro avisou,\n: A biblioteca abriu.','O porteiro avisou\nA biblioteca abriu—'],'Os dois-pontos anunciam; o travessão inicia a fala.']],dialogo);
  add(5,'intervencao','O narrador entre as falas',
    'O travessão também pode separar a fala da personagem de uma intervenção do narrador. Em “— Que vento! — exclamou Dora”, Dora diz “Que vento!”; “exclamou Dora” informa quem falou. Palavras como perguntou, respondeu e sussurrou ajudam a identificar a fala e seu modo.',
    'Em “— Achei! — disse Ana”, para que serve o segundo travessão?', 'Separa a fala de Ana da intervenção do narrador: disse Ana.',[217,218,219,230],[
    ['“— Onde está a bola? — perguntou Rui.” O segundo travessão serve para…','Separar a pergunta da intervenção do narrador.',['Iniciar uma nova fala de outra personagem.','Mostrar que Rui é o autor do livro.','Indicar uma palavra no plural.'],'Depois dele, o narrador informa que Rui perguntou.'],
    ['“— Fale baixinho — sussurrou a menina.” O que sussurrou informa?','Que a menina falou em voz baixa.',['Que a menina gritou muito alto.','Que a menina não participou da cena.','Que a fala era uma pergunta.'],'Sussurrar é falar em voz baixa; o verbo ajuda a imaginar como a fala foi dita.'],
    ['No diálogo da horta, quem diz “Já reguei”?','Otávio.',['Lena.','Um narrador falando de sua própria horta.','Uma terceira personagem sem nome.'],'“Respondeu Otávio” identifica a personagem que disse a frase.',dialogo]]);
  add(5,'sinais-sentido','Pontuação e intenção da fala',
    'O ponto de interrogação marca uma pergunta. A exclamação pode indicar surpresa, alegria, medo ou uma fala intensa. O ponto-final encerra uma declaração. Reticências podem indicar hesitação, interrupção ou suspense. Leia a situação para entender o efeito do sinal.',
    'Que diferença há entre “Você chegou.” e “Você chegou?”?', 'A primeira afirma a chegada; a segunda pergunta se a pessoa chegou.',[217,218,219,213,231],[
    ['Lia quer saber se o amigo terminou a tarefa. Qual frase expressa uma pergunta?','Você terminou a tarefa?',['Você terminou a tarefa.','Você terminou a tarefa!','Você terminou a tarefa...'],'A interrogação torna explícita a intenção de perguntar.'],
    ['Em “Viva! Conseguimos!”, qual sentimento a exclamação ajuda a expressar?','Alegria.',['Uma dúvida sobre o horário.','Uma enumeração de materiais.','Um pedido para separar sílabas.'],'Viva e o contexto de conquista indicam uma comemoração.'],
    ['“Eu ia abrir a porta, mas... ouvi passos.” Que efeito as reticências podem produzir?','Uma pausa que aumenta a expectativa.',['O encerramento de uma lista de nomes já completa.','A indicação de que passos é uma pergunta.','A certeza de que não haverá nenhum acontecimento.'],'A pausa interrompe a ação esperada e prepara algo que desperta curiosidade.']]);
  add(5,'paragrafos','Organize e reescreva um diálogo',
    'Ao transformar uma conversa em texto, separe a voz do narrador e as falas. Use dois-pontos para anunciar, travessão para iniciar a fala e parágrafo novo quando muda o falante. Comece as frases com maiúscula e escolha o sinal final conforme a intenção. Depois leia para verificar se ficou claro quem fala.',
    'Escreva uma pergunta de Leo e uma resposta de Iris. O que conferir?', 'Um parágrafo para cada fala, travessões, maiúsculas e sinais adequados. Exemplo: — Você vem? / — Vou, sim.',[218,219],[
    ['Qual versão organiza claramente a pergunta e a resposta de duas personagens?','— Você trouxe o mapa?\n— Trouxe, sim.',['Você trouxe o mapa trouxe sim.','— Você trouxe o mapa trouxe, sim?','Você trouxe o mapa:\nTrouxe, sim—'],'Cada fala começa em um parágrafo com travessão, e a pergunta termina com interrogação.'],
    ['Por que normalmente se inicia outro parágrafo quando muda quem fala?','Para o leitor perceber a troca de falante.',['Para indicar que todos os fatos acabaram.','Para transformar a fala em título.','Para evitar qualquer sinal de pontuação.'],'A organização visual ajuda a acompanhar a conversa.'],
    ['Reescreva “bia perguntou onde está meu estojo” com fala direta.','Bia perguntou:\n— Onde está meu estojo?',['bia perguntou:\nOnde está meu estojo.','Bia perguntou?\n— onde está meu estojo:','— Bia perguntou onde está meu estojo.'],'O narrador anuncia a pergunta; a fala começa com travessão e maiúscula e termina com ?.']]);

  add(6,'genero-artigos','Masculino e feminino',
    'Artigos ajudam a reconhecer o gênero do substantivo: o/os/um/uns acompanham masculinos; a/as/uma/umas acompanham femininos. Objetos também têm gênero gramatical: o caderno, a parede. A última letra não basta: o problema é masculino, a mão é feminino.',
    'Por que “problema” é masculino mesmo terminando em a?', 'Porque dizemos o problema ou um problema. A letra final, sozinha, não determina o gênero.',[69,70],[
    ['Qual alternativa apresenta um substantivo masculino acompanhado corretamente?','O planeta.',['A planeta.','A caderno.','O janela.'],'Planeta é masculino: o planeta. A terminação a não decide sozinha.'],
    ['Na expressão “uma ponte”, que palavra ajuda a identificar o gênero feminino?','Uma.',['Ponte termina em e, então é sempre masculina.','O número de letras.','A ausência de acento.'],'O artigo uma acompanha o substantivo feminino ponte.'],
    ['Qual conjunto tem somente substantivos femininos?','A parede, a flor, a mão.',['O papel, a flor, a mão.','O jardim, o planeta, a parede.','A flor, o caderno, o papel.'],'As três palavras combinam com o artigo a, mesmo com finais diferentes.']]);
  add(6,'formacao-genero','Nem todo feminino se forma igual',
    'Alguns pares trocam o final: sobrinho/sobrinha. Outros acrescentam a: professor/professora. Outros usam palavras diferentes: homem/mulher, pai/mãe. Não aplique uma única regra a todos os substantivos. Observe o par e confira a forma correta.',
    'Compare sobrinho/sobrinha, professor/professora e pai/mãe. O que muda?', 'No primeiro, troca-se o por a; no segundo, acrescenta-se a; no terceiro, usam-se palavras diferentes.',[71],[
    ['Qual par forma o feminino trocando o o final por a?','Sobrinho / sobrinha.',['Professor / professora.','Pai / mãe.','Homem / mulher.'],'Sobrinho termina em o; sobrinha substitui essa letra por a.'],
    ['Qual é o feminino de vendedor?','Vendedora.',['Vendedorinha.','Vendedoro.','Venda.'],'Acrescenta-se a ao final: vendedor/vendedora. Diminutivo não é o mesmo que feminino.'],
    ['Qual par usa palavras diferentes para masculino e feminino?','Boi / vaca.',['Tio / tia.','Aluno / aluna.','Professor / professora.'],'Boi e vaca não são formados apenas pela troca ou pelo acréscimo de a.']]);
  add(6,'reescrita-genero','Mude o gênero da frase com cuidado',
    'Ao trocar uma personagem pelo feminino ou masculino, confira artigos, substantivos, adjetivos e pronomes: “O primo está animado. Ele chegou.” vira “A prima está animada. Ela chegou.” As palavras que se referem a outros elementos não precisam mudar.',
    'Troque “O tio carinhoso chegou. Ele sorriu” para o feminino.', 'A tia carinhosa chegou. Ela sorriu. Os verbos continuam chegou e sorriu, pois ainda é uma pessoa.',[72,89,139],[
    ['Como fica “O menino estava cansado. Ele descansou” no feminino?','A menina estava cansada. Ela descansou.',['A menina estava cansado. Ele descansou.','O menina estava cansada. Ela descansou.','A menina estavam cansadas. Elas descansaram.'],'A, menina, cansada e ela concordam no feminino singular; os verbos permanecem.'],
    ['Troque a personagem de “A professora cuidadosa levou uma bolsa vermelha” pelo masculino.','O professor cuidadoso levou uma bolsa vermelha.',['O professor cuidadoso levou um bolso vermelho.','O professor cuidadosa levou uma bolsa vermelha.','A professor cuidadoso levou uma bolsa vermelho.'],'Muda quem se refere à professora; bolsa vermelha continua nomeando o mesmo objeto.'],
    ['Qual palavra permanece igual ao trocar “O menino gentil sorriu” por “A menina gentil sorriu”?','Gentil.',['O.','Menino.','Nenhuma: todas precisam mudar.'],'Gentil tem a mesma forma nos dois gêneros; sorriu também permanece igual.']]);

  add(7,'plural-basico','Singular, plural e formas que não mudam',
    'Singular indica um elemento; plural, mais de um. É comum acrescentar s: cadeira/cadeiras, chapéu/chapéus. Algumas palavras mantêm a forma: o lápis/os lápis, o ônibus/os ônibus, o tênis/os tênis. Os artigos e o contexto mostram o número.',
    'Como distinguir “o ônibus” de “os ônibus” se ônibus não muda?', 'Pelo artigo: o indica singular; os indica plural.',[100,101],[
    ['Qual par está corretamente no singular e no plural?','Chapéu / chapéus.',['Chapéu / chapéis.','Chapéu / chapéuzes.','Chapéu / chapéu, com a mesma forma em todos os casos.'],'Chapéu recebe s para formar o plural.'],
    ['Como escrever sobre mais de um lápis?','Os lápis.',['Os lápises.','Os lápiz.','O lápis.'],'Lápis mantém a forma; o artigo os indica plural.'],
    ['Em “Os ônibus chegaram”, que pista mostra que há mais de um ônibus?','Os e chegaram estão no plural.',['Ônibus perdeu uma letra.','Ônibus recebeu es.','A frase está no diminutivo.'],'A palavra ônibus não muda, mas artigo e verbo mostram o plural.']]);
  add(7,'plural-rzm','Plurais com r, z e m',
    'Em muitos substantivos terminados em r ou z, acrescentamos es: flor/flores, luz/luzes. No final m, trocamos m por ns: jardim/jardins. Confira as mudanças na palavra inteira; não escreva m seguido de s.',
    'Forme o plural de flor, luz e jardim.', 'Flores, luzes e jardins. R e z recebem es; m final é trocado por ns.',[101,102],[
    ['Qual é o plural de “tambor”?','Tambores.',['Tambors.','Tamboris.','Tambões.'],'A palavra termina em r; acrescentamos es.'],
    ['Complete: “A luz acendeu. As ___ acenderam”.','Luzes.',['Luzs.','Luzis.','Luz.'],'Em luz, acrescentamos es: luzes.'],
    ['Qual par de plurais está correto?','Jardim → jardins; som → sons.',['Jardim → jardims; som → soms.','Jardim → jardim; som → sones.','Jardim → jardimes; som → soms.'],'O m final é substituído por ns nas duas palavras.']]);
  add(7,'plural-l','Plurais com al, el, ol e ul',
    'Em muitas palavras terminadas em al, el, ol e ul, trocamos l por is: jornal/jornais, papel/papéis, farol/faróis, azul/azuis. Algumas formas precisam de acento. Compare: degrau termina em u e vira degraus; não segue a troca de l por is.',
    'Qual é a diferença entre os plurais de jornal e degrau?', 'Jornal termina em l: jornais. Degrau termina em u: degraus.',[101,102],[
    ['Qual sequência apresenta os plurais corretos de “jornal” e “papel”?','Jornais e papéis.',['Jornals e papels.','Jornaus e papeus.','Jornais e papel.'],'Nos dois casos, troca-se l por is; papéis recebe acento.'],
    ['Complete: “Um farol azul; dois ___”.','Faróis azuis.',['Farols azuls.','Faróis azuls.','Farol azuis.'],'Farol vira faróis; azul vira azuis. Os dois acompanham o plural.'],
    ['Qual par está correto?','Anel → anéis; degrau → degraus.',['Anel → anels; degrau → degrais.','Anel → aneus; degrau → degrais.','Anel → anéis; degrau → degraues.'],'Anel segue a mudança do l; degrau termina em u e recebe s.']]);
  add(7,'plural-il-ao','Atenção a il e ão',
    'Em palavras terminadas em il, a sílaba forte importa: fu-NIL vira funis, com troca de l por s; FÓS-sil vira fósseis, com troca de il por eis. Em ão, existem formas diferentes: balão/balões, mão/mãos, pão/pães. Não use uma única terminação para todos os casos.',
    'Por que funil/funis e fóssil/fósseis seguem mudanças diferentes?', 'Funil tem força na última sílaba; fóssil, na penúltima. A posição tônica ajuda a distinguir a formação do plural em il.',[101,102],[
    ['Qual par apresenta os plurais corretos?','Funil → funis; fóssil → fósseis.',['Funil → funiles; fóssil → fóssils.','Funil → funeis; fóssil → fóssis.','Funil → funils; fóssil → fóssiles.'],'Funil tem tônica na última: funis. Fóssil tem tônica na penúltima: fósseis.'],
    ['Qual sequência está correta no plural?','Balões, mãos e pães.',['Balões, mões e pões.','Balãos, mãos e pãos.','Balães, mães e pães.'],'Palavras em ão podem formar plural em ões, ãos ou ães.'],
    ['Como ficam “um barril” e “um réptil” no plural?','Uns barris e uns répteis.',['Uns barrils e uns réptils.','Uns barreis e uns réptis.','Uns barriles e uns réptiles.'],'Bar-RIL tem força na última e vira barris; RÉP-til tem força na penúltima e vira répteis.']]);
  add(7,'reescrita-numero','Mude a frase inteira para o plural',
    'Mudar o número exige conferir as palavras relacionadas: “A menina é gentil. Ela ajuda.” vira “As meninas são gentis. Elas ajudam.” Artigos, nomes, adjetivos, pronomes e verbos podem mudar. Palavras como de, com e muito nem sempre mudam; observe sua função.',
    'Passe “O pássaro é pequeno. Ele canta” para o plural.', 'Os pássaros são pequenos. Eles cantam.',[100,101,102,138,177],[
    ['Qual é o plural de “A flor é amarela”?','As flores são amarelas.',['As flor são amarela.','As flores é amarelas.','A flores são amarela.'],'Artigo, nome, verbo e adjetivo concordam no plural.'],
    ['Reescreva “Eu sou discreta e silenciosa” como se várias meninas falassem juntas.','Nós somos discretas e silenciosas.',['Nós sou discreta e silenciosa.','Elas somos discretas e silenciosas.','Nós somos discreta e silenciosa.'],'Quem fala passa de eu para nós, com verbo e adjetivos no plural.'],
    ['Qual é o singular de “Os animais são rápidos. Eles correm”?','O animal é rápido. Ele corre.',['O animais é rápido. Ele corre.','O animal são rápidos. Eles corre.','Os animal é rápidos. Ele correm.'],'A mudança para um animal exige concordância em todas as palavras relacionadas.']]);

  add(8,'graus','Normal, diminutivo e aumentativo',
    'O grau pode indicar tamanho: copo (normal), copinho (diminutivo), copão (aumentativo). Outro exemplo é casa/casinha/casarão. Para identificar o grau, compare a palavra com sua forma normal e com o sentido da frase.',
    'Qual mudança ocorre em copo/copinho/copão?', 'Muda o grau: normal, diminutivo e aumentativo. No contexto de tamanho, pequeno e grande.',[110,111],[
    ['Qual sequência mostra grau normal, diminutivo e aumentativo, nessa ordem?','Gato, gatinho, gatão.',['Gatinho, gato, gatão.','Gatão, gatinho, gato.','Gatos, gata, gato.'],'A sequência parte da forma normal e apresenta as duas variações de grau.'],
    ['Uma história chama um copo muito grande de copão. Que ideia o aumentativo indica nesse contexto?','Tamanho grande.',['Mais de um copo.','Gênero feminino.','Um copo menor.'],'Copão está sendo usado para destacar o tamanho.'],
    ['Uma personagem guarda um livro minúsculo no bolso e o chama de livrinho. O diminutivo indica…','Tamanho pequeno.',['Vários livros.','Um livro muito grande.','Mudança para o feminino.'],'O contexto minúsculo mostra que o diminutivo indica tamanho.']]);
  add(8,'terminacoes','A terminação sozinha não basta',
    'Nem toda palavra em ão é aumentativo: limão nomeia uma fruta. Nem toda palavra em inho ou inha é diminutivo: caminho não é um cam pequeno. Pergunte qual seria a forma normal e se existe realmente uma mudança de grau naquele sentido.',
    'Limão é aumentativo só porque termina em ão?', 'Não. É o nome de uma fruta, sem indicar uma versão maior de outra coisa.',[111],[
    ['Qual palavra NÃO é aumentativo, apesar de terminar em ão?','Limão.',['Copão, no sentido de copo grande.','Gatão, no sentido de gato grande.','Panelão, no sentido de panela grande.'],'Limão é o nome de uma fruta; não indica aumento de tamanho.'],
    ['Qual palavra NÃO é diminutivo?','Caminho.',['Copinho.','Barquinho.','Gatinho.'],'Caminho não representa a forma pequena de um substantivo cam.'],
    ['Alguém diz que toda palavra terminada em inha indica tamanho pequeno. Qual exemplo mostra o erro?','Farinha, que nomeia um alimento.',['Casinha, no sentido de casa pequena.','Bolinha, no sentido de bola pequena.','Mesinha, no sentido de mesa pequena.'],'É necessário compreender o significado; a terminação pode fazer parte da própria palavra.']]);
  add(8,'afeto','Tamanho ou carinho?',
    'O diminutivo e o aumentativo também podem expressar afeto. Em “Venha cá, filhinha querida”, a pessoa pode estar demonstrando carinho. Em “Você é meu amigão!”, pode valorizar a amizade. Leia a situação: nem sempre se fala de tamanho.',
    '“Vovó, minha queridinha!” fala necessariamente do tamanho da avó?', 'Não. Nesse contexto, o diminutivo expressa carinho.',[112,113],[
    ['Uma avó abraça a neta e diz “Minha netinha querida!”. Que ideia o diminutivo destaca?','Carinho.',['Que a neta tem necessariamente poucos centímetros.','Que há muitas netas no abraço.','Que a neta é um menino.'],'O abraço e querida indicam afeto, não uma medida de tamanho.'],
    ['“Você me ajudou muito. Obrigado, amigão!” O aumentativo expressa principalmente…','Afeto e valorização da amizade.',['A altura exata do amigo.','O plural de amigo.','O gênero feminino da pessoa.'],'O agradecimento mostra que amigão valoriza a relação.'],
    ['Em qual frase casinha destaca mais claramente o carinho, e não o tamanho?','“Minha casinha querida é enorme, mas sempre a chamo assim com afeto.”',['“A casinha de brinquedo cabe na palma da mão.”','“O desenho mostra uma casinha menor que a árvore.”','“Construímos uma casinha minúscula para a maquete.”'],'O contexto afirma que a casa é enorme e explica o uso carinhoso do diminutivo.']]);
  add(8,'grau-contexto','O contexto decide o significado',
    'Algumas palavras podem ter sentidos que não indicam tamanho. Em “Vamos fazer uma vaquinha para comprar o presente”, vaquinha é uma coleta de dinheiro; em “A vaquinha pequena nasceu ontem”, pode indicar um animal pequeno. Consulte o contexto e o significado antes de classificar.',
    'Como decidir se uma palavra indica tamanho, afeto ou outro sentido?', 'Leia a frase inteira, observe a situação e verifique o significado adequado. A forma da palavra é apenas uma pista.',[112,113,134],[
    ['“A turma fez uma vaquinha para comprar tinta.” O que vaquinha significa?','Uma coleta de dinheiro entre as pessoas.',['Uma vaca pequena comprada pela turma.','Uma vaca muito grande.','Uma palavra no plural.'],'Comprar tinta com uma contribuição coletiva explica o sentido da expressão.'],
    ['“Meu vizinho trouxe pão fresquinho.” Qual análise de vizinho está correta?','Não é diminutivo; a palavra nomeia quem mora perto.',['É diminutivo de um nome vizo.','Indica obrigatoriamente uma pessoa pequena.','Está no aumentativo por terminar em o.'],'O final inho pertence à palavra vizinho; não é uma variação de tamanho.'],
    ['Qual atitude ajuda a interpretar “amigão” em uma história?','Ler a fala e a situação para saber se indica tamanho ou afeto.',['Decidir sempre que o amigo é gigante.','Trocar por amigos porque ão indica plural.','Ignorar o restante da frase.'],'O mesmo recurso de grau pode ter efeitos diferentes conforme o contexto.']]);

  const descriptions=[
    'Elementos da narrativa, sequência, conflito, clímax, desfecho, pistas e quadrinhos.',
    'Narrador-personagem, narrador-observador e a voz de cada personagem.',
    'Reconheça características, seus referentes, a concordância e os efeitos da descrição.',
    'Pronomes, pessoas do discurso, sinônimos e outras formas de retomar nomes.',
    'Fale, separe e encontre a sílaba forte: última, penúltima ou antepenúltima.',
    'Dois-pontos, travessão, intenção da fala e organização dos parágrafos.',
    'Masculino e feminino, formação de pares e reescrita de frases.',
    'Singular, plural, diferentes terminações e concordância no texto.',
    'Normal, diminutivo, aumentativo e os sentidos de tamanho e carinho.'
  ];
  return {
    id:'portugues-2026-11-16',subject:'Português',icon:'📚',teacher:'Material de estudo',term:'3º trimestre',status:'Completa',
    assessmentDate:'16 de novembro de 2026',assessmentShortDate:'16/11/2026',assessmentStatus:'Próxima avaliação',
    areasLabel:'Leitura e conhecimentos da língua',
    intro:'Descubra as pistas dos textos e use os conceitos em novas histórias e frases.',
    description:'Prepare-se para a prova de Português de 16/11: compreenda, explique e pratique os conceitos.',
    topics:'Contos e suspense; tipos de narrador; adjetivos; pronomes e outras palavras que evitam repetições; sílaba tônica; pontuação em diálogos; gênero, número e grau.',
    studyPlan:'1. Leia os cards de um bloco e explique cada conceito com suas palavras. 2. Tente responder aos flashcards antes de revelar. 3. Faça a fase correspondente e leia a explicação de cada resposta. 4. Escreva no papel um pequeno diálogo e reescreva uma frase no feminino e no plural. Confira com os cards. 5. Faça o Simulado Final: 42 questões, uma por tópico. Retome os conceitos dos erros e repita para praticar outras situações.',
    lessons,flashcards,questions,
    modes:[...areas.map((area,i)=>({key:`fase-${i+1}`,title:`Fase ${i+1} · ${area}`,emoji:icons[i],description:descriptions[i],count:lessons.filter(l=>l.area===area).length*2,includeAreas:[area],balancedByTopic:true})),
      {key:'all',title:'Simulado Final',emoji:'🎯',description:'42 questões: uma por tópico, com exemplos variados a cada tentativa.',count:42,includeAreas:'all',balancedByTopic:true}]
  };
})();
