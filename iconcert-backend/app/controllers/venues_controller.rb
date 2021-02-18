class VenuesController < ApplicationController
    def index
        venues = Venues.all 
        render json: venues
    end 
end
