from fastapi import FastAPI
from schemas import InputData
from model import load_keras_model
from scaler import load_scaler
from predict import make_prediction

app = FastAPI(title="Breast Cancer Detection API")


model = load_keras_model("models/breast_cancer_ann.keras")
scaler = load_scaler("models/scaler.pkl")

@app.post("/predict")
def predict(data: InputData):
    return make_prediction(model, scaler, data)
