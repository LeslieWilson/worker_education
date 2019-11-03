class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :uid, null:false
      t.datetime :start, null:false
      t.datetime :end, null:false
      t.string :value, null:false
    

      t.timestamp
    end
  end
end
