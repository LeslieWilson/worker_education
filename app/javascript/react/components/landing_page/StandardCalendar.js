import React , { useState } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';


export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 4,
      SelectedIntervals:[]
    }
  }

  componentDidMount(){
    fetch(`api/v1/appointments/`)
    .then((response) =>{
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}
        (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let banana = body.appointments
      let newBanana = banana.map(item => {
        return({
          start: moment(item.start, 'YYYY-MM-DD hh:mm:ss').subtract(4, 'hours'),
          end: moment(item.end,'YYYY-MM-DD hh:mm:ss').subtract(4, 'hours'),
          value: item.value,
          uid: parseInt(item.uid)
        }
      )
    })
      this.setState({
        selectedIntervals: newBanana
      })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }
  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    console.log(newIntervals)
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

  fetch("/api/v1/appointments/", {
    method: "POST",
    body: JSON.stringify(intervals[0]),
    headers: {
      Accept :"application/json", "Content-type": "application/json"
    }
  })
  .then(response =>{
    if(response.ok){
      return response;
    } else{
      const errorMessage = `${response.status}
      (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error);
    }
  })
  .then((response)=>{
    return response.json()
  })

  .then((body)=>{
    let banana = body.appointments
    let newBanana = banana.map(item => {
      return({
        start: moment(item.start, 'YYYY-MM-DD hh:mm:ss').subtract(4, 'hours'),
        end: moment(item.end,'YYYY-MM-DD hh:mm:ss').subtract(4, 'hours'),
        value: item.value,
        uid: parseInt(item.uid)
      }
    )
  })
    console.log(newBanana)
    this.setState({
      selectedIntervals: newBanana
    })
    console.log(this.state.selectedIntervals)
})
.catch(error => console.error(`Error in fetch: ${error.message}`))
}



  render() {
    return <WeekCalendar
      startTime = {moment({h: 9, m: 0})}
      endTime = {moment({h: 17, m: 30})}
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      scaleUnit = {60}
      cellHeight = {60}
      dayFormat='dddd'
    />
  }
}
// const RefactoredCal = (props) =>{
//   const[lastUid, setlastUid]=useState(4)
//   const[selectedIntervals, setSelectedIntervals]=useState(
//     [
//       {
//         uid: 1,
//         start: moment({h: 10, m: 5}),
//         end: moment({h: 12, m: 5}),
//         value: "Booked by Smith"
//       },
//       {
//         uid: 2,
//         start: moment({h: 13, m: 0}).add(2,'d'),
//         end: moment({h: 13, m: 45}).add(2,'d'),
//         value: "Closed"
//       },
//       {
//         uid: 3,
//         start: moment({h: 11, m: 0}),
//         end: moment({h: 14, m: 0}),
//         value: "Reserved by White"
//       },
//     ]
//   )
//
//   const handleEventRemove = (event) => {
//     const {selectedIntervals} = selectedIntervals
//     const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
//     if (index > -1) {
//       selectedIntervals.splice(index, 1);
//       setSelectedIntervals(selectedIntervals)
//     }
//
//   }
//
//   const handleEventUpdate = (event) => {
//     const selectedIntervals = selectedIntervals;
//     const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
//     if (index > -1) {
//       selectedIntervals[index] = event;
//       setSelectedIntervals(selectedIntervals);
//     }
//   }
//
//   const handleSelect = (newIntervals) => {
//     const lastUid = lastUid
//       const selectedIntervals = selectedIntervals
//     const intervals = newIntervals.map( (interval, index) => {
//
//       return {
//         ...interval,
//         uid: lastUid + index
//       }
//     });
//
//     setSelectedIntervals(
//      selectedIntervals.concat(intervals))
//
//     setLastUid(lastUid + newIntervals.length)
//   }
//
//     return (
//       <WeekCalendar
//       startTime = {moment({h: 9, m: 0})}
//       endTime = {moment({h: 15, m: 30})}
//       numberOfDays= {14}
//       selectedIntervals = {selectedIntervals}
//       onIntervalSelect = {handleSelect}
//       onIntervalUpdate = {handleEventUpdate}
//       onIntervalRemove = {handleEventRemove}
//     />
//   )
// }
