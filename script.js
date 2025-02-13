document.addEventListener("DOMContentLoaded", function () {
    const seatsGrid = document.getElementById("seatsGrid");
    const zoomIn = document.getElementById("zoomIn");
    const zoomOut = document.getElementById("zoomOut");
    const bookButton = document.createElement("button");
    
    bookButton.textContent = "Book Selected Seats";
    bookButton.classList.add("book-button");
    document.body.appendChild(bookButton);
    
    const rows = 5;
    const cols = 10;
    
    for (let i = 0; i < rows * cols; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.addEventListener("click", function () {
            if (!seat.classList.contains("booked")) {
                seat.classList.toggle("selected");
            }
        });
        seatsGrid.appendChild(seat);
    }
    
    zoomIn.addEventListener("click", function () {
        seatsGrid.style.transform = "scale(1.2)";
    });
    
    zoomOut.addEventListener("click", function () {
        seatsGrid.style.transform = "scale(1)";
    });

    // Simulate some booked seats
    document.querySelectorAll(".seat").forEach((seat, index) => {
        if (index % 7 === 0) {
            seat.classList.add("booked");
        }
    });
    
    bookButton.addEventListener("click", function () {
        document.querySelectorAll(".seat.selected").forEach(seat => {
            seat.classList.remove("selected");
            seat.classList.add("booked");
        });
        alert("Seats booked successfully!");
    });
});
