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

const chatList  = document.getElementById("chat-list");
const searchInput = document.getElementById("search");
const chatScreen = document.createElement("div");
chatScreen.id = "chat-screen";
chatScreen.style.display = "none";
document.querySelector(".app").appendChild(chatScreen);
const headerEl = chatScreen.querySelector("header");
const messagesEl = chatScreen.querySelector(".messages");
const inputEl = chatScreen.querySelector("#message-input");


function renderChats(filter = "") {
  chatList.innerHTML = "";

  const pinned = chats.filter(c => c.pinned);
  const others = chats.filter(c => !c.pinned);

  if (pinned.length) {
    const title = document.createElement("div");
    title.className = "section-title";
    title.textContent = "Pinned";
    chatList.appendChild(title);
    pinned.forEach(chat => addChat(chat, filter || ""));
  }

  if (others.length) {
    const title = document.createElement("div");
    title.className = "section-title";
    title.textContent = "Chats";
    chatList.appendChild(title);
    others.forEach(chat => addChat(chat, filter || ""));
  }
}


//chat dom element 
function addChat(chat, filter = "") {
  // TEMP: disable filtering to confirm chats render
  // if (!chat.name.toLowerCase().includes(filter.toLowerCase())) return;

  const div = document.createElement("div");
  div.className = "chat";

  div.innerHTML = `
    <img src="${chat.img}" class="chat-img">
    <div class="chat-info">
      <h2>${chat.name}</h2>
      <p>${chat.message}</p>
    </div>
    <span class="time">${chat.time}</span>
    ${chat.unread ? `<span class="badge">${chat.unread}</span>` : ""}
  `;
   div.addEventListener("click", () => openChat(chat));
  chatList.appendChild(div);
}


// Helper to check if chat is a group chat
function isGroupChat(chat) {
  const participants = [...new Set(chat.messages.map(m => m.from))];
  return participants.length > 2; // more than "You" + 1 other
}

 // ... imports, renderChats, addChat, et

function isGroupChat(chat) {
  const participants = [...new Set(chat.messages.map(m => m.from))];
  return participants.length > 2;
}

chatScreen.innerHTML = `
  <header class="header"></header>
  <div class="messages"></div>
  <div class="chat-input">
  <button id="plus-btn">+</button>
    <input type="text" id="message-input" placeholder="Signal message">
    <button id="send-btn" onclick= "sendMessage()">➤</button>
  </div>
`;

function openChat(chat) {
  chatList.style.display = "none";
  searchInput.parentElement.style.display = "none";

  const group = isGroupChat(chat);

  chatScreen.style.display = "flex";
  const newChatBtn = document.getElementById("new-chat-btn");
  if (newChatBtn) newChatBtn.style.display = "none";
window.currentChatId = chat.id;

  chatScreen.innerHTML = `
    <header class="header">
      <button id="back-btn">⬅️</button>
      <img src="${chat.img}" class="avatar">
      <h1>${chat.name}</h1>
    </header>
    <div class="messages">
      ${chat.messages.map(m => `
        <div class="message ${m.from === "You" ? "right" : "left"}">
          ${group && m.from !== "You" ? `<div class="sender">${m.from}</div>` : ""}
          ${m.text}
          <span class="time">${m.time}</span>
        </div>
      `).join("")}
    </div>
    <div class="chat-input">
      <button id="plus-btn">+</button>
      <input type="text" id="message-input" placeholder="Signal message">
      <button id="send-btn">➤</button>
    </div>
  `;

  // Back button
  document.getElementById("back-btn").addEventListener("click", () => {
    chatScreen.style.display = "none";
    chatList.style.display = "block";
    searchInput.parentElement.style.display = "block";
    if (newChatBtn) newChatBtn.style.display = "block";
  });
    
    
  // Sending messages
  
  const sendBtn = document.getElementById("send-btn");
  const input = document.getElementById("message-input");
  const messagesContainer = chatScreen.querySelector(".messages");

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const newMessage = { from: "You", text, time: "Now" };

    const div = document.createElement("div");
    div.className = "message right";
    div.innerHTML = `
      ${newMessage.text}
      <span class="time">${newMessage.time}</span>
    `;
    messagesContainer.appendChild(div);

    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}


function setupNewChat() {
    if (!newChatBtn) { console.warn('New chat button not found'); return; }
    newChatBtn.addEventListener('click', () => {
      console.log('📝 New chat clicked');
      const name = prompt('Enter contact name:');
      if (!name) return;
      const newChat = { id: Date.now(), name, message: '', time: 'Now', img: 'https://via.placeholder.com/45', pinned: false, unread: 0, messages: [] };
      chats.unshift(newChat);
      renderChats();
    });
  }


document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'send-btn') { 
    const chatScreen = document.getElementById('chat-screen');
    const input = chatScreen && chatScreen.querySelector('#message-input');
    if (!input) return 
    sendMessageFromCurrentChat(input);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const chatScreen = document.getElementById('chat-screen');
    if (!chatScreen || chatScreen.style.display === 'none') return;
    const input = chatScreen.querySelector('#message-input');
    if (input && document.activeElement === input) {
      e.preventDefault();
      sendMessageFromCurrentChat(input);
    }
  }
});

function sendMessageFromCurrentChat(inputEl) {
  const text = inputEl.value.trim();
  if (!text) { return;
    const id = window.currentChatId;
    if (typeof id === 'undefined') {
      cosole.warn('No CurrentChildId set');
      return;
    }
    const chat = chats.find(c => c.id === id);
    if (!chat) {
   
    }
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  renderChats();
  setupSearch();
  setupNewChat();
})