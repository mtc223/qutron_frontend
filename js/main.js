document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('file');
    const fileLabel = document.querySelector('.file-upload-label span');
    
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', (e) => {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                fileLabel.textContent = fileName;
            } else {
                fileLabel.textContent = 'Drag & drop or click to upload';
            }
        });
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const file = fileInput.files[0];
            
            // Here you would typically send the data to your server
            console.log('Submission:', { email, file });
            
            // Add your API call here
            try {
                // Example API call (commented out)
                /*
                const formData = new FormData();
                formData.append('email', email);
                formData.append('file', file);
                
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                */
                
                // Show success message
                alert('File uploaded successfully!');
                form.reset();
                fileLabel.textContent = 'Drag & drop or click to upload';
                
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
});
