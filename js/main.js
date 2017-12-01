/* Vertical Tabs JS */

var tabsFn = (function() {
  
  function init() {
    setHeight();
  }
  
  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-tabs').height();
    
    $tabPane.css('min-height', tabsHeight);
  }
    
  $(init);
})();


