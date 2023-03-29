const initialState = {
  user: {
    name: "Vamsi",
    bio: "enjoy the life with smile",
    posts: "6 posts",
    followers: "234 followers",
    following: "34 following",
    username: "Explore the world",
  },
};

export const instaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
