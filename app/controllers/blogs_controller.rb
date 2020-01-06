class BlogsController < ApplicationController
  def show
    @blog = Blog.find(params[:id])
  end

  def new
    
  end

  def create
    @blog = Blog.new blogs_params
    @blog.save
    redirect_to @blog
  end

  private
    def blogs_params
      params.require(:blog).permit(:title, :content)
    end
end
