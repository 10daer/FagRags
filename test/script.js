// Updated function to save personalization, send data to backend, and add to cart
async function saveAndAddToCart() {
  // Show loading indicator if exists
  const loading = document.querySelector(".loading-indicator");
  if (loading) loading.style.display = "flex";

  // Hide customizer, show gallery
  customizerWrapper.classList.add("hide");
  galleryWrapper.classList.remove("hide");
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
    alert("Error: No image found for preview generation.");
    if (loading) loading.style.display = "none";
    personalizationButton.style.display = "block";
    return;
  }
  try {
    // Send personalization data to backend
    const data = await sendPersonalizationDataAndAddToCart(imageSrc);

    // Success handling
    if (data && data.print_file_url && data.preview_file_url) {
      // Store the print file and preview URLs in the form
      setProductFormFileUrls(data.print_file_url, data.preview_file_url);

      // Change personalize button text to "Edit Personalization"
      personalizationButton.textContent = "Edit Personalization";
      personalizationButton.style.display = "block";

      // Add to cart
      triggerShopifyAddToCart();
    } else {
      console.error(
        "Invalid response format, missing print_file_url or preview_url:",
        data
      );
      alert("Error saving personalization. Please try again.");
      personalizationButton.style.display = "block";
      throw new Error("Invalid response from server");
    }
  } catch (error) {
    console.error("Error during personalization save:", error);
    alert("Error saving personalization. Please try again.");
    personalizationButton.style.display = "block";
  } finally {
    // Hide loading indicator
    const loading = document.querySelector(".loading-indicator");
    if (loading) loading.style.display = "none";
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

  // Build design configuration
  const designConfig = {
    imageSrc, // Base or user-uploaded image URL
    color: selectedColor,
    number_of_kids: numberOfKids,
    personalization_data: personalizationData,
  };

  // Send data to backend using fetch
  const response = await fetch(apiConfig.uploadEndpoint, {
    method: "POST",
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
  console.log("Print file URL set in form:", printFileUrl);

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
  console.log("Preview file URL set in form:", previewUrl);
}
