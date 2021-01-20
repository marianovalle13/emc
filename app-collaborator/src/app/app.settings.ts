export class Settings {
  // Global Settings
  public static APP_NAME = 'EMC CMS';
  public static APP_VERSION = '0.0.1';


  // (+) EndPoints
  public static endPoints = {
    files: '/files',
    phcs: '/phcs',
    phcps: '/phcps',
    users: '/users',
    umacs: '/umacs',
    videoCalls: '/videoCalls',
    courses: '/courses'
  };
  public static endPointsMethods = {
    umacs: {
      login: '/login',
      changePassword: '/changePassword'
    },
    videoCalls: {
      room: '/room'
    }
  };
  // (-) EndPoints

  public static storage = {
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

};
