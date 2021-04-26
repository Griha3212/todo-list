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

    // synthetic event to see loading in UI
    setTimeout(() => {
      res.status(200).send(foundUser);
    }, 2000);

    // setTimeout(, 7000);
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const foundUser = await Users.findOne({ email: email.toLowerCase() });

    if (foundUser) {
      throw new Error("User with this email already exists in data base");
    } else {
      const newUser = new Users();

      newUser.password = bcryptjs.hashSync(password, 6);

      // user.password = bcryptjs.hashSync(req.body.password, 6);
      newUser.email = email.toLowerCase();

      newUser.save((error, doc) => {
        if (error) return console.error(error);
        console.log("User created succussfully!");
        setTimeout(() => {
          res.status(200).send(newUser);
        }, 2000);
      });
    }

    // setTimeout(, 7000);
  } catch (error) {
    next(error);
  }
};
