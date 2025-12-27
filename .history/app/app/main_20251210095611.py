from fastapi import FastAPI
from app.schemas import InputData
from app.model import load_keras_model
from app.scaler import load_scaler
from app.predict import make_prediction

app = FastAPI(title="Breast Cancer Detection API")


model = load_keras_model("models/breast_cancer_ann.keras")
scaler = load_scaler("models/scaler.pkl")

@app.post("/predict")
def predict(data: InputData):
    return make_prediction(model, scaler, data)
