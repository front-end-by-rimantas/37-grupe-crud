class UsersDatabase {
    constructor() {
        this.list = [];
    }

    create(userObj) {
        if (typeof userObj !== 'object') {
            return [true, 'User turi buti objektas'];
        }

        userObj.deleted = false;

        this.list.push(userObj);
        return [false, 'OK'];
    }

    read(userIndex) {
        if (typeof userIndex !== 'number') {
            return [true, 'User index turi buti skaicius'];
        }

        if (!this.list[userIndex]
            || this.list[userIndex].deleted) {
            return [true, 'Toks vartotojas neegzistuoja'];
        }

        return [false, this.list[userIndex]];
    }

    update(userIndex, changesObj) {
        if (typeof userIndex !== 'number') {
            return [true, 'User index turi buti skaicius'];
        }
        if (typeof changesObj !== 'object') {
            return [true, 'Pakeitimai turi buti objektas'];
        }

        const userObj = this.list[userIndex];
        if (!userObj) {
            return [true, 'Toks vartotojas neegzistuoja'];
        }

        // {email}
        // {pass}
        // {email, pass}

        for (const key in changesObj) {
            userObj[key] = changesObj[key];
        }

        return [false, 0];
    }

    delete(userIndex) {
        if (typeof userIndex !== 'number') {
            return [true, 'User index turi buti skaicius'];
        }

        const userObj = this.list[userIndex];
        if (!userObj) {
            return [true, 'Toks vartotojas neegzistuoja'];
        }

        // this.list[userIndex].email = '';
        // this.list[userIndex].deleted = true;

        const newUserList = this.list.filter((userObj, index) => index !== userIndex);
        this.list = newUserList;

        return [false, 'OK'];
    }
}

export { UsersDatabase }