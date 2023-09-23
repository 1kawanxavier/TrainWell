const imagens = [
    'img/gym-dynamic-clay.png', 
    'img/gym-dynamic-color.png', 
    'img/gym-dynamic-gradient.png', 
    'img/gym-dynamic-premium.png'
  ];
  
  const imgElement = document.getElementById('imagem');
  let currentIndex = 0;
  
  function changeImage() {
    imgElement.src = imagens[currentIndex];
    currentIndex = (currentIndex + 1) % imagens.length;
  }
  
  // Inicia a troca de imagens a cada 1 segundo (1000 milissegundos)
  setInterval(changeImage, 1000);
  