
json.extract! post, :id, :user_id, :caption, :created_at, :updated_at
if post.photo.attached? 
  json.photoUrl url_for(post.photo) 
end 
json.username post.user.username
json.profileImage url_for(post.user.photo)

json.comments post.comments.each do |comment|
  json.partial! '/api/comments/comment', comment: comment
end 