
# json.posts do
@posts.each do |post|
  json.set! post.id do
    json.partial! "post", post: post
    json.partial! "/api/users/user", user: post.user
  end
end
# end 

# json.users do 
#   @posts.each do |post|
#     json.set! post.user.id do 
#       json.partial! "/api/users/user", user: post.user
#     end 
#   end 
# end 