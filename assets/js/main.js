$(document).ready(function() {
    var lsn = {
        init: function() {
            this.doc = $(document);
            this.body = $('body');
            this.testimonials();
            this.tabs();
        },
        testimonials: function() {
            var $self = this;
            var testimonial_swiper = new Swiper('.testimonial-slider-wrapper .swiper-container', {
                direction: 'vertical',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            var main_swiper = new Swiper('.main-slider-wrapper .swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        },
        tabs: function() {
            var $self = this;
            $self.doc.on('click', '#tabs-section .tab-content .next-tab', function(e) {
                e.preventDefault();
                var $tabs = $self.doc.find('#tabs-section ul.nav-tabs');
                var $tabs_count = $tabs.find('li').length;
                var $current_tab = $tabs.find('li.active').index();
                if ($current_tab + 1 != $tabs_count) {
                    $self.doc.find('#tabs-section ul.nav-tabs li').eq($current_tab + 1).find('a').click();
                } else {
                    $self.doc.find('#tabs-section ul.nav-tabs li').eq(0).find('a').click();
                }
            })
        }
    };
    lsn.init();
});