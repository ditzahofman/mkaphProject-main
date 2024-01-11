// General config:
class AppConfig {
    public helpPage = ""; //if you have
    public salesEmail = "";// if you have
}


class DevelopmentConfig extends AppConfig {
    public isDevelopment = true
    public isProduction = false
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "Name of database";     
    public port = "";          // choose  port 
    public frontEndUrl = "Write the URL of the website";     
}

class ProductionConfig extends AppConfig {
    public isDevelopment = false
    public isProduction = true
    public host = "";
    public user = "";
    public password = "";
    public database = "";    //Name of database
    public port = 0;
    public frontEndUrl = ""; // Write the URL of the website
}

const appConfig = process.env.NODE_ENV === "production"? new ProductionConfig() : new DevelopmentConfig()

export default appConfig;

