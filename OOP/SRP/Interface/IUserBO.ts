module RSP{
    export interface IUserBO {
        setUserID(userID: string): void;

        getUserID(): string;

        setPassword(password: string): void;

        getPassword(): string;

        setUserName(userName: string);

        getUserName(): string;
    }
}