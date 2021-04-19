import Users from "../models/users";

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const foundUser = await Users.findById(userId);

    res.status(200).send(foundUser);
  } catch (error) {
    next(error);
  }
};
