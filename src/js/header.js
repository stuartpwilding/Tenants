MGO.header = function() {
    var namespaceMore = 'header-more';
    var namespaceUtility = 'header-utility';
    var $win = $(window);
    var $doc = $(document);
    var $hdr = $('.hdr-global');
    var toInit = true;
    var $btnMore = $hdr.find('.btn-nav-main-more');
    var $liMore = $btnMore.parent('li');
    var $navUtility = $hdr.find('.nav-utility');
    var $btnUtility = $navUtility.find('.btn-nav-utility');
    var $navUtilityUl = $navUtility.find('ul');
    var utilityTiming = 500;

    var utilityIsOpen = false;
    
    var moreClickIsOpen = false;
    var moreHoverIsOpen = false;
    var toMoreEnter;
    var toMoreLeave;

    

    function moreClickOpen() {
        if (utilityIsOpen) {
            utilityClose();
        }
        $liMore.addClass('expanded-true');
        moreClickIsOpen = true;
        $doc.on('touchstart.' + namespaceMore, function() {
            moreClickClose();
        });
        $win.on('scroll.' + namespaceMore, function() {
            moreClickClose();
        });
    }

    function moreClickClose() {
        $liMore.removeClass('expanded-true');
        $win.off('.' + namespaceMore);
        $doc.off('.' + namespaceMore);
        moreClickIsOpen = false;
    }

    function utilityClose() {
        $navUtility.removeClass('expanded-true');
        $navUtilityUl.stop().fadeOut(utilityTiming);
        $win.off('.' + namespaceUtility);
        $doc.off('.' + namespaceUtility);
        utilityIsOpen = false;
    }

    function btnMoreTouchEvent() {
        $btnMore.on('touchstart', function() {
            if (moreClickIsOpen) {
                moreClickClose();
            } else {
                moreClickOpen();
            }
        });

        $liMore.on('touchstart', function(e) {
            e.stopPropagation();
        }); 
    }

    function btnMoreHoverEvent() {
        $liMore.on('mouseenter', function() {
            clearTimeout(toMoreLeave);
            toMoreEnter = window.setTimeout(function() {
                $liMore.addClass('expanded-true');
                moreHoverIsOpen = true;
            }, 200);
        });

        $liMore.on('mouseleave', function() {
            clearTimeout(toMoreEnter);
            if (moreHoverIsOpen) {
                toMoreLeave = window.setTimeout(function() {
                    $liMore.removeClass('expanded-true');
                    moreHoverIsOpen = false;
                }, 500);
            }
        });
    }

    function btnMoreKeyboardClickEvent() {
        $btnMore.on('click', function() {
            if (whatInput.ask() === 'keyboard') {
                if (moreClickIsOpen) {
                    moreClickClose();
                } else {
                    moreClickOpen();
                }
            }
        }); 
    }

    function btnUtilityClickEvent() {
        $btnUtility.on('click touchstart', function(e) {
            e.stopPropagation();
            if (utilityIsOpen) {
                utilityClose();
            } else {
                if (moreClickIsOpen) {
                    moreClickClose();
                }
                $navUtility.addClass('expanded-true');
                $navUtilityUl.stop().fadeIn(utilityTiming);
                utilityIsOpen = true;
                $doc.on('click.' + namespaceUtility + ' touchstart.' + namespaceUtility, function() {
                    utilityClose();
                    return false;
                });
                $win.on('scroll.' + namespaceUtility, function() {
                    utilityClose();
                });
            }
            return false;
        }); 

        $navUtility.on('click', function(e) {
            e.stopPropagation();
            return false;
        }); 
    }
    
    function init() {
        btnMoreTouchEvent();
        btnMoreHoverEvent();
        btnMoreKeyboardClickEvent();

        btnUtilityClickEvent();
    }
    
    if ($hdr.length) {
        init();
    }

}(jQuery);