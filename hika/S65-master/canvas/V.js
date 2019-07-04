const V = (_=>{
	const readOnly = (target, v)=>{
		for(let k in v) v[k] = {value:v[k]};
		for(let k of Object.getOwnPropertySymbols(v)) v[k] = {value:v[k]};
		Object.defineProperties(target, v);
	};
	const error = msg=> { throw msg; };
	const N = (factory,cnt)=>Array.from('0'.repeat(cnt)).map(_=>factory());


	const [offset, size, draw, bound, start, end, reset, image, rect, text] = N(Symbol, 10);

	const Paint = (([RESET, BOUND, START, END, IMAGE, RECT, TEXT])=>{
		const Paint = class{
			constructor(width, height){
				this[size](width, height);
			}
			[size](width, height){
				readOnly(this, {width, height});
			}
			[bound]({x, y, width, height}){this[BOUND](x, y, width, height);}
			[reset](){this[RESET]();}

			[start](display){this[START](display);}
			[end](display){this[END](display);}
			// 구상클래스에서 사용함
			[image](display){this[IMAGE](display);}
			[rect](display){this[RECT](display);}
			[text](display){this[TEXT](display);}
		};
		return Object.assign(Paint, {RESET, BOUND, START, END, IMAGE, RECT, TEXT, image, rect, text});
	})(N(Symbol, 7));
	const evFlow = {
		offsetX:0, offsetY:0,
	};
	const Stage = class{
		constructor(paint){
			if(paint instanceof Paint) readOnly(this, {paint, root:new DisplayContainer()});
			else error();
		}

		addChild(display){this.root.addChild(display);}
		removeChild(display){this.root.removeChild(display);}
		getChildAt(index){this.root.getChildAt(index);}
		getChildById(id){this.root.getChildById(id);}

		render(){
			let {width, height} = this.root[Display.MEASURE](this.paint.width, this.paint.height);
			this.root[size](width, height);
			this.root[offset](0, 0);
			this.paint[reset]();
			const ev = Object.assign({que:[]}, evFlow, this.paint.event)
			this.root[draw](this.paint, ev);
			if(ev.que.length){
				let i = ev.que.length;
				while(i--) ev.que[i].dispatch('click', false)
			}
			this.paint.event.click = false;
		}
	};

	const Display = (([event, listener, boundRect, DRAW, MEASURE, OFFSET])=>{
		let uuid = 0;
		const bound = {};
		const Style = class{
			constructor(isBlock){
				this.display = isBlock ? 'block' : 'inline';
			}
		};
		const Event = (stop=>class{
			constructor(target){
				readOnly(this, {target});
			}
			init(type, isCapture){
				this.type = type;
				this.isCapture = isCapture;
				this[stop] = false;
				return this;
			}
			stopPropagation(){
				this[stop] = true;
			}
			get isStopPropagation(){
				return this[stop];
			}
		})(Symbol());

		const Display = class{
			constructor(tagName, isBlock){
				readOnly(this, {
					tagName,
					id:uuid++,
					[event]:new Event(this),
					[listener]:{},
					[boundRect]:{},
					style:new Style(isBlock)
				});
			}
			dispatch(type, isCapture){
				let listeners;
				if(listeners = this[listener][type]){
					let e = this[event].init(type, isCapture);
					for(let listener of listeners){
						listener(e);
						if(e.isStopPropagation) return;
					}
				}
			}
			hasListener(type){
				return this[listener][type] && this[listener][type].size;
			}
			addListener(type, callback){
				const target = (this[listener][type] || (this[listener][type] = new Set()));
				target.add(callback);
			}
			removeListener(type, callback = null){
				const target = this[listener][type];
				if(!target) return;
				if(callback) target.delete(callback);
				else target.clear();
			}

			[offset](x, y){this[boundRect].x = x, this[boundRect].y = y;}
			[size](width, height){this[boundRect].width = width, this[boundRect].height = height;}

			get boundRect(){
				const rect = this[boundRect];
				if(!this.style._margin) return rect;
				bound.x = rect.x + this.style._margin[3];
				bound.y = rect.y + this.style._margin[0];
				bound.width = rect.width;
				bound.height = rect.height;
				return bound;
			}
			[draw](paint, e){
				let {x, y, width, height} = this.boundRect;
				if(e.click && this.hasListener('click')){
					if(x < e.x && e.x < x + width && y < e.y && e.y < y + height){
						e.que.push(this);
						this.dispatch('click', true)
					}
				}
				paint[start](this);
				this[DRAW](paint);
				paint[end](this);
			}
			[DRAW](paint){}
			event(e){
				if(e.click){
					
				}
			}
		};
		return Object.assign(Display, {DRAW, MEASURE, OFFSET});
	})(N(Symbol, 6));

	const DisplayContainer = (([children, ids])=>{
		return class extends Display{
			constructor(isBlock) {
				super('ROOT',isBlock);
				readOnly(this, {
					[children]:new Set(),
					[ids]:new Map()
				});
			}
			addChild(display){
				if(!(display instanceof Display)) return;
				this.removeChild(display);
	
				this[children].add(display);
				this[ids][display.id] = display;
	
			}
			removeChild(display){
				if(!(display instanceof Display) || !this[ids][display.id]) return;
				this[ids].delete(display.id);
				this[children].delete(display);
			}
			getChildAt(index){
				if(this[children].size <= index) return null;
				let idx = 0;
				return this[children].forEach((v1, v2, set)=>idx++ == index ? set.delete(v1) : 0);
			}
			getChildById(id){
				return this[ids][display.id] || null;
			}
			[draw](paint, e){
				paint[start](this);
				if(e.click && this.hasListener('click')){
					if(x < e.x && e.x < x + width && y < e.y && e.y < y + height){
						e.que.push(this);
						this.dispatch('click', true)
					}
				}
				this[Display.DRAW](paint);
				paint[end](this);
				for(let child of this[children]) child[draw](paint, e);
			}
			[Display.MEASURE](parentWidth, parentHeight){
				let totalH = 0, lineW = 0, lineH = 0;
				//Css.size(this.style, parentWidth, parentHeight);
				for(let child of this[children]){
					if(child.style.display == 'none') continue;
					let {width, height} = child[Display.MEASURE](parentWidth, 0);
					child[size](width, height);
					const [marginT, marginR, marginB, marginL] = Css.margin(child.style);
					width += marginL + marginR;
					height += marginB + marginT;
					switch(child.style.display){
					case'block':
						if(lineH){
							totalH += lineH;
							lineH = lineW = 0;
						}
						child[offset](0, totalH);
						totalH += height;
						break;
					case'inline':
						let offsetX = lineW;
						if(lineW + width > parentWidth){
							if(lineH){
								totalH += lineH;
								lineH = lineW = 0;
							}
							lineW = width;
							lineH = height;
						}else{
							lineW += width;
							if(lineH < height) lineH = height;
						}
						child[offset](offsetX, totalH);
						break;
					}
				}
				if(lineH) totalH += lineH;
				
				switch(this.style.textAlign){
					case'right':
						let i = this[children].length, j = parentWidth;
						while(i--){
							let c = this[children][i], rect = c[boundRect];
							rect.x = j -= rect.width + c.style._margin[1] + c.style._margin[3];
						}
						break;
					case'justify':
						let space = 0;
						for(const {[boundRect]:{width}, style:{_margin:[,right,,left]}} of this[children]) space += width + left + right;
						space = parentWidth - space;
						space = space < 0 ? 0 : space / (this[children].length - 1);
						for(let {[boundRect]:rect, style:{_margin:[,right,,left]}, x = 0} of this[children]){
							rect.x = x;
							x += rect.width + left + right + space;
						}
				}
				return {width:parentWidth, height:totalH};
			}
		};
	})(N(Symbol, 2));

	const v = {
		Event, Display, DisplayContainer, Stage, Paint, N, 
		spread(){
			for(let k in v) window[k] = v[k];
		}
	};
	return v;
})();
