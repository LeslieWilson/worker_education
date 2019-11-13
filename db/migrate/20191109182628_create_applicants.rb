class CreateApplicants < ActiveRecord::Migration[5.2]
  def change
    create_table :applicants do |t|
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :email, null:false
      t.string :phone_number, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.string :state, null:false
      t.string :country, null:false
      t.string :age, null:false
      t.string :current_income, null:false
      t.string :house_size, null:false
      t.belongs_to :user
    end
  end
end
