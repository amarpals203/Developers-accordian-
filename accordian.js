 (document.querySelectorAll('.accord')).forEach(accord => {
    const icon = accord.querySelector('.icon');
    const ans = accord.querySelector('.ans');
    accord.addEventListener('click', () => 
         {
        icon.classList.toggle('active');
        ans.classList.toggle('active');
    });
 });  

   