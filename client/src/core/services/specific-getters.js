
const getApplication = () => {
    return 'cortoba';
};

let application = 'cortoba';
const isTestEnvironment = process.env.BABEL_ENV === 'test';

let ApplicationConfig = isTestEnvironment ? null :
    require(`../../clients/configs/${application}/application`); // eslint-disable-line import/no-dynamic-require

let ListOfColumnsConfig = isTestEnvironment ? null :
    require(`../../clients/configs/${application}/application`); // eslint-disable-line import/no-dynamic-require

let LeftAreaConfig = isTestEnvironment ? null :
    require(`../../clients/configs/${application}/leftArea`).default; // eslint-disable-line import/no-dynamic-require

let PropertiesConfig = isTestEnvironment ? null :
    require(`../../clients/configs/${application}/properties`).default; // eslint-disable-line import/no-dynamic-require

export const getApplicationConfig = () => {
    application = getApplication();
    ApplicationConfig = isTestEnvironment ? null :
        require(`../../clients/configs/${application}/application`); // eslint-disable-line global-require,import/no-dynamic-require
    return ApplicationConfig;
};

export const getLeftAreaConfig = () => {
    application = getApplication();
    LeftAreaConfig = isTestEnvironment ? null :
        require(`../../clients/configs/${application}/leftArea`).default; // eslint-disable-line global-require,import/no-dynamic-require
    return LeftAreaConfig;
};

export const getListOfColumnsConfig = () => {
    application = getApplication();
    ListOfColumnsConfig = isTestEnvironment ? null :
        require(`../../clients/configs/${application}/listOfColumns`).default; // eslint-disable-line global-require,import/no-dynamic-require
    return ListOfColumnsConfig;
};

export const getPropertiesConfig = () => {
    application = getApplication();
    PropertiesConfig = isTestEnvironment ? null :
        require(`../../clients/configs/${application}/properties`).default; // eslint-disable-line global-require,import/no-dynamic-require
    return PropertiesConfig;
};

