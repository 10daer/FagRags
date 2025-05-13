// Configuration object for the mug design
const template = {
  imageUrl: "/ref.webp",
  textFields: [
    {
      id: "text1",
      content: "Grandpa",
      xPercent: 36,
      yPercent: 52.5,
      rotation: 22,
    },
    {
      id: "text2",
      content: "Sarah",
      xPercent: 66,
      yPercent: 44,
      rotation: -16,
    },
    {
      id: "text3",
      content: "Kelvin",
      xPercent: 66,
      yPercent: 57.5,
      rotation: 6,
    },
  ],
};

// DOM elements
const baseImage = document.getElementById("baseImage");
const imageContainer = document.getElementById("imageContainer");
const controlsContainer = document.getElementById("controls");
const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");
const resultModal = document.getElementById("resultModal");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");
const closeModal = document.getElementById("closeModal");

// Set base image source
baseImage.src = template.imageUrl;

// Wait for image to load before positioning text elements
baseImage.addEventListener("load", () => {
  initializeTextFields();
  createInputFields();
  positionTextElements();

  // Set up window resize event listener
  window.addEventListener("resize", debounce(positionTextElements, 100));
});

// Create and position text overlays
function initializeTextFields() {
  template.textFields.forEach((field) => {
    const textElement = document.createElement("div");
    textElement.id = `overlay-${field.id}`;
    textElement.className = "text-overlay";
    textElement.textContent = field.content;
    textElement.dataset.rotation = field.rotation;
    imageContainer.querySelector(".image-wrapper").appendChild(textElement);
  });
}

// Position text elements based on current container size
function positionTextElements() {
  const containerWidth =
    imageContainer.querySelector(".image-wrapper").offsetWidth;
  const containerHeight = baseImage.offsetHeight;

  template.textFields.forEach((field) => {
    const textElement = document.getElementById(`overlay-${field.id}`);
    if (!textElement) return;

    // Calculate absolute position based on percentages
    const xPos = (field.xPercent / 100) * containerWidth;
    const yPos = (field.yPercent / 100) * containerHeight;

    // Apply position and rotation
    textElement.style.left = `${xPos}px`;
    textElement.style.top = `${yPos}px`;
    textElement.style.transform = `translate(-50%, -50%) rotate(${
      textElement.dataset.rotation || field.rotation
    }deg)`;
  });
}

// Create input fields for each text element
function createInputFields() {
  template.textFields.forEach((field) => {
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
      overlay.textContent = e.target.value;
    });

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    // Insert before the generate button
    const referenceNode =
      generateBtn.parentNode === controlsContainer
        ? generateBtn
        : controlsContainer.querySelector(".loading");

    controlsContainer.insertBefore(formGroup, referenceNode);
  });
}

// Handle generate button click
generateBtn.addEventListener("click", () => {
  loading.style.display = "block";

  // Show modal with skeleton loader
  resultModal.style.display = "flex";
  document.getElementById("skeletonLoader").style.display = "block";

  // Use html2canvas to create an image from the container
  html2canvas(imageContainer.querySelector(".image-wrapper"), {
    allowTaint: true,
    useCORS: true,
    scale: 2,
    backgroundColor: null,
  }).then((canvas) => {
    loading.style.display = "none";

    // Convert canvas to data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create new image
    const img = document.createElement("img");

    // Only replace skeleton when image is fully loaded
    img.onload = function () {
      // Hide skeleton loader
      document.getElementById("skeletonLoader").style.display = "none";

      // Display the result image
      resultImage.appendChild(img);
    };

    // Set image source after setting onload handler
    img.src = dataURL;

    // Set download link
    downloadLink.href = dataURL;

    // Log exported image dimensions
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

// Close modal when clicking outside the modal content
resultModal.addEventListener("click", (e) => {
  if (e.target === resultModal) {
    resultModal.style.display = "none";
  }
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
