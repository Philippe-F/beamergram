
json.extract! post, :id, :user_id, :caption, :comments, :created_at, :updated_at
if post.photo.attached? 
  json.photoUrl url_for(post.photo) 
end 
json.username post.user.username
json.profileImage url_for(post.user.photo)