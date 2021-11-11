const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
const stringRegex = /^([a-z0-9]{4,})$/;
class FormValidate {
    emailRegex
    phoneRegex
    stringRegex
    constructor() {
        this.emailRegex = emailRegex;
        this.phoneRegex = phoneRegex;
        this.panRegex = panRegex;
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
        return name && name.length > 3
    }
    validatePan(name) {
        return this.panRegex.test(name.toUpperCase())
    }
}
export default new FormValidate();