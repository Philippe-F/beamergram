class PostsController < ApplicationController

  def index 
    @posts = Post.all 
    render "/api/posts"
  end 

  def create
    @post = Post.new(post_params)

    if @post.save
      render "api/posts/show"
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def show
    @post = current_user.posts.find_by(id: params[:id]) 

    if @post 
      render "/api/{current_user.id}/posts/@post.id"
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def update
    @post = current_user.posts.find(id: params[:id]) 
    @post.update_attributes(post_params) 

    if @post.save
      render "/api/posts/@post.id"
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def destroy 
    @post = current_user.posts.find(id: params[:id]) 
    @post.destroy
  end 


  private 
  def post_params
    params.require(:post).permit(:caption)
  end 
end
