$.when(
  loadHbTemplate('head'),
  loadHbTemplate('introduction'),
  loadHbTemplate('syllabus'),
  loadHbTemplate('browser-support'),
  loadHbTemplate('basics'),
  loadHbTemplate('learn-by-doing'),
  loadHbTemplate('challenges/index'),
  loadHbTemplate('challenges/1-flexbox-container'),
  loadHbTemplate('challenges/object-preview')
).done(function(
  headTpl,
  introTpl,
  syllabusTpl,
  browserSupportTpl,
  basicsTpl,
  learnByDoingTpl,
  challengesIndexTpl,
  chalOneTpl,
  objectPreviewTpl
) {
  $('#page-head').html(headTpl);
  $('#introduction').html(introTpl);
  $('#syllabus').html(syllabusTpl);
  $('#browser-support').html(browserSupportTpl);
  $('#basics-terminology').html(basicsTpl);
  $('#learn-by-doing').html(learnByDoingTpl);

  $('#challenges').html(challengesIndexTpl);
  $('.challenge .object-preview').html(objectPreviewTpl);

  $('.challenge').each(function() {
    $(this).find('.initial-state').html(chalOneTpl);
    $(this).find('.final-state').html(chalOneTpl);
  });
  
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