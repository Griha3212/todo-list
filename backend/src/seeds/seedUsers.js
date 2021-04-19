import Users from "../models/users";

export const seedUsersData = () => {
  console.log("seedUsersData :>> ");
  Users.countDocuments().exec((err, count) => {
    if (count > 0) {
      console.log("users already there :>> ");
      return;
    }

    const user1 = new Users({
      firstName: "Test",
      lastName: "Testovich",
      //   slug: "hello-mern",
      //   cuid: "cikqgkv4q01ck7453ualdn3hd",
      //   content: content1,
    });
    // const post2 = new Post({
    //   name: "Admin",
    //   title: "Lorem Ipsum",
    //   slug: "lorem-ipsum",
    //   cuid: "cikqgkv4q01ck7453ualdn3hf",
    //   content: content2,
    // });

    user1.save((error, doc) => {
      if (error) return console.error(error);
      console.log("Document inserted succussfully!");
    });

    // Users.create([user1], (error) => {
    //   if (!error) {
    //     console.log("ready to go....");
    //   }
    // });
  });
};
