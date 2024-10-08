window.onload = function () {

    document.querySelectorAll('.item').forEach(item => {
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const quantityInput = item.querySelector('.quantity input');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');

        plusBtn.addEventListener('click', function () {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        minusBtn.addEventListener('click', function () {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
              quantityInput.value = currentValue - 1;
            }
        });

        deleteBtn.addEventListener('click', function () {
            item.remove();
        });

        likeBtn.addEventListener('click', function () {
            likeBtn.classList.toggle('is-active');
            });
    });
}
