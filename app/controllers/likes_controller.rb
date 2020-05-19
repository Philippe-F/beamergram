class Api::LikesController < ApplicationController 

  def index 
    @likes = Like.all.where(post_id: like_params[:post_id])
  end
   
  def create 
    @like_find = Like.find_by(user_id: current_user.id, post_id: like_params[:post_id])
    if @like_find
      @like_find.destroy
      response = {action: 'remove', post_id: like_params[:post_id], user_id: current_user.id}
      render json: response
    else  
      @like = Like.new(like_params)
      @like.user_id = current_user.id
      if @like.save
        response = {action: 'new', post_id: like_params[:post_id], user_id: current_user.id, data: @like}
        render json: response, status: 201 
      else  
        render json: @like.errors.full_messages, status: 422
      end
    end
  end

  def show 
  end

  def destroy  
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])

    if @like 
      @like.destroy
      render :show 
    else  
      render json: ["User's are only able to remove their own likes"], status: 422
    end
  end

  private 
  def like_params 
    params.require(:like).permit(:post_id)
  end
end