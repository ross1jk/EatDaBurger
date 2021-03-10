document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    };

    // Create a New Burger
    const submitBurgerBtn = document.getElementById('addBurger');
    if (submitBurgerBtn) {
        submitBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            const newBurger = {
                burger_name: document.getElementById('burger_name').value.trim(),
            };

            // Send POST request to create a new quote
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burger_name').value = '';
                location.reload();
            });
        });
    }

    // Update > Devoured or Not
    const changeBurgerBtns = document.querySelectorAll('.change-devoured');

    if (changeBurgerBtns) {
        changeBurgerBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-devoured');
                
                const newDevourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    if (response.ok) {
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
                });
            });
        });
    }

});