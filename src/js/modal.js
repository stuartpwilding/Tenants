MGO.modalOpen = function($trigger, $content, className) {
    /**
    * @param {jQuery} $trigger
    * @param {jQuery} $content
    * @param {string} [className] optional class name for modal element
    */
    var namespace = 'modal';
    var $body = $('body');

    var $modal = $('<div class="modal"></div>').on('click', function(e) {
         e.stopPropagation();
    });
    if (className !== undefined) {
        $modal.addClass(className)
    }

    var btnClose = $('<button type="button" class="btn-close">Close</button>').on('click', function() {
        MGO.modalClose($trigger);
    }).appendTo($modal);

    $modal.append($content);

    $body.addClass('modal-open').on('click.' + namespace, function() {
        MGO.modalClose($trigger);
    });
    $modal.appendTo($body);
    btnClose.focus();

    $(document).on('keyup.' + namespace, function(e) {
        if (e.keyCode === 27) {
            MGO.modalClose($trigger);
        }
    });
};



MGO.modalClose = function($trigger) {
    /**
    * @param {jQuery} [$trigger]
    */
    var namespace = 'modal';
    var $body = $('body');

    $body.find('> .modal').remove();
    if ($trigger !== undefined) {
        $trigger.focus();
    }
    $(document).off('.' + namespace);
    $body.off('.' + namespace).removeClass('modal-open');
};
