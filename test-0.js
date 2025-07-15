// Configuration object for the mug design
const templates = {
  // Default configuration for 2 kids
  2: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36,
        yPercent: 53,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 66,
        yPercent: 44.5,
        rotation: -16,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 66,
        yPercent: 57,
        rotation: 6,
      },
    ],
  },
  // Configuration for 1 kid
  1: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36.5,
        yPercent: 55,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 67,
        yPercent: 52.5,
        rotation: -5,
      },
    ],
  },
  // Configuration for 3 kids
  3: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 36,
        yPercent: 54,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 64,
        yPercent: 38.5,
        rotation: -24,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 67.7,
        yPercent: 51.5,
        rotation: -5,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 62.5,
        yPercent: 66,
        rotation: 23,
      },
    ],
  },
  // Configuration for 4 kids
  4: {
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
        xPercent: 59,
        yPercent: 31,
        rotation: -50,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 68.5,
        yPercent: 43,
        rotation: -20,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 68,
        yPercent: 55,
        rotation: 5,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 59,
        yPercent: 67,
        rotation: 45,
      },
    ],
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
        xPercent: 48,
        yPercent: 29,
        rotation: -80,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 63,
        yPercent: 38,
        rotation: -35,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 66,
        yPercent: 50,
        rotation: -10,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 62,
        yPercent: 61,
        rotation: 25,
      },
      {
        id: "text6",
        content: "Lily",
        xPercent: 49.5,
        yPercent: 69,
        rotation: 60,
      },
    ],
  },
  // Configuration for 6 kids
  6: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 37,
        yPercent: 52,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 44,
        yPercent: 30,
        rotation: -90,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 57,
        yPercent: 31,
        rotation: -70,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 67,
        yPercent: 42,
        rotation: -30,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 65,
        yPercent: 56,
        rotation: 25,
      },
      {
        id: "text6",
        content: "Lily",
        xPercent: 56,
        yPercent: 66,
        rotation: 50,
      },
      {
        id: "text7",
        content: "Noah",
        xPercent: 44,
        yPercent: 70,
        rotation: 86,
      },
    ],
  },
};

const personalTemplates = {
  2: {
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
        xPercent: 67,
        yPercent: 43,
        rotation: -16,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 66,
        yPercent: 56,
        rotation: 6,
      },
    ],
  },
  // Configuration for 1 kid
  1: {
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
        xPercent: 67,
        yPercent: 50,
        rotation: -5,
      },
    ],
  },
  // Configuration for 3 kids
  3: {
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
        xPercent: 62,
        yPercent: 38,
        rotation: -25,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 65,
        yPercent: 50,
        rotation: -5,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 60,
        yPercent: 63,
        rotation: 23,
      },
    ],
  },
  // Configuration for 4 kids
  4: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 37,
        yPercent: 51,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 58,
        yPercent: 31,
        rotation: -50,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 67,
        yPercent: 43,
        rotation: -20,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 68,
        yPercent: 54,
        rotation: 0,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 59,
        yPercent: 66,
        rotation: 45,
      },
    ],
  },
  // Configuration for 5 kids
  5: {
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
        xPercent: 46,
        yPercent: 29,
        rotation: -80,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 61,
        yPercent: 37,
        rotation: -35,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 63,
        yPercent: 49,
        rotation: -10,
      },
      {
        id: "text5",
        content: "Jake",
        xPercent: 59,
        yPercent: 59,
        rotation: 25,
      },
      {
        id: "text6",
        content: "Lily",
        xPercent: 47,
        yPercent: 66,
        rotation: 60,
      },
    ],
  },
  // Configuration for 6 kids
  6: {
    textFields: [
      {
        id: "text1",
        content: "Grandpa",
        xPercent: 37,
        yPercent: 51,
        rotation: 5,
      },
      {
        id: "text2",
        content: "Sarah",
        xPercent: 45,
        yPercent: 28,
        rotation: -90,
      },
      {
        id: "text3",
        content: "Kelvin",
        xPercent: 57,
        yPercent: 30,
        rotation: -70,
      },
      {
        id: "text4",
        content: "Emma",
        xPercent: 67,
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
        xPercent: 56,
        yPercent: 64.5,
        rotation: 50,
      },
      {
        id: "text7",
        content: "Noah",
        xPercent: 44,
        yPercent: 68,
        rotation: 86,
      },
    ],
  },
};

// Add this configuration section at the top of your script
const apiConfig = {
  uploadEndpoint:
    "https://farsdag-backend-production.onrender.com/api/generate-images",
  // uploadEndpoint:"https://3e24-2c0f-f5c0-b00-1fd-5564-b6b8-eb3f-6911.ngrok-free.app/api/generate-images",
  requestTimeout: 30000, // Timeout for API requests in milliseconds
};

// Add this global constant at the beginning of the script
const MAX_PERSONALIZATION_CHARS = 12;

document.addEventListener("DOMContentLoaded", function () {
  // -- COMMON ELEMENTS & INITIALIZATION --
  const productForm = document.querySelector(
    'form.form[method="post"][action="/cart/add"][data-type="add-to-cart-form"]'
  );

  const personalizationContainer = document.querySelector(
    ".product-personalization"
  );
  const sectionId = personalizationContainer.dataset.sectionId;
  const shopifyButton = document.getElementById(
    `ProductSubmitButton-${sectionId}`
  );
  const personalizationFields = document.getElementById(
    "personalization-fields"
  );
  const inputsContainer = document.getElementById(
    "personalization-inputs-container"
  );
  const galleryWrapper = document.querySelector(
    ".product-gallery__media-wrapper"
  );
  const customizerWrapper = document.querySelector(
    ".product-customizer__media-wrapper"
  );
  const customizerImage = document.querySelector(
    "#productCustomizer .base-image"
  );
  const canvas = document.querySelector("#productCustomizer canvas");

  // Early exit if critical elements are missing
  if (!productForm || !personalizationContainer) return;

  // -- PERSONALIZATION DATA INITIALIZATION --
  personalizationContainer.dataset.numberOfKids = getInitialNumberOfKids();
  personalizationContainer.dataset.selectedColor = getSelectedColor();

  // Store initial image data if customizer exists
  let defaultSrc, defaultSrcset;
  if (customizerImage) {
    defaultSrc = customizerImage.src;
    defaultSrcset = customizerImage.srcset;
  }

  // Load variant data from JSON
  let variantData = {};
  const variantJson = document.querySelector('[id^="VariantJSON-"]');
  if (variantJson) {
    try {
      variantData = JSON.parse(variantJson.textContent);
    } catch (e) {
      console.error("Error parsing variant JSON:", e);
    }
  }

  // -- UTILITY FUNCTIONS --

  // Function to get initial number of kids from product options at page load
  function getInitialNumberOfKids() {
    // Check radio buttons
    const selectedRadio = document.querySelector(
      'input[name="Number of Kids"]:checked'
    );
    if (selectedRadio) {
      const match = selectedRadio.value.match(/(\d+)/);
      if (match) return parseInt(match[1], 10);
    }

    // Check for other types of selectors
    const possibleSelectors = [
      '.single-option-selector[data-option="Number of Kids"]',
      '[data-option-index="Number of Kids"] .selected',
      ".number-of-kids-selector .active",
      ".number-of-kids-selector button.active",
      '.number-of-kids-selector button[aria-pressed="true"]',
      ".single-option-selector--kids .selected",
      '[data-index="option2"] .swatch-element.active input',
      '[data-option="Number of Kids"] .active',
      '.number_of_kids input[type="radio"]:checked',
    ];

    for (const selector of possibleSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const match = element.value
          ? element.value.match(/(\d+)/)
          : element.textContent.match(/(\d+)/);

        if (match) return parseInt(match[1], 10);
      }
    }

    // Default value if no selection found
    return 1;
  }

  // Function to get the selected color
  function getSelectedColor() {
    // Find the checked color radio input whose name includes "Color"
    const colorInput = document.querySelector(
      'input[type="radio"][name*="Color"]:checked'
    );

    if (colorInput) {
      return colorInput.value;
    }

    // Default if no selection is found
    return "Ceramic Yellow";
  }

  // Function to find matching variant data
  function getVariantData(variantId) {
    if (!variantData.variants) return null;
    return variantData.variants.find((v) => v.id == variantId);
  }

  // Function to get the current template based on number of kids
  function getCurrentTemplate() {
    const numberOfKids = personalizationContainer.dataset.numberOfKids
      ? parseInt(personalizationContainer.dataset.numberOfKids, 10)
      : 1;

    const productInfo = document.querySelector("product-info");
    const isPersonalized = productInfo?.dataset.url?.startsWith(
      "/products/personalized"
    );

    const templateSet = isPersonalized ? personalTemplates : templates;

    return templateSet[numberOfKids] || templateSet[1];
  }

  // -- PERSONALIZATION FIELD FUNCTIONS --
  // Also update updatePersonalizationData to respect the character limit
  function updatePersonalizationData() {
    const personalizationData = {
      kids: [],
      color: personalizationContainer.dataset.selectedColor || "Ceramic Yellow",
    };

    const inputs = document.querySelectorAll(".personalization-input");
    inputs.forEach((input) => {
      // Ensure value doesn't exceed max length
      const value = input.value.substring(0, MAX_PERSONALIZATION_CHARS);

      personalizationData.kids.push({
        index: parseInt(input.getAttribute("data-kid-index"), 10) + 1,
        textId: input.getAttribute("data-text-id"),
        name: value,
      });
    });

    let hiddenInput = document.getElementById("personalization-data");
    if (!hiddenInput) {
      hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.id = "personalization-data";
      hiddenInput.name = "properties[Personalization]";
      if (productForm) {
        productForm.appendChild(hiddenInput);
      }
    }

    hiddenInput.value = JSON.stringify(personalizationData);
  }

  // -- IMAGE CUSTOMIZER FUNCTIONS --

  // Function to update customizer image when variant changes
  function updateCustomizerImage(variantId) {
    if (!customizerImage) return;

    // Store current input values before updating
    const currentValues = {};
    const inputs = document.querySelectorAll(".personalization-input");
    inputs.forEach((input) => {
      const textId = input.getAttribute("data-text-id");
      currentValues[textId] = input.value;
    });

    // Method 1: Try to find from variant data
    const variant = getVariantData(variantId);
    if (variant && variant.featured_image) {
      customizerImage.src = variant.featured_image;
      // Clear srcset as we're using a direct URL
      customizerImage.removeAttribute("srcset");
      return;
    }

    // Method 2: Try to find from gallery images
    if (variant && variant.featured_media_id) {
      const mediaId = variant.featured_media_id;
      const galleryImage = document.querySelector(
        `[data-media-id="${mediaId}"] img`
      );
      if (galleryImage) {
        customizerImage.src = galleryImage.src;
        if (galleryImage.srcset) {
          customizerImage.srcset = galleryImage.srcset;
        }
        return;
      }
    }

    // Method 3: Try to find from the gallery viewer
    const selectedSlide = document.querySelector(
      ".product__media-item.is-active img"
    );
    if (selectedSlide) {
      customizerImage.src = selectedSlide.src;
      if (selectedSlide.srcset) {
        customizerImage.srcset = selectedSlide.srcset;
      }
      return;
    }

    // If no match was found, revert to default
    customizerImage.src = defaultSrc;
    customizerImage.srcset = defaultSrcset;
  }

  // Then modify the generateInputFields function to add character validation
  function generateInputFields() {
    if (!inputsContainer) return;

    // Store current input values before clearing
    const currentValues = {};
    const existingInputs = document.querySelectorAll(".personalization-input");
    existingInputs.forEach((input) => {
      const textId = input.getAttribute("data-text-id");
      currentValues[textId] = input.value;
    });

    // Clear existing inputs
    inputsContainer.innerHTML = "";

    // Remove any previous error message
    const existingErrorMsg = document.querySelector(
      ".personalization-char-limit-error"
    );
    if (existingErrorMsg) existingErrorMsg.remove();

    // Get number of kids from data attribute
    const numberOfKids = personalizationContainer.dataset.numberOfKids
      ? parseInt(personalizationContainer.dataset.numberOfKids, 10)
      : 1;

    // Get the template for this number of kids
    const template = templates[numberOfKids] || templates[1];

    // Ordinal suffixes for better label readability
    const ordinals = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

    // Loop through all fields in the template, including the first one
    for (let i = 0; i < template.textFields.length; i++) {
      const textField = template.textFields[i];

      // Create field container with Shopify styling
      const fieldContainer = document.createElement("div");
      fieldContainer.className = "personalization-field";

      // Create label with Shopify styling
      const label = document.createElement("label");
      label.className = "personlaization-form__label";
      label.setAttribute("for", `personalization-input-${i}`);

      if (i === 0) {
        label.textContent = "Name for Grandpa:";
      } else {
        const ordinal = ordinals[i - 1] || `${i + 1}th`;
        label.textContent = `Name for ${ordinal} Kid:`;
      }

      // Create input with Shopify styling
      const input = document.createElement("input");
      input.type = "text";
      input.id = `personalization-input-${i}`;
      input.className = "personalization-field__input personalization-input";
      input.setAttribute("data-kid-index", i);
      input.setAttribute("data-text-id", textField.id);
      input.setAttribute("placeholder", textField.content);
      input.setAttribute("maxlength", MAX_PERSONALIZATION_CHARS);

      // Use saved value if exists, otherwise use template content
      input.value =
        currentValues[textField.id] !== undefined
          ? currentValues[textField.id]
          : textField.content;

      // Truncate if value is longer than max allowed
      if (input.value.length > MAX_PERSONALIZATION_CHARS) {
        input.value = input.value.substring(0, MAX_PERSONALIZATION_CHARS);
      }

      input.addEventListener("input", function (e) {
        // Check if input exceeds character limit
        if (e.target.value.length === MAX_PERSONALIZATION_CHARS) {
          e.target.value = e.target.value.substring(
            0,
            MAX_PERSONALIZATION_CHARS
          );
          showCharLimitError();
        } else {
          // If within limits, hide error message if it exists
          hideCharLimitError();
        }

        updatePersonalizationData();
        const overlay = document.getElementById(`overlay-${textField.id}`);
        if (overlay) {
          overlay.textContent = e.target.value;
        }
      });

      fieldContainer.appendChild(label);
      fieldContainer.appendChild(input);
      inputsContainer.appendChild(fieldContainer);
    }

    // Update data after generating fields
    updatePersonalizationData();
  }

  // Add these new functions for handling the character limit error message
  function showCharLimitError() {
    // Only create error message if it doesn't exist
    if (!document.querySelector(".personalization-char-limit-error")) {
      const errorMsg = document.createElement("div");
      errorMsg.className = "personalization-char-limit-error";
      errorMsg.textContent = `Maximum ${MAX_PERSONALIZATION_CHARS} characters allowed.`;
      errorMsg.style.color = "#cc0000";
      errorMsg.style.fontSize = "0.8rem";
      errorMsg.style.marginTop = "5px";

      // Append to the bottom of input container
      inputsContainer.appendChild(errorMsg);
    }
  }

  function hideCharLimitError() {
    // Check if any input is currently over the limit
    const inputs = document.querySelectorAll(".personalization-input");
    const anyOverLimit = Array.from(inputs).some(
      (input) => input.value.length > MAX_PERSONALIZATION_CHARS
    );

    // Only remove error message if no inputs are over the limit
    if (!anyOverLimit) {
      const errorMsg = document.querySelector(
        ".personalization-char-limit-error"
      );
      if (errorMsg) errorMsg.remove();
    }
  }

  // Apply text overlays to the canvas based on template positions
  function applyTextOverlays() {
    const stack = new Error().stack;
    console.log(stack);

    // Get current template
    const template = getCurrentTemplate();
    if (!template || !template.textFields) return;

    // Find image container and wrapper
    const imageContainer = document.querySelector("#productCustomizer");
    if (!imageContainer) return;

    const imageWrapper = imageContainer.querySelector(".image-wrapper");
    if (!imageWrapper) return;

    // Store existing overlay values before clearing
    const existingValues = {};
    const existingOverlays = imageWrapper.querySelectorAll(".text-overlay");
    existingOverlays.forEach((overlay) => {
      const id = overlay.id.replace("overlay-", "");
      existingValues[id] = overlay.textContent;
      overlay.remove();
    });

    // Get all personalization inputs
    const inputs = document.querySelectorAll(".personalization-input");
    const inputsMap = {};

    // Create a map of text-id to input value for easier lookup
    inputs.forEach((input) => {
      const textId = input.getAttribute("data-text-id");
      inputsMap[textId] = input.value;
    });

    // Apply each text field from the template
    template.textFields.forEach((field) => {
      const textElement = document.createElement("div");
      textElement.id = `overlay-${field.id}`;

      // Determine text content with this priority:
      // 1. Existing overlay value (if editing was done)
      // 2. Current input value
      // 3. Default template value
      let text = existingValues[field.id];
      if (text === undefined) {
        text = inputsMap[field.id] || field.content;
      }

      // Set text properties
      textElement.className = "text-overlay";
      if (field.id === "text1") {
        textElement.dataset.fontSize = "15px";
      }
      textElement.textContent = text;
      textElement.dataset.rotation = field.rotation;
      imageWrapper.appendChild(textElement);
    });

    // Position the text elements
    positionTextElements();
  }

  // Add this function to maintain the state after variant change
  function preservePersonalizationState() {
    // Store current values from overlays
    const overlayValues = {};
    const overlays = document.querySelectorAll(".text-overlay");
    overlays.forEach((overlay) => {
      const id = overlay.id.replace("overlay-", "");
      overlayValues[id] = overlay.textContent;
    });

    // Update inputs with these values
    const inputs = document.querySelectorAll(".personalization-input");
    inputs.forEach((input) => {
      const textId = input.getAttribute("data-text-id");
      if (overlayValues[textId] !== undefined) {
        input.value = overlayValues[textId];
      }
    });

    updatePersonalizationData();
  }

  // Update the canvas with the current image and personalization
  function updateCanvas() {
    if (!canvas || !customizerImage) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // Apply text overlays based on personalization inputs and template
      applyTextOverlays();
    };

    img.src = customizerImage.src;
  }

  // Position text elements based on current container size
  function positionTextElements() {
    const containerWidth =
      imageContainer.querySelector(".image-wrapper").offsetWidth;
    const containerHeight = baseImage.offsetHeight;
    const currentTemplate = getCurrentTemplate();

    const blackIsSelected = getSelectedColor() === "Ceramic Black";

    currentTemplate.textFields.forEach((field) => {
      const textElement = document.getElementById(`overlay-${field.id}`);
      if (!textElement) return;

      // Calculate absolute position based on percentages
      const xPos =
        (blackIsSelected
          ? (field.xPercent - 1.6) / 100
          : field.xPercent / 100) * containerWidth;
      const yPos =
        (blackIsSelected
          ? (field.yPercent - 1.6) / 100
          : field.yPercent / 100) * containerHeight;

      // Apply position and rotation
      textElement.style.left = `${xPos}px`;
      textElement.style.top = `${yPos}px`;
      textElement.style.transform = `translate(-50%, -50%) rotate(${
        textElement.dataset.rotation || field.rotation
      }deg)`;
    });
  }

  function hideShopifyAddToCart() {
    if (shopifyButton) {
      shopifyButton.style.display = "none";
    }
  }

  function showShopifyAddToCart() {
    if (shopifyButton) {
      shopifyButton.style.display = "";
    }
  }

  function triggerShopifyAddToCart() {
    if (shopifyButton) {
      shopifyButton.click();
    }
  }

  function showMessage(message, type = "error") {
    hideMessage();

    const Container = document.createElement("div");
    Container.className = `personalization-message personalization-message--${type}`;

    const icon = document.createElement("span");
    icon.className = "personalization-message__icon";
    icon.textContent = type === "error" ? "⚠️" : "ℹ️";

    const messageText = document.createElement("span");
    messageText.className = "personalization-message__text";
    messageText.textContent = message;

    Container.appendChild(icon);
    Container.appendChild(messageText);

    const insertLocation =
      personalizationFields ||
      document.querySelector(".personalization-button-container") ||
      document.querySelector(".product-form");

    if (insertLocation) {
      insertLocation.parentNode.insertBefore(Container, insertLocation);
    }

    if (type !== "error") {
      setTimeout(hideErrorMessage, 5000);
    }
  }

  function hideMessage() {
    const existingMessage = document.querySelector(".personalization-message");
    if (existingMessage) {
      existingMessage.remove();
    }
  }

  // Updated function to save personalization, send data to backend, and add to cart
  async function saveAndAddToCart() {
    // Show loading indicator if exists
    const loading = document.querySelector(".loading-indicator");
    if (loading) loading.style.display = "flex";

    personalizationFields.style.display = "none";

    // Remove the button container
    const buttonContainer = document.querySelector(
      ".personalization-button-container"
    );
    if (buttonContainer) buttonContainer.remove();

    // Collect design configuration and image source
    const imageWrapper = document.querySelector(
      "#productCustomizer .image-wrapper"
    );
    const imageElement = imageWrapper.querySelector("img");
    const imageSrc = imageElement ? imageElement.src : null;

    if (!imageSrc) {
      console.error("No image source found in .image-wrapper");
      showMessage("No image found for preview generation.");
      if (loading) loading.style.display = "none";
      return;
    }
    try {
      // Send personalization data to backend
      const data = await sendPersonalizationDataAndAddToCart(imageSrc);

      // Success handling
      if (data && data.print_file_url && data.preview_file_url) {
        // Store the print file and preview URLs in the form
        setProductFormFileUrls(data.print_file_url, data.preview_file_url);

        // Add to cart
        triggerShopifyAddToCart();
      } else {
        console.error(
          "Invalid response format, missing print_file_url or preview_url:",
          data
        );
        showMessage("Error saving personalization. Please try again.");
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error during personalization save:", error);
      showMessage("Error saving personalization. Please try again.");
    } finally {
      // Hide loading indicator
      const loading = document.querySelector(".loading-indicator");
      if (loading) loading.style.display = "none";
      // Hide customizer
      customizerWrapper.classList.add("hide");
      galleryWrapper.classList.remove("hide");
    }
  }

  // Updated function to send personalization data to backend and add to cart
  async function sendPersonalizationDataAndAddToCart(imageSrc) {
    // Add required metadata
    const selectedColor =
      personalizationContainer.dataset.selectedColor || "Ceramic Yellow";
    const numberOfKids =
      parseInt(personalizationContainer.dataset.numberOfKids, 10) || 1;
    const personalizationData = document.getElementById(
      "personalization-data"
    ).value;
    const productInfo = document.querySelector("product-info");
    const productTitle = productInfo?.dataset.url?.split("-")?.at(0);

    // Build design configuration
    const designConfig = {
      imageSrc, // Base or user-uploaded image URL
      color: selectedColor,
      number_of_kids: numberOfKids,
      product_title: productTitle,
      personalization_data: personalizationData,
    };

    // Send data to backend using fetch
    const response = await fetch(apiConfig.uploadEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(designConfig),
      timeout: apiConfig.requestTimeout,
    });

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status}: ${response.statusText}`
      );
    }

    return response.json();
  }

  // Updated function to set both print file and preview URLs in the product form
  function setProductFormFileUrls(printFileUrl, previewUrl) {
    if (!productForm) {
      console.error("Product form not found");
      return;
    }

    // Set print file URL
    let printFileInput = productForm.querySelector(
      'input[name="properties[print_file]"]'
    );
    if (!printFileInput) {
      printFileInput = document.createElement("input");
      printFileInput.type = "hidden";
      printFileInput.name = "properties[print_file]";
      productForm.appendChild(printFileInput);
    }
    printFileInput.value = printFileUrl;
    // Set preview file URL
    let previewFileInput = productForm.querySelector(
      'input[name="properties[preview_file]"]'
    );
    if (!previewFileInput) {
      previewFileInput = document.createElement("input");
      previewFileInput.type = "hidden";
      previewFileInput.name = "properties[preview_file]";
      productForm.appendChild(previewFileInput);
    }
    previewFileInput.value = previewUrl;
  }

  // -- EVENT LISTENERS --

  // Add image load event listener to ensure canvas updates after image loads
  if (customizerImage) {
    customizerImage.addEventListener("load", function () {
      updateCanvas();
    });
  }

  // Hide/show personalization fields when button is clicked

  function showPersonalizer() {
    // Show customizer, hide gallery (same as original hide functionality)
    customizerWrapper.classList.remove("hide");
    galleryWrapper.classList.add("hide");
    personalizationFields.style.display = "block";

    // When showing personalization fields, replace the single button with two buttons
    hideShopifyAddToCart();

    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "personalization-button-container";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.marginTop = "1rem";
    buttonContainer.style.marginBottom = "1rem";

    // Create Cancel button
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "button button--secondary";
    cancelButton.style.flex = "1";
    cancelButton.textContent = "Cancel";
    cancelButton.id = "cancel-personalization-button";

    // Create Add to Cart button instead of Save button
    const addToCartButton = document.createElement("button");
    addToCartButton.type = "button";
    addToCartButton.className = "button button--primary";
    addToCartButton.style.flex = "1";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.id = "personalization-add-to-cart-button";

    // Add buttons to container
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addToCartButton);

    // Add container after the personalization fields
    personalizationFields.prepend(buttonContainer);

    // Add event listener for Cancel button
    cancelButton.addEventListener("click", function () {
      // Hide customizer, show gallery (same as original hide functionality)
      customizerWrapper.classList.add("hide");
      galleryWrapper.classList.remove("hide");
      personalizationFields.style.display = "none";

      // Remove the button container
      buttonContainer.remove();

      // Show the original ADDTOCART button again
      showShopifyAddToCart();
    });

    // Add event listener for Add to Cart button
    addToCartButton.addEventListener("click", function () {
      // First save personalization with fetch
      saveAndAddToCart();
    });

    // Generate inputs if not already generated
    generateInputFields();
    // Apply text overlays based on personalization inputs and template and position it
    // applyTextOverlays();
    positionTextElements();

    // Set up window resize event listener
    window.addEventListener("resize", debounce(positionTextElements, 100));
  }

  // Variant change listeners
  if (productForm) {
    // 1. Listen for variant selectors change
    const variantSelectors = productForm.querySelectorAll(
      '[name^="options"], select[name="id"]'
    );
    variantSelectors.forEach((selector) => {
      selector.addEventListener("change", function () {
        setTimeout(() => {
          const variantId = productForm.querySelector('[name="id"]').value;
          updateCustomizerImage(variantId);

          // If "Number of Kids" changed, we need to update fields
          if (selector.name && selector.name.includes("Number of Kids")) {
            const match = selector.value.match(/(\d+)/);
            if (match) {
              personalizationContainer.dataset.numberOfKids = parseInt(
                match[1],
                10
              );
              if (personalizationFields.style.display === "block") {
                generateInputFields();
                // applyTextOverlays();
              }
            }
          }

          // If "Color" changed, update the color data
          if (selector.name && selector.name.includes("Color")) {
            personalizationContainer.dataset.selectedColor = selector.value;
            updatePersonalizationData();
          }

          // Preserve personalization state after variant change
          if (personalizationFields.style.display === "block") {
            setTimeout(preservePersonalizationState, 100);
          }
        }, 10);
      });
    });

    // Also update the other variant change event handlers similarly
    document.addEventListener("variant:changed", function (event) {
      if (event.detail && event.detail.variant) {
        updateCustomizerImage(event.detail.variant.id);

        // Check if we need to update the number of kids or color
        const variant = event.detail.variant;
        if (variant.options) {
          variant.options.forEach((option, index) => {
            if (
              variant.option_names &&
              variant.option_names[index] === "Number of Kids"
            ) {
              const match = option.match(/(\d+)/);
              if (match) {
                personalizationContainer.dataset.numberOfKids = parseInt(
                  match[1],
                  10
                );
                if (personalizationFields.style.display === "block") {
                  generateInputFields();
                }
              }
            }

            if (
              variant.option_names &&
              variant.option_names[index] === "Color"
            ) {
              personalizationContainer.dataset.selectedColor = option;
              updatePersonalizationData();
            }
          });
        }
        if (personalizationFields.style.display === "block") {
          setTimeout(preservePersonalizationState, 100);
        }
      }
    });

    // 3. Direct click listener on variant option buttons
    const variantOptions = document.querySelectorAll(
      '.product-form__input input[type="radio"], .product-form__swatch input, .product-options button'
    );
    variantOptions.forEach((option) => {
      option.addEventListener("click", function () {
        setTimeout(() => {
          const variantId = productForm.querySelector('[name="id"]').value;
          updateCustomizerImage(variantId);

          // Check if this is a "Number of Kids" option
          if (
            (option.name && option.name.includes("Number of Kids")) ||
            option.getAttribute("data-option") === "Number of Kids"
          ) {
            const match = option.value
              ? option.value.match(/(\d+)/)
              : option.textContent.match(/(\d+)/);
            if (match) {
              personalizationContainer.dataset.numberOfKids = parseInt(
                match[1],
                10
              );
              if (personalizationFields.style.display === "block") {
                generateInputFields();
              }
            }
          }

          // Check if this is a "Color" option
          if (
            (option.name && option.name.includes("Color")) ||
            option.getAttribute("data-option") === "Color"
          ) {
            const color = option.value || option.textContent;
            personalizationContainer.dataset.selectedColor = color;
            updatePersonalizationData();
          }
        }, 50);
      });
    });
  }

  // Watch for changes to the main product image
  if (customizerImage) {
    const mainProductImage = document.querySelector(
      ".product__media-item.is-active img"
    );
    if (mainProductImage) {
      const observer = new MutationObserver(function (mutations) {
        customizerImage.src = mainProductImage.src;
        if (mainProductImage.srcset) {
          customizerImage.srcset = mainProductImage.srcset;
        }
        // updateCanvas will be called by the image load event
      });

      observer.observe(mainProductImage, {
        attributes: true,
        attributeFilter: ["src", "srcset"],
      });
    }

    // Watch for changes to the product media items
    const mediaGallery = document.querySelector("media-gallery");
    if (mediaGallery) {
      const observer = new MutationObserver(function (mutations) {
        const activeSlide = mediaGallery.querySelector(
          ".product__media-item.is-active img"
        );
        if (activeSlide) {
          customizerImage.src = activeSlide.src;
          if (activeSlide.srcset) {
            customizerImage.srcset = activeSlide.srcset;
          }
          // updateCanvas will be called by the image load event
        }
      });

      observer.observe(mediaGallery, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  }

  // -- GLOBAL FUNCTION EXPORTS --

  // Make functions available globally to be called from other scripts
  window.updatePersonalizationFields = function () {
    if (
      personalizationFields &&
      personalizationFields.style.display === "block"
    ) {
      generateInputFields();
    } else if (personalizationFields.style.display === "none") {
      showPersonalizer();
    }
  };

  // Update color when it changes
  window.updatePersonalizationColor = function (color) {
    if (personalizationContainer) {
      personalizationContainer.dataset.selectedColor = color;
      updatePersonalizationData();
      updateCanvas();
    }
    if (personalizationFields.style.display === "none") {
      showPersonalizer();
    }
  };

  // Initial setup
  if (customizerImage) {
    // Add initial load event to make sure we have the image before drawing text
    if (customizerImage.complete) {
      updateCanvas(); // Image already loaded
    } else {
      customizerImage.addEventListener("load", function onceLoaded() {
        updateCanvas();
        customizerImage.removeEventListener("load", onceLoaded);
      });
    }
  }

  // Make functions available globally to be called from other scripts
  window.personalizationConfig = {
    apiEndpoint: "https://my-backend.com/api/print-file", // Replace with your actual API endpoint
    requestTimeout: 30000, // 30 seconds timeout
  };

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
});
