// Example recent calls data
const recentCalls = [
  { name: "Alice", time: "Yesterday, 5:30 PM", type: "Incoming" },
  { name: "Bob", time: "Today, 9:15 AM", type: "Missed" },
  { name: "Charlie", time: "Today, 11:00 AM", type: "Outgoing" },
  { name: "Diana", time: "Today, 1:45 PM", type: "Incoming" },
  { name: "Ethan", time: "Yesterday, 8:20 PM", type: "Missed" },
  { name: "Fiona", time: "Monday, 10:10 AM", type: "Outgoing" },
  { name: "George", time: "Monday, 7:30 PM", type: "Incoming" },
  { name: "Hannah", time: "Sunday, 6:05 PM", type: "Missed" },
  { name: "Ivan", time: "Sunday, 3:00 PM", type: "Outgoing" },
  { name: "Julia", time: "Saturday, 9:45 AM", type: "Incoming" },
  { name: "Kevin", time: "Saturday, 6:30 PM", type: "Outgoing" },
  { name: "Laura", time: "Friday, 4:50 PM", type: "Missed" },
  { name: "Michael", time: "Friday, 2:20 PM", type: "Incoming" },
  { name: "Nina", time: "Thursday, 11:15 AM", type: "Outgoing" },
  { name: "Oscar", time: "Thursday, 8:00 PM", type: "Missed" }
];

function renderCalls() {
  const list = document.getElementById("recent-calls");
  list.innerHTML = "";

  recentCalls.forEach(call => {
    const li = document.createElement("li");
    li.className = "call-item";
    li.innerHTML = `
      <strong>${call.name}</strong><br>
      <small>${call.type} • ${call.time}</small>
    `;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderCalls);
