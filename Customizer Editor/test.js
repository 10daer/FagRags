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
    textElement.setAttribute("translate", "no"); // Prevent translation of placeholder and value

    let text = existingValues[field.id];
    if (text === undefined) {
      text = inputsMap[field.id] || field.content;
    }
    const numberOfKids =
      parseInt(personalizationContainer.dataset.numberOfKids, 10) || 1;
    const currentColor = getSelectedColor().toLowerCase();
    const lastWord = currentColor.split(" ").pop(); // get the last word

    const color =
      lastWord === "white" || lastWord === "black" ? lastWord : "colored";

    const productTitle =
      document.querySelector("product-info").dataset.productTitle;

    if (field.id === "text1") {
      textElement.className = "text-overlay parent";
    } else {
      if (productTitle === "tools") {
        textElement.className = `text-overlay t-${color}-${field.id}-${numberOfKids}`;
      } else {
        textElement.className = `text-overlay ${color}-${field.id}-${numberOfKids}`;
      }
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
    if (field.id === "text1") {
      textElement.style.transform = `translate(-100%, -50%) rotate(${
        textElement.dataset.rotation || field.rotation
      }deg)`;
    } else {
      textElement.style.transform = `translate(0, -50%) rotate(${
        textElement.dataset.rotation || field.rotation
      }deg)`;
    }

    // Re-adjust font size using the base font size from the template
    const baseFontSize = field.fontSize ? parseFloat(field.fontSize) : 10;
    adjustFontSize(textElement, baseFontSize);
  });
}
