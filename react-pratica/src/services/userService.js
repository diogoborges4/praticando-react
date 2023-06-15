const profile = async () => {
  try {
    const res = await fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .catch((err) => err);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default userService = {
  profile,
};
