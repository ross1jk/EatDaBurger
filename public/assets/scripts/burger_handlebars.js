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
            console.log(newBurger);
            // Send POST request to create a new quote
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burger_name').value = '';
                console.log('Added a new burger!');
                location.reload();
            });
        });
    }

    // Update > Devoured or Not
    const changeBurgerBtns = document.querySelectorAll('.change-devoured');

    // Set up the event listener for the create button
    if (changeBurgerBtns) {
        changeBurgerBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-devoured');
                console.log(newDevour);
                const newDevourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log(`changed devour to: ${newDevour}`);
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                        console.log(response + " " + newDevourState);
                    }
                });
            });
        });
    }

});