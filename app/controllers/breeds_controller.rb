class BreedsController < ApplicationController

  def dogs
    render json: DogBreed.all.to_json
  end

  def cats
    render json: CatBreed.all.to_json
  end

  def birds
    render json: BirdBreed.all.to_json
  end
end
