import numpy as np
from .schemas import InputData

def make_prediction(model, scaler, data: InputData):
    input_array = np.array([[
        data.mean_radius, data.mean_texture, data.mean_perimeter, data.mean_area,
        data.mean_smoothness, data.mean_compactness, data.mean_concavity,
        data.mean_concave_points, data.mean_symmetry, data.mean_fractal_dimension,
        data.radius_error, data.texture_error, data.perimeter_error, data.area_error,
        data.smoothness_error, data.compactness_error, data.concavity_error,
        data.concave_points_error, data.symmetry_error, data.fractal_dimension_error,
        data.worst_radius, data.worst_texture, data.worst_perimeter, data.worst_area,
        data.worst_smoothness, data.worst_compactness, data.worst_concavity,
        data.worst_concave_points, data.worst_symmetry, data.worst_fractal_dimension
    ]])

    input_scaled = scaler.transform(input_array)
    prediction = model.predict(input_scaled)[0][0]
    result = "Malignant" if prediction < 0.5 else "Benign"
    return {
        "prediction": result,
        "score": float(prediction)
    }
