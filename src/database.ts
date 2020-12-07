import mongoose from 'mongoose';

const user = 'root';
const password = '1234';
const bd = 'backend_ias';
const uri = `mongodb+srv://${user}:${password}@cluster0.3nxmt.mongodb.net/${bd}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));
