const log = console.log || ( _ => {} );

const parser = input => {
	const result = {},
		stacks = [];
	let stack = result;

	do {
		while( true ) {
			if( true ) {
				stacks.push( { back: stack } );
				break;
			} else {
				stack = stack.back;
			}
		}
	} while ( stack = stacks.pop() );

	return result;
};
