        // Menú móvil
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.toggle('active');
            
            // Cambiar ícono
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Formulario de contacto
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aquí normalmente se enviarían los datos a un servidor
            // Por ahora solo mostraremos una alerta
            alert(`¡Gracias ${name}! Hemos recibido tu mensaje. Te contactaremos en ${email} en breve.`);
            
            // Limpiar formulario
            document.getElementById('contactForm').reset();
        });
        
        // Smooth scrolling para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        const menuBtnIcon = document.querySelector('#mobileMenuBtn i');
                        menuBtnIcon.classList.remove('fa-times');
                        menuBtnIcon.classList.add('fa-bars');
                    }
                }
            });
        });