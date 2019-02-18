const enviroment = process.env.NODE_ENV || 'development';
const context = '/rest';
const config = {
  development: {
    enviroment,
    context,
    database: 'mongodb://hmims:hmims!2019@cluster0-shard-00-00-ia75s.mongodb.net:27017,cluster0-shard-00-01-ia75s.mongodb.net:27017,cluster0-shard-00-02-ia75s.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
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