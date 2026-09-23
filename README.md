<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=160&section=header&text=Age%20Gender%20Ethnicity%20Predictor&fontSize=32&fontColor=fff&animation=twinkling&desc=Multi-Output%20Deep%20Learning%20with%20MobileNet&descSize=16&descAlignY=75" width="100%"/>

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)

</div>

## 👤 Overview

A **multi-output deep learning model** that simultaneously predicts **age, gender, and ethnicity** from facial images using **MobileNet** transfer learning. Deployed as a Flask web application.

## ✨ Features

- 🧠 **Multi-output MobileNet** — single model, three simultaneous predictions
- 👶 **Age regression** — continuous age estimation
- 🚻 **Gender classification** — binary classification
- 🌍 **Ethnicity classification** — multi-class prediction
- 🌐 **Flask web app** — upload image, get predictions instantly
- ☁️ **Heroku-ready** — includes Procfile and runtime config

## 🏗️ Project Structure

| File | Description |
|------|-------------|
| ge-sex-ethnicity-detection-using-multi-ouput.ipynb | Model training notebook |
| pp.py | Flask web application |
| mobilenet_model.zip | Pre-trained MobileNet weights |
| 	emplates/ | HTML frontend |
| static/ | CSS & assets |

## 🚀 Quick Start

`ash
git clone https://github.com/kavanpatel18/age-gender-ethnicity-predictor
cd age-gender-ethnicity-predictor
pip install -r requirements.txt
python app.py
# Visit http://localhost:5000
`

## 📊 Model Architecture

`
Input Image (224x224)
       ↓
  MobileNetV2 (pretrained on ImageNet)
       ↓
  Shared Feature Extractor
    ↙    ↓    ↘
 Age  Gender  Ethnicity
(MSE) (BCE)  (CrossEntropy)
`

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer&animation=twinkling" width="100%"/>
</div>