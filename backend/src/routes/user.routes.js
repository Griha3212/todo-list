/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from "express";
import passport from "passport";
import * as userController from "../controllers/user.controller";

const router = express.Router();

const { getUser, loginUser } = userController;

router.get(
  "/get_user/:userId",
  //   passport.authenticate("jwt", { session: false }),
  getUser
);

router.post(
  "/login",
  passport.authenticate("localSignIn", { session: false }),
  loginUser
);

export { router };
