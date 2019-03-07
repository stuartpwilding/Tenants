MGO.selectTabs = function() {
    var $selectTabs = $('.select-tabs');
    
    function init() {
        $selectTabs.each(function() {
            var $tabs = $(this);
            var $select = $tabs.find('.select-tablist');

            updateTabs($tabs, $select.find('option:selected'));

            $select.on('change', function() {
                updateTabs($tabs, $select.find('option:selected'));
            });
        });
    }

    function updateTabs($tabs, $selected) {
        if ($selected.is('[data-tab]')) {
            var $target = $('#' + $selected.data('tab'));
            if ($target.length) {
                $tabs.find('.tabpanel.expanded-true').removeClass('expanded-true');
                $target.addClass('expanded-true');

                if ($target.find('select').length && !$target.data('select-init')) {
                     MGO.initSelect($target);
                     $target.data('select-init', true);
                }
               
            }
        } else {
            $tabs.find('.tabpanel.is-visible').removeClass('is-visible');
        }
    }

    if ($selectTabs.length) {
        init();
    }

}(jQuery);