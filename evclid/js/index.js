document.addEventListener('DOMContentLoaded', function() {

    // accordion

    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.steps-wrap').forEach(function(tabContent) {
                tabContent.classList.remove('steps-wrap_active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('steps-wrap_active')
        })
    })

	$( function() {
		$( "#accordion" ).accordion({
            heightStyle: "content",
            icons: false,
        });
	})

    // slider

    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

    // menu

    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.add('is-active')
    })

    document.querySelector('#close').addEventListener('click', function(){
        document.querySelector('#menu').classList.remove('is-active')
    })

    // search

    document.querySelector('#search-open').addEventListener('click', function(){
        document.querySelector('#search').classList.add('search-active')
    })

    document.querySelector('#search-close').addEventListener('click', function(){
        document.querySelector('#search').classList.remove('search-active')
    })

})


