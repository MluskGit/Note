module RSP{
    export interface IPhone {
        dial(phoneNumber:string);
        chat(o:Object);
        hangUp();
    }
}