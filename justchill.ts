export class PotatoesBaby {

    hello = (message: string) => {
        if(message) {
            console.log(message);
        }

        return this.hello('Do not fail University man, you will regret it.');

    }
    
    calcLargerNum = (number1: number, number2: number) => {
        if(number1 > number2) {
            return 'Number 1 is larger than number 2.'
        } else {
            return 'Number 2 is larger than number 1.'
        }
    }

}

