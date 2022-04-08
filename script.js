
  const name = document.getElementById('nameF')
  const email = document.getElementById('email')
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')
  
  form.addEventListener('submit', (e) => {
     e.preventDefault();
  
      let messages = []
      if (nameF.value === '' || nameF.value == null) {
          messages.push('Name is required')
      }
  
      if (email.value.length <= 0) {
          messages.push('Email is required')
      }
  
      if (messages.length > 0) {
          errorElement.innerText = messages.join(', ')
      }
    else{
      alert("conatct information submitted successfully!");
      return;
    }
  })
    
  
    
    