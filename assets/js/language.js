let translations = {}; // Variable global para almacenar las traducciones

function loadLanguage(lang) {
  fetch(`/assets/json/${lang}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      translations = data; // Asignar las traducciones cargadas a la variable global
      applyTranslation(data);
    })
    .catch(error => {
      console.error('Error al cargar los datos del idioma:', error);
    });
}

function applyTranslation(translations) {
  
  // Hero Section
  document.getElementById('hero-name').textContent = translations.hero.name;
  document.getElementById('hero-description').textContent = translations.hero.description;

  // About Section
  document.getElementById('about-title').textContent = translations.about.title;
  document.getElementById('about-description').textContent = translations.about.description;
  document.getElementById('about-role').textContent = translations.about.role;
  document.getElementById('about-role-description').textContent = translations.about.role_description;
  document.getElementById('about-birthdate').textContent = translations.about.birthdate;
  document.getElementById('about-website').textContent = translations.about.website;
  document.getElementById('about-phone').textContent = translations.about.phone;
  document.getElementById('about-city').textContent = translations.about.city;
  document.getElementById('about-age').textContent = translations.about.age;
  document.getElementById('about-degree').textContent = translations.about.degree;
  document.getElementById('about-email').textContent = translations.about.email;
  document.getElementById('about-availability').textContent = translations.about.availability;
  document.getElementById('about-experience').textContent = translations.about.experience;

  // Facts Section
  document.getElementById('facts-title').textContent = translations.facts.title;
  document.getElementById('facts-description').textContent = translations.facts.description;

  // Skills Section
  document.getElementById('skills-title').textContent = translations.skills.title;
  document.getElementById('skills-description').textContent = translations.skills.description;
  document.getElementById('front-end-skill').textContent = translations.skills.front_end;
  document.getElementById('back-end-skill').textContent = translations.skills.back_end;
  document.getElementById('teaching-skill').textContent = translations.skills.teaching;
  document.getElementById('angular-skill').textContent = translations.skills.angular;
  document.getElementById('c-sharp-skill').textContent = translations.skills.c_sharp;
  document.getElementById('python-skill').textContent = translations.skills.python;

  // Resume Section
  document.getElementById('resume-title').textContent = translations.resume.title;
  document.getElementById('description').textContent = translations.resume.description;
  document.getElementById('summary-title').textContent = translations.resume.summary_title;
  document.getElementById('name').textContent = translations.resume.name;
  document.getElementById('resume-summary').textContent = translations.resume.summary;
  document.getElementById('city').textContent = translations.resume.city;
  document.getElementById('phone').textContent = translations.resume.phone;
  document.getElementById('email').textContent = translations.resume.email;
  document.getElementById('education-title').textContent = translations.resume.education_title;
  document.getElementById('engineering').textContent = translations.resume.engineering_title;
  document.getElementById('engineering-date').textContent = translations.resume.engineering_date;
  document.getElementById('engineering-location').textContent = translations.resume.engineering_location;
  document.getElementById('engineering-description').textContent = translations.resume.engineering_description;
  document.getElementById('analyst-programmer').textContent = translations.resume.analyst_programmer_title;
  document.getElementById('analyst-programmer-date').textContent = translations.resume.analyst_programmer_date;
  document.getElementById('analyst-programmer-location').textContent = translations.resume.analyst_programmer_location;
  document.getElementById('analyst-programmer-description').textContent = translations.resume.analyst_programmer_description;
  document.getElementById('professional-experience-title').textContent = translations.resume.professional_experience_title;
  document.getElementById('full-stack-developer-title').textContent = translations.resume.full_stack_developer_title;
  document.getElementById('full-stack-developer-date').textContent = translations.resume.full_stack_developer_date;
  document.getElementById('full-stack-developer-location').textContent = translations.resume.full_stack_developer_location;
  document.getElementById('full-stack-developer-description-1').textContent = translations.resume.full_stack_developer_description_1;
  document.getElementById('full-stack-developer-description-2').textContent = translations.resume.full_stack_developer_description_2;
  document.getElementById('full-stack-developer-description-3').textContent = translations.resume.full_stack_developer_description_3;
  document.getElementById('it-teacher-title').textContent = translations.resume.it_teacher_title;
  document.getElementById('it-teacher-date').textContent = translations.resume.it_teacher_date;
  document.getElementById('it-teacher-location').textContent = translations.resume.it_teacher_location;
  document.getElementById('it-teacher-description-1').textContent = translations.resume.it_teacher_description_1;
  document.getElementById('it-teacher-description-2').textContent = translations.resume.it_teacher_description_2;
  document.getElementById('it-teacher-description-3').textContent = translations.resume.it_teacher_description_3;

   // Services Section
   document.getElementById('services-title').textContent = translations.services.title;
   document.getElementById('services-description').textContent = translations.services.description;
   document.getElementById('web-development-title').textContent = translations.services.web_development;
   document.getElementById('web-development-description').textContent = translations.services.web_development_description;
   document.getElementById('ui-ux-design-title').textContent = translations.services.ui_ux_design;
   document.getElementById('ui-ux-design-description').textContent = translations.services.ui_ux_design_description;
   document.getElementById('performance-optimization-title').textContent = translations.services.performance_optimization;
   document.getElementById('performance-optimization-description').textContent = translations.services.performance_optimization_description;
   document.getElementById('app-development-title').textContent = translations.services.app_development;
   document.getElementById('app-development-description').textContent = translations.services.app_development_description;
   document.getElementById('ui-ux-design-2-title').textContent = translations.services.ui_ux_design_2;
   document.getElementById('ui-ux-design-2-description').textContent = translations.services.ui_ux_design_2_description;
   document.getElementById('tech-consulting-title').textContent = translations.services.tech_consulting;
   document.getElementById('tech-consulting-description').textContent = translations.services.tech_consulting_description;
 
   // Contact Section
   document.getElementById('contact-title').textContent = translations.contact.title;
   document.getElementById('contact-address-title').textContent = translations.contact.address_title;
   document.getElementById('contact-address').textContent = translations.contact.address;
   document.getElementById('contact-email-title').textContent = translations.contact.email_title;
   document.getElementById('contact-email').textContent = translations.contact.email;
   document.getElementById('contact-phone-title').textContent = translations.contact.phone_title;
   document.getElementById('contact-phone').textContent = translations.contact.phone;
   document.getElementById('contact-name').placeholder = translations.contact.name_placeholder;
   document.getElementById('contact-email-input').placeholder = translations.contact.email_placeholder;
   document.getElementById('contact-message').placeholder = translations.contact.message_placeholder;
   document.getElementById('contact-send-button').textContent = translations.contact.send_button_text;
 
  // Footer
  document.getElementById('footer-name').textContent = translations.footer.name;
  document.getElementById('footer-address').textContent = translations.footer.address;
  document.getElementById('footer-email').textContent = translations.footer.email;
  document.getElementById('footer-phone').textContent = translations.footer.phone;
}

  
  function changeLanguage(selector) {
    loadLanguage(selector.value);
  }
  document.addEventListener('DOMContentLoaded', function() {
    // loadLanguage('es'); // Cambiar 'en' por el idioma predeterminado
  });
    