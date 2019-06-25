console.log( 'module2' );
define( [ 'module/module2_2' ], function( module2_2 ) {
	console.log( 'module2 defined' );
	console.log( module2_2 );
	return {
		name: 'module2'
	};
} );
