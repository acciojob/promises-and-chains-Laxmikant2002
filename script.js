//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('voteForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const btn = document.getElementById('btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (nameInput.value || '').trim();
        const age = Number(ageInput.value);

        if(!name || !ageInput.value) {
            alert('Please enter valid details.');
            return;
        }

        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';

        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Sorry, ${name}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then((msg) => alert(msg))
        .catch((err) => alert(err))
        .finally(() => {
            btn.disabled = false;
            btn.textContent = originalText;
        });
    });
});