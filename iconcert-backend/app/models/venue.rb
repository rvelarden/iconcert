class Venue < ApplicationRecord
    has_many :concert_dates
    has_many :artist, through: :concert_dates
end
