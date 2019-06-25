console.log( 'main' );
// requirejs.config({
//     baseUrl: 'js'
// });
require( [ 'module/module1', 'js/module/module2.js' ], function( module1, module2 ) {
	console.log( 'main ready' );
	console.log( module1 );
	console.log( module2 );
} );
