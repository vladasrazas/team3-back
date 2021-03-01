import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


// const config = {
//   name: 'mongodb',
//   connector: 'mongodb',
//   url: '',
//   host: 'localhost',
//   port: 27017,
//   user: '',
//   password: '',
//   database: 'marketplace',
//   useNewUrlParser: true
// };

var fs = require('fs');
var ca = [fs.readFileSync("./certs/65562368-53e5-4473-99ef-faefeeffd5c9.txt", 'utf8')];

const config = {
  name: 'mongodb',
  connector: 'mongodb',
  url: 'mongodb://admin:team3password@7c5d6e21-c59b-48b1-b2d7-cc324719f19d-0.btdl9c3f09gqti6k4svg.databases.appdomain.cloud:31882,7c5d6e21-c59b-48b1-b2d7-cc324719f19d-1.btdl9c3f09gqti6k4svg.databases.appdomain.cloud:31882,7c5d6e21-c59b-48b1-b2d7-cc324719f19d-2.btdl9c3f09gqti6k4svg.databases.appdomain.cloud:31882/ibmclouddb?authSource=admin&replicaSet=replset',
  database: 'marketplace',
  useNewUrlParser: true,
  server: {
    ssl: true,
    sslValidate: false,
    sslCA: ca
  }
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
