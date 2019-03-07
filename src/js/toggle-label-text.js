MGO.toggleLabelText = function() {
    var $label = $('label[data-text-off][data-text-on]');
    
    function init() {
        $label.each(function() {
            var $label = $(this);
            var $input = $label.find('input').first();
            var $text = $label.find('.text');
            if (!$text.length || !$input.length) {
                return;
            }

            update($label, $input, $text);

            $input.on('change', function() {
                update($label, $input, $text);
               
            });
        });
    }

    function update($label, $input, $text) {
       if ($input.is(':checked')) {
            $text.text($label.data('text-on'));
        } else {
            $text.text($label.data('text-off'));
        }
    }

    if ($label.length) {
        init();
    }

}(jQuery);