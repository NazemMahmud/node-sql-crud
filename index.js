import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js";
import handleValidation from "./middlewares/request.validate.js";
import {userValidate} from "./validators/user.validator.js";
import {createUser} from "./controllers/userController.js";

const app = express();

// const corsOptions = {
//     origin: "http://localhost:3009"
// };

app.use(cors()); // corsOptions

// automatically parse requests of content-type - application/json ( convert data into a JSON and attaches it to the req.body property)
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/********************* API PATH STARTS *************************************/
const router = express.Router();

router.get('/healthcheck', async (req, res, next) => {

    try {
        res.status(200).json(
            { message: "Successfully connected to the Server..."}
        );
    } catch (err) {
        next(err);
    }
});
app.use('/', router);

app.use('/api/users', userRoutes);
// app.use('/api/posts');
/********************* API PATH ENDS *************************************/

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})