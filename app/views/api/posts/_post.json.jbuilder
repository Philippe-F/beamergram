json.extract! post, :id, :user_id, :like_id, :comment_id, 
:caption, :created_at, :updated_at
if post.photo.attached? 
  json.photoUrl url_for(post.photo) 
end 