class CreateConcertDates < ActiveRecord::Migration[6.0]
  def change
    create_table :concert_dates do |t|
      t.string :date
      t.string :artist_id
      t.string :venue_id
      t.timestamps
    end
  end
end
