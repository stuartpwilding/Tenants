MGO.initSelect = function($el) {
    if ($.fn.select2) {
        $el.find('select.custom:not(.search)').select2({
            minimumResultsForSearch: Infinity
        });

        $el.find('select.custom.search').select2();
    }  
}

$(document).ready(function() {
    MGO.initSelect($('body'));
});


MGO.initDatepicker = function($el) {
    if ($.fn.datepicker) {
        $('input.date').not('.box input.date').datepicker({
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            dateFormat: 'm/d/yy',
            showOtherMonths: true,
            selectOtherMonths: true,
            beforeShow: function(input, inst) {
                $('#ui-datepicker-div').removeClass('boxed');
            }
        });
        $('.box input.date').datepicker({
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            dateFormat: 'm/d/yy',
            showOtherMonths: true,
            selectOtherMonths: true,
            beforeShow: function(input, inst) {
                $('#ui-datepicker-div').addClass('boxed');
            }
        });
    }
}

$(document).ready(function() {
    MGO.initDatepicker($('body'));
});