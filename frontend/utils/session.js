export const postUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
) 