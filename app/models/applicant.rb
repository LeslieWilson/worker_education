class Applicant < ApplicationRecord
  validates :first_name, presence:true
  validates :last_name, presence:true
  validates :email, presence:true
  validates :phone_number, presence:true
  validates :address, presence:true
  validates :city, presence:true
  validates :state, presence:true
  validates :country, presence:true
  validates :age, presence:true
  validates :current_income, presence:true
  validates :house_size, presence:true
  belongs_to :user
end
