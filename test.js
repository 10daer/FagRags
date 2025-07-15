// Function to dynamically adjust font size based on character length, starting from the template's fontSize
function adjustFontSize(overlay, baseFontSize) {
  const charCount = overlay.textContent.trim().length;
  const maxChars = MAX_PERSONALIZATION_CHARS; // Assuming this is 10
  const minScaleFactor = 0.67; // Minimum scale (e.g., 67% of base font size for max chars)

  // Linearly scale down from 100% (baseFontSize) to minScaleFactor (e.g., 67%) as char count goes from 1 to 10
  const scaleFactor =
    1 - ((charCount - 1) / (maxChars - 1)) * (1 - minScaleFactor);
  const adjustedFontSize = baseFontSize * scaleFactor;

  // Ensure the font size doesn't go below a reasonable minimum (e.g., 67% of base)
  overlay.style.fontSize = `${Math.max(
    adjustedFontSize,
    baseFontSize * minScaleFactor
  )}px`;
}

// Update applyTextOverlays to include font size adjustment with base font size from template
function applyTextOverlays() {
  const template = getCurrentTemplate();
  if (!template || !template.textFields) return;
  const imageContainer = document.querySelector("#productCustomizer");
  if (!imageContainer) return;

  const imageWrapper = imageContainer.querySelector(".image-wrapper");
  if (!imageWrapper) return;

  const existingValues = {};
  const existingOverlays = imageWrapper.querySelectorAll(".text-overlay");
  existingOverlays.forEach((overlay) => {
    const id = overlay.id.replace("overlay-", "");
    existingValues[id] = overlay.textContent;
    overlay.remove();
  });

  const inputs = document.querySelectorAll(".personalization-input");
  const inputsMap = {};
  inputs.forEach((input) => {
    const textId = input.getAttribute("data-text-id");
    inputsMap[textId] = input.value;
  });

  template.textFields.forEach((field) => {
    const textElement = document.createElement("div");
    textElement.id = `overlay-${field.id}`;

    let text = existingValues[field.id];
    if (text === undefined) {
      text = inputsMap[field.id] || field.content;
    }

    if (field.id === "text1") {
      textElement.className = "text-overlay parent";
    } else {
      textElement.className = "text-overlay sibling";
    }
    textElement.textContent = text;
    textElement.dataset.rotation = field.rotation;
    textElement.style.opacity = "0";
    textElement.style.transition = "opacity 0.3s ease-in-out";

    // Set initial font size from template
    const baseFontSize = field.fontSize ? parseFloat(field.fontSize) : 10; // Default to 10px if not specified
    textElement.style.fontSize = `${baseFontSize}px`;

    imageWrapper.appendChild(textElement);
    adjustFontSize(textElement, baseFontSize); // Adjust font size based on character length
  });

  positionTextElements();

  setTimeout(() => {
    const textOverlays = imageWrapper.querySelectorAll(".text-overlay");
    textOverlays.forEach((overlay) => {
      overlay.style.opacity = "1";
    });
  }, 50);
}

// Update positionTextElements to re-adjust font size on resize or reposition
function positionTextElements() {
  const containerWidth =
    imageContainer.querySelector(".image-wrapper").offsetWidth;
  const containerHeight = baseImage.offsetHeight;
  const currentTemplate = getCurrentTemplate();

  currentTemplate.textFields.forEach((field) => {
    const textElement = document.getElementById(`overlay-${field.id}`);
    if (!textElement) return;

    const xPos = (field.xPercent / 100) * containerWidth;
    const yPos = (field.yPercent / 100) * containerHeight;
    textElement.style.left = `${xPos}px`;
    textElement.style.top = `${yPos}px`;
    textElement.style.transform = `translate(-50%, -50%) rotate(${
      textElement.dataset.rotation || field.rotation
    }deg)`;

    // Re-adjust font size using the base font size from the template
    const baseFontSize = field.fontSize ? parseFloat(field.fontSize) : 10;
    adjustFontSize(textElement, baseFontSize);
  });
}

// Add event listener to adjust font size when personalization input changes
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".personalization-input");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      const textId = this.getAttribute("data-text-id");
      const overlay = document.getElementById(`overlay-${textId}`);
      if (overlay) {
        overlay.textContent = this.value.substring(
          0,
          MAX_PERSONALIZATION_CHARS
        );
        // Get the base font size from the template for this field
        const template = getCurrentTemplate();
        const field = template.textFields.find((f) => f.id === textId);
        const baseFontSize =
          field && field.fontSize ? parseFloat(field.fontSize) : 10;
        adjustFontSize(overlay, baseFontSize);
      }
    });
  });
});
