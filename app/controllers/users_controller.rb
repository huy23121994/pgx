class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params['id'])
  end

  def edit
    @user = User.find(params['id'])
  end

  def update
    user = User.find(params['id'])
    user.update users_params
    redirect_to user
  end

  def new
    @user = User.new
  end

  def create
    user = User.new users_params
    user.save

    redirect_to user
  end

  def destroy
    user = User.find(params['id'])
    user.destroy

    redirect_to users_path
  end

  private
    def users_params
      params.require(:user).permit(:name, :age)
    end

end
