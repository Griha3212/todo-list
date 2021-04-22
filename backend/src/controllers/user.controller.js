import Users from "../models/users";

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log("userId :>> ", userId);

    // const _id = mongoose.Types.ObjectId.fromString(userId);

    const foundUser = await Users.findById(userId);

    if (!foundUser) throw new Error("Wrong id!");

    setTimeout(() => {
      res.status(200).send(foundUser);
    }, 2000);

    // setTimeout(, 7000);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log("userId :>> ", userId);

    // const _id = mongoose.Types.ObjectId.fromString(userId);

    const foundUser = await Users.findById(userId);

    if (!foundUser) throw new Error("Wrong id!");

    setTimeout(() => {
      res.status(200).send(foundUser);
    }, 2000);

    // setTimeout(, 7000);
  } catch (error) {
    next(error);
  }
};
