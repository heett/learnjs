const sam = {
	name: 'SAM',
	classification:{
		kingdom: 'Anamalia',
		phylum: 'Chorodata',
	},
};
sam.speak = function(){return "Meow!";};
console.log(sam.speak());
console.log(sam.classification);
delete sam.classification; // ��� ������ classification �������
delete sam.speak;