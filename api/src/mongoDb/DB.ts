import * as mongoose from 'mongoose';
import {MongoError} from "mongodb";
import {environment} from "../../../enviroment";

export class DB {

  private connectionString;

  public constructor() {
    // let host = process.env.MONGO_HOST;
    // if (!host) {
    //   host = environment.mongoHost;
    //   console.log('No MONGO_HOST env variable found, using ' + host);
    // }
    // this.connectionString = `mongodb://${host}/3state`;
    this.connectionString = `mongodb://localhost:23457/ovExchange`;

    (<any>mongoose).Promise = global.Promise;
    mongoose.connection.on('connected', () => {
      console.log('Connected to mongodb at ' + this.connectionString);
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from mongodb');
    });
  }

  public connect(): Promise<mongoose.Connection> {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.connectionString, { useMongoClient: true }, (error: MongoError) => {
        if (error) {
          console.log('Error while connecting to ' + this.connectionString);
          console.log(' -> ' + error.message);
          reject();
          // TODO: if the initial connect fails, no reconnect seems to occur
        } else {
          resolve(mongoose.connection);
        }
      });
    });
  }
}
