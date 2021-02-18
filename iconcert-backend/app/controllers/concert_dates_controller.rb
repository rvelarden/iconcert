class ConcertDatesController < ApplicationController
    def index
        concert = ConcertDate.all 
        render json: concert
    end 
end
