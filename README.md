# Age, Gender & Ethnicity Predictor

Flask web application for multi-output facial-image classification using a MobileNetV2-based deep-learning model trained on UTKFace.

> **Responsible use:** this is an educational ML project. Demographic predictions from facial images are uncertain and can reflect dataset bias. Do not use the outputs for identity, hiring, policing, healthcare, or other consequential decisions.

## Features

- Upload an image through a web interface
- Shared MobileNetV2 visual backbone
- Age-range classification
- Gender classification
- Ethnicity classification
- Flask inference API
- Browser-side image preview

## Architecture

```text
Image upload
    |
    v
200 x 200 preprocessing
    |
    v
MobileNetV2
    |
    +--> Age
    +--> Gender
    +--> Ethnicity
    |
    v
Flask response
```

## Run locally

The original project targets an older TensorFlow/Python environment.

```bash
pip install -r requirements.txt
python app.py
```

The application expects the trained model file at `mobilenet_model.h5`. The supplied model archive is kept outside the normal source tree because of its size.

## Project structure

```text
app.py
templates/
static/
requirements.txt
runtime.txt
Procfile
```

## Limitations

Performance depends on image quality, pose, lighting, and representation in the training data. The predicted categories should not be treated as objective measurements of a person.
