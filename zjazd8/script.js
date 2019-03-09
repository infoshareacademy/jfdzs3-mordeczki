class ShopCard {
    constructor() {
        this.products = [];
    }

    addItemToCard(product) {
        this.products.push(product);
    }
    removeItemFromCard(index) {
        this.products.splice(index, 1);
    }
    checkProducts(products) {
        this.products.forEach(product => {
           console.dir(product.type);
            console.dir(product.name);
            console.dir(product.price);
        });

    }
}

class Product {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }
}

class Toy extends Product {
    constructor(type, name, price, sound) {
        super(type, name, price);
        this.sound = sound;
    }
    makeSound() {
        console.log('------------Beeeeep');
    }
}
class Phone extends Product {
    constructor(type, name, price, ringTone) {
        super(type, name, price);
        this.ringTone = ringTone;
    }
    makeCall() {
        console.log('-------------Dryn dryn dryn');
    }

}

const iphone = new Phone('phone', 'iphone se', 999, 'Morning tone');
const samsung = new Phone('phone', 'galaxy s4', 399, 'Evening tone');
const doll = new Toy('toy', 'barbie', 399, 'Hihihih');
const car = new Toy('toy', 'hotwheels', 499, 'Brum brum');
const basket = new ShopCard();

basket.addItemToCard(iphone);
basket.addItemToCard(car);
basket.addItemToCard(samsung);
basket.addItemToCard(doll);
basket.checkProducts();
