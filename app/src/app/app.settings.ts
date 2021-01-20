export class Settings {
  // Global Settings
  public static APP_NAME = 'EMC CMS';
  public static APP_VERSION = '0.0.1';


  // (+) EndPoints
  public static endPoints = {
    courses: '/courses',
    emergencies: '/emergencies',
    emergencyTypes: '/emergencyTypes',
    files: '/files',
    news: '/news',
    phcs: '/phcs',
    phcps: '/phcps',
    users: '/users',
    videoCalls: '/videoCalls',
  };
  public static endPointsMethods = {
    users: {
      login: '/login',
      changePassword: '/changePassword'
    },
    videoCalls: {
      room: '/room'
    }
  };
  // (-) EndPoints

  public static storage = {
    emergency: 'emergency',
    emergencyType: 'emergencyType',
    user: 'user'
  };

  public static routes: any = {
    root: { path: '', redirectTo: '/home', pathMatch: 'full' },
    activities: { path: 'activities', data: { roles: [ 'administrator','user'] } },
    activity: { path: 'activities/:id', data: { roles: [ 'administrator','user'] } },
    administrators: { path: 'administrators', data: { roles: [ 'administrator'] } },
    administratorChangePassword: { path: 'administrators/:id/changePassword', data: { roles: [ 'administrator'] } },
    administrator: { path: 'administrators/:id', data: { roles: [ 'administrator'] } },
    companies: { path: 'companies', data: { roles: [ 'administrator','user'] } },
    company: { path: 'companies/:id', data: { roles: [ 'administrator','user'] } },
    countries: { path: 'countries', data: { roles: [ 'administrator','user'] } },
    country: { path: 'countries/:id', data: { roles: [ 'administrator','user'] } },
    home: { path: 'home' },
    login: { path: 'login' },
    users: { path: 'users', data: { roles: [ 'administrator','user'] } },
  };

  // (+) EmergencyTypes
  public static emergencyTypes = [
    {
        "name": "Perdida de Consciencia No Recuperada",
        "video": "",
        "order": 1,
        "code": "OOC",
        "color": "RED",
        "ui": {
            "background": "#FF0000",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    },
    {
        "name": "Dificultad respiratoria severa",
        "video": "",
        "order": 2,
        "code": "SRD",
        "color": "RED",
        "ui": {
            "background": "#FF4500",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    },
    {
        "name": "Grandes hemorragias",
        "video": "",
        "order": 3,
        "code": "LH",
        "color": "RED",
        "ui": {
            "background": "#FF7600",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    },
    {
        "name": "ACV",
        "video": "",
        "order": 4,
        "code": "STROKE",
        "color": "RED",
        "ui": {
            "background": "#FF8900",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    },
    {
        "name": "Dolor en el pecho",
        "video": "",
        "order": 5,
        "code": "CP",
        "color": "RED",
        "ui": {
            "background": "#FFA700",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    },
    {
        "name": "Otro",
        "video": "",
        "order": 6,
        "code": "OTHER",
        "color": "YELLOW",
        "ui": {
            "background": "#EDC106",
            "icon": "api_de8b3e9d-ff08-41e5-9306-8e9b039e9451.png"
        },
    }
  ];

  public static emergencyTypeColors = {
    red: 'RED',
    yellow: 'YELLOW',
    green: ' GREEN'
  }

  // (-) EmergencyTypes

};
