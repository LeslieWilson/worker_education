class Api::V1::AppointmentsController < ApiController

  def index
    render json: {
      appointments: Appointment.all
    }
  end

  def create
binding.pry
    appointment = Appointment.new(appointment_params)
    if appointment.save
      render json:{
        appointments: Appointment.all
      }
    else
      render json:{status:"error"}
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:start,:end,:value,:uid)
  end

end
