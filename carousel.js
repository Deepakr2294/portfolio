let active = 1;
    const cardCount = $('.card-container').length;
    
    function prevSlide() {
      active = (active - 1 + cardCount) % cardCount;
      updateCarousel();
    }
    
    function nextSlide() {
      active = (active + 1) % cardCount;
      updateCarousel();
    }
    
    function updateCarousel() {
      $('.card-container').each(function(i) {
        const offset = ((active - i) % cardCount) / 3;
        const direction = Math.sign(active - i);
        const absOffset = Math.abs(active - i) / 3;
        const isActive = i === active ? 1 : 0;
        const opacity = Math.abs(active - i) <= 1 ? 1 : 0;
        
        $(this).css({
          '--offset': offset,
          '--direction': direction,
          '--abs-offset': absOffset,
          '--active': isActive,
          '--opacity': opacity
        });
      });
    }
    
    $(document).ready(function() {
      updateCarousel();
    });