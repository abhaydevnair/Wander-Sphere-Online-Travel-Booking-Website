document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location");

  const packages = {
    munnar: {
      title: "Munnar, Kerala",
      duration: "3 Nights, 4 Days",
      price: "₹15,000",
      img: "https://source.unsplash.com/600x400/?munnar"
    },
    manali: {
      title: "Manali, Himachal",
      duration: "4 Nights, 5 Days",
      price: "₹18,000",
      img: "https://source.unsplash.com/600x400/?manali"
    },
    rajasthan: {
      title: "Rajasthan Tour",
      duration: "5 Nights, 6 Days",
      price: "₹20,000",
      img: "https://source.unsplash.com/600x400/?rajasthan"
    }
  };

  if (location && packages[location]) {
    const pack = packages[location];
    const section = document.getElementById("package-detail");
    section.innerHTML = `
      <img src="${pack.img}" alt="${pack.title}" style="width:100%; max-width:600px;" />
      <h2>${pack.title}</h2>
      <p><strong>Duration:</strong> ${pack.duration}</p>
      <p><strong>Price:</strong> ${pack.price}</p>
    `;
  }
});
