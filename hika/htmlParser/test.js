const log = console.log;

const textNode = ( text, target ) => {
	if( text.length ) {
		target.push( { type: 'TEXT', text } );
	}
};

const elementNode = ( input, cursor, text, stack, stacks ) => {
	const char = input[ cursor++ ];
  let isBreak = false;
	if( char === '<' ) {
		textNode( text, stack.tag.children );
		text = '';
		if( input[ cursor++ ] !== '/' ) {
			let name = input.substring( cursor - 1, cursor = input.indexOf( '>', cursor ) );
			const isClose = input[ cursor - 1 ] === '/';
			if( isClose ) name = name.substr( 0, name.length - 1 );
			const tag = { name, type: 'NODE', children: isClose ? null : [] };
			cursor++;
			stack.tag.children.push( tag );
			if( !isClose ) {
				stacks.push( { tag, back: stack } );
        isBreak = true;
				// break;
			}
		} else if( stack.tag.name == input.substring( cursor, cursor = input.indexOf( '>', cursor ) ) ) {
			stack = stack.back;
			cursor++;
		}
	} else {
		text += char;
	}
	return { input, cursor, text, stack, isBreak }
};

const parser = input => {
	const result = { tag: { type: 'ROOT', children: [] } },
		stacks = [];
	let cursor = 0,
		stack = result;

	do {
		let text = '';
		while( cursor < input.length ) {
			const v = elementNode( input, cursor, text, stack, stacks );
      ( { input, cursor, text, stack } = v );
      if( v.isBreak ) break;
		}
	} while ( stack = stacks.pop() );
	return result.tag.children;
};

// console.log( parser( '<img/>' ) );
// console.log( parser( 'a<img/><div>test</div><img/>' ) );
console.log( parser( '<div>test<span>aa<span>dd</span></span><span>cc</span>bb</div>' ) );
// console.log( parser( `
// <div>
//   test
//   <p>aa<span>dd</span></p>
//   <span>cc</span>
//   bb
// </div>` ) );
