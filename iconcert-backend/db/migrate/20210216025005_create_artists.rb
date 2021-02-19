class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :image 
      t.string :years_active
      t.string :genre
      t.string :date 
      t.timestamps
    end
  end
end
