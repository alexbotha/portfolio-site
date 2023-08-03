class ProjectsController < ApplicationController

  def index
    projects = Project.all 
    render json: projects, status: :ok 
  end

  def show
    project = Project.find(params[:id])
    if project 
      render json: project, status: :ok
    else 
      render json: {error: "no project found"}, status: :unprocessable_entity
    end 
  end

  def create
    project = Project.new
    if project.save
      render json: project, status: :created
    else
      render json: { error: "not accepted" }, status: :unprocessable_entity
    end
  end

end
