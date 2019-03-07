MGO.selectDropdown = function() {
    var $selectDropdowns = $('.select-dropdown');
    var namespace = 'selectDropdown';
    var $doc = $(document);
    
    function init() {
        $selectDropdowns.each(function() {
            var $select = $(this);
            var $btn = $select.find('button');
            var $group = $select.closest('.select-dropdown-group');
            var grouped = $group.length ? true : false;

            $select.on('click', function(e) {
                e.stopPropagation();
            });

            $btn.on('click', function() {
                if ($select.hasClass('expanded-true')) {
                    $select.removeClass('expanded-true above');
                    $doc.off('.' + namespace);
                } else {
                    $select.addClass('expanded-true');
                    if ($select.find('ul')[0].getBoundingClientRect().bottom > $(window).height()) {
                        $select.addClass('above');
                    }
                    if (grouped) {
                        $select.siblings('.expanded-true').removeClass('expanded-true above');
                        $doc.off('.' + namespace);
                    }
                    $doc.on('click.' + namespace, function(e) {
                        if (whatInput.ask() === 'mouse') {
                            $select.removeClass('expanded-true above');
                        }
                        $doc.off('.' + namespace);
                    });
                }
                return false;
            });
        });
    }

    if ($selectDropdowns.length) {
        init();
    }

}(jQuery);