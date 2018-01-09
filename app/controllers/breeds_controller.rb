class BreedsController < ApplicationController

  def dogs
    respond_to do |format|
      format.json { render json: DogBreed.all.to_json  }
    end
  end

  def cats
    respond_to do |format|
      format.json { render json: CatBreed.all.to_json  }
    end
  end

  def birds
    respond_to do |format|
      format.json { render json: BirdBreed.all.to_json  }
    end
  end
end
