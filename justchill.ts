export class PotatoesBaby {

    hello = (message: string) => {
        if(message) {
            console.log(message);
        }

        return this.hello('Do not fail University man, you will regret it.');

    }

    /**
     * While I was studying, I needed to figure out which number was larger,
     * so I had to make this method
     */
    calcLargerNum = (number1: number, number2: number) => {
        if(number1 > number2) {
            return 'Number 1 is larger than number 2.'
        } else {
            return 'Number 2 is larger than number 1.'
        }
    }

}

