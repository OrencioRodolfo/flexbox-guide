$.when(
  loadHbTemplate('head'),
  loadHbTemplate('introduction'),
  loadHbTemplate('syllabus'),
  loadHbTemplate('browser-support'),
  loadHbTemplate('basics')
).done(function(
  headTpl,
  introTpl,
  syllabusTpl,
  browserSupportTpl,
  basicsTpl
) {
  $('#page-head').html(headTpl);
  $('#introduction').html(introTpl);
  $('#syllabus').html(syllabusTpl);
  $('#browser-support').html(browserSupportTpl);
  $('#basics-terminology').html(basicsTpl);

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