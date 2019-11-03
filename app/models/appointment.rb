class Appointment < ApplicationRecord
  validates :uid, presence: true
  validates :start, presence: true
  validates :end, presence:true
  validates :value, presence:true

end
