// Function to fetch preview_file_url and update cart
async function updatePreviewFile(taskId, lineItemKey) {
  const maxAttempts = 30; // Max polling attempts (e.g., 30 seconds at 1s intervals)
  const pollInterval = 1500; // 1 second

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(
        `https://customizer-backend-byas.onrender.com/api/get-preview-image/${taskId}`
      );
      const data = await response.json();

      if (data.previewLink) {
        // Update cart with _preview_file
        const updates = {
          updates: {},
          attributes: {
            [`line_items[${lineItemKey}][properties][_preview_file]`]:
              data.previewLink,
          },
        };
        await fetch("/cart/update.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        });
        console.log(`Updated line item ${lineItemKey} with preview link`);
        return;
      }
      // Wait before next poll
      await new Promise((resolve) => setTimeout(resolve, pollInterval));
    } catch (error) {
      console.error(`Error fetching preview for task ${taskId}:`, error);
      await new Promise((resolve) => setTimeout(resolve, pollInterval));
    }
  }
  console.warn(
    `Preview file not ready for task ${taskId} after ${maxAttempts} attempts`
  );
}

// Function to check cart for items with _taskId
async function checkCartForPreviews() {
  try {
    const response = await fetch("/cart.js");
    const cart = await response.json();

    cart.items.forEach((item) => {
      if (
        item.properties &&
        item.properties._taskId &&
        !item.properties._preview_file
      ) {
        updatePreviewFile(item.properties._taskId, item.key);
      }
    });
  } catch (error) {
    console.error("Error checking cart:", error);
  }
}

// Listen for cart changes
document.addEventListener("DOMContentLoaded", () => {
  // Initial check on page load
  checkCartForPreviews();

  // Poll for cart changes (e.g., every 2 seconds)
  setInterval(checkCartForPreviews, 2000);

  // Optional: Listen for Shopify AJAX events (if using AJAX cart)
  document.addEventListener("cart:updated", checkCartForPreviews);
});

// Optional: Trigger on form submission
document.querySelector("#add-to-cart-form")?.addEventListener("submit", () => {
  setTimeout(checkCartForPreviews, 1000); // Delay to allow cart update
});
