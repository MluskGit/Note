module RSP{
    export interface IUserBiz {
        changePassword(): boolean;

        deleteUser(userBO: IUserBO);

        mapUser(userBO: IUserBO);

        addOrg(userBO: IUserBO, orgID: number): boolean;

        addRole(userBO: IUserBO, roleID: number): boolean;
    }
}