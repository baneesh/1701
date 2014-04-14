(function ($) {
    $.fn.extend({
        tnews: function (options) {
            var settings = $.extend({ speed: 1000, newsfeed: '', cache: true, target: '' }, options);

            return this.each(function () {
                var categories = new Array();
                var tabs = new Array();

                var itemWidth;
                var inteval;

                var currentItem = 0;
                var totalItems = 0;
                var previousItem = 0;
                var left = 0;
                var newsWrapper;
                var currentCategory = '';

                if (settings.newsfeed == '') { alert('No XML file specified'); return; }
                newsWrapper = $(this).addClass('t-news-wrapper');

                generateNewsMarkup(newsWrapper, settings.newsfeed, settings.cache);

                function generateNewsMarkup(newsWrapper, newsfeed, cache) {
                    newsWrapper.html('');
                    $.ajax({
                        url: newsfeed,
                        type: 'GET',
                        dataType: 'xml',
                        cache: cache,
                        success: function (xml) {
                            var newsCategories = $(xml).find('category');
                            //build the tabs for each category
                            newsWrapper.css('background','none').append('<div id="t-news-tabs"><ul id="t-tabs"></ul></div>');
							 newsWrapper.append('<div id="t-nav"><img src="images/prev.png" id="t-prev" alt="Previous" />&nbsp;<img id="t-next" src="images/next.png" alt="Next" /></div>');
                            newsWrapper.append('<div id="t-news-contents"></div>');
                           

                            var tabsContainer = newsWrapper.find('#t-tabs');
                            var newsContainer = newsWrapper.find('#t-news-contents');

                            $(newsCategories).each(function () {
                                //build tabs
                                var name = $(this).attr('name');
                                tabsContainer.append('<li><a href="#' + name + '">' + name + '</a></li>');
                                //build contents
                                var newsContentWrapper = $('<div id="' + name + '"></div>');
                                newsContainer.append(newsContentWrapper);
                                var newsIndex = 0;
                                //get each news and generate markup of individual news item
                                $(this).find('news').each(function () {
                                    var url = $(this).attr('url');
                                    var screenshot = $(this).attr('screenshot');
                                    var date = $(this).attr('date');
                                    var headline = $(this).find('headline').text();
                                    var detail = $(this).find('detail').text();

                                    var newsWrap = $('<div class="t-news-wrap"> <div class="t-news"><div class="t-news-preview" id="' + newsIndex + '">' +
                                                '<img src="' + screenshot + '" /></div><div class="t-news-summary"><h1><a href="' + url + '" target="' + settings.target + '">' + headline + '</a></h1><p>' + detail + '</p></div></div>' +
                                                '<div class="clear"></div></div>');
                                    newsContentWrapper.append(newsWrap);

                                });
                            });

                            setupNews();
                        }
                    });
                }
                function getFormattedDate(date) {
                    var dateObject = new Date(date);
                    var day = '';
                    var month = '';
                    switch (dateObject.getDate()) {
                        case 1:
                        case 21:
                            day = dateObject.getDate() + 'st';
                            break;
                        case 2:
                        case 22:
                            day = dateObject.getDate() + 'nd';
                            break;
                        case 3:
                        case 23:
                            day = dateObject.getDate() + 'rd';
                            break;
                        default:
                            day = dateObject.getDate() + 'th';
                            break;
                    }
                    switch (dateObject.getMonth()) {
                        case 0:
                            month = 'JAN';
                            break;
                        case 1:
                            month = 'FEB';
                            break;
                        case 2:
                            month = 'MAR';
                            break;
                        case 3:
                            month = 'APR';
                            break;
                        case 4:
                            month = 'MAY';
                            break;
                        case 5:
                            month = 'JUN';
                            break;
                        case 6:
                            month = 'JUL';
                            break;
                        case 7:
                            month = 'AUG';
                            break;
                        case 8:
                            month = 'SEP';
                            break;
                        case 9:
                            month = 'OCT';
                            break;
                        case 10:
                            month = 'NOV';
                            break;
                        case 11:
                            month = 'DEC';
                            break;

                    }
                    return '<h5>' + day + '</h5><h6>' + month + '</h6>';
                }

                $('#t-tabs li').live('click', function () {
                    //show current tab contents
                    displayTabContents(parseInt($(this).data('index')));
                    //also animate current news item
                    var slideContainer = $('#' + currentCategory);
                    var currentPrevItem = getCurrentPrevItem(slideContainer);
                    var currentSlide = slideContainer.find('.t-news-wrap').eq(currentPrevItem.currentItem);

                    currentSlide.css({ left: 0, zIndex: 100, opacity: 1, display: 'none' }).stop(false, false).fadeIn(settings.speed);

                    return false;
                })

                function displayTabContents(tabIndex) {
                    $(tabs).each(function () {
                        $('#' + this).removeClass('active');
                    });
                    $(categories).each(function (index) {

                        if (index == tabIndex) {
                            $('#' + this).show();
                            $('#tb-' + tabIndex).addClass('active');
                            currentCategory = this;
                            currentItem = 0;
                            previousItem = 0;
                            var slideContainer = $('#' + currentCategory);
                            totalItems = slideContainer.find('.t-news-wrap').length;
                            left = 0;
                        }
                        else {
                            $('#' + this).hide();
                        }
                    })
                }
                function setupNews() {
                    itemWidth = parseInt(newsWrapper.width());
                    $('#t-tabs li', newsWrapper).each(function (index) {
                        if (index == 0)
                            $(this).addClass('nomargin');
                        categories.push($(this).find('a').attr('href').replace('#', ''));
                        $(this).data('index', index);
                        $(this).attr('id', 'tb-' + index);
                        tabs.push($(this).attr('id'));
                        var slideContainer = $('#' + categories[index]);
                        initPositionForEachSlide(slideContainer);
                    });
                    //display first tab contents by default
                    displayTabContents(0);
                }
                function initPositionForEachSlide(slideContainer) {
                    left = 0;
                    slideContainer.css({ width: slideContainer.find('.t-news-wrap').length * itemWidth });

                    slideContainer.find('div.t-news-wrap').each(function (index) {
                        $(this).css({ left: left, opacity: 1 });
                        if (index > 0)
                            $(this).css('display', 'none');
                        left += itemWidth;
                    });
                }
                //next/prev navigation
                $('#t-nav img').live('click', function () {
                    var currentPrevItem = getCurrentPrevItem($('#' + currentCategory));
                    currentItem = currentPrevItem.currentItem;
                    previousItem = currentItem;
                    if (isNext($(this))) {
                        if (currentItem < totalItems - 1) {
                            currentItem++;
                            setCurrentPrevItem($('#' + currentCategory));
                            animateSlide(getSlide(currentItem), getSlide(previousItem), true);
                        }
                    }
                    else {
                        if (currentItem > 0) {
                            currentItem--;
                            setCurrentPrevItem($('#' + currentCategory));
                            animateSlide(getSlide(currentItem), getSlide(previousItem), false);
                        }
                    }
                });

                function isNext(navElement) {
                    if (navElement.attr('id') == 't-next')
                        return true;
                    else
                        return false;
                }

                function animateSlide(currentSlide, previousSlide, forward) {

                    var cleft = 0;
                    var pleft = 0;
                    var cafter = 0;
                    var pafter = 0;
                    if (currentItem > previousItem) {
                        cleft = itemWidth;
                        cafter = 0;
                        pafter = -itemWidth;
                    }
                    else {
                        pleft = 0;
                        pafter = itemWidth;
                        cleft = -itemWidth;
                        cafter: 0;
                    }
                    previousSlide.css({ left: 0, zIndex: 99, opacity: 1 }).stop(false, false).fadeOut(settings.speed / 2, function () {
                        //$(this).css({ opacity: 0 });
                    });
                    //animate current slide
                    currentSlide.css({ left: 0, zIndex: 100 }).stop(false, false).fadeIn(settings.speed);

                }
                function getSlide(slideIndex) {
                    return $('#' + currentCategory).find('.t-news-wrap').eq(slideIndex);
                }

                function setCurrentPrevItem(slidesContainer) {
                    slidesContainer.data('currentItem', currentItem);
                    slidesContainer.data('previousItem', previousItem);
                }
                function getCurrentPrevItem(slidesContainer) {

                    var currentPrevItem = { currentItem: 0, previousItem: 0 };
                    currentPrevItem.currentItem = parseInt(slidesContainer.data('currentItem'));
                    currentPrevItem.previousItem = parseInt(slidesContainer.data('previousItem'));

                    if (isNaN(currentPrevItem.currentItem)) currentPrevItem.currentItem = 0;
                    if (isNaN(currentPrevItem.previousItem)) currentPrevItem.previousItem = 0;

                    return currentPrevItem;
                }

            });
        }
    });
})(jQuery);
