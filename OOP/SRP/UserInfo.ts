module RSP{
    export class UserInfo implements IUserInfo{
        changePassword(): boolean {
            return false;
        }

        deleteUser(userBO: RSP.IUserBO) {
        }

        mapUser(userBO: RSP.IUserBO) {
        }

        addOrg(userBO: RSP.IUserBO, orgID: number): boolean {
            return false;
        }

        addRole(userBO: RSP.IUserBO, roleID: number): boolean {
            return false;
        }

        setUserID(userID: string): void {
        }

        getUserID(): string {
            return "";
        }

        setPassword(password: string): void {
        }

        getPassword(): string {
            return "";
        }

        setUserName(userName: string) {
        }

        getUserName(): string {
            return "";
        }

    }
}