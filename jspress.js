//  Posts ----------------------

var title = [
    "title - 0"
];

var resume = [
    "Lorem ipsum dolor sit amet, doctus iisque vis in, no dicat insolens eam, an sea reque erant. Ne duo elit iudico equidem. Ius sale iuvaret corrumpit in. Quod audire in per, tation necessitatibus sed ad, eos et dolores iracundia quaerendum. Cu posse possim expetendis usu, at everti option euismod his. Pri eu odio omnis."
];

var url = [
    "http://gmasson.com.br"
];

var text = [
    "<p>Lorem ipsum dolor sit amet, doctus iisque vis in, no dicat insolens eam, an sea reque erant. Ne duo elit iudico equidem. Ius sale iuvaret corrumpit in. Quod audire in per, tation necessitatibus sed ad, eos et dolores iracundia quaerendum. Cu posse possim expetendis usu, at everti option euismod his. Pri eu odio omnis.</p><p>Usu cu quem dolor omittantur, iudico homero facilisis per no. Cu eam aliquam eruditi saperet. Probo audire impedit sed ad, at vim prima ullum propriae. Eu sea nulla constituto, noster inciderint at has.</p><p>Mel et fierent volutpat molestiae. Mei veri viderer posidonium ne. Cu quo rebum facete singulis, nonumes noluisse te ius. Id choro dicant graeco nec. Impetus delicata cum in, quod sumo brute an vis.</p><p>Cu diceret consequat argumentum usu. Ne dicunt invidunt eos. Ei prompta quaestio usu, utamur postulant et nec. Pri ex dicta evertitur deseruisse.</p><p><p>Ne harum affert admodum sed. Ut pro tale novum utinam. Eu postea vidisse fabulas eam, munere dolores qui id, no est modo quodsi. Eum ad sint aeque, magna fabellas sea at.</p>"
];



//  Features ----------------------

var cont = title.length;

function all() {
  for (i = 0; i < cont; i++) {
    var title_post = title[i];
    var resume_post = resume[i];
    var url_post = url[i];
    var post_post = text[i];
    document.write("<h2>"+title_post+"</h2>");
    document.write(resume_post);
    document.write("<a href='"+url_post+"' target='_blank'>Continue Lendo</a>");
    document.write("<br><hr><br>");
  }
}

function post(n) {
  var title_post = title[n];
  var resume_post = resume[n];
  var url_post = url[n];
  var text_post = text[n];
  document.write("<h2>"+title_post+"</h2>");
  document.write(text_post);
  document.write("<br><hr><br>");
}
