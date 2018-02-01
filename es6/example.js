const SYM = Symbol();
const o = {а : 1 , Ь : 2 , с : 3 , [ SYM] : 4 } ;
for ( let prop in o ) {
	if(!o.hasOwnProperty(prop))continue;
	console.log(prop+':'+o[prop]);
}