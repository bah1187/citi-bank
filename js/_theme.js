/* =========================================================================
global variables
========================================================================== */
//watchers for major breakpoint changes - move from small screen to large screen layout/styles
//these match up to
(function () {
    var mq = {
        end: window.matchMedia("(max-width: 799px)")
    }

    //container ID/class names called by specific functions
    var selectors = {
        searchForm: '.search-form',
        advancedSearchForm: '.advanced-search-form',
        pageWrap: '#page',
        socialShare: '.social-share',
        socialShareMore: '.share-more'
    }

/* =========================================================================
search form panel
========================================================================== */
    //make search form expandable only on small screens
    // function searchFormExpandable() {
    //     if (mq.end.matches) {
    //         $(selectors.searchForm).expandable('revive');
    //         $(selectors.advancedSearchForm).expandable('revive');
    //     }
    //     else {
    //         $(selectors.searchForm).expandable('kill');
    //         $(selectors.searchForm).children('div').removeAttr('style');
    //         $(selectors.advancedSearchForm).expandable('kill');
    //         $(selectors.advancedSearchForm).children('div').removeAttr('style');
    //     }
    //     return;
    // }
    // searchFormExpandable();
    // mq.end.addListener(searchFormExpandable);

    $('.search-toggle-btn').click(function(){
     $(".search-toggle-list").slideToggle("fast");
    });

/* =========================================================================
slideout filters for search results on small screens
========================================================================= */
    if ($('#search-results').length == 1) window.APP.MODELS.FilterSlideOut.create({
        breakpoint: 800,
        animationSpeed: 200,
        pageWrapId: 'page',
        filterType: 'search',
        openToggle: 'Filter',
        closeToggle: 'Close Filter'
    });

/* =========================================================================
social share open/close toggle
========================================================================== */
    $(selectors.socialShare)
        .on('click', selectors.socialShareMore, function () {
            var parent = $(this).parents(selectors.socialShare);
            parent.toggleClass('share-open');
            var moreText = $(this).attr('data-more-text');
            var lessText = $(this).attr('data-less-text');
            //on large screens, move the second list items into the first list, instead of sliding the list down
            if (parent.hasClass('share-open')) {
                $(this).text(lessText);
            }
            else {
                $(this).text(moreText);
            }
            return;
        });


/* =========================================================================
Nav Toggle
========================================================================== */

$('.js-nav-button').click(function(){
 $(".navigation").slideToggle("fast");
});

/* =========================================================================
GLobal toggle
========================================================================== */

$('.js-language-btn').click(function(){
 $(".js-language-toggle").slideToggle("fast");
 $(".js-language-btn").toggleClass("open");
});

/* =========================================================================
Footer Toggle
========================================================================== */

$('.js-footer-btn').click(function(){
 $(this).next('.footer__list--secondary').slideToggle("fast");
});

/* =========================================================================
Job Alert Toggle
========================================================================== */
$('.btnJobAlertToggle').click(function() {
    $(' .job-alert-toggle').slideToggle("fast");
    var text = $(this).text() == 'Sign Up' ? 'Close' : 'Sign Up';
    $(this).text(text);
    $(this).toggleClass('act');
});

/* =========================================================================
Sticky
========================================================================== */

var $stickyNav = $('.navigation');

if ($stickyNav.length) {
    var	stickySearchTop = $stickyNav.offset().top;
}

function sticky(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickySearchTop) {
        $stickyNav.addClass('sticky');
    } else {
        $stickyNav.removeClass('sticky');
    }
}

sticky();

$(window).scroll(function() {
	sticky();
});










// End doc ready
})();
