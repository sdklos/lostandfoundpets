class WelcomeController < ApplicationController
  def welcome
    @breeds = PetAddress.pet_breeds
  end

  def home
  end
end
