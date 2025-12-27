from tensorflow import keras

def load_keras_model(path: str):
    return keras.models.load_model(path)
