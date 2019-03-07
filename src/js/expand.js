MGO.expand = function() {
    var $triggers = $('.expand-trigger');
    
    function init() {
        $triggers.on('click', function() {
            var $item = $(this).closest('.expandable-item');
            var $content = $item.find('.expandable-content');
            if ($content.is(':animated')) {
                return false;
            }
            if ($item.hasClass('expanded-true')) {
                $item.removeClass('expanded-true');
                $content.slideUp();
            } else {
                $item.addClass('expanded-true');
                $content.slideDown('normal');
                if ($content.find('select').length && !$content.data('select-init')) {
                    MGO.initSelect($content);
                    $content.data('select-init', true);
                }
            }
        });
    }
    
    if ($triggers.length) {
        init();
    }

}(jQuery);