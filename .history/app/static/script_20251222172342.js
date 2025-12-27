const fields = [
  "mean_radius", "mean_texture", "mean_perimeter", "mean_area", "mean_smoothness",
  "mean_compactness", "mean_concavity", "mean_concave_points", "mean_symmetry", "mean_fractal_dimension",
  "radius_error", "texture_error", "perimeter_error", "area_error", "smoothness_error",
  "compactness_error", "concavity_error", "concave_points_error", "symmetry_error", "fractal_dimension_error",
  "worst_radius", "worst_texture", "worst_perimeter", "worst_area", "worst_smoothness",
  "worst_compactness", "worst_concavity", "worst_concave_points", "worst_symmetry", "worst_fractal_dimension"
];

const formFields = document.getElementById("formFields");


fields.forEach(key => {
  const label = document.createElement("label");
  label.innerText = key.replace(/_/g, " ");
  label.setAttribute("for", key);

  const input = document.createElement("input");
  input.type = "number";
  input.step = "any"; 
  input.name = key;
  input.id = key;
  input.required = true;

  formFields.appendChild(label);
  formFields.appendChild(input);
});

document.getElementById("predictionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {};
  fields.forEach(field => {
    data[field] = parseFloat(document.getElementById(field).value);
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
  } catch (error) {
    document.getElementById("result").innerText = "Error occurred while making prediction.";
    console.error("Prediction error:", error);
  }
});
