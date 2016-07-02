class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :link
      t.integer :uvpotes

      t.timestamps null: false
    end
  end
end
