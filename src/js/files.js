MGO.files = function() {
    var $files = $('ul.files');
    var eventsInit = false;

    function launchModal($a) {
        var $content = $('<div class="modal-file-content"></div>');
        var $hdr = $('<header></header>');
        var $info = $('<div class="info"></div>');
        var name = $.trim($a.find('.name').text());
        var date = $.trim($a.find('.date').text());
        $info.append('<div class="name">' + name + '</div>');
        $info.append('<div class="date">' + date + '</div>');
        $info.appendTo($hdr);
        $('<a href="' + $a.attr('href') +  '" download class="button wide green download">Download</a>').on('click', function() {
            MGO.modalClose($a);
        }).appendTo($hdr);
        $hdr.appendTo($content);
        var $media = $('<div class="media"></div>');
        if ($a.is('[href$=".pdf"]')) {
            var $iframe ='<div class="iframe_wrap"><iframe src="ViewerJS/#../' + $a.attr('href') + '"></iframe></div>';
            $media.append($iframe);
        } else {
            var $img ='<img src= "' + $a.attr('href') + '" alt="' + name + '">';
            $media.append($img);
        }
        $media.appendTo($content);

        MGO.modalOpen($a, $content, 'modal-file');
        
        eventsInit = true;
    }


    function WidthChange(screenLarge) {
        if (screenLarge.matches) {
            $files.on('click', 'a', function(e) {
                e.preventDefault();
                e.stopPropagation();
                launchModal($(this));
            });
        } else {
            if (eventsInit) {
                $files.off();
                eventsInit = false;

                if ($('body > .modal').length) {
                    MGO.modalClose($(this));
                }
            }
        }
    }
    
    function init() {
        $doc = $(document);
        $body = $('body');
        var screenLarge = window.matchMedia(MGO.mqLarge);
        screenLarge.addListener(WidthChange);
        WidthChange(screenLarge);  
    }

    if ($files.length) {
        init();
    }

}(jQuery);