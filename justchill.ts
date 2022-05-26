export class PotatoesBaby {

    hello = (message: string) => {
        if(message) {
            console.log(message);
        }

        return this.hello('Do not fail University man, you will regret it.');

    }

}

