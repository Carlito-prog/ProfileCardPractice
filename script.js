let profile = {
  name: "Carl Verrier",
  age: 26,
  location: "New York",
};
stats = {
  followers: "10k",
  likes: "803K",
  photos: "2K",
};
document.getElementById("fullname").innerText = profile.name;
document.getElementById("age").innerText = profile.age;
document.getElementById("location").innerText = profile.location;
document.getElementById("followers").innerText = stats.followers;
document.getElementById("likes").innerText = stats.likes;
document.getElementById("photos").innerText = stats.photos;
document.getElementById("img").src =
  "https://ca.slack-edge.com/T01K1UH8RK2-U0231CWGZ1D-c6f156532faf-72";
