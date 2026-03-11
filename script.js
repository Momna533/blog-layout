// Simple search functionality for blog posts
const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".blog-card");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    posts.forEach((post) => {
      const title =
        post.querySelector(".blog-title")?.textContent.toLowerCase() || "";
      const excerpt =
        post.querySelector(".blog-excerpt")?.textContent.toLowerCase() || "";
      if (title.includes(query) || excerpt.includes(query)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
}
