document.getElementById("button").addEventListener("click", function() {
    document.getElementById('buttonLabel').textContent = 'Now click the box again!';
  });


  document.getElementById("box").addEventListener("click", function() {
    document.getElementById('buttonLabel').textContent = '';
  });
  
  