require 'pry'
class PetsController < ApplicationController
  def index
    @pets = Pet.all
    render json: @pets, status: 200
  end

  def query
    @pets = Pet.perform_query(params)
    render json: @pets, status: 200
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet, status: 200
  end

  def create
    @pet = Pet.create(pet_params)
    render json: @pet
    # respond_to do |format|
    #   if @pet.save
    #     render json: @pet, status: 200
    #   else
    #     render json: @pet.errors, status: unprocessable_entity
    #   end
    # end
  end

  def update
    @pet = Pet.all.find(params[:id])
    @pet.update(pet_params)
      if @pet.save
        render json: @pet, status: 200
      else
        render json: @pet.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    @pets = Pet.all
    render json: @pets, status: 200
  end

  private

  def pet_params
    params.require(:pet).permit(:id, :status, :pet_type, :primary_breed, :primary_color, :age, :weight, :sex, :name, :owner_name, :contact_phone, :url, :address_attributes => [:address])
  end

end
