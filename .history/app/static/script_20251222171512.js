
const fields = [
  "mean_radius", "mean_texture", "mean_perimeter", "mean_area", "mean_smoothness",
  "mean_compactness", "mean_concavity", "mean_concave_points", "mean_symmetry", "mean_fractal_dimension",
  "radius_error", "texture_error", "perimeter_error", "area_error", "smoothness_error",
  "compactness_error", "concavity_error", "concave_points_error", "symmetry_error", "fractal_dimension_error",
  "worst_radius", "worst_texture", "worst_perimeter", "worst_area", "worst_smoothness",
  "worst_compactness", "worst_concavity", "worst_concave_points", "worst_symmetry", "worst_fractal_dimension"
];


const formFieldsContainer = document.getElementById("formFields");
fields.forEach(field => {
  const label = document.createElement("label");
  label.textContent = field;
  const input = document.createElement("input");
  input.type = "number";
  input.name = field;
  input.required = true;
  formFieldsContainer.appendChild(label);
  formFieldsContainer.appendChild(input);
  formFieldsContainer.appendChild(document.createElement("br"));
});

document.getElementById("predictionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};
  fields.forEach(field => {
    data[field] = parseFloat(formData.get(field));
  });

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("result").innerHTML = `
      <h3>Prediction: ${result.prediction}</h3>
      <p>Score: ${result.score.toFixed(4)}</p>
    `;
  } catch (err) {
    console.error("Prediction error:", err);
    document.getElementById("result").textContent = "Error making prediction.";
  }
});


