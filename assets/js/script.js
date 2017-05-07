$.when(
  loadHbTemplate('head'),
  loadHbTemplate('introduction'),
  loadHbTemplate('syllabus'),
  loadHbTemplate('browser-support'),
  loadHbTemplate('basics'),
  loadHbTemplate('learn-by-doing'),
  loadHbTemplate('challenges/index'),
  loadHbTemplate('challenges/1'),
  loadHbTemplate('challenges/2'),
  loadHbTemplate('challenges/3'),
  loadHbTemplate('challenges/4'),
  loadHbTemplate('challenges/5'),
  loadHbTemplate('challenges/6'),
  loadHbTemplate('challenges/7'),
  loadHbTemplate('challenges/8')
).done(function(
  headTpl,
  introTpl,
  syllabusTpl,
  browserSupportTpl,
  basicsTpl,
  learnByDoingTpl,
  challengesIndexTpl,
  challenge1, 
  challenge2, 
  challenge3,
  challenge4,
  challenge5,
  challenge6,
  challenge7,
  challenge8
) {
  $('#page-head').html(headTpl);
  $('#introduction').html(introTpl);
  $('#syllabus').html(syllabusTpl);
  $('#browser-support').html(browserSupportTpl);
  $('#basics-terminology').html(basicsTpl);
  $('#learn-by-doing').html(learnByDoingTpl);

  $('#challenges').html(challengesIndexTpl);
  $('#challenge-1').html(challenge1);
  $('#challenge-2').html(challenge2);
  $('#challenge-3').html(challenge3);
  $('#challenge-4').html(challenge4);
  $('#challenge-5').html(challenge5);
  $('#challenge-6').html(challenge6);
  $('#challenge-7').html(challenge7);
  $('#challenge-8').html(challenge8);
  
  // highlight all the code snippets
  Prism.highlightAll();
});

/**
 * Loads Handlebars templates
 */
function loadHbTemplate(path, data) {
  var templateData = data || {};

  return new Promise(function(resolve) {
    var request = $.get('partials/' + path + '.hbs', templateData, function(response) {
      var template = Handlebars.compile(response);
      resolve(template(templateData));
    })
  });
}

$('body').on('click', '.challenge .section-heading', function() {
  $(this).find('.icon').toggleClass('fa-chevron-down');
  $(this).find('.icon').toggleClass('fa-chevron-up');
  $(this).closest('.challenge').find('.challenge-body').slideToggle('medium');
});