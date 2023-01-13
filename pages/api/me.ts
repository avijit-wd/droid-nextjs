import nc from "next-connect";
import { errorHandler, notFound } from "../../middlewares/errorMiddleware";
import { createUser } from "../../controllers/UserController";
import cors from "cors";
import dbConnect from "../../config/dbConnect";

dbConnect();

const handler = nc({ onError: errorHandler, onNoMatch: notFound });

handler.use(cors()).post(createUser);

export default handler;
