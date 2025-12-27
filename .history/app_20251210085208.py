from pydantic import BaseModel

class InputData(BaseModel):
    mean_radius: float
    mean_texture : float
    mean_perimiter : float
    mean_area : float
    mean_smoothness : float
    mean_concavity : float
    mean_concave_points: float
    mean_symmetry : float
    mean_fractual_dimension: float
    radius_error : float
    texture_error : float
    perimeter_error : float
    area_error : float
    smoothness_error : float
    compactness_error : float
    concavity_error : float
    concave_points_error : float
    symmetry_error : float
    