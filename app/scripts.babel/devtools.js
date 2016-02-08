'use strict';
var pageGetProperties = function() {
  var data = window.angular && $0 ? angular.element($0).scope() : {};
  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = { __proto__: null };
  for (var i = 0; i < props.length; ++i)
  {
    if(props[i].indexOf('$$') !== 0)
    {
        copy[props[i]] = data[props[i]];
    }
  }
  return copy;
};

chrome.devtools.panels.elements.createSidebarPane(
    'Angular Context',
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setExpression('(' + pageGetProperties.toString() + ')()');
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});