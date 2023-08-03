class TechnologiesController < ApplicationController

  def index
    technologies = Technology.all 
    render json: technologies, status: :ok 
  end

  def show
    technology = Technology.find(params[:id])
    if technology 
      render json: technology, status: :ok
    else 
      render json: {error: "no tech found"}, status: :unprocessable_entity
    end 
  end

  def create
    technology = Technology.new
    if technology.save
      render json: technology, status: :created
    else
      render json: { error: "not accepted" }, status: :unprocessable_entity
    end
  end
end
