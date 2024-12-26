// Gestion du formulaire de contact
export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Animation du bouton
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Envoi...';
            
            try {
                // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Message de succès
                showAlert('Message envoyé avec succès!', 'success');
                form.reset();
            } catch (error) {
                showAlert('Une erreur est survenue. Veuillez réessayer.', 'danger');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Envoyer';
            }
        });
    }
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alertDiv, form);
    
    setTimeout(() => alertDiv.remove(), 5000);
}