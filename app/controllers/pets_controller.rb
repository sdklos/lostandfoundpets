class PetsController < ApplicationController
  def index
    @pets = Pet.all
    render json: @pets, status: 200
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet, status: 200
  end

  def create
    binding.pry
    @pet = Pet.new(pet_params)
    respond_to do |format|
      if @pet.save
        render json: @pet, status: 200
      else
        render json: @pet.errors, status: unprocessable_entity
      end
    end
  end

  private

  def pet_params
    params.require(:pet).permit(:lost, :found, :pet_type, :primary_breed, :primary_color, :age, :weight, :sex, :name, :owner_name, :contact_phone, :url, :addresses => [])
  end
end
