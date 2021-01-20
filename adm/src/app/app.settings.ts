export class Settings {
  // Global Settings
  public static APP_NAME = 'Diproach CMS';
  public static APP_VERSION = '0.0.1';


  //EndPoints
  public static endPoints = {
    vehicleBrands: '/vehicleBrands',
    vehicleModels: '/vehicleModels',
    vehicleTypes: '/vehicleTypes',
    vehicleInsurances: '/vehicleInsurances',
    equipments: '/equipments',
    files: '/files',
    categories: '/categories',
    phcs: '/phcs'

  };

  public static storage = {
    user: 'user'
  };

  public static routes: any = {
    root: { path: '', redirectTo: '/home', pathMatch: 'full' },
    administrators: { path: 'administrators', data: { roles: ['administrator'] } },
    administratorChangePassword: { path: 'administrators/:id/changePassword', data: { roles: ['administrator'] } },
    administrator: { path: 'administrators/:id', data: { roles: ['administrator'] } },
    home: { path: 'home' },
    login: { path: 'login' },
    users: { path: 'users', data: { roles: ['administrator'] } },
    user: { path: 'users/:id', data: { roles: ['administrator'] } },
    courses: { path: 'courses', data: { roles: ['administrator'] } },
    course: { path: 'courses/:id', data: { roles: ['administrator'] } },
    news: { path: 'news', data: { roles: ['administrator'] } },
    new: { path: 'news/:id', data: { roles: ['administrator'] } },
    umacs: { path: 'umacs', data: { roles: ['administrator'] } },
    umac: { path: 'umacs/:id', data: { roles: ['administrator'] } },
    equipments: { path: 'equipments', data: { roles: ['administrator'] } },
    equipment: { path: 'equipments/:id', data: { roles: ['administrator'] } },
    vehicleInsurances: { path: 'vehicleInsurances', data: { roles: ['administrator'] } },
    vehicleInsurance: { path: 'vehicleInsurances/:id', data: { roles: ['administrator'] } },
    vehicleTypes: { path: 'vehicleTypes', data: { roles: ['administrator'] } },
    vehicleType: { path: 'vehicleTypes/:id', data: { roles: ['administrator'] } },
    vehicleBrands: { path: 'vehicleBrands', data: { roles: ['administrator'] } },
    vehicleBrand: { path: 'vehicleBrands/:id', data: { roles: ['administrator'] } },
    categories: { path: 'categories', data: { roles: ['administrator'] } },
    category: { path: 'categories/:id', data: { roles: ['administrator'] } },
    tableMaintenance: { path: 'tableMaintenance', data: { roles: ['administrator']} },
    vehicleModels: { path: 'vehicleModels', data: { roles: ['administrator']} },
    vehicleModel: { path: 'vehicleModels/:id', data: { roles: ['administrator']} },
    phcs: { path: 'phcs', data: { roles: ['administrator']} },
    phc: { path: 'phcs/:id', data: { roles: ['administrator']} },
    phcps: { path: 'phcps', data: { roles: ['administrator']} },
    phcp: { path: 'phcps/:id', data: { roles: ['administrator']} },
    diseases: { path: 'diseases', data: { roles: ['administrator']} },
    disease: { path: 'diseases/:id', data: { roles: ['administrator']} },
    drivers:{path:'drivers',data: { roles: ['administrator']}},
    driver:{path:'drivers/:id',data: { roles: ['administrator']}},
    nurses:{path:'nurses',data: { roles: ['administrator']}},
    nurse:{path:'nurses/:id',data: { roles: ['administrator']}},
    medicines:{path:'medicines',data: { roles: ['administrator']}},
    medicine:{path:'medicines/:id',data: { roles: ['administrator']}},
    medics: { path: 'medics', data: { roles: ['administrator']}},
    medic: { path: 'medics/:id', data: { roles: ['administrator']}},
    insurances: { path: 'insurances', data: { roles: ['administrator']}},
    insurance: { path: 'insurances/:id', data: { roles: ['administrator']}},
  };

};
