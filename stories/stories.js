// Example stories data
const stories = [
  { name: "Alice", time: "2h ago" },
  { name: "Bob", time: "5h ago" },
  { name: "Charlie", time: "Yesterday" },
  { name: "Diana", time: "Yesterday" },
  { name: "Ethan", time: "2 days ago" }
];

function renderStories() {
  const container = document.getElementById("stories-list");
  container.innerHTML = "";

  stories.forEach(story => {
    const storyDiv = document.createElement("div");
    storyDiv.className = "story-bubble-wrapper";
    storyDiv.innerHTML = `
      <div class="story-bubble"></div>
      <p>${story.name}</p>
      <small>${story.time}</small>
    `;
    container.appendChild(storyDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderStories);
