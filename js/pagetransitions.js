var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '.ball' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;

	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		// $( '#dl-menu' ).dlmenu( {
		// 	animationClasses : { in : 'dl-animate-in-2', out : 'dl-animate-out-2' },
		// 	onLinkClick : function( el, ev ) {
		// 		ev.preventDefault();
		// 		nextPage( el.data( 'animation' ) );
		// 	}
		// } );

		$('#fuck').click(function(){
			nextPage(36);
		})

		$iterate.on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			var page=parseInt($(this).attr('page'));
			if(page!=(current+1))
			nextPage( page -1);
		} );

	}

	function nextPage(options ) {

				//
				// $pages.each( function() {
				// 	var $page = $( this );
				//    $page.attr( 'class' ) );
				// } );
				//


		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		// console.log();
		// current=options.getAttribute('page');
		var $currPage = $pages.eq( current );
		// console.log(options.showPage);

			if( current < pagesCount - 1 ) {
				// ++current;
				current=options
			}
			else {
				current = 1;
			}
		// current


		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
				outClass = 'pt-page-rotateFall pt-page-ontop',
				inClass = 'pt-page-scaleUp';


		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

			// console.log($nextPage);
		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return {
		init : init,
		nextPage : nextPage,
	};

})();
