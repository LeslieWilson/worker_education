class Api::V1::PersonalDatapointsController < ApiController

  def create

    personal_datapoint = PersonalDatapoint.new(personal_datapoint_params)


    if personal_datapoint.save
      render json: {status: "Success!"}
    else
      render json: {status: "Error"}
    end
  end

  private

  def personal_datapoint_params
    params.require(:personal_datapoint).permit(:first_name, :last_name, :email, :phone_number)
  end
end
