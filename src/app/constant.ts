let BASE_URL = 'http://172.16.18.10:90/api/';

export class Constants {
  // API URLS
  public static API_URL = 'http://jsonplaceholder.typicode.com/users';
  public static LOGIN_API_URL = BASE_URL + 'login';
  public static SIGNUP_API_URL = BASE_URL + 'login/signup';
  public static ADD_NEW_KID_API_URL = BASE_URL + 'patient/createplayer';
  public static ADD_EXISTING_KID_API_URL = BASE_URL + 'patient/getexitingplayer'
  public static ADD_NEW_GROUP_API_URL = BASE_URL + 'patient/creategroup';
  public static GET_KID_DATA_API_URL = BASE_URL + 'patient/getplayers';
  public static GET_GROUP_DATA_API_URL = BASE_URL + 'patient/getgroup';

  // FORM DATA
  public static LOGIN_DATA = [{'formControlName':"email", 'placeholder':"Username", 'name':"email", 'type':"text"},
      {'formControlName':"password", 'placeholder':"Password", 'name':"password", 'type':"password"}
    ];
  public static SIGNUP_DATA = [{'formControlName':"firstName", 'placeholder':"First Name", 'name':"firstName", 'type':"text"},
  ];
  public static TEST_JSON = [
    {'kid_id': 2, 'name': 'Steve', 'result': [200,150, 230, 120]},
    {'kid_id': 1, 'name': 'Ava', 'result': [100,250, 330, 120]},
    {'kid_id': 3, 'name': 'Eric', 'result': [180,350, 530, 110]}
  ]
}

