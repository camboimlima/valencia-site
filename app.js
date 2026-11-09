/* ---------- configuração ----------
   whatsapp: só números, com 55 e DDD (ex.: "5511999999999").
   Enquanto estiver vazio, os botões mostram a mensagem que seria enviada. */
var CONFIG = { whatsapp: "5511976070581", nome: "Gustavo", vagas: 5,
  /* contagem de cliques sem cookies (Umami Cloud). Crie o site no Umami, copie o "Website ID" do código de rastreamento
     e cole em id. Vazio = desligado; a política de privacidade muda sozinha conforme este campo. */
  umami: { id: "", src: "https://cloud.umami.is/script.js" } };

/* ---------- portfólio de clientes reais ----------
   Cliente entra aqui só com autorização por escrito. As fotos ficam ao lado do index.html, sem pasta (o envio pelo site do GitHub não aceita pastas).
   Campos: nome, segmento, cat, entrega, pos (posição na galeria, contando a partir de 0), selo, papel (o que a Valência faz),
   site, dominio, instagram, capa e fotos (caminhos relativos ao index.html).
   MOSTRAR_CONCEITOS: deixe true enquanto houver poucos projetos reais; eles entram no meio dos conceitos, na posição pos. */
var PORTFOLIO = [
  { nome:"Questão Ilustrada", segmento:"Matemática para o ENEM", cat:"servicos", entrega:"Página de vendas · Instagram", pos:2,
    selo:"Projeto real", papel:"A página de vendas e o Instagram são feitos e administrados pela Valência.",
    site:"https://questaoilustrada.com", dominio:"questaoilustrada.com", instagram:"https://www.instagram.com/questaoilustrada/",
    capa:"qi-capa.webp", fotos:["qi-geometria-celular.webp","qi-links-celular.webp"] }
];
var MOSTRAR_CONCEITOS = true;

/* ---------- preços de lançamento (reais), para os 5 primeiros clientes ----------
   ig: valor mensal por posts por semana; os degraus diminuem (+100, +90, +80).
   Depois do lançamento, a tabela cheia está em precificacao.md. */
var PRICE = { lp: 590, lpCombo: 490, site: 1290, ig: { 2: 490, 3: 590, 4: 680, 5: 760 }, auto: 140, autoSetup: 0, maxPosts: 5 };

/* fontes dos sites conceituais: carregadas depois da página, sem travar a abertura */
(function(){
  var l = document.createElement("link"); l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Bungee&family=Archivo:ital,wdth,wght@0,62..125,400..900;1,62..125,400..900&family=Pirata+One&family=Oswald:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Zilla+Slab:wght@400;600;700&family=Kalam:wght@400;700&family=Atkinson+Hyperlegible:wght@400;700&family=Tinos:ital,wght@0,400;0,700;1,400&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap";
  document.head.appendChild(l);
})();

var ARR_UR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
var I_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>';
function ic(p){ return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; }
function seeds(){
  var pos=[[22,30],[38,18],[55,26],[70,16],[80,34],[46,44],[30,52],[63,48]], s='';
  for (var i=0;i<pos.length;i++) s+='<i style="left:'+pos[i][0]+'%;top:'+pos[i][1]+'%;transform:rotate('+(i*37%80-40)+'deg)"></i>';
  return s;
}
function ft(t){ return '<footer class="foot in"><span>' + t + '</span><span class="mock-ft">Site conceitual · demonstração Valência</span></footer>'; }
function bItem(tag, nome, desc, preco){ return '<div class="it"><span class="tg">'+tag+'</span><h3>'+nome+'</h3><p>'+desc+'</p><div class="pr">'+preco+'<b>+</b></div></div>'; }
function pLi(n, d, p){ return '<li><span class="n">'+n+'<small>'+d+'</small></span><span class="d"></span><span class="p">'+p+'</span></li>'; }
function pCd(l, n, s, h){ return '<div class="cd"><span class="mono">'+l+'</span><b>'+n+'</b><small>'+s+'</small><span class="slot">'+h+'</span></div>'; }
function imgP(p, alt){ return '<img src="'+p+'.webp" alt="'+(alt||'')+'" loading="lazy" decoding="async">'; }
function pCdP(p, n, s, h){ return '<div class="cd ph">'+imgP(p, n)+'<div class="cdt"><b>'+n+'</b><small>'+s+'</small><span class="slot">'+h+'</span></div></div>'; }
function bCov(c, t, lv, txt){ return '<li><span class="c">'+c+'</span><span>'+t+'</span><span class="lv '+lv+'">'+txt+'</span></li>'; }
function bSol(c, t, d){ return '<div><span class="c">'+c+'</span><h3>'+t+'</h3><p>'+d+'</p></div>'; }
function bStp(c, t, d){ return '<div><span class="c">'+c+'</span><h3>'+t+'</h3><p>'+d+'</p></div>'; }

var SITES = [
 { key:"bruto", seg:"Hamburgueria", nome:"Bruto Smash Burger", cat:"comida", url:"hamburgueria",
   resumo:"Smash de rua em Pinheiros: cardápio com cara de adesivo, combo e pedido no zap.", fontes:"Bungee · Archivo", cores:["#FFF3DC","#D9261C","#FFC21A","#17110D"],
   origem:"O xadrez vem do piso de lanchonete, a sombra dura do adesivo, e o vermelho e o amarelo, dos potes de ketchup e mostarda.",
   html:function(){ return '<div class="cs cs-bruto">'+
   '<div class="tick"><span>Aberto hoje 18h–00h ✸ Pede no zap ✸ Retirada no balcão ✸ Pinheiros, SP ✸ Aberto hoje 18h–00h ✸ Pede no zap ✸ Retirada no balcão ✸ Pinheiros, SP ✸&nbsp;</span></div>'+
   '<header class="nav in"><span class="logo">BRUTO<small>SMASH BURGER · SP</small></span><nav class="links"><a>Cardápio</a><a>Combos</a><a>Onde fica</a></nav><a class="zap">Pede no zap</a></header>'+
   '<section class="hero in"><div><span class="tag">Smash na chapa de ferro</span><h1>Smash<br><span class="o">que</span> <span class="r">escorre.</span></h1><p class="lead">Blend de acém e peito prensado na chapa até criar crosta, cheddar inglês derretendo pelas bordas e pão brioche selado na manteiga.</p><div class="btns"><a class="b1">Ver cardápio</a><a class="b2">Pede no zap</a></div></div>'+
   '<div class="art"><span class="sun"></span><div class="bg"><div class="bt">'+seeds()+'</div><div class="lf"></div><div class="ch"></div><div class="pt"></div><div class="ch c2"></div><div class="pt"></div><div class="bb"></div></div><span class="stk s1">O Bruto<br>R$ 39</span><span class="stk s2">Pão brioche<br>na manteiga</span></div></section>'+
   '<div class="chq"></div>'+
   '<section class="menu in"><div class="mh"><h2>Cardápio<br>bruto</h2><p>Qualquer burger vira combo com fritas rústicas e refri por + R$ 16.</p></div><div class="grid">'+
   bItem('Da casa','O Bruto','Dois smash de 90 g, cheddar duplo, bacon, cebola na chapa e molho bruto.','R$ 39')+
   bItem('Raiz','Smash clássico','Um smash de 90 g, cheddar, picles e cebola roxa no brioche.','R$ 29')+
   bItem('Pra quem aguenta','Triplo bruto','Três smash, cheddar triplo, bacon e maionese defumada.','R$ 49')+
   bItem('Sem carne','Veggie na brasa','Burger de grão-de-bico na chapa, queijo prato e cebola caramelizada.','R$ 34')+
   '</div></section>'+
   '<section class="combo in"><div><h2>Combo <span>bruto</span></h2><p>Burger + fritas rústicas + refri lata.</p></div><a>Montar combo</a></section>'+
   ft('Ter a dom · 18h às 00h · Pinheiros, São Paulo') + '</div>'; } },

 { key:"porleone", seg:"Barbearia", nome:"Porleone Barbearia", cat:"beleza", url:"barbearia",
   resumo:"Barbearia old school no Bixiga: preto, dourado, navalha e cadeira reservada.", fontes:"Pirata One · Oswald", cores:["#0D0C0A","#E7DDC7","#C3A25C","#8A1E1E"],
   origem:"A letra gótica vem das placas de barbearia antiga, o dourado do poste, e a moldura dupla, da tabela de preços na parede.",
   html:function(){ return '<div class="cs cs-porl">'+
   '<div class="bar in"><span>Corte à moda antiga</span><span>✦</span><span>Bixiga · São Paulo</span></div>'+
   '<header class="nav in"><nav class="links"><a>Serviços</a><a>Barbeiros</a><a>Endereço</a></nav><span class="logo"><b>Porleone</b><small>Barbearia</small></span><a class="res">Reservar cadeira</a></header>'+
   '<section class="hero ph"><div class="hero-bg">'+imgP('porleone-01-topo','Barba na navalha, toalha quente')+'</div><div class="in hero-t"><span class="kick">Navalha · Tesoura · Respeito</span><h1>Navalha afiada.<br><em>Conversa boa.</em></h1><p>Corte clássico, barba na toalha quente e um café ou uma dose por conta da casa. Atendimento só com hora marcada, sem fila e sem pressa.</p><div class="btns"><a class="b1">Reservar pelo WhatsApp</a><a class="b2">Tabela da casa</a></div></div></section>'+
   '<section class="svc in"><div><h2>Tabela da casa</h2><p class="sub">Preço fixo, sem surpresa no fim. Pix, débito ou crédito.</p></div><ul class="board">'+
   pLi('Corte clássico','Tesoura e máquina, lavagem e finalização','R$ 70')+
   pLi('Barba na toalha quente','Navalha, toalha quente e óleo','R$ 55')+
   pLi('Corte e barba','O ritual completo, cerca de 70 min','R$ 115')+
   pLi('Pezinho','Acabamento entre um corte e outro','R$ 25')+'</ul></section>'+
   '<section class="crew in">'+pCdP('porleone-02-theo','Téo','Navalha e clássicos','Hoje · 15h40')+pCdP('porleone-03-rafa','Rafa','Degradê e tesoura','Hoje · 17h20')+pCdP('porleone-04-duda','Duda','Barba e acabamento','Amanhã · 10h00')+'</section>'+
   '<section class="lugar in"><figure>'+imgP('porleone-06-fachada','Fachada no Bixiga')+'<figcaption>Sobrado de 1912 · Bixiga</figcaption></figure><figure>'+imgP('porleone-05-ferramentas','Navalha, tesoura e toalha quente')+'<figcaption>Navalha e toalha quente</figcaption></figure></section>'+
   '<section class="ig in"><div class="igh"><b>@porleone.barbearia</b><span>Siga no Instagram</span></div><div class="igg">'+imgP('porleone-05-ferramentas','')+imgP('porleone-02-theo','')+imgP('porleone-01-topo','')+imgP('porleone-04-duda','')+imgP('porleone-06-fachada','')+imgP('porleone-03-rafa','')+'</div></section>'+
   '<section class="band in"><p>Café ou uma dose por conta da casa.</p><a>Reservar cadeira</a></section>'+
   ft('Seg a sáb · 10h às 21h · Bixiga, São Paulo') + '</div>'; } },

 { key:"miolo", seg:"Padaria", nome:"Miolo Padaria", cat:"comida", url:"padaria",
   resumo:"Padaria de fermentação natural na Vila Mariana: horário das fornadas e encomendas.", fontes:"Zilla Slab · Kalam", cores:["#C8A47A","#2E3A8C","#1F2723","#ECE9E1"],
   origem:"O pardo e o carimbo vêm do saco de pão, e os horários escritos à mão, da lousa de giz do balcão.",
   html:function(){ return '<div class="cs cs-mio">'+
   '<header class="nav in mi-nav"><span class="mi-logo"><b>miolo</b><small>padaria de bairro</small></span><nav class="mi-links"><a>Fornadas</a><a>Encomendas</a><a>Onde fica</a></nav><a class="mi-bt">Encomendar</a></header>'+
   '<section class="mi-hero ph"><div class="hero-bg">'+imgP('miolo-01-topo','Fornada saindo do forno')+'</div><div class="in mi-ht"><div class="mi-box"><span class="mi-stamp">Fermentação natural, 24 horas</span><h1>Pão saindo às 7h, 11h e 16h.</h1><p>Massa de fermentação natural, manteiga de verdade e forno aceso desde as 5h. Passa aqui na Vila Mariana ou encomenda pelo WhatsApp.</p><div class="mi-btns"><a class="mi-bt">Ver o que sai agora</a><a class="mi-bo">Encomendas para festa</a></div></div></div><div class="mi-chalkbar"><b>hoje:</b>7h francês e croissant · 11h fermentação natural · 16h sonho e broa</div></section>'+
   '<section class="in mi-forn"><h2>O que sai em cada fornada</h2><div class="mi-tk">'+
   '<div><span class="mi-hr">7h</span><h3>Café da manhã</h3><p>Francês, integral, pão de queijo e croissant de manteiga.</p></div>'+
   '<div><span class="mi-hr">11h</span><h3>Almoço</h3><p>Fermentação natural, focaccia de alecrim e quiche do dia.</p></div>'+
   '<div><span class="mi-hr">16h</span><h3>Café da tarde</h3><p>Francês de novo, sonho, broa de milho e bolo do dia.</p></div></div></section>'+
   '<section class="in mi-gal"><figure class="ret">'+imgP('miolo-02-padeiro','O padeiro')+'<figcaption>Seu Nelson, no forno desde as 5h</figcaption></figure><figure>'+imgP('miolo-03-balcao','Balcão')+'<figcaption>Balcão: pão quente e café coado</figcaption></figure><figure>'+imgP('miolo-04-paes','Pães do dia')+'<figcaption>Fermentação natural de 24 horas</figcaption></figure><figure>'+imgP('miolo-05-cafe','Café e pão na chapa')+'<figcaption>Pão na chapa, manteiga de verdade</figcaption></figure></section>'+
   '<section class="mi-enc"><div><h2>Encomenda para festa?</h2><p>Avisa com 48 horas. Bolos, salgados e pães para a mesa de café.</p></div><a class="mi-bt">Pedir orçamento</a></section>'+
   ft('Todos os dias · 6h às 21h · Vila Mariana, São Paulo') + '</div>'; } },
 { key:"vale", seg:"Hospital", nome:"Hospital Vale Aurora", cat:"saude", url:"hospital",
   resumo:"Hospital de bairro na Zona Sul: pronto-atendimento, consultas, exames e visitas.", fontes:"Atkinson Hyperlegible", cores:["#C8102E","#1F5AA6","#2E8B57","#D9A300"],
   origem:"As cores vêm das faixas no piso que levam a cada setor do hospital, e a letra, das placas dos corredores.",
   html:function(){
   function line(k, i, t, d){ return '<li class="va-l va-'+k+'" style="--i:'+i+'"><span class="va-tape"></span><a class="va-dest"><b>'+t+'</b><small>'+d+'</small></a></li>'; }
   function sign(t){ return '<a>'+t+'<span aria-hidden="true">→</span></a>'; }
   return '<div class="cs cs-va">'+
   '<div class="in va-util"><b><i></i>Pronto-atendimento 24 horas, entrada pela rua lateral</b><span>Central de agendamento (11) 0000-0000</span></div>'+
   '<header class="nav in va-nav"><span class="va-logo"><span class="va-mk"></span><span><b>Vale Aurora</b><small>Hospital</small></span></span><nav class="va-links"><a>Especialidades</a><a>Exames</a><a>Convênios</a><a>Visitas</a></nav><a class="va-bt">Agendar consulta</a></header>'+
   '<section class="va-hero"><div class="in va-ht"><h1>Para onde você precisa ir hoje?</h1><p>Siga a cor. É a mesma das faixas no piso do hospital, da recepção até o setor.</p></div>'+
   '<div class="va-ph">'+imgP('vale-01-topo','Recepção do hospital')+'<span class="va-tapes"><i style="--c:#C8102E"></i><i style="--c:#1F5AA6"></i><i style="--c:#2E8B57"></i><i style="--c:#D9A300"></i></span></div>'+
   '<ul class="va-lines">'+
   line('pa',0,'Pronto-atendimento','24 horas, sem agendamento')+
   line('co',1,'Consultas','Especialidade, médico e horário')+
   line('ex',2,'Exames','Laboratório e imagem, resultado no celular')+
   line('in',3,'Visitas e internação','Horários, acompanhante e o que levar')+
   '</ul></section>'+
   '<section class="in va-esp"><h2>Especialidades</h2><p>Siga a faixa azul até o segundo andar.</p><div class="va-signs">'+
   sign('Cardiologia')+sign('Dermatologia')+sign('Endocrinologia')+sign('Gastroenterologia')+sign('Neurologia')+sign('Ortopedia')+sign('Pediatria')+sign('Urologia')+
   '</div></section>'+
   '<section class="in va-eq"><figure>'+imgP('vale-02-corredor','Corredor com as faixas no piso')+'<figcaption><b>As faixas começam na recepção</b>Vermelha para o pronto-atendimento, azul para consultas, verde para exames, amarela para internação.</figcaption></figure><figure>'+imgP('vale-03-medica','Médica')+'<figcaption><b>Dra. Helena Prado</b>Clínica médica · coordenação do ambulatório</figcaption></figure></section>'+
   ft('Responsável técnico: Dr(a). [Nome] · CRM/SP [nº]') + '</div>'; } },
 { key:"baluarte", seg:"Seguros empresariais", nome:"Baluarte Seguros", cat:"servicos", url:"seguros-empresariais",
   resumo:"Corretora para empresas: análise de risco por setor, coberturas comparadas e gestão de sinistros.", fontes:"IBM Plex Sans · IBM Plex Mono", cores:["#0A1424","#2F5BFF","#F4F6F9","#56677F"],
   origem:"A grade e os códigos vêm da apólice e da planilha de risco do corretor, e o escudo, do baluarte das fortalezas.",
   html:function(){ return '<div class="cs cs-balu">'+
   '<div class="top"><div class="util in"><span>Atendimento corporativo · seg a sex, 8h às 19h</span><span>SUSEP [nº] · Av. Paulista, São Paulo</span></div>'+
   '<header class="nav in"><span class="logo"><span class="mk"></span><span>Baluarte<small>SEGUROS EMPRESARIAIS</small></span></span><nav class="links"><a>Soluções</a><a>Setores</a><a>Sinistros</a><a>Sobre</a></nav><span class="acts"><a class="o">Área do cliente</a><a class="f">Falar com especialista</a></span></header>'+
   '<section class="hero in"><div><span class="kick"><i></i>Corretora de seguros para empresas</span><h1>Seguro empresarial desenhado para o risco da sua operação.</h1><p>Mapeamos os riscos do seu negócio, cotamos em várias seguradoras e acompanhamos cada apólice e cada sinistro com um gestor dedicado.</p><div class="btns"><a class="b1">Solicitar análise de risco</a><a class="b2">Ver soluções</a></div></div>'+
   '<div class="risk"><h3>Análise de risco <span>RASCUNHO · INDÚSTRIA</span></h3><div class="segs"><a class="on">Indústria</a><a>Comércio</a><a>Logística</a><a>Tecnologia</a><a>Saúde</a></div><ul class="cov">'+
   bCov('PAT-01','Patrimonial: incêndio, roubo e danos elétricos','h','Alta')+
   bCov('RC-02','Responsabilidade civil geral','h','Alta')+
   bCov('DO-03','D&amp;O para diretores e sócios','m','Média')+
   bCov('CYB-04','Riscos cibernéticos e dados pessoais','m','Média')+
   bCov('TRN-05','Transporte de cargas','r','Avaliar')+
   '</ul><a class="go">Receber quadro comparativo</a></div></section></div>'+
   '<section class="sol in"><h2>Soluções por tipo de risco</h2><div class="sg">'+
   bSol('PAT','Patrimonial empresarial','Prédio, máquinas, estoque e lucros cessantes.')+
   bSol('RC','Responsabilidade civil','Danos a terceiros, produtos e serviços prestados.')+
   bSol('D&amp;O','Diretores e administradores','Proteção do patrimônio de quem decide.')+
   bSol('CYB','Riscos cibernéticos','Vazamento de dados, sequestro de sistemas e LGPD.')+
   bSol('FRT','Frota e transporte','Veículos da empresa e cargas em trânsito.')+
   bSol('VG','Vida e saúde em grupo','Benefícios para reter quem faz a empresa andar.')+
   '</div></section>'+
   '<section class="prc"><div class="in"><h2>Como funciona</h2><div class="stp">'+
   bStp('01','Mapeamento de riscos','Reunião técnica ou visita para entender a operação.')+
   bStp('02','Cotação em várias seguradoras','Mesma base de risco para comparar de verdade.')+
   bStp('03','Quadro comparativo','Coberturas, franquias e preço lado a lado.')+
   bStp('04','Gestão de apólices e sinistros','Renovações, endossos e sinistros com um gestor.')+
   '</div></div></section>'+
   ft('Baluarte Corretora de Seguros · CNPJ [00.000.000/0001-00] · SUSEP [nº]') + '</div>'; } },

 { key:"pilar", seg:"Advocacia", nome:"Pilar Advocacia", cat:"servicos", url:"advocacia",
   resumo:"Advocacia empresarial no Itaim: contratos, sociedade e trabalhista preventivo.", fontes:"Tinos", cores:["#FFFFFF","#1B1B1B","#1C3FA8","#DCDCDC"],
   origem:"O papel timbrado e a margem larga vêm dos contratos do escritório, e o azul, da caneta de assinatura, que marca a única ação da página.",
   html:function(){
   function area(t, d){ return '<div class="pi-ar"><h3>'+t+'</h3><p>'+d+'</p></div>'; }
   return '<div class="cs cs-pi">'+
   '<header class="pi-tim"><div class="in pi-th"><b>PILAR</b><span>Advocacia empresarial</span></div><div class="in pi-nav"><nav><a>Atuação</a><a>Equipe</a><a>Artigos</a><a>Contato</a></nav><a class="pi-ag">Agendar consulta</a></div></header>'+
   '<section class="in pi-doc"><aside class="pi-mg"><p>São Paulo, Itaim Bibi</p><p>Para: a sua empresa</p><p>Assunto: contratos, sociedade e trabalho</p></aside>'+
   '<div class="pi-body"><h1>Contratos que você entende antes de assinar.</h1><p>Somos um escritório pequeno de advocacia empresarial. Redigimos e revisamos contratos, organizamos a sociedade e prevenimos ações trabalhistas para empresas de até 50 pessoas.</p><p>Cada parecer vem por escrito, em português claro, com o que você precisa decidir anotado na margem.</p>'+
   '<div class="pi-sig"><a>Agendar uma consulta</a><span>Dra. [Nome], OAB/SP [nº]</span></div></div></section>'+
   '<section class="in pi-areas"><h2>Áreas de atuação</h2>'+
   area('Contratos','Elaboração e revisão de contratos com clientes, fornecedores e parceiros, com prazo de resposta combinado antes.')+
   area('Sociedade','Abertura, acordo de sócios, entrada e saída de sócios e organização das quotas.')+
   area('Trabalhista preventivo','Contratos de trabalho, rotinas e políticas internas para evitar ações.')+
   area('Cobrança','Recuperação de crédito extrajudicial e judicial, com relatório por escrito todo mês.')+
   '</section>'+
   '<section class="in pi-ps"><p><b>P.S.</b> Atendemos com hora marcada, por videochamada ou no escritório, na Rua [nome], Itaim Bibi.</p></section>'+
   ft('Itaim Bibi, São Paulo · OAB/SP [nº] · Publicidade conforme as normas da OAB') + '</div>'; } },
 { key:"pulso", seg:"Academia", nome:"Pulso Academia", cat:"beleza", url:"academia",
   resumo:"Academia de bairro em Moema: grade de aulas da semana e aula experimental.", fontes:"Archivo expandida", cores:["#141414","#D7262B","#1F5BC6","#F2C230","#2E9E4F"],
   origem:"As cores vêm das anilhas (vermelho 25 kg, azul 20, amarelo 15, verde 10) e marcam cada modalidade na grade. O preto vem do piso emborrachado.",
   html:function(){
   var days=["Seg","Ter","Qua","Qui","Sex","Sáb"], M={F:["Funcional","mf"],B:["Bike","mb"],O:["Mobilidade","mm"],X:["—","mx"]};
   var rows=[["6h","FBFBFF"],["7h","BOBOBB"],["12h","FFFFFX"],["18h","BFBFBX"],["19h","OBOBOX"]];
   var tb='<div class="pu-tb"><span class="h"></span>'; for(var d=0;d<6;d++) tb+='<span class="h d'+(d+1)+(d===2?' now':'')+'">'+days[d].toUpperCase()+(d===2?', HOJE':'')+'</span>';
   for(var r=0;r<rows.length;r++){ tb+='<span class="t">'+rows[r][0]+'</span>'; for(var c=0;c<6;c++){ var m=M[rows[r][1][c]]; tb+='<span class="c '+m[1]+' d'+(c+1)+(c===2?' now':'')+'">'+m[0]+'</span>'; } }
   tb+='</div>';
   function plate(k, kg, mod){ return '<div class="pu-p pu-'+k+'"><span class="pu-disc"><b>'+kg+'</b><small>KG</small></span><em>'+mod+'</em></div>'; }
   return '<div class="cs cs-pu">'+
   '<header class="nav in pu-nav"><span class="pu-logo"><span class="pu-pl"></span>PULSO</span><nav class="pu-links"><a>Modalidades</a><a>Grade</a><a>Planos</a></nav><a class="pu-bt">Aula experimental</a></header>'+
   '<section class="pu-hero ph"><div class="hero-bg">'+imgP('pulso-01-topo','Salão de musculação')+'</div><div class="in pu-ht"><h1>Abre às 5h. Fecha às 23h.</h1><p>Musculação, funcional, bike indoor e mobilidade em Moema, de segunda a sábado. A cor de cada aula na grade é a mesma das anilhas.</p><a class="pu-bt">Agendar aula experimental</a>'+
   '<div class="pu-rack">'+plate('r','25','Musculação')+plate('b','20','Funcional')+plate('y','15','Bike')+plate('g','10','Mobilidade')+'</div></div>'+
   '<span class="pu-strip"><i style="--c:#D7262B"></i><i style="--c:#1F5BC6"></i><i style="--c:#F2C230"></i><i style="--c:#2E9E4F"></i></span></section>'+
   '<section class="in pu-gr"><div class="pu-gh"><h2>Grade da semana</h2><p><i></i>Musculação livre das 5h às 23h</p></div>'+tb+'</section>'+
   '<section class="in pu-mod"><div><h3>Musculação livre, o dia inteiro.</h3><p>Racks, barras olímpicas e anilhas coloridas por peso. Treinador na sala das 6h às 22h.</p><ul><li><i style="--c:#D7262B"></i>Musculação</li><li><i style="--c:#1F5BC6"></i>Funcional</li><li><i style="--c:#F2C230"></i>Bike indoor</li><li><i style="--c:#2E9E4F"></i>Mobilidade</li></ul></div><figure>'+imgP('pulso-02-musculacao','Agachamento no rack')+'</figure></section>'+
   '<section class="in pu-band"><p>Primeira aula por nossa conta.</p><a class="pu-bt">Agendar pelo WhatsApp</a></section>'+
   ft('Seg a sáb · 5h às 23h · Moema, São Paulo') + '</div>'; } },
 { key:"quadra", seg:"Imobiliária", nome:"Quadra Imóveis", cat:"servicos", url:"imobiliaria",
   resumo:"Imobiliária da Zona Oeste: busca pela rua, com a planta de cada imóvel.", fontes:"Barlow Condensed · Barlow", cores:["#0F3F8C","#FFFFFF","#111111","#E4E1DA"],
   origem:"O azul e as letras brancas vêm das placas de rua de São Paulo, e o desenho dos imóveis, das plantas baixas dos anúncios.",
   html:function(){
   function pln(rooms){ return '<div class="qd-pln">'+rooms.map(function(r){ return '<span style="left:'+r[0]+'%;top:'+r[1]+'%;width:'+r[2]+'%;height:'+r[3]+'%">'+(r[4]||'')+'</span>'; }).join('')+'</div>'; }
   function card(tag, t, sp, pr, rooms){ return '<div class="qd-cd">'+pln(rooms)+'<div class="qd-cb"><span class="qd-tag">'+tag+'</span><h3>'+t+'</h3><p>'+sp+'</p><b>'+pr+'</b></div></div>'; }
   return '<div class="cs cs-qd">'+
   '<header class="nav in qd-nav"><span class="qd-logo"><b>QUADRA</b><small>Imóveis na Zona Oeste</small></span><nav class="qd-links"><a>Comprar</a><a>Alugar</a><a>Anunciar</a><a>Sobre</a></nav><a class="qd-bt">Falar com corretor</a></header>'+
   '<section class="in qd-hero"><div class="qd-ht"><h1>Escolha a rua. A gente mostra o que tem nela.</h1><p>Imóveis à venda e para alugar em Pinheiros, Vila Madalena, Perdizes e Lapa, com a planta de cada um antes da visita.</p></div>'+
   '<div><div class="qd-plate"><div class="qd-pt"><small>R.</small>Fradique Coutinho</div><div class="qd-pb"><span>Pinheiros</span><span>Zona Oeste</span></div></div>'+
   '<div class="qd-opts"><div class="qd-tabs"><a class="on">Comprar</a><a>Alugar</a></div><span class="qd-sel">2 quartos ou mais</span><a class="qd-bt">Ver imóveis nesta rua</a></div></div></section>'+
   '<section class="in qd-lst"><div class="qd-lh"><h2>Novos na semana</h2><a>Ver todos</a></div><div class="qd-cards">'+
   card('Venda','Apartamento na R. Teodoro Sampaio','2 quartos, 1 vaga, 68 m²','R$ 1.050.000',[[0,0,56,58,'sala'],[56,0,44,50,'quarto'],[56,50,44,50,'quarto'],[0,58,32,42,'cozinha'],[32,58,24,42,'banho']])+
   card('Aluguel','Casa na R. Cardeal Arcoverde','3 quartos, 2 vagas, 142 m²','R$ 8.900/mês',[[0,0,42,46,'sala'],[42,0,28,46,'cozinha'],[70,0,30,46,'quarto'],[0,46,32,54,'quarto'],[32,46,24,30,'banho'],[32,76,24,24,''],[56,46,44,54,'quarto']])+
   card('Venda','Studio perto do metrô Fradique Coutinho','1 quarto, 32 m²','R$ 540.000',[[0,0,68,100,'estar e quarto'],[68,0,32,44,'banho'],[68,44,32,56,'cozinha']])+
   '</div></section>'+ ft('CRECI-J [nº] · Valores ilustrativos') + '</div>'; } },
];

SITES = SITES.filter(function(x){ return ["porleone","miolo","vale","pulso"].indexOf(x.key) >= 0; });
var TAGS = { bruto:["piso xadrez","adesivo de vitrine","ketchup e mostarda"], porleone:["sobrado de 1912","couro e latão","tabela na parede"], miolo:["saco de pão","carimbo","lousa de giz"], vale:["faixas no piso","placas de corredor","letra legível"], baluarte:["apólice","planilha de risco","escudo"], pilar:["papel timbrado","margem do contrato","caneta azul"], pulso:["anilhas","piso emborrachado","grade de aulas"], quadra:["placa de rua","planta baixa","calçada"] };
var CATS = [["todos","Todos"],["comida","Comida"],["beleza","Beleza e treino"],["saude","Saúde"],["servicos","Serviços e empresas"]];

/* ---------- utilidades ---------- */
function $(s,c){ return (c||document).querySelector(s); }
function $$(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); }
var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
function pad(n){ return (n<10?"0":"")+n; }
function brl(n){ return "R$ " + Math.round(n).toLocaleString("pt-BR"); }

/* monta um site conceitual dentro de um quadro em escala */
var ro = ("ResizeObserver" in window) ? new ResizeObserver(function(es){ es.forEach(function(e){ fit(e.target); }); }) : null;
function fit(pv){
  var w = +pv.getAttribute("data-w"); if (!pv.clientWidth) return;
  if (pv.getAttribute("data-mode") === "cel") {
    var s = (pv.clientHeight - 24) / 760;
    pv.style.setProperty("--s", s); pv.style.setProperty("--l", ((pv.clientWidth - 390 * s) / 2) + "px");
  } else { pv.style.setProperty("--s", pv.clientWidth / w); pv.style.setProperty("--l", "0px"); }
}
function mount(pv, i, animate){
  var w = +pv.getAttribute("data-w");
  var f = document.createElement("div");
  f.className = "csf"; f.style.width = w + "px"; f.setAttribute("inert",""); f.setAttribute("aria-hidden","true");
  f.innerHTML = SITES[i].html();
  if (animate && !reduce) f.classList.add("enter");
  pv.appendChild(f); pv._site = i;
  var old = $$(".csf", pv); if (old.length > 1) { setTimeout(function(){ old.slice(0,-1).forEach(function(o){ o.remove(); }); }, animate && !reduce ? 560 : 0); }
  fit(pv);
  if (ro && !pv._obs) { ro.observe(pv); pv._obs = true; }
}

/* ---------- peças da ficha de cada conceito, para a mesa do topo ---------- */
var FICHA = {
  bruto:   { cor:[["#D9261C","Ketchup"],["#FFC21A","Mostarda"],["#FFF3DC","Papel de embrulho"],["#17110D","Chapa"]], letra:"Bungee", ff:'"Bungee",Impact,sans-serif', pal:"Smash que escorre.", obj:"xadrez", objTxt:"Piso de lanchonete" },
  porleone:{ cor:[["#0D0C0A","Couro da cadeira"],["#C3A25C","Dourado do poste"],["#E7DDC7","Toalha quente"],["#8A1E1E","Faixa do poste"]], letra:"Pirata One", ff:'"Pirata One",serif', pal:"Navalha afiada. Conversa boa.", obj:"poste", objTxt:"Poste de barbeiro" },
  miolo:   { cor:[["#C8A47A","Saco de pão"],["#2E3A8C","Tinta do carimbo"],["#1F2723","Lousa"],["#ECE9E1","Giz"]], letra:"Zilla Slab", ff:'"Zilla Slab",Rockwell,Georgia,serif', pal:"Pão saindo às 7h, 11h e 16h.", obj:"saco", objTxt:"Saco de pão carimbado" },
  vale:    { cor:[["#C8102E","Pronto-atendimento"],["#1F5AA6","Consultas"],["#2E8B57","Exames"],["#D9A300","Internação"]], letra:"Atkinson Hyperlegible", ff:'"Atkinson Hyperlegible",Verdana,sans-serif', pal:"Para onde você precisa ir hoje?", obj:"faixas", objTxt:"Faixas no piso do hospital" },
  baluarte:{ cor:[["#0A1424","Marinho da apólice"],["#2F5BFF","Azul do carimbo"],["#F4F6F9","Papel da planilha"],["#56677F","Aço"]], letra:"IBM Plex", ff:'"IBM Plex Sans",Arial,sans-serif', pal:"Seguro desenhado para o risco da sua operação.", obj:"apolice", objTxt:"Códigos da apólice" },
  pilar:   { cor:[["#FFFFFF","Papel timbrado"],["#1B1B1B","Tinta da impressora"],["#1C3FA8","Caneta azul"],["#DCDCDC","Margem"]], letra:"Tinos", ff:'"Tinos","Times New Roman",serif', pal:"Contratos que você entende antes de assinar.", obj:"caneta", objTxt:"Caneta de assinatura" },
  pulso:   { cor:[["#D7262B","Anilha 25 kg"],["#1F5BC6","Anilha 20 kg"],["#F2C230","Anilha 15 kg"],["#2E9E4F","Anilha 10 kg"]], letra:"Archivo", ff:'"Archivo",Arial,sans-serif', st:'font-stretch:125%;font-variation-settings:"wdth" 125;font-weight:800', pal:"Abre às 5h. Fecha às 23h.", obj:"anilha", objTxt:"Anilhas da academia" },
  quadra:  { cor:[["#0F3F8C","Azul da placa"],["#FFFFFF","Letra da placa"],["#111111","Asfalto"],["#E4E1DA","Calçada"]], letra:"Barlow Condensed", ff:'"Barlow Condensed","Arial Narrow",sans-serif', pal:"Escolha a rua.", obj:"placa", objTxt:"Placa de rua de São Paulo" }
};
function obHTML(o){
  if (o === "faixas") return '<i style="--c:#C8102E;top:14px;width:46%"></i><i style="--c:#1F5AA6;top:34px;width:62%"></i><i style="--c:#2E8B57;top:54px;width:78%"></i><i style="--c:#D9A300;top:74px;width:94%"></i>';
  if (o === "apolice") return '<span>PAT-01 <b>alta</b></span><span>RC-02 <b>alta</b></span><span>DO-03 <b>média</b></span>';
  if (o === "caneta") return '<svg viewBox="0 0 120 40" aria-hidden="true"><path d="M4 30 C 16 4, 26 36, 40 18 S 62 32, 76 12 S 98 30, 116 16" stroke="#1C3FA8" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>';
  if (o === "placa") return '<span><b>R. Fradique Coutinho</b><em>Pinheiros</em></span>';
  return '';
}
function kardsHTML(s){
  var f = FICHA[s.key]; if (!f) return '';
  return '<div class="k k-cor" style="--d:60ms"><div class="ki"><small>Cor</small>' + f.cor.map(function(c){ return '<span style="--c:' + c[0] + '"><i></i><b>' + c[1] + '<code>' + c[0] + '</code></b></span>'; }).join('') + '</div></div>' +
    '<div class="k k-letra" style="--d:170ms"><div class="ki"><small>Letra</small><b style="font-family:' + f.ff.replace(/"/g, "&quot;") + ';' + (f.st || '') + '">Aa</b><em>' + f.letra + '</em></div></div>' +
    '<div class="k k-obj" style="--d:280ms"><div class="ki"><small>De onde veio</small><div class="ob ob-' + f.obj + '">' + obHTML(f.obj) + '</div><em>' + f.objTxt + '</em></div></div>' +
    '<div class="k k-pal" style="--d:390ms"><div class="ki"><small>Palavras</small><b style="font-family:' + f.ff.replace(/"/g, "&quot;") + ';' + (f.st || '') + '">' + f.pal + '</b></div></div>';
}
function placeCards(s, animate){
  var box = $("#kset"); if (!box) return;
  var old = $$(".k", box);
  if (animate && !reduce) { old.forEach(function(k){ k.classList.remove("in"); k.classList.add("out"); }); setTimeout(function(){ old.forEach(function(k){ k.remove(); }); }, 230); }
  else old.forEach(function(k){ k.remove(); });
  var tmp = document.createElement("div"); tmp.innerHTML = kardsHTML(s);
  $$(".k", tmp).forEach(function(k){ if (animate && !reduce) k.classList.add("in"); box.appendChild(k); });
}
/* letras embaralhadas até formar o texto (Special Text, que o site já usava) */
var SCR = "abcdefghijklmnopqrstuvwxyzáéíóúãõç";
function scramble(el, txt, dur){
  if (reduce) { el.textContent = txt; return; }
  var t0 = performance.now(), d = dur || 520, tok = (el._tok || 0) + 1; el._tok = tok;
  (function f(now){
    if (el._tok !== tok) return;
    var p = Math.min(1, (now - t0) / d), n = Math.floor(p * txt.length), s = txt.slice(0, n);
    for (var i = n; i < Math.min(txt.length, n + 18); i++) s += /\s/.test(txt[i]) ? txt[i] : SCR[(Math.random() * SCR.length) | 0];
    el.textContent = s; if (p < 1) requestAnimationFrame(f); else el.textContent = txt;
  })(t0);
}
/* título do topo: escrito letra por letra, uma vez, ao abrir; o leitor de tela recebe a frase inteira */
(function(){
  var h = $("#heroT"); if (!h || reduce) return;
  var txt = h.textContent.trim();
  h.setAttribute("aria-label", txt);
  h.style.minHeight = h.getBoundingClientRect().height + "px";
  h.innerHTML = '<span class="tw" aria-hidden="true"></span><span class="tw-c" aria-hidden="true"></span>';
  var el = h.firstChild, car = el.nextSibling, i = 0, t0 = performance.now() + 260;
  (function f(now){
    var n = Math.min(txt.length, Math.floor((now - t0) / 26));
    if (n > i) { i = n; el.textContent = txt.slice(0, i); }
    if (i < txt.length) requestAnimationFrame(f);
    else setTimeout(function(){ car.classList.add("off"); h.style.minHeight = ""; }, 900);
  })(performance.now());
})();

/* ---------- WhatsApp ---------- */
var current = 0;
var plan = "a", igC = false, tier = "essencial", ppw = 3;
function igOn(){ return plan === "b" || (plan === "c" && igC); }
function monthly(){ return igOn() ? PRICE.ig[ppw] + (tier === "auto" ? PRICE.auto : 0) : 0; }
function criacao(){ return plan === "a" ? PRICE.lp : plan === "b" ? PRICE.lpCombo : PRICE.site; }
function setupFee(){ return igOn() && tier === "auto" ? PRICE.autoSetup : 0; }
function igDesc(){ return "gestão de Instagram " + (tier === "auto" ? "com automação (ManyChat)" : "Essencial") + ", " + ppw + " posts por semana"; }
function planName(){
  var n = plan === "a" ? "Landing page" : plan === "b" ? "Landing page + Instagram" : "Site completo";
  if (plan === "c" && igC) n += " + Instagram";
  return n;
}
function planMsg(){
  var c = cad(), L = ["Olá, " + CONFIG.nome + ". Montei este pedido no site da Valência (preço de lançamento):", ""];
  L = L.concat(dados(c).length ? dados(c) : ["Empresa: ", "Bairro e cidade: "]);
  L.push("", "Plano: " + planName(), "Criação: " + brl(criacao()) + ", pagamento único" + (plan === "b" ? " (landing com desconto pela gestão de 3 meses ou mais)" : ""));
  if (igOn()) L.push("Instagram: " + igDesc() + ", " + brl(monthly()) + "/mês" + (setupFee() ? " + configuração " + brl(setupFee()) : ""));
  L.push("Total da criação: " + brl(criacao() + setupFee()) + " (50% na entrada e 50% na publicação)");
  L.push("Depois, por mês: " + (monthly() ? brl(monthly()) : "R$ 0"));
  L.push("", "Pode me mandar a proposta por escrito?");
  return L.join("\n");
}
function msgFor(kind){
  var s = SITES[current];
  if (kind === "plano") return planMsg();
  var c = cad(), d = dados(c).join("\n");
  if (kind === "exemplo") return "Olá, " + CONFIG.nome + ". Vi o exemplo de " + s.seg.toLowerCase() + " (" + s.nome + ") no site da Valência e quero um site assim para a minha empresa.\n" + (d || "Empresa: \nSegmento: ");
  if (kind === "exemplo-geral") return "Olá, " + CONFIG.nome + ". Vi os exemplos no site da Valência e quero um site com a identidade da minha empresa.\n" + (d || "Empresa: \nSegmento: ");
  return "Olá, " + CONFIG.nome + ". Quero um diagnóstico da presença digital da minha empresa.\n" + (d ? d + "\nSite ou Instagram: " : "Empresa: \nCidade: \nSite ou Instagram: ");
}
function waUrl(msg){ return /^\d{12,13}$/.test(CONFIG.whatsapp) ? "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg) : null; }
function refreshLinks(){ $$("[data-wa]").forEach(function(a){ var u = waUrl(msgFor(a.getAttribute("data-wa"))); if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; } }); }
var lastFocus = null;
function openWad(msg){ lastFocus = document.activeElement; $("#wadMsg").value = msg; $("#wadOk").textContent = ""; $("#wad").hidden = false; $("#wadCopy").focus(); }
function closeWad(){ $("#wad").hidden = true; if (lastFocus) lastFocus.focus(); }
function countClick(origem){ try { if (window.umami && typeof umami.track === "function") umami.track("whatsapp", { origem: origem }); } catch(err){} }
if (CONFIG.umami && CONFIG.umami.id) { var um = document.createElement("script"); um.defer = true; um.src = CONFIG.umami.src; um.setAttribute("data-website-id", CONFIG.umami.id); document.head.appendChild(um); }
document.addEventListener("click", function(e){
  var a = e.target.closest("[data-wa]"); if (!a) return;
  countClick(a.getAttribute("data-origem") || a.getAttribute("data-wa"));
  var msg = msgFor(a.getAttribute("data-wa")), u = waUrl(msg);
  if (u) { a.href = u; return; }
  e.preventDefault(); openWad(msg);
});
$("#wadX").addEventListener("click", closeWad);
$("#wad").addEventListener("click", function(e){ if (e.target === this) closeWad(); });
$("#wadCopy").addEventListener("click", function(){
  var t = $("#wadMsg"), ok = $("#wadOk");
  try { navigator.clipboard.writeText(t.value).then(function(){ ok.textContent = "Copiada"; }, function(){ t.select(); ok.textContent = "Selecione e copie"; }); }
  catch(err){ t.select(); ok.textContent = "Selecione e copie"; }
});

/* ---------- menu do celular ---------- */
$("#menuB").addEventListener("click", function(){
  var open = this.getAttribute("aria-expanded") !== "true";
  this.setAttribute("aria-expanded", open); this.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  $("#nav").classList.toggle("open", open);
});
$$("#nav a").forEach(function(a){ a.addEventListener("click", function(){ $("#nav").classList.remove("open"); $("#menuB").setAttribute("aria-expanded","false"); }); });

/* ---------- vitrine do topo: o único momento de movimento da página ---------- */
var st = 0, stTimer = null, DUR = 3000, paused = false, heroVis = true;
function showStage(i, animate){
  st = (i + SITES.length) % SITES.length;
  mount($("#stageDesk"), st, animate); mount($("#stagePhone"), st, animate);
  var s = SITES[st];
  $("#stageUrl").textContent = "valencia.demo/" + s.url;
  $("#stageIdx").textContent = (st + 1) + " de " + SITES.length;
  $("#stageName").textContent = s.nome;
  $("#stageSeg").textContent = s.seg;
  scramble($("#stageOrig"), s.origem, 520);
  placeCards(s, animate);
  var bar = $("#stageBar"); bar.classList.remove("run"); void bar.offsetWidth;
  if (!reduce && !paused) { bar.style.setProperty("--dur", DUR + "ms"); bar.classList.add("run"); }
}
function play(){ clearInterval(stTimer); if (reduce) return; stTimer = setInterval(function(){ if (!paused && heroVis && !document.hidden) showStage(st+1, true); }, DUR); }
var stage = $("#stage");
stage.addEventListener("mouseenter", function(){ paused = true; $("#stageBar").classList.remove("run"); });
stage.addEventListener("mouseleave", function(){ paused = false; showStage(st, false); play(); });
stage.addEventListener("click", function(){ openDemo(st); });
stage.addEventListener("keydown", function(e){ if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDemo(st); } });
$("#stPrev").addEventListener("click", function(){ showStage(st-1, true); play(); });
$("#stNext").addEventListener("click", function(){ showStage(st+1, true); play(); });

/* ---------- galeria ---------- */
var track = $("#track");
function cardHTML(s, i){
  var sw = s.cores.map(function(c){ return '<i style="background:'+c+'"></i>'; }).join("");
  return '<article class="card" data-cat="'+s.cat+'">'+
    '<button class="card-b" type="button" data-open="'+i+'" aria-label="Abrir demonstração: '+s.seg+', '+s.nome+'"><div class="card-fr"><div class="card-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">valencia.demo/'+s.url+'</span></div><div class="pv" data-w="1280" data-site="'+i+'"></div><span class="seal">Site conceitual · demonstração</span><span class="card-go" aria-hidden="true">Ver o site</span></div></button>'+
    '<div class="card-m"><div class="card-r"><span class="card-seg">'+s.seg+'</span><span class="sw-row" aria-hidden="true">'+sw+'</span></div>'+
    '<h3 class="t-h3">'+s.nome+'</h3><div class="card-tags" aria-label="De onde veio">'+(TAGS[s.key]||[]).map(function(t){ return '<span>'+t+'</span>'; }).join('')+'</div></div></article>';
}
function realCardHTML(p, j){
  return '<article class="card real" data-cat="'+(p.cat||"")+'">'+
    '<button class="card-b" type="button" data-real="'+j+'" aria-label="Ver fotos do projeto: '+p.nome+'"><div class="card-fr"><div class="card-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">'+(p.dominio||"")+'</span></div><div class="pv ph-real"><img src="'+p.capa+'" alt="'+p.nome+' no celular" loading="lazy" decoding="async"></div><span class="seal real">'+(p.selo||"Projeto real")+'</span><span class="card-go" aria-hidden="true">Ver fotos</span></div></button>'+
    '<div class="card-m"><div class="card-r"><span class="card-seg">'+p.segmento+'</span><span class="dado mut">'+(p.entrega||"")+'</span></div>'+
    '<h3 class="t-h3">'+p.nome+'</h3><p class="card-papel">'+(p.papel||"")+'</p>'+
    '<div class="card-a">'+(p.site ? '<a class="lnk" href="'+p.site+'" target="_blank" rel="noopener">Ver no ar '+ARR_UR+'</a>' : '')+(p.instagram ? '<a class="lnk" href="'+p.instagram+'" target="_blank" rel="noopener">Instagram '+ARR_UR+'</a>' : '')+'</div></div></article>';
}
var itens = MOSTRAR_CONCEITOS ? SITES.map(cardHTML) : [];
PORTFOLIO.map(function(p, j){ return [p, j]; })
  .sort(function(a, b){ return (a[0].pos || 0) - (b[0].pos || 0); })
  .forEach(function(x){ itens.splice(Math.min(x[0].pos || 0, itens.length), 0, realCardHTML(x[0], x[1])); });
track.innerHTML = itens.join("");

/* carrega os quadros perto da tela e pausa a animação dos que saem dela */
var vis = ("IntersectionObserver" in window) ? new IntersectionObserver(function(es){
  es.forEach(function(en){
    var pv = en.target;
    if (en.isIntersecting) { if (pv._site === undefined && pv.hasAttribute("data-site")) mount(pv, +pv.getAttribute("data-site"), false); pv.classList.remove("off"); }
    else pv.classList.add("off");
  });
}, { rootMargin: "300px" }) : null;
$$(".card .pv[data-site]", track).forEach(function(pv){ if (vis) vis.observe(pv); else mount(pv, +pv.getAttribute("data-site"), false); });

var chips = $("#chips");
if (PORTFOLIO.length) CATS.splice(1, 0, ["real","Projetos reais"]);
chips.innerHTML = CATS.map(function(c, i){
  var all = PORTFOLIO.concat(MOSTRAR_CONCEITOS ? SITES : []);
  var n = c[0] === "todos" ? all.length : c[0] === "real" ? PORTFOLIO.length : all.filter(function(s){ return s.cat === c[0]; }).length;
  return '<button class="chip" type="button" data-cat="'+c[0]+'" aria-pressed="'+(i===0)+'">'+c[1]+' <span>'+pad(n)+'</span></button>';
}).join("");
chips.addEventListener("click", function(e){
  var b = e.target.closest(".chip"); if (!b) return;
  $$(".chip", chips).forEach(function(x){ x.setAttribute("aria-pressed", x === b); });
  var cat = b.getAttribute("data-cat");
  $$(".card", track).forEach(function(c){ c.hidden = !(cat === "todos" || (cat === "real" ? c.classList.contains("real") : c.getAttribute("data-cat") === cat)); });
  track.scrollLeft = 0; updateGal();
});
$$(".gal-view button").forEach(function(b){
  b.addEventListener("click", function(){
    var v = b.getAttribute("data-gv");
    $$(".gal-view button").forEach(function(x){ x.setAttribute("aria-pressed", x === b); });
    track.setAttribute("data-view", v);
    $$(".card .pv[data-site]", track).forEach(function(pv){
      pv.setAttribute("data-w", v === "cel" ? 390 : 1280);
      if (v === "cel") pv.setAttribute("data-mode", "cel"); else pv.removeAttribute("data-mode");
      if (pv._site !== undefined) { $$(".csf", pv).forEach(function(o){ o.remove(); }); mount(pv, pv._site, false); }
    });
  });
});
function visibleCards(){ return $$(".card", track).filter(function(c){ return !c.hidden; }); }
function step(){ var c = visibleCards()[0]; return c ? c.getBoundingClientRect().width + 24 : 300; }
function updateGal(){
  var vc = visibleCards(), max = track.scrollWidth - track.clientWidth;
  var i = Math.min(vc.length, Math.round(track.scrollLeft / step()) + 1);
  if (max > 4 && track.scrollLeft >= max - 4) i = vc.length;
  $("#galCount").textContent = pad(i) + " / " + pad(vc.length);
  var frac = Math.min(1, track.clientWidth / track.scrollWidth), pos = max > 0 ? track.scrollLeft / max : 0;
  var bar = $("#galBar"); bar.style.width = (frac * 100) + "%"; bar.style.left = (pos * (1 - frac) * 100) + "%";
}
track.addEventListener("scroll", updateGal, { passive:true });
window.addEventListener("resize", updateGal);
$("#galPrev").addEventListener("click", function(){ track.scrollBy({ left:-step(), behavior: reduce ? "auto" : "smooth" }); });
$("#galNext").addEventListener("click", function(){ track.scrollBy({ left:step(), behavior: reduce ? "auto" : "smooth" }); });
track.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight") { e.preventDefault(); track.scrollBy({ left:step(), behavior:"smooth" }); }
  if (e.key === "ArrowLeft") { e.preventDefault(); track.scrollBy({ left:-step(), behavior:"smooth" }); }
});
/* arrastar com o mouse (no toque, a rolagem nativa já resolve) */
(function(){
  var down = false, sx = 0, sl = 0, moved = 0, lx = 0, lt = 0, v = 0, raf = 0, pid = null;
  track.addEventListener("pointerdown", function(e){
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true; moved = 0; sx = lx = e.clientX; sl = track.scrollLeft; lt = performance.now(); v = 0; pid = e.pointerId; cancelAnimationFrame(raf);
  });
  track.addEventListener("pointermove", function(e){
    if (!down) return;
    var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx));
    if (moved > 6 && !track.classList.contains("dragging")) { track.classList.add("dragging"); try { track.setPointerCapture(pid); } catch(err){} }
    if (moved > 6) { track.scrollLeft = sl - dx; var now = performance.now(); v = (e.clientX - lx) / Math.max(1, now - lt); lx = e.clientX; lt = now; }
  });
  function end(){
    if (!down) return; down = false;
    if (!track.classList.contains("dragging")) return;
    var vel = v * 16;
    (function glide(){ if (Math.abs(vel) > 0.6 && !reduce) { track.scrollLeft -= vel; vel *= 0.93; raf = requestAnimationFrame(glide); } else { track.classList.remove("dragging"); } })();
  }
  track.addEventListener("pointerup", end); track.addEventListener("pointercancel", end); track.addEventListener("lostpointercapture", end);
  track.addEventListener("click", function(e){ if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);
  track.addEventListener("dragstart", function(e){ e.preventDefault(); });
})();
track.addEventListener("click", function(e){
  var r = e.target.closest("[data-real]"); if (r) { openReal(+r.getAttribute("data-real")); return; }
  var b = e.target.closest("[data-open]"); if (b) openDemo(+b.getAttribute("data-open"));
});
/* janela de fotos dos projetos reais */
var lb = $("#lb"), lbOpener = null;
function showLb(src, i){ $("#lbImg").src = src; $$("#lbTh button").forEach(function(b, k){ b.setAttribute("aria-pressed", k === i); }); }
function openReal(j){
  var p = PORTFOLIO[j], fotos = [p.capa].concat(p.fotos || []); lbOpener = document.activeElement;
  $("#lbT").textContent = p.nome; $("#lbS").textContent = p.segmento + (p.entrega ? " · " + p.entrega : "");
  $("#lbSeal").textContent = p.selo || "Projeto real";
  var a = $("#lbLink"); if (p.site) { a.href = p.site; a.hidden = false; } else a.hidden = true;
  var g = $("#lbIg"); if (p.instagram) { g.href = p.instagram; g.hidden = false; } else g.hidden = true;
  $("#lbImg").alt = "Projeto de " + p.nome;
  $("#lbTh").innerHTML = fotos.map(function(f, k){ return '<button type="button" data-k="' + k + '" aria-label="Foto ' + (k + 1) + '"><img src="' + f + '" alt="" loading="lazy"></button>'; }).join("");
  var k0 = (window.innerWidth < 760 && fotos.length > 1) ? 1 : 0;
  showLb(fotos[k0], k0); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbX").focus();
  $("#lbTh").onclick = function(e){ var b = e.target.closest("button"); if (b) showLb(fotos[+b.getAttribute("data-k")], +b.getAttribute("data-k")); };
}
function closeLb(){ lb.hidden = true; document.body.style.overflow = ""; if (lbOpener) lbOpener.focus(); }
$("#lbX").addEventListener("click", closeLb);
document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !lb.hidden) closeLb(); });

/* ---------- demonstração em tela cheia ---------- */
var demo = $("#demo"), demoBody = $("#demoBody"), demoSc = $("#demoSc"), demoOpener = null;
function renderDemo(){
  var s = SITES[current];
  demoSc.innerHTML = '<div class="csf">' + s.html() + '</div>';
  demoSc.scrollTop = 0;
  $("#demoT").textContent = s.nome;
  $("#demoS").textContent = s.seg;
  $("#demoUrl").textContent = "valencia.demo/" + s.url;
  refreshLinks();
}
function setView(v){
  demoBody.setAttribute("data-view", v);
  $$(".seg button", demo).forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-view") === v); });
}
function openDemo(i){
  current = (i + SITES.length) % SITES.length; demoOpener = document.activeElement;
  setView(window.innerWidth < 760 ? "cel" : "desk");
  renderDemo(); demo.hidden = false; document.body.style.overflow = "hidden"; paused = true;
  $("#demoX").focus();
}
function closeDemo(){ demo.hidden = true; demoSc.innerHTML = ""; document.body.style.overflow = ""; paused = false; if (demoOpener) demoOpener.focus(); }
document.addEventListener("click", function(e){ var b = e.target.closest("[data-demo]"); if (b) openDemo(+b.getAttribute("data-demo")); });
$("#demoX").addEventListener("click", closeDemo);
$("#demoPrev").addEventListener("click", function(){ current = (current - 1 + SITES.length) % SITES.length; renderDemo(); });
$("#demoNext").addEventListener("click", function(){ current = (current + 1) % SITES.length; renderDemo(); });
$$(".seg button", demo).forEach(function(b){ b.addEventListener("click", function(){ setView(b.getAttribute("data-view")); }); });
document.addEventListener("keydown", function(e){
  if (e.key === "Escape") { if (!$("#wad").hidden) closeWad(); else if (!demo.hidden) closeDemo(); }
  if (!demo.hidden && $("#wad").hidden) {
    if (e.key === "ArrowRight" && e.target.tagName !== "INPUT") { current = (current + 1) % SITES.length; renderDemo(); }
    if (e.key === "ArrowLeft" && e.target.tagName !== "INPUT") { current = (current - 1 + SITES.length) % SITES.length; renderDemo(); }
    if (e.key === "Tab") trap(e, demo);
  } else if (!$("#wad").hidden && e.key === "Tab") trap(e, $("#wad"));
});
function trap(e, box){
  var f = $$('a[href],button:not([disabled]),textarea,input,[tabindex]:not([tabindex="-1"])', box).filter(function(x){ return x.offsetParent !== null; });
  if (!f.length) return; var first = f[0], last = f[f.length-1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------- planos, configurador e resumo ---------- */
var plansEl = $("#plans"), cfg = $("#cfg"), rng = $("#ppw");
(function(){
  var cv = "", k; for (k = 2; k <= PRICE.maxPosts; k++) cv += '<div data-k="' + k + '"><i style="height:' + (PRICE.ig[k] / PRICE.ig[PRICE.maxPosts] * 100).toFixed(1) + '%"></i><em>' + k + '</em></div>';
  $("#curve").innerHTML = cv;
})();
function renderCfg(){
  cfg.setAttribute("data-tier", tier); cfg.setAttribute("data-on", igOn() ? "1" : "0");
  rng.value = ppw; rng.style.setProperty("--p", ((ppw - 2) / (PRICE.maxPosts - 2) * 100) + "%");
  rng.setAttribute("aria-valuetext", ppw + " posts por semana, " + brl(PRICE.ig[ppw]) + " por mês");
  var base = PRICE.ig[ppw], posts = Math.round(ppw * 52 / 12);
  $("#cPrice").textContent = (base + (tier === "auto" ? PRICE.auto : 0)).toLocaleString("pt-BR");
  $("#cPosts").textContent = ppw + " posts por semana";
  $("#cMonth").textContent = "cerca de " + posts + " por mês";
  $("#cPer").textContent = brl(base / posts) + " por post" + (tier === "auto" ? " · automação + " + brl(PRICE.auto) + "/mês" : "");
  $("#cInc").textContent = ppw < PRICE.maxPosts ? "De " + ppw + " para " + (ppw + 1) + " posts: + " + brl(PRICE.ig[ppw + 1] - base) + "/mês" : "Máximo no lançamento: " + PRICE.maxPosts + " posts por semana, " + brl(base / posts) + " cada";
  $$("#ticks span").forEach(function(s, i){ s.classList.toggle("on", i + 2 === ppw); });
  $$("#curve div").forEach(function(d){ d.classList.toggle("on", +d.getAttribute("data-k") <= ppw); });
  renderIg();
  $$(".tier button").forEach(function(b){ b.setAttribute("aria-checked", b.getAttribute("data-tier") === tier); });
  $("#cfgSt").textContent = igOn() ? "Incluída no pedido" : "Fora do pedido";
  $("#cfgBtn").textContent = igOn() ? "Remover do pedido" : "Incluir no pedido";
  var open = igOn() || cfgOpen; cfg.setAttribute("data-open", open ? "1" : "0");
  var ver = $("#cfgVer"); ver.hidden = igOn(); ver.textContent = open ? "Fechar" : "Ver preços e prévia"; ver.setAttribute("aria-expanded", open);
}
function renderSum(){
  var cria = criacao(), setup = setupFee(), mes = monthly();
  $("#sPlano").textContent = planName() + (igOn() ? ", " + (tier === "auto" ? "Automação" : "Essencial") + ", " + ppw + " posts/semana" : "");
  $("#sCria").textContent = brl(cria) + ", pagamento único" + (plan === "b" ? " (landing com " + brl(PRICE.lp - PRICE.lpCombo) + " de desconto pela gestão de 3 meses ou mais)" : "") + (setup ? " + configuração da automação " + brl(setup) : "");
  $("#igT").checked = igOn();
  $("#sIg").textContent = igOn() ? "Incluída: " + igDesc() + ", " + brl(mes) + "/mês" : "Incluir gestão de Instagram (a partir de " + brl(PRICE.ig[2]) + "/mês)";
  var ter = "Domínio .com.br no seu nome, cerca de R$ 40 por ano, pago direto por você. ";
  ter += plan === "c" ? "Hospedagem gratuita; com painel para editar, a partir de cerca de R$ 15/mês. " : "Hospedagem gratuita. ";
  if (igOn() && tier === "auto") ter += "ManyChat no seu nome, a partir de US$ 17/mês, pago direto à ferramenta.";
  var stx = document.getElementById("sTer"); if (stx) stx.textContent = ter;
  $("#sTot").textContent = brl(cria + setup);
  $("#sTotN").textContent = "50% na entrada (" + brl((cria + setup) / 2) + ") e 50% na publicação";
  $("#sMes").textContent = mes ? brl(mes) : "R$ 0";
  $("#sMesN").textContent = mes ? (plan === "b" ? "Gestão de Instagram, mínimo de 3 meses" : "Gestão de Instagram, cancela com 30 dias de aviso") : "Sem mensalidade obrigatória";
  refreshLinks();
}
function setPlan(p, focus){
  plan = p;
  $$(".plan", plansEl).forEach(function(el){
    var on = el.getAttribute("data-plan") === p;
    el.setAttribute("aria-checked", on); el.tabIndex = on ? 0 : -1;
    $(".plan-cta span", el).textContent = on ? "Selecionado" : "Selecionar";
    if (on && focus) el.focus();
  });
  renderCfg(); renderSum();
}
function setIg(on){
  if (on) { if (plan === "a") return setPlan("b"); if (plan === "c") { igC = true; return setPlan("c"); } }
  else { if (plan === "b") return setPlan("a"); if (plan === "c") { igC = false; return setPlan("c"); } }
  setPlan(plan);
}
plansEl.addEventListener("click", function(e){ var el = e.target.closest(".plan"); if (el) setPlan(el.getAttribute("data-plan")); });
plansEl.addEventListener("keydown", function(e){
  var order = ["a","b","c"], i = order.indexOf(plan);
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); setPlan(order[(i+1)%3], true); }
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); setPlan(order[(i+2)%3], true); }
  if (e.key === " " || e.key === "Enter") { var el = e.target.closest(".plan"); if (el) { e.preventDefault(); setPlan(el.getAttribute("data-plan")); } }
});
$("#igT").addEventListener("change", function(){ setIg(this.checked); });
$("#cfgBtn").addEventListener("click", function(){ setIg(!igOn()); });
var cfgOpen = false;
$("#cfgVer").addEventListener("click", function(){ cfgOpen = !cfgOpen; renderCfg(); });
rng.addEventListener("input", function(){ ppw = +rng.value; renderCfg(); renderSum(); });
$$(".tier button").forEach(function(b){ b.addEventListener("click", function(){ tier = b.getAttribute("data-tier"); renderCfg(); renderSum(); }); });

/* ---------- mini cadastro: personaliza a prévia do Instagram, o resumo e as mensagens ---------- */
function val(id){ var e = document.getElementById(id); return e ? e.value.trim() : ""; }
function cad(){ return { emp: val("cEmp") || val("fEmp"), seg: val("cSeg"), cid: val("cCid") || val("fCid"), nome: val("cNome") || val("fNome") }; }
function handle(n){
  var h = (n || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");
  return (h || "suaempresa").slice(0, 24);
}
function dados(c){
  var l = [];
  if (c.emp) l.push("Empresa: " + c.emp);
  if (c.seg) l.push("O que faz: " + c.seg);
  if (c.cid) l.push("Bairro e cidade: " + c.cid);
  if (c.nome) l.push("Responsável: " + c.nome);
  return l;
}
function renderCad(){
  var c = cad();
  $("#sEmp").textContent = c.emp ? c.emp + (c.seg ? ", " + c.seg : "") + (c.cid ? ", " + c.cid : "") : "Preencha o nome da empresa no começo dos planos";
  $("#sHead").innerHTML = c.emp ? "Pedido da <b></b>" : "Resumo do pedido";
  if (c.emp) $("#sHead b").textContent = c.emp;
  $("#igAt").textContent = handle(c.emp);
  $("#igAv").textContent = (c.emp || "S").charAt(0).toUpperCase();
  $("#igName").textContent = c.emp || "Sua empresa";
  $("#igBio").textContent = (c.seg || c.cid) ? [c.seg, c.cid].filter(Boolean).join(", ") : "O que a empresa faz e onde fica";
  refreshLinks();
}
/* espelha empresa, cidade e nome entre o cadastro e o formulário de diagnóstico */
[["cEmp","fEmp"],["cCid","fCid"],["cNome","fNome"]].forEach(function(p){
  var a = document.getElementById(p[0]), b = document.getElementById(p[1]); if (!a || !b) return;
  a.addEventListener("input", function(){ a.dataset.own = "1"; if (b.dataset.own !== "1") b.value = a.value; renderCad(); });
  b.addEventListener("input", function(){ b.dataset.own = "1"; if (a.dataset.own !== "1") a.value = b.value; renderCad(); });
});
$("#cSeg").addEventListener("input", renderCad);

/* prévia do perfil: 12 quadros; os das últimas 2 semanas seguem a estratégia, o resto fica apagado */
var PILAR = ["p1","p2","p3","p1","p4","p2","p1","p3","p2","p4"], PNOME = { p1:"Produto", p2:"Bastidores", p3:"Cliente", p4:"Peça no WhatsApp" };
function renderIg(){
  var n = ppw * 2, h = "";
  for (var i = 0; i < 12; i++) h += i < n ? '<i class="' + PILAR[i] + '">' + PNOME[PILAR[i]] + '</i>' : '<i class="old"></i>';
  $("#igGrid").innerHTML = h;
  $("#igN").textContent = Math.round(ppw * 52 / 12);
}

/* ---------- barra de leitura: quanto da página já passou, com marcas das seções ---------- */
(function(){
  var bar = $("#rdgBar"), box = $("#rdg"); if (!bar || !box) return;
  var ids = ["exemplos","como-nasce","planos","processo","quem-faz","perguntas","contato"], raf = 0;
  function max(){ return Math.max(1, document.documentElement.scrollHeight - window.innerHeight); }
  function ticks(){
    $$("b", box).forEach(function(t){ t.remove(); });
    var m = max(), off = $(".mtop").offsetHeight;
    ids.forEach(function(id){ var el = document.getElementById(id); if (!el) return;
      var p = Math.min(1, Math.max(0, (el.getBoundingClientRect().top + window.scrollY - off) / m));
      var t = document.createElement("b"); t.style.left = (p * 100).toFixed(2) + "%"; box.appendChild(t); });
  }
  function draw(){ raf = 0; bar.style.transform = "scaleX(" + Math.min(1, window.scrollY / max()).toFixed(4) + ")"; }
  window.addEventListener("scroll", function(){ if (!raf) raf = requestAnimationFrame(draw); }, { passive: true });
  window.addEventListener("resize", function(){ ticks(); draw(); });
  if ("ResizeObserver" in window) new ResizeObserver(function(){ ticks(); draw(); }).observe(document.body);
  ticks(); draw();
})();

/* ---------- preços dos planos saem de PRICE, para não ficarem diferentes do configurador ---------- */
(function(){
  var n = function(v){ return v.toLocaleString("pt-BR"); };
  $$("[data-price]").forEach(function(el){ el.textContent = n(PRICE[el.getAttribute("data-price")]); });
  var top = PRICE.ig[PRICE.maxPosts] + PRICE.auto;
  $("#pbMes").textContent = n(PRICE.ig[2]);
  $("#pbMesS").textContent = "por mês, com 2 posts por semana. Até " + brl(top) + " com " + PRICE.maxPosts + " posts e automação. Mínimo de 3 meses";
  $("#pbDesc").textContent = "pagamento único, " + brl(PRICE.lp - PRICE.lpCombo) + " abaixo do plano sem Instagram";
  $("#pbTot").textContent = brl(PRICE.lpCombo + PRICE.ig[2]) + " (" + brl(PRICE.lpCombo) + " + " + brl(PRICE.ig[2]) + ")";
})();

/* ---------- revelação ao rolar: seções e cartões entram suaves ---------- */
(function(){
  if (reduce || !("IntersectionObserver" in window)) return;
  var sel = ".sec-h, #track .card, .plan, .como-steps li, .troca-box, .step, .faq details, .who-ph, .who-tx, .ct-l, .ct-r, .volta li";
  var els = $$(sel); var groups = {};
  els.forEach(function(el){ var p = el.parentNode; var k = (groups[p] = groups[p] || {n:0}); el.style.setProperty("--rd", Math.min(k.n++, 6) * 70 + "ms"); el.classList.add("rv"); });
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach(function(el){ io.observe(el); });
})();

/* ---------- teste da troca: o logo do concorrente no modelo pronto e no Bruto ---------- */
(function(){
  var box = $("#troca"), b = $("#trocaBtn"); if (!box) return;
  var bi = 0; SITES.forEach(function(x, k){ if (x.key === "porleone") bi = k; });
  mount($("#tbBruto"), bi, false);
  b.addEventListener("click", function(){
    var on = !box.classList.contains("on"); box.classList.toggle("on", on); b.setAttribute("aria-pressed", on);
    b.textContent = on ? "Voltar o logo" : "Trocar o logo";
    $("#genLogo").textContent = on ? "Concorrente" : "SuaMarca";
    $("#tbGen").textContent = on ? "Continua servindo: é um modelo, serve para qualquer um." : "Modelo pronto";
    $("#tbBru").textContent = on ? "Não serve mais: é da Porleone." : "Feito pela ficha da Porleone";
  });
})();
$("#tierAuto").textContent = "Essencial + respostas automáticas no direct, + " + brl(PRICE.auto) + "/mês";

/* ---------- formulário ---------- */
$("#fInt").addEventListener("click", function(e){
  var b = e.target.closest(".opt"); if (!b) return;
  $$(".opt", this).forEach(function(x){ x.setAttribute("aria-pressed", x === b); });
});
$("#form").addEventListener("submit", function(e){
  e.preventDefault();
  var nome = $("#fNome"), emp = $("#fEmp"), err = $("#fErr"), bad = [];
  [nome, emp].forEach(function(f){ var v = f.value.trim(); f.setAttribute("aria-invalid", !v); if (!v) bad.push(f); });
  if (bad.length) { err.textContent = "Preencha nome e empresa para eu saber com quem estou falando."; bad[0].focus(); return; }
  err.textContent = "";
  var opt = $(".opt[aria-pressed='true']", $("#fInt")), cid = $("#fCid").value.trim(), link = $("#fLink").value.trim(), m = $("#fMsg").value.trim();
  var msg = "Olá, " + CONFIG.nome + ". Sou " + nome.value.trim() + ", da " + emp.value.trim() + (cid ? " (" + cid + ")" : "") + ".\nQuero " + (opt ? opt.getAttribute("data-v") : "um diagnóstico") + "." + (link ? "\nSite ou Instagram: " + link : "") + (m ? "\n" + m : "");
  var u = waUrl(msg); countClick("formulario");
  if (u) { var a = document.createElement("a"); a.href = u; a.target = "_blank"; a.rel = "noopener"; document.body.appendChild(a); a.click(); a.remove(); }
  else openWad(msg);
});

/* ---------- visibilidade: hero, títulos e barra fixa ---------- */
if ("IntersectionObserver" in window) {
  var ctVis = false, sumVis = false, mcta = $("#mcta");
  var io = new IntersectionObserver(function(es){
    es.forEach(function(en){
      if (en.target.id === "inicio") {
        heroVis = en.isIntersecting;
        $("#stageDesk").classList.toggle("off", !heroVis); $("#stagePhone").classList.toggle("off", !heroVis);
      } else if (en.target.id === "contato") ctVis = en.isIntersecting; else sumVis = en.isIntersecting;
    });
    mcta.classList.toggle("on", !heroVis && !ctVis && !sumVis);
  }, { threshold: 0 });
  io.observe($("#inicio")); io.observe($("#contato")); io.observe($(".sum"));
}

/* ---------- privacidade e termos ---------- */
var docd = $("#docd"), docOpener = null;
function openDoc(k){
  var t = document.getElementById("tpl-" + k); if (!t) return;
  if (docd.hidden) docOpener = document.activeElement;
  var sc = $("#docSc"); sc.innerHTML = ""; sc.appendChild(t.content.cloneNode(true)); sc.scrollTop = 0;
  var um = !!(CONFIG.umami && CONFIG.umami.id); $$("[data-if]", sc).forEach(function(el){ if ((el.getAttribute("data-if") === "umami") !== um) el.remove(); });
  $("#docL").textContent = k === "termos" ? "Termos de uso" : "Política de privacidade";
  docd.hidden = false; document.body.style.overflow = "hidden"; $("#docX").focus();
}
function closeDoc(){
  docd.hidden = true; document.body.style.overflow = "";
  if (/^#(privacidade|termos)$/.test(location.hash)) { try { history.replaceState(null, "", location.href.split("#")[0]); } catch(err){} }
  if (docOpener && docOpener.focus) docOpener.focus();
}
document.addEventListener("click", function(e){
  var a = e.target.closest("[data-doc]"); if (!a) return;
  e.preventDefault(); var k = a.getAttribute("data-doc"); openDoc(k);
  try { history.replaceState(null, "", "#" + k); } catch(err){}
});
$("#docX").addEventListener("click", closeDoc);
docd.addEventListener("click", function(e){ if (e.target === docd) closeDoc(); });
document.addEventListener("keydown", function(e){ if (docd.hidden) return; if (e.key === "Escape") closeDoc(); if (e.key === "Tab") trap(e, docd); });
function docFromHash(){ var m = location.hash.match(/^#(privacidade|termos)$/); if (m) openDoc(m[1]); }
window.addEventListener("hashchange", docFromHash);
docFromHash();

/* ---------- início ---------- */
(function(){ var r = $("#retrato"); $$("img[data-retrato]").forEach(function(i){ i.src = r.src; }); })();
$("#vagas").textContent = CONFIG.vagas;
if (CONFIG.vagas <= 0) $("#launch").querySelector("p").innerHTML = "<b>Vagas de lançamento encerradas.</b> Peça a proposta para ver os valores atuais.";
showStage(0, false); play(); setPlan("a"); renderCad(); updateGal(); refreshLinks();
