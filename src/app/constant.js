"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BASE_URL = 'http://172.16.18.10:90/api/';
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
// API URLS
Constants.API_URL = 'http://jsonplaceholder.typicode.com/users';
Constants.LOGIN_API_URL = BASE_URL + 'login';
Constants.SIGNUP_API_URL = BASE_URL + 'login/signup';
Constants.ADD_NEW_KID_API_URL = BASE_URL + 'patient/createplayer';
Constants.ADD_EXISTING_KID_API_URL = BASE_URL + 'patient/getexitingplayer';
Constants.ADD_NEW_GROUP_API_URL = BASE_URL + 'patient/creategroup';
Constants.GET_KID_DATA_API_URL = BASE_URL + 'patient/getplayers';
Constants.GET_GROUP_DATA_API_URL = BASE_URL + 'patient/getgroup';
// FORM DATA
Constants.LOGIN_DATA = [{ 'formControlName': "email", 'placeholder': "Username", 'name': "email", 'type': "text" },
    { 'formControlName': "password", 'placeholder': "Password", 'name': "password", 'type': "password" }
];
Constants.SIGNUP_DATA = [{ 'formControlName': "firstName", 'placeholder': "First Name", 'name': "firstName", 'type': "text" },
];
Constants.TEST_JSON = [
    { 'kid_id': 2, 'name': 'Steve', 'result': [200, 150, 230, 120] },
    { 'kid_id': 1, 'name': 'Ava', 'result': [100, 250, 330, 120] },
    { 'kid_id': 3, 'name': 'Eric', 'result': [180, 350, 530, 110] }
];
exports.Constants = Constants;
//# sourceMappingURL=constant.js.map