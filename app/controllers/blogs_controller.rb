class BlogsController < ApplicationController

  def list_blog
    @blogs = Blog.all
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    @blog = Blog.find(params[:id])
    @blog.update blogs_params
    redirect_to @blog
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new blogs_params
    @blog.save
    redirect_to @blog
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to blogs_path
  end

  private
    def blogs_params
      params.require(:blog).permit(:title, :content)
    end
end
