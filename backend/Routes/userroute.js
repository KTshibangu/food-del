import express from "express"
import { loginUser, registerUser } from "../Controllers/usercontroller.js"

const userrRouter = express.Router()

userrRouter.post("/register", registerUser)
userrRouter.post("/login", loginUser)

export default userrRouter