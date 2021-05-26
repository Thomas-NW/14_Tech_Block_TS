// const url = window.location.pathname;
// const id = url.substring(url.lastIndexOf('/') + 1);

const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('COMMENT CLICK HAPPENING!!')
  
    // Collect values from the login form
    // const title = document.querySelector('#create-title').value.trim();
    const content = document.querySelector('#create-comment').value.trim();

    const post_id = document.querySelector('#create-comment').getAttribute('name')
    console.log('post_id', post_id)

    console.log('contentttttttt',content);    

    // if (title || content) {
      if (content) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        // body: JSON.stringify({ title, content }),
        body: JSON.stringify({ content: content, post_id: post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);;