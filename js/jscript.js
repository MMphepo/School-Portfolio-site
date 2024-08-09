function scrollDiv(direction) {
    const scrollableDiv = document.getElementById('scrollable-div');

    // Define the amount to scroll each time
    const scrollAmount = 50;

    if (direction === 'left') {
        scrollableDiv.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        scrollableDiv.scrollLeft += scrollAmount;
    }
}