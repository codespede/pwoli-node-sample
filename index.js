global.pwoli = 'test'
console.log('pwoli', global.pwoli)
import Pwoli from 'pwoli/lib/base/Pwoli.js';
import pkg from 'sequelize';
import {Company} from './models/index.js';
const { Model } = pkg;
class Me extends Model{}
import { Application as app, DataHelper, GridView } from 'pwoli';
Model.test = 'Mahesh'
app.setORMModelClass(Model);
import ejs from 'ejs';
import { createServer } from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs';
class MyGridView extends GridView{
  key = 'Mahesh';
  async init() {
    console.log('helloooo', this.dataProvider);
    await super.init.call(this);
  }
  async run() {
    return await super.run.call(this);
  }
}
// console
let __dirname = path.resolve();
app.viewPath = path.join(__dirname, 'views');

app.view.layout = '/layout.ejs'
//create a server object:
createServer(async function (req, res) {
  const uri = url.parse(req.url).pathname
  let filename = path.join(process.cwd(), uri);
  if (fs.existsSync(filename) && !fs.statSync(filename).isDirectory()) {
    fs.readFile(filename, "binary", function (err, file) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write(err + "\n");
        res.end();
        return;
      }
      res.writeHead(200);
      res.write(file, "binary");
      res.end();
      return;
    });
  } else {
    if (!req.url.includes("page")) {
    res.end();
    return;
    }
    
    
  app.request = req;
    const filterModel = new Company();
    console.log('ormModelClassTest', filterModel.test);
  console.log('parsed-query', DataHelper.parseUrl(req.url));
  const dataProvider = filterModel.search(DataHelper.parseUrl(req.url));
    const view = app.view;
    const grid = new MyGridView({ dataProvider, filterModel, columns: ['id', 'title'] });
    console.log('ejs', ejs);
    const company = (Company).build({ title: 'testCompany' });
    //res.write(company.title);
    res.write(await app.view.render('/layout.ejs', { view, 'subview': 'grid', grid })); //write a response
    res.end(); //end the response
  }
  
}).listen(4000, function(){
  console.log("Server started at port 4000"); //the server object listens on port 3000
});