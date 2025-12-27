#  Breast Cancer Detection – Neural Network Web App 

This project is a full-stack machine learning application that classifies breast tumors as **malignant** or **benign**. It features a trained Artificial Neural Network (ANN), a **FastAPI** backend for high-performance inference, and a responsive frontend.

The entire stack is containerized with **Docker** and deployed on **AWS EC2**.

**🔗 Live Demo**: [http://3.14.82.180:8000](http://3.14.82.180:8000)

---

## Overview
- **Objective**: Predict tumor malignancy based on diagnostic features.
- **Model**: 2-hidden-layer ANN trained on the UCI Breast Cancer dataset.
- **Backend**: FastAPI handles asynchronous requests for real-time predictions.
- **Deployment**: Scalable Docker container hosted on an Amazon EC2 instance.

## Dataset
- **Source**: `sklearn.datasets.load_breast_cancer`
- **Samples**: 569 | **Features**: 30 numerical diagnostic measurements.
- **Target Labels**: 
  - `0`: Malignant
  - `1`: Benign

## Model Architecture
The model was built using TensorFlow/Keras:

| Layer | Units | Activation |
| :--- | :--- | :--- |
| **Input** | 30 | - |
| **Hidden 1** | 6 | ReLU |
| **Hidden 2** | 6 | ReLU |
| **Output** | 1 | Sigmoid |

**Metrics:**
* **F1 Score**: ~97.5%
* **Precision**: 0.97
* **Recall**: 0.95

## 🛠️ Tech Stack
* **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
* **Backend**: Python, FastAPI, Uvicorn
* **Machine Learning**: TensorFlow, Scikit-learn, Pandas, NumPy
* **DevOps/Cloud**: Docker, AWS EC2

---

## Local Setup

Run the application locally using Docker:

```bash
# 1. Clone the repository
git clone [https://github.com/akiraroyal/breast-cancer-detector.git](https://github.com/akiraroyal/breast-cancer-detector.git)
cd breast-cancer-detector

# 2. Build the Docker image
docker build -t breast-cancer-detector .

# 3. Run the container
docker run -d -p 8000:8000 breast-cancer-detector
