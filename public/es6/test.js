'use strict';
const senteces = [
{subject:'js', object: 'great'},
{subject:'Ele[hants', object: 'large'},
];
function say({ subject,object}){
	console.log('${subject} ${object}');
}
for (let s of senteces) {
	say(s);
}
