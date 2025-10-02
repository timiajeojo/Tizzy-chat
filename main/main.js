const chats = [
  {
    id: 1,
    name: "Family",
    message: "Dad: Who’s bringing dessert tonight?",
    time: "20m",
    img: "https://via.placeholder.com/45",
    pinned: true,
    unread: 2,
    messages: [
      { from: "Mom", text: "Look at these old photos!", time: "20m" },
      { from: "You", text: "Haha wow, that’s amazing 😂", time: "18m" },
      { from: "Dad", text: "Who’s bringing dessert tonight?", time: "15m" },
      { from: "Sister", text: "I’ll bring cake 🍰", time: "14m" },
      { from: "Brother", text: "I’m picking up drinks", time: "12m" },
      { from: "You", text: "Great, I’ll bring chips then", time: "11m" },
      { from: "Mom", text: "Don’t forget the salad 🥗", time: "10m" },
      { from: "You", text: "On it!", time: "9m" },
      { from: "Sister", text: "See you guys soon ❤️", time: "8m" },
      { from: "Dad", text: "Leaving in 10 mins", time: "5m" },
      { from: "You", text: "Same here!", time: "Just now" }
    ]
  },
  {
    id: 2,
    name: "Paige Hall",
    message: "See you at the cafe tomorrow?",
    time: "40m",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "Paige", text: "Hey, got the link?", time: "42m" },
      { from: "You", text: "Yes, sent it!", time: "41m" },
      { from: "Paige", text: "Cool, thanks 😊", time: "40m" },
      { from: "You", text: "So, coffee tomorrow?", time: "38m" },
      { from: "Paige", text: "Sure, same place?", time: "37m" },
      { from: "You", text: "Yep, 10am works?", time: "36m" },
      { from: "Paige", text: "Perfect, see you then", time: "35m" },
      { from: "You", text: "See you 👋", time: "34m" },
      { from: "Paige", text: "Bye bye", time: "33m" }
    ]
  },
  {
    id: 3,
    name: "Rock Climbers",
    message: "Don’t forget helmets tomorrow ⛑️",
    time: "9:30 AM",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 1,
    messages: [
      { from: "Alex", text: "Route looks steep tomorrow", time: "9:00 AM" },
      { from: "Sam", text: "I packed my ropes already", time: "9:05 AM" },
      { from: "You", text: "Don’t forget helmets ⛑️", time: "9:10 AM" },
      { from: "Maya", text: "I’ll bring snacks 🍫", time: "9:15 AM" },
      { from: "Alex", text: "Cool, see you all at 8am sharp", time: "9:30 AM" }
    ]
  },
  {
    id: 4,
    name: "Maya Johnson",
    message: "Let’s watch that new movie 🎬",
    time: "Yesterday",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "Maya", text: "Wanna watch the new Marvel movie?", time: "Yesterday" },
      { from: "You", text: "Yes! Heard it’s amazing", time: "Yesterday" },
      { from: "Maya", text: "I’ll book tickets", time: "Yesterday" },
      { from: "You", text: "Ok, what time?", time: "Yesterday" },
      { from: "Maya", text: "7pm", time: "Yesterday" },
      { from: "You", text: "Done 👍", time: "Yesterday" }
    ]
  },
  {
    id: 5,
    name: "Note to Self",
    message: "Groceries: milk, bread, eggs",
    time: "Tue",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "You", text: "Groceries: milk, bread, eggs", time: "Tue" },
      { from: "You", text: "Remember to pay rent 💵", time: "Tue" },
      { from: "You", text: "Call the plumber tomorrow", time: "Tue" },
      { from: "You", text: "Idea: start a side project app 🚀", time: "Tue" }
    ]
  },
  {
    id: 6,
    name: "Roommates",
    message: "Kai: Can one of you take the trash out?",
    time: "Tue",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "Kai", text: "Can one of you take the trash out?", time: "Tue" },
      { from: "Liam", text: "I’ll do it after dinner", time: "Tue" },
      { from: "You", text: "Thanks 🙏", time: "Tue" },
      { from: "Emma", text: "Anyone want pizza tonight?", time: "Tue" },
      { from: "You", text: "I’m in 🍕", time: "Tue" }
    ]
  },
  {
    id: 7,
    name: "Michael Kirk",
    message: "That brownie recipe tho 🤤",
    time: "Mon",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "Michael", text: "This brownie recipe is insane 🤤", time: "Mon" },
      { from: "You", text: "Send me the recipe!", time: "Mon" },
      { from: "Michael", text: "Already did, check your email", time: "Mon" },
      { from: "You", text: "Got it, thanks 👌", time: "Mon" }
    ]
  },
  {
    id: 8,
    name: "Work Group",
    message: "Deadline extended to Friday 📅",
    time: "Mon",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 3,
    messages: [
      { from: "Boss", text: "Deadline extended to Friday 📅", time: "Mon" },
      { from: "You", text: "Good news!", time: "Mon" },
      { from: "Sam", text: "Now I can relax a bit 😂", time: "Mon" },
      { from: "Jane", text: "Don’t relax too much 😅", time: "Mon" },
      { from: "Boss", text: "Focus team!", time: "Mon" }
    ]
  },
  {
    id: 9,
    name: "Gym Buddies",
    message: "Workout tomorrow 7am?",
    time: "Sun",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 0,
    messages: [
      { from: "Chris", text: "Workout tomorrow 7am?", time: "Sun" },
      { from: "You", text: "Yes, leg day 💪", time: "Sun" },
      { from: "Alex", text: "I’ll join", time: "Sun" },
      { from: "Sam", text: "Don’t skip cardio 🏃", time: "Sun" }
    ]
  },
  {
    id: 10,
    name: "Travel Plans",
    message: "Flight booked for 15th ✈️",
    time: "Sat",
    img: "https://via.placeholder.com/45",
    pinned: false,
    unread: 1,
    messages: [
      { from: "You", text: "Flight booked for 15th ✈️", time: "Sat" },
      { from: "Anna", text: "Hotel confirmed too 🏨", time: "Sat" },
      { from: "John", text: "I’ll arrange the car rental 🚗", time: "Sat" },
      { from: "You", text: "Perfect, all set!", time: "Sat" }
    ]
  }
];