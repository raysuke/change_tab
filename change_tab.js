(function ( $ ) {
	$.fn.changeTab = function(contents, options) {

		var settings = $.extend({
			'fade': false,
			'fadeTime': 300,
		}, options);

		this.each(function(e){
			$(this).attr('data-selecter', e);
			$(this).children().each(function(e){
				$(this).attr('data-tab',e);
			});
		});
		$(contents).each(function(e){
			$(this).attr('data-selecter', e);
			$(this).children().each(function(e){
			$(this).attr('data-tab',e);
				if(e != 0){
					$(this).css('display', 'none');
				}
			});
		});

		this.children().on('click', function(){
			var data_selecter = $(this).parent().attr('data-selecter');
			var data_tab = $(this).attr('data-tab');
			var select_content = $(contents+'[data-selecter="'+data_selecter+'"]');
			if(!select_content.children('[data-tab="'+data_tab+'"]').is(':visible')){

				if(settings['fade'] === true){
					var fade_time = isFinite(settings['fadeTime']) ? settings['fadeTime'] : 300;
					select_content.children().hide();
					select_content.children('[data-tab="'+data_tab+'"]').fadeIn(fade_time);
				}else{
					select_content.children('[data-tab="'+data_tab+'"]').show();
				}
			}

		});

		return this;
	};
}(jQuery));
