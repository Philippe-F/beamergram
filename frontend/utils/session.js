export const postUser = ({ username, password, email, fullname }) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user: {  
      username,
      password,
      email, 
      full_name: fullname
    } 
  },
  })
);

export const postSession = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  })
);

export const deleteSession = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  })
};