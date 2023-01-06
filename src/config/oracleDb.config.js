const { EnvironmentShared } = require("../shared/environment.shared");

class OracleDBConfig {
  constructor() {
    this.environmentShared = new EnvironmentShared();
    if (!OracleDBConfig._instance) OracleDBConfig._instance = this;

    this.connect();
    return this.getInstance();
  }

  getInstance(){
    return OracleDBConfig._instance;
  }

  connect(){
    if(!this.getConnectionDB()) {
      this.getInstance().connection = oracledb.createPool({
        user: this.environmentShared.getEnv('DB_USER'),
        password: this.environmentShared.getEnv('DB_PASSWORD'),
        connectionString: this.environmentShared.getEnv('DB_HOST'),
        poolIncrement:0,
        poolMax: 1,
        poolMin: 1,
      })
    }
  }

  getConnectionDB(){
    return this.getInstance().connection;
  }

  execQuery(query,data){
    try{

      const result = this.getConnectionDB().execute(query, data? data: [])
      this.getConnectionDB().pool.close()
      return result
    }catch(error){
      throw { status: false, message:error}
    }
  }
}

module.exports = new OracleDBConfig();
