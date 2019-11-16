class AppointmentMailer < ApplicationMailer
  def new_appointment(appointment)
    @appointment = appointment

    mail(
    to: 'leslie.wilson.vt@gmail.com',
    subject: "New Appointment scheduled for #{appointment.start}"
    )
  end
end
