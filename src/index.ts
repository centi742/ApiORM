import "reflect-metadata"
import {AppDataSource} from './db'
import app from './app'



async function main() {
   try {
    await AppDataSource.initialize();
    console.log('database is conected');
    app.listen(3080);
    console.log('this app listening in por',3080);
   } catch (error) {
       console.log(error);
   }
}

main();