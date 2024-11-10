(function() {
  // Function to inject the app into a div with id "holiday-refund-app"
  const container = document.getElementById('holiday-refund-app');
  const iframe = document.createElement('iframe');
  iframe.src = "https://github.com/Guesperts/HolidayRefundApp.git";
  iframe.width = "100%";
  iframe.height = "600";
  container.appendChild(iframe);
})();
