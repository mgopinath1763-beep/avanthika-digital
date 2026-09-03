function orderNow() {
    alert("Thank you for choosing Avanthika Digital!");
}

function orderFrame(size) {
    let message = "I want to order a " + size + " photo frame.";

    let phoneNumber = "919876543210";

    let whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}