const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const stringRegex = /^([a-z0-9]{4,})$/;
class FormValidate {
    emailRegex
    phoneRegex
    stringRegex
    constructor() {
        this.emailRegex = emailRegex;
        this.phoneRegex = phoneRegex;
        this.stringRegex = stringRegex;
    }
    isEmpty(...data) {
        for (let i = 0; i < data.length; i++) {
            if (!data[i]) return true;
        }
        return false;
    }
    isEmail(email) {
        return this.emailRegex.test(email);
    }
    isPhone(phone) {
        return this.phoneRegex.test(phone);
    }
    isString(name) {
        return !(name.match(this.stringRegex))
    }
}
export default new FormValidate();