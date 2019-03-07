MGO.radioTabs = function() {
    var $radioTabs = $('.radio-tabs');
    
    function init() {
        $radioTabs.each(function() {
            var $tabs = $(this);
            var $radios = $tabs.find('.radio-tablist [type="radio"][data-tab]');

            var $checked = $radios.filter(':checked');
            if ($checked.length) {
                updateTabs($tabs, $checked);
            }

            $radios.on('change', function() {
                updateTabs($tabs, $(this));
            });
        });
    }

    function updateTabs($tabs, $checked) {
        var $target = $('#' + $checked.data('tab'));
        if ($target.length) {
            $tabs.find('.tabpanel.expanded-true').removeClass('expanded-true');
            $target.addClass('expanded-true');

            if ($target.find('select').length && !$target.data('select-init')) {
               MGO.initSelect($target);
               $target.data('select-init', true);
           }
        }
    }

    if ($radioTabs.length) {
        init();
    }

}(jQuery);