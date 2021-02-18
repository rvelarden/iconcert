class Artist < ApplicationRecord
    has_many :concert_dates
    has_many :venues, through: :concert_dates
end
