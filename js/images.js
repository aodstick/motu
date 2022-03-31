$(function () {
    var activeIndex = $('.active').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.collection li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.collection').on('click', 'li', function (e) {
    var $current = $(e.currentTarget),
        index = $current.index();
    
    $tabslis.removeClass('active');
    $current.addClass('active');
    $contentlis.hide().eq(index).show();
    });
});