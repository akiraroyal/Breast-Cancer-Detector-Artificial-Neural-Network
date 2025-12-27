
from fastapi import FastAPI
from app.schemas import InputData
from app.model import load_keras_model
from app.scaler import load_scaler
from app.predict import make_prediction
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI(title="Breast Cancer Detection API")

app.mount("/static", StaticFiles(directory="app/static"), name="static")

@app.get("/")
def read_root():
    return FileResponse("app/static/index.html")

model = load_keras_model("models/breast_cancer_ann.keras")
scaler = load_scaler("models/scaler.pkl")

@app.post("/predict")
def predict(data: InputData):
    return make_prediction(model, scaler, data)
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.schemas import InputData
from app.model import load_keras_model
from app.scaler import load_scaler
from app.predict import make_prediction

app = FastAPI(title="Breast Cancer Detection API")




