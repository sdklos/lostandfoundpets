class PetsController < ApplicationController
  def index
    @pets = Pet.all
    render json: @pets, status: 200
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet, status: 200
  end
end
