const enviroment = process.env.NODE_ENV || 'development';
const context = '/rest';
const config = {
  development: {
    enviroment,
    context,
    database: 'mongodb://localhost/hmims',
  },
  production: {
    enviroment,
    context,
    database: 'mongodb://52.207.235.87:27017/driveondb',
  },
  test: {
    enviroment,
    context: '',
  },
};
module.exports = config[enviroment];