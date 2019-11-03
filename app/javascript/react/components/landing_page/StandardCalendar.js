import React , { useState } from 'react';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';


export default class StandardCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 4,
      selectedIntervals: [{
          uid: 1,
          start: moment('October 31st 2019 1:00:03 PM'),
          end: moment('October 31 2019 1:30:01 PM'),
          value: "Booked by lesliee"
        }

      ]
    }
  }

//   componentDidMount(){
//     fetch(`api/v1/appointments/`)
//     .then((response) =>{
//       if (response.ok) {
//         return response
//       } else {
//         let errorMessage = `${response.status}
//         (${response.statusText})`,
//         error = new Error(errorMessage)
//         throw(error)
//       }
//     })
//     .then(response => response.json())
//     .then(body => {
//       let banana = body.appointments
//       debugger
//       let newBanana = banana.map(item => {debugger
//         start = moment(item.start)
//         end = moment(item.end)
//       })
//       console.log(newBanana)
//       this.setState({
//         selectedIntervals: newBanana
//       })
//       console.log(this.state.selectedIntervals)
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`))
// }

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
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
    console.log(this.state.selectedIntervals)
  }

  render() {
    return <WeekCalendar
      startTime = {moment({h: 9, m: 0})}
      endTime = {moment({h: 15, m: 30})}
      numberOfDays= {14}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
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
