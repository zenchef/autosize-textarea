// JQUERY
;(function($){    
  $.fn.autosizeTextarea = function(lineHeight,  padding) {
    this.on('input propertychange', autoSize);
    const TEXTAREA_CONFIG = {
      LINE_HEIGHT: lineHeight || 13, // adjust textarea lineheight
      PADDING: padding || 0  // adjust textarea vertical padding
    }
    function autoSize() {
      let $this = $(this)
      if ($this.length) {
        $this.attr('rows', 2) // minimum rows
        const height = parseInt(
          (this.scrollHeight - TEXTAREA_CONFIG.PADDING) / TEXTAREA_CONFIG.LINE_HEIGHT
        )
        if (height !== parseInt($this.attr('rows'))) {
          $this.attr('rows', height)
        }
      }
    }
  };
})(jQuery)

$('#autosize-textarea').autosizeTextarea(15, 10)
