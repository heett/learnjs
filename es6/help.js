/**
 * Created by alex on 15.02.2018.
 */

/*-----ООП-----*/
const Car =(function () { //Немедленно вызываемая функция в JavaScript (IIFE)

    const carProps = new WeakMap(); //Не может быть перебран и очищен

    class Car {
        constructor(make,model){
            this.make=make; // this указывает на конкретный экземпляр
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
const car1 = new Car(); //Экземпляр класса ключевое слово new
car1.shift('D'); //обращение к методу shift

/*-----Обработка ошибок-----*/
function billPay ( amount, рауее , account ){
        if ( amount > account.balance )
        throw new Error ( "Maлo денег . " );//throw - самостоятельная генерация ошибки
        account .transfer ( payee ,amount );//Вызван не будет
    }
    try {
        console.log('1') //'эта строка выполнится
        throw new Error ( "Упс" );
        console.log('2') //'эта строка не выполнится
    } catch(err){ //выполняется только в случае ошибки
        console.log("была ошибка");
    } finally {
        console.log("всегда выполнится");
    }
