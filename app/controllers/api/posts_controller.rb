class Api::PostsController < ApplicationController

  def index 
    @posts = Post.all 
    render :index
  end 

  def create
    @post = current_user.posts.new(post_params)
    
    if @post.save
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def show

    @post = Post.find_by(id: params[:id]) 

    if @post 
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def update
    @post = Post.find(params[:id]) 

    if @post.update(post_params) 
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end 

  def destroy 
    @post = Post.find_by(id: params[:id]) 
    @post.destroy
  end 

  def user_posts 
    @posts = Post.where(user_id: params[:id])
    render :index
  end

  private 
  def post_params
    params.require(:post).permit(:caption, :photo)
  end 
end
