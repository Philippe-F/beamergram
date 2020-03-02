class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_cred(params[:user][:email],params[:user][:password]) 

    if user 
      redirect_to user_url(user.id) 
    else 
      flash[:errors] = ["Invalid Username or Password"] 
      render :new 
    end 
  end

  def destroy
    self.logout 
    redirect_to new_session_url 
  end
end
