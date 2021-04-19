/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from "express";
import passport from "passport";
import * as userController from "../controllers/user.controller";

const router = express.Router();

const { getUser } = userController;

router.get(
  "/get_user:userId",
  passport.authenticate("jwt", { session: false }),
  changeActiveSpeakerInChannel
);

export { router };
