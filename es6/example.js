const Car =(function () { //Немедленно вызываемая функция в JavaScript (IIFE)

    const carProps = new WeakMap(); //Не может быть перебран и очищен

    class Car {
	    constructor(make,model){
	        this.make=make;
            this.model=model;
            this._userGears = ['P','N','D','R'];
            carProps.set(this, { _userGear: this._userGears[0] });
        }

    get userGear() {return carProps.get(this).userGear; } //Доступ можно получить только через get
    set userGear(value) {
        if(this._userGears.indexOf(value) < 0)
            throw new Error('Не верная передача'+value);
        carProps.get(this).userGear = value;
    }
    shift (gear) { this.userGear = gear; }
}
return Car;
})();
const car1 = new Car();
const car2 = new Car();
car1.shift('D');
car2.shift('P');
car1.userGear;
car2.userGear;
console.log(car1.userGear);
console.log(car2.userGear);
