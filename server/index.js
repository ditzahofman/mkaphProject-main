const express = require("express");
const config = require("./config");
const app = express();
// const logIn = require('./routes/logInRouter');
const companies=require('./routes/addCompanyRouter');
// const donor=require('./routes/donorsRouter');
// const rav=require('./routes/ravRouter')
// const receipts=require('./routes/donorDetailes')
// const search=require('./routes/searchRouter')
// const cities=require('./routes/citiesRouter')
// const fundraiser=require('./routes/fundraiserRouter')
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

let cors = require('cors');
app.use(cors());
// app.use('/api/users', logIn);
app.use('/api/addCompany', companies);
// app.use('/api/receipts', receipts);
// app.use('/api/donors', donor);
// app.use('/api/rav',rav)
// app.use('/api/search/donation',search)
// app.use('/api/cities',cities)
// app.use('/api/fundraiser',fundraiser)

app.listen(config.port, () => {
    console.log("Service endpoint= %s", config.url);
});
  
