class ClientConfig {


    static config = {
        database:null,
        username:null,
        password:null,
        host:null,
    }

    static init(config){
        this.config.database=config.database;
        this.config.username=config.username;
        this.config.password=config.password;
        this.config.host=config.host;
    }
}

module.exports = ClientConfig;