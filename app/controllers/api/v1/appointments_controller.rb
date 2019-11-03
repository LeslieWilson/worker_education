class Api::V1::AppointmentsController < ApiController

def index

  render json: {
    appointments: Appointment.all
  }
end


def create
end


end
