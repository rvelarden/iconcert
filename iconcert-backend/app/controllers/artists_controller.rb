class ArtistsController < ApplicationController
    def index
        artists = Artist.all 
        render json: artists, :include => :concert_dates
    end 

    def create
        artist = Artist.create(artist_params)
        render json: artist, :include => :concert_dates
        # byebug
    end 

    def destroy
        artist = Artist.find(params[:id])
        Artist.destroy(params[:id])
        render json: artist, :include => :concert_dates
    end 

  
    def artist_params
        params.require(:artist).permit(:name, :image, :genre, :years_active, :date)
    end 


end
