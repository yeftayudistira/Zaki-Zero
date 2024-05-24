document.getElementById('scan-button').addEventListener('click', () => {
    const text = document.getElementById('input-text').value;
    classifyText(text);
});

document.getElementById('upload-button').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            document.getElementById('input-text').value = text;
            classifyText(text);
        };
        reader.readAsText(file);
    }
});

function classifyText(text) {
    // Mengirimkan permintaan AJAX ke endpoint Flask
    fetch('/classify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        // Memperbarui tampilan dengan hasil klasifikasi dari Flask
        document.getElementById('classification-result').textContent = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}