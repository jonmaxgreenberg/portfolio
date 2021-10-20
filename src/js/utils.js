export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", "https://docs.google.com/document/d/1HBsEo7B5uX4z_6WieZKJC3e9FZBfIiG2qvtaxnYeW8s/edit");
}
