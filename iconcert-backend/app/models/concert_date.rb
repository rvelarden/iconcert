class ConcertDate < ApplicationRecord
    belongs_to :artist 
    belongs_to :venue 
end
