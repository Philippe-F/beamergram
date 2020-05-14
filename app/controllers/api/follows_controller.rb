class Api::FollowsController < ApplicationController 

  def index
    @follows = Follow.all.where(user_id: params[:user_id])
  end 

  def create 
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id 

    if @follow.save
      render :show 
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

   def show 
    @follow = Follow.find_by(id: params[:id])
   end

  def destroy 
    @follow = Follow.find_by!(user_id:current_user.id, followed_user_id:params[:id])

    @follow.destroy
    render :show
  end


  private 
  def follow_params
    params.require(:follow).permit(:user_id,:followed_user_id)
  end
end