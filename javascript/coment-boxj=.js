const commentTextBox = document.getElementById('comment-box');
const commentPost = document.getElementById('comment-push');
const postBtn = document.getElementById('post-btn');

postBtn.addEventListener('click', function () {

    const newComment = commentTextBox.value;

    const commentText = document.createElement('p');
    commentText.innerText = newComment;
    commentText.classList.add('comment');

    commentPost.appendChild(commentText);

    commentTextBox.value = '';

});
