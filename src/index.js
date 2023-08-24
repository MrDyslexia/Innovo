import app from "./app"
import { connectDB} from './db.js';

connectDB();
app.listen(3000);
console.log("Server on port", 3000);