import joblib

def load_scaler(path: str):
    return joblib.load(path)
