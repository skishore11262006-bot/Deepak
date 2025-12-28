document.addEventListener('DOMContentLoaded', ()=>{
  // year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(nav.classList.contains('open')));
    });
  }

  // simple contact form handler (prevents page reload and shows a message)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')||'';
      alert('Thanks, ' + name + '! This form is a demo. Replace with a real endpoint or mailto.');
      form.reset();
    });
  }
});
