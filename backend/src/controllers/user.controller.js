import Users from "../models/users";

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log("userId :>> ", userId);

    // const _id = mongoose.Types.ObjectId.fromString(userId);

    const foundUser = await Users.findById(userId);

    if (!foundUser) throw new Error("Wrong id!");

    res.status(200).send(foundUser);
  } catch (error) {
    next(error);
  }
};
