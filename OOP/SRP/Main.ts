module RSP{
    export class Main {

        constructor(){
            this.init();
        }

        init():void{
            let userInfo = new UserInfo();

            userInfo.setPassword('abc');

        }

    }
}
new RSP.Main();