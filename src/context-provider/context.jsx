import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "6kTQ5@example.com",
    age: 30,
    address: "123 Main St, Cityville",
    phone: "123-456-7890",
    occupation: "Software Engineer",
    hobbies: ["reading", "gaming", "hiking"],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePicture: "https://via.placeholder.com/150",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  });

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};

export default UserProvider;
