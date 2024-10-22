let postCount = 1;

    function loadMorePosts() {
      // Create a new blog post element
      const newPost = document.createElement('div');
      newPost.classList.add('blog-post');

      // Generate dynamic content for the new post
      const postTitle = document.createElement('h2');
      postTitle.textContent = `New Blog Post ${++postCount}`;
      
      const postContent = document.createElement('p');
      postContent.textContent = `This is blog post number ${postCount} about mental health.`;

      // Append title and content to the new post
      newPost.appendChild(postTitle);
      newPost.appendChild(postContent);

      // Add the new post to the blog container
      const blogContainer = document.getElementById('blog-container');
      blogContainer.appendChild(newPost);
    }