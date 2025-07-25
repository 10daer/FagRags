// Configuration object for the mug design
const templates = {
  // Default configuration for 2 kids
  2: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 35,
        yPercent: 52,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 65,
        yPercent: 42.5,
        rotation: -16,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 65,
        yPercent: 56.5,
        rotation: 6,
      },
    ],
    colors: {
      "Ceramic Yellow": "2-yellow.webp",
      "Ceramic Pink": "2-pink.webp",
      "Ceramic Green": "2-green.webp",
      "Ceramic Red": "2-red.webp",
      "Ceramic Black": "2-black.webp",
      "Ceramic Blue": "2-blue.webp",
    },
  },
  // Configuration for 1 kid
  1: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 35,
        yPercent: 53,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 67,
        yPercent: 51,
        rotation: -5,
      },
    ],
    colors: {
      "Ceramic Yellow": "1-yellow.webp",
      "Ceramic Pink": "1-pink.webp",
      "Ceramic Green": "1-green.webp",
      "Ceramic Red": "1-red.webp",
      "Ceramic Black": "1-black.webp",
      "Ceramic Blue": "1-blue.webp",
    },
  },
  // Configuration for 3 kids
  3: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 34,
        yPercent: 51,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 61,
        yPercent: 37,
        rotation: -25,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 64,
        yPercent: 49.5,
        rotation: -5,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 59,
        yPercent: 63,
        rotation: 23,
      },
    ],
    colors: {
      "Ceramic Yellow": "3-yellow.webp",
      "Ceramic Pink": "3-pink.webp",
      "Ceramic Green": "3-green.webp",
      "Ceramic Red": "3-red.webp",
      "Ceramic Black": "3-black.webp",
      "Ceramic Blue": "3-blue.webp",
    },
  },
  // Configuration for 4 kids
  4: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36,
        yPercent: 51,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 57,
        yPercent: 30,
        rotation: -50,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 66,
        yPercent: 42.5,
        rotation: -20,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 66,
        yPercent: 54,
        rotation: 0,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 57,
        yPercent: 66,
        rotation: 45,
      },
    ],
    colors: {
      "Ceramic Yellow": "4-yellow.webp",
      "Ceramic Pink": "4-pink.webp",
      "Ceramic Green": "4-green.webp",
      "Ceramic Red": "4-red.webp",
      "Ceramic Black": "4-black.webp",
      "Ceramic Blue": "4-blue.webp",
    },
  },
  // Configuration for 5 kids
  5: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36,
        yPercent: 52,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 46.5,
        yPercent: 29,
        rotation: -80,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 62,
        yPercent: 38,
        rotation: -35,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 65,
        yPercent: 50,
        rotation: -10,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 60,
        yPercent: 61.5,
        rotation: 25,
      },
      {
        id: "text6",
        content: "Lily",
        xPercent: 48,
        yPercent: 69,
        rotation: 60,
      },
    ],
    colors: {
      "Ceramic Yellow": "5-yellow.webp",
      "Ceramic Pink": "5-pink.webp",
      "Ceramic Green": "5-green.webp",
      "Ceramic Red": "5-red.webp",
      "Ceramic Black": "5-black.webp",
      "Ceramic Blue": "5-blue.webp",
    },
  },
  // Configuration for 6 kids
  6: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36,
        yPercent: 51,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 43,
        yPercent: 28,
        rotation: -90,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 55,
        yPercent: 31,
        rotation: -70,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 65,
        yPercent: 41,
        rotation: -30,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 64,
        yPercent: 55,
        rotation: 25,
      },
      {
        id: "text6",
        content: "Lily",
        xPercent: 55,
        yPercent: 65,
        rotation: 50,
      },
      {
        id: "text7",
        content: "Noah",
        xPercent: 42.5,
        yPercent: 67,
        rotation: 86,
      },
    ],
    colors: {
      "Ceramic Yellow": "6-yellow.webp",
      "Ceramic Pink": "6-pink.webp",
      "Ceramic Green": "6-green.webp",
      "Ceramic Red": "6-red.webp",
      "Ceramic Black": "6-black.webp",
      "Ceramic Blue": "6-blue.webp",
    },
  },
};
// const templates = {
//   2: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 36,
//         yPercent: 52,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 67,
//         yPercent: 43,
//         rotation: -16,
//       },
//       {
//         id: "text3",
//         content: "Kelvin",
//         xPercent: 66,
//         yPercent: 56,
//         rotation: 6,
//       },
//     ],
//   },
//   // Configuration for 1 kid
//   1: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 36,
//         yPercent: 52,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 67,
//         yPercent: 50,
//         rotation: -5,
//       },
//     ],
//   },
//   // Configuration for 3 kids
//   3: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 36,
//         yPercent: 52,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 62,
//         yPercent: 38,
//         rotation: -25,
//       },
//       {
//         id: "text3",
//         content: "Kelvin",
//         xPercent: 65,
//         yPercent: 50,
//         rotation: -5,
//       },
//       {
//         id: "text4",
//         content: "Emma",
//         xPercent: 60,
//         yPercent: 63,
//         rotation: 23,
//       },
//     ],
//   },
//   // Configuration for 4 kids
//   4: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 37,
//         yPercent: 51,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 58,
//         yPercent: 31,
//         rotation: -50,
//       },
//       {
//         id: "text3",
//         content: "Kelvin",
//         xPercent: 67,
//         yPercent: 43,
//         rotation: -20,
//       },
//       {
//         id: "text4",
//         content: "Emma",
//         xPercent: 68,
//         yPercent: 54,
//         rotation: 0,
//       },
//       {
//         id: "text5",
//         content: "Jake",
//         xPercent: 59,
//         yPercent: 66,
//         rotation: 45,
//       },
//     ],
//   },
//   // Configuration for 5 kids
//   5: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 36,
//         yPercent: 51,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 46,
//         yPercent: 29,
//         rotation: -80,
//       },
//       {
//         id: "text3",
//         content: "Kelvin",
//         xPercent: 61,
//         yPercent: 37,
//         rotation: -35,
//       },
//       {
//         id: "text4",
//         content: "Emma",
//         xPercent: 63,
//         yPercent: 49,
//         rotation: -10,
//       },
//       {
//         id: "text5",
//         content: "Jake",
//         xPercent: 59,
//         yPercent: 59,
//         rotation: 25,
//       },
//       {
//         id: "text6",
//         content: "Lily",
//         xPercent: 47,
//         yPercent: 66,
//         rotation: 60,
//       },
//     ],
//   },
//   // Configuration for 6 kids
//   6: {
//     textFields: [
//       {
//         id: "text1",
//         content: "Grandpa",
//         xPercent: 37,
//         yPercent: 51,
//         rotation: 5,
//       },
//       {
//         id: "text2",
//         content: "Sarah",
//         xPercent: 45,
//         yPercent: 28,
//         rotation: -90,
//       },
//       {
//         id: "text3",
//         content: "Kelvin",
//         xPercent: 57,
//         yPercent: 30,
//         rotation: -70,
//       },
//       {
//         id: "text4",
//         content: "Emma",
//         xPercent: 67,
//         yPercent: 41,
//         rotation: -30,
//       },
//       {
//         id: "text5",
//         content: "Jake",
//         xPercent: 64,
//         yPercent: 55,
//         rotation: 25,
//       },
//       {
//         id: "text6",
//         content: "Lily",
//         xPercent: 56,
//         yPercent: 64.5,
//         rotation: 50,
//       },
//       {
//         id: "text7",
//         content: "Noah",
//         xPercent: 44,
//         yPercent: 68,
//         rotation: 86,
//       },
//     ],
//   },
// };

// Default values
let activeKidsCount = 1; // Start with 1 kids
let currentTemplate = templates[activeKidsCount];
let currentColor = "Ceramic Black"; // Default color

// DOM elements
const baseImage = document.getElementById("baseImage");
const imageContainer = document.getElementById("imageContainer");
const controlsContainer = document.getElementById("controls");
const textInputsContainer = document.getElementById("text-inputs");
const colorOptionsContainer = document.getElementById("color-options");
const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");
const resultModal = document.getElementById("resultModal");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");
const closeModal = document.getElementById("closeModal");

// Set base image source with default values
baseImage.src = `/${currentTemplate.colors[currentColor]}`;

// Get all kids options elements
const kidsOptions = document.querySelectorAll('input[name="kids"]');

// Wait for image to load before positioning text elements
baseImage.addEventListener("load", () => {
  initializeTextFields();
  createInputFields();
  positionTextElements();

  // Set up window resize event listener
  window.addEventListener("resize", debounce(positionTextElements, 100));
});

// Function to generate color options based on current template
// function updateColorOptions() {
//   // Clear existing color options
//   colorOptionsContainer.innerHTML = "";

//   // Create new color options based on current template
//   Object.keys(currentTemplate.colors).forEach((color, index) => {
//     const label = document.createElement("label");
//     label.setAttribute(
//       "for",
//       `color-${color.toLowerCase().replace(/\s+/g, "-")}`
//     );
//     label.className =
//       "option-item" + (color === currentColor ? " selected" : "");

//     const radioInput = document.createElement("input");
//     radioInput.type = "radio";
//     radioInput.name = "color";
//     radioInput.id = `color-${color.toLowerCase().replace(/\s+/g, "-")}`;
//     radioInput.value = color;
//     radioInput.checked = color === currentColor;

//     const labelText = document.createElement("span");
//     labelText.className = "option-text";
//     labelText.textContent = color;

//     // Add event listener to radio button
//     radioInput.addEventListener("change", function () {
//       // Update selected class
//       document
//         .querySelectorAll(".color-options .option-item")
//         .forEach((item) => {
//           item.classList.remove("selected");
//         });
//       this.closest(".option-item").classList.add("selected");

//       // Update current color
//       currentColor = this.value;

//       // Update image source with the appropriate image for this kid count and color
//       baseImage.src = `/${currentTemplate.colors[currentColor]}`;
//     });

//     label.appendChild(radioInput);
//     label.appendChild(labelText);
//     colorOptionsContainer.appendChild(label);
//   });
// }

function updateColorOptions() {
  // Clear existing color options
  colorOptionsContainer.innerHTML = "";

  // Create new color options based on current template
  Object.keys(currentTemplate.colors).forEach((color, index) => {
    const label = document.createElement("label");
    label.setAttribute(
      "for",
      `color-${color.toLowerCase().replace(/\s+/g, "-")}`
    );
    label.className =
      "option-item" + (color === currentColor ? " selected" : "");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "color";
    radioInput.id = `color-${color.toLowerCase().replace(/\s+/g, "-")}`;
    radioInput.value = color;
    radioInput.checked = color === currentColor;

    const labelText = document.createElement("span");
    labelText.className = "option-text";
    labelText.textContent = color;

    if (color.toLowerCase() === "ceramic black") {
      // Yellow color: allow interaction
      radioInput.disabled = false;

      radioInput.addEventListener("change", function () {
        // Update selected class
        document
          .querySelectorAll(".color-options .option-item")
          .forEach((item) => {
            item.classList.remove("selected");
          });
        this.closest(".option-item").classList.add("selected");

        // Update current color
        currentColor = this.value;

        // Update image source with the appropriate image for this kid count and color
        baseImage.src = `/${currentTemplate.colors[currentColor]}`;
      });
    } else {
      // Disable other colors
      radioInput.disabled = true;
      label.classList.add("disabled"); // Optional: style with CSS
    }

    label.appendChild(radioInput);
    label.appendChild(labelText);
    colorOptionsContainer.appendChild(label);
  });
}

// Create and position text overlays
function initializeTextFields() {
  // Clear existing text fields
  const imageWrapper = imageContainer.querySelector(".image-wrapper");
  const existingOverlays = imageWrapper.querySelectorAll(".text-overlay");
  existingOverlays.forEach((overlay) => overlay.remove());

  // Create new text fields based on current template
  currentTemplate.textFields.forEach((field) => {
    const textElement = document.createElement("div");
    textElement.id = `overlay-${field.id}`;
    textElement.className = "text-overlay";
    textElement.textContent = field.content;
    textElement.dataset.rotation = field.rotation;
    imageWrapper.appendChild(textElement);
  });
}

// Position text elements based on current container size
function positionTextElements() {
  const containerWidth =
    imageContainer.querySelector(".image-wrapper").offsetWidth;
  const containerHeight = baseImage.offsetHeight;

  currentTemplate.textFields.forEach((field) => {
    const textElement = document.getElementById(`overlay-${field.id}`);
    if (!textElement) return;

    // Calculate absolute position based on percentages
    const xPos = (field.xPercent / 100) * containerWidth;
    const yPos = (field.yPercent / 100) * containerHeight;

    // Apply position and rotation
    if (field.id === "text1") {
      textElement.style.fontSize = "17px";
    }
    textElement.style.left = `${xPos}px`;
    textElement.style.top = `${yPos}px`;
    textElement.style.transform = `translate(-50%, -50%) rotate(${
      textElement.dataset.rotation || field.rotation
    }deg)`;
  });
}

// Create input fields for each text element
function createInputFields() {
  // Clear existing input fields
  textInputsContainer.innerHTML = "";

  // Create new input fields based on current template
  currentTemplate.textFields.forEach((field) => {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";

    // Text input
    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = `Customize Text (${field.content})`;

    const input = document.createElement("input");
    input.type = "text";
    input.id = field.id;
    input.value = field.content;
    input.placeholder = "Enter your text";
    input.addEventListener("input", (e) => {
      const overlay = document.getElementById(`overlay-${field.id}`);
      if (overlay) {
        overlay.textContent = e.target.value;
      }
    });

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    textInputsContainer.appendChild(formGroup);
  });
}

// Handle generate button click
generateBtn.addEventListener("click", () => {
  loading.style.display = "block";

  // Show modal with skeleton loader
  resultModal.style.display = "flex";
  document.getElementById("skeletonLoader").style.display = "block";

  // Remove only the previously generated image
  const previousImg = resultImage.querySelector("img");
  if (previousImg) {
    previousImg.remove();
  }

  // Use html2canvas to create an image from the container
  html2canvas(imageContainer.querySelector(".image-wrapper"), {
    allowTaint: true,
    useCORS: true,
    scale: 2,
    backgroundColor: null,
  }).then((canvas) => {
    loading.style.display = "none";

    const dataURL = canvas.toDataURL("image/png");
    const img = document.createElement("img");

    img.onload = function () {
      document.getElementById("skeletonLoader").style.display = "none";
      resultImage.appendChild(img);
    };

    img.src = dataURL;
    downloadLink.href = dataURL;

    console.log("Exported Image Dimensions:", {
      width: canvas.width,
      height: canvas.height,
    });
  });
});

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
  resultModal.style.display = "none";
});

// Initialize color options based on default template
updateColorOptions();

// Handle kids option changes
kidsOptions.forEach((radio) => {
  radio.addEventListener("change", function () {
    // Update selected class
    document.querySelectorAll(".kids-options .option-item").forEach((item) => {
      item.classList.remove("selected");
    });
    this.closest(".option-item").classList.add("selected");

    // Update active kids count
    activeKidsCount = parseInt(this.value);

    // Update current template
    currentTemplate = templates[activeKidsCount];

    // Reset to default color for this template (or keep current if available)
    if (!currentTemplate.colors[currentColor]) {
      currentColor = "Ceramic Yellow"; // Default color if current is not available
    }

    // Update color options for this kid count
    updateColorOptions();

    // Update image
    baseImage.src = `/${currentTemplate.colors[currentColor]}`;

    // Reinitialize text fields and input fields
    initializeTextFields();
    createInputFields();
    positionTextElements();
  });
});

// Debounce function to limit how often a function runs
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
