//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  function renderContent() {
    const isLoggedIn = true; // Replace with your condition

    if (isLoggedIn) {
      return <h1>Welcome, User!</h1>;
    } else {
      return <p>Please log in to view this content.</p>;
    }
  }
});
