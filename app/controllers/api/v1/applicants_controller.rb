class Api::V1::ApplicantsController< ApiController
skip_before_action :verify_authenticity_token


  def index
    if user_signed_in?
      render json:{
      scope:[current_user,user_signed_in?]
      }
    end
  end

  def create
    applicant = Applicant.new(applicant_params)
    applicant.user_id = current_user.id
    if applicant.save
      render json:{
        applicants: Applicant.all
      }
    else
      render json:{status:"error"}
    end
  end

private

def applicant_params
    params.require(:applicant).permit(:first_name,:last_name, :email, :phone_number, :address, :city, :state, :country, :age, :current_income, :house_size)
  end
end
