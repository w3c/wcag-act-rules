$(function () {
  $('.collapsing').each(function () {
    var $this = $(this).hide();

    // Create an id for the collapsing element, if it doesn't have one already
    var prevChild = $this.prev();
    var id = $this.attr('id');
    if (!id) {
      id = prevChild.text().toLowerCase().match(/[a-z-_0-9]/g).join('');
      $this.attr('id', id);
    }

    // Wrap the element before 
    var $link = prevChild.wrapInner('<a href="#' + id + '"></a>').find('a');
    $link.attr('aria-expanded', 'false');
    $link.attr('aria-owns', id);

    // Toggle the collapsing area
    $link.on('click', function (e) {
      $link.attr('aria-expanded', $this.is(":hidden"));
      $this.fadeToggle();
    });
  });

  // If any link points to inside a collapsing area, open it up
  $('a[href^="#"]').on('click', function () {
    var target = $('#' + this.href.split('#')[1]);
    if (!target.is('.collapsing')) {
      if (target.next().is('.collapsing')) {
        target = target.next();
      } else {
        target = target.parents('.collapsing');
      }
    }
    target.show();
  });
});