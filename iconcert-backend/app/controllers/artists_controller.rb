class ArtistsController < ApplicationController
    def index
        artists = Artist.all 
        render json: artists, :include => :concert_dates
    end 

    def create
        artist = Artist.create(artist_params)
        concert_date = ConcertDate.create(concert_params)
        venue = Venue.create(concert_params)
        render json: artist, :include => :concert_dates

    end 

    def destroy
        artist = Artist.find(params[:id])
        Artist.destroy(params[:id])
        render json: artist, :include => :concert_dates
    end 

    private

    def artist_params
        params.require(:artist).permit(:name, :image, :genre, :years_active)
    end 

    def venue_params
    end 
    
    def concert_params
        params.require(:concert_dates).permit(:date, :artist_id, :venue_id)
    end 

end
