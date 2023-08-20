import numpy as np
import streamlit as st
import tensorflow as tf
import matplotlib.pyplot as plt
from keras import backend as K
from keras.models import load_model
import cv2
plt.style.use("ggplot")
def cnn_model(input_shape, num_classes):
    model = tf.keras.models.Sequential([
        tf.keras.layers.Input(shape=input_shape),
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D((2, 2)),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(num_classes, activation='softmax')
    ])
    return model
def dice_coeffs(y_true, y_pred, smooth=100):
    y_true_flatten = K.flatten(y_true)
    y_pred_flatten = K.flatten(y_pred)
    intersection = K.sum(y_true_flatten * y_pred_flatten)
    union = K.sum(y_true_flatten) + K.sum(y_pred_flatten)
    return (2 * intersection + smooth) / (union + smooth)
def dice_coeffloss(y_true, y_pred, smooth=100):
    return -dice_coeffs(y_true, y_pred, smooth)
def intersection_over_union(y_true, y_pred, smooth=100):
    intersection = K.sum(y_true * y_pred)
    sum = K.sum(y_true + y_pred)
    intersection_over_union = (intersection + smooth) / (sum - intersection + smooth)
    return intersection_over_union
def jaccard_dist(y_true, y_pred):
    y_true_flatten = K.flatten(y_true)
    y_pred_flatten = K.flatten(y_pred)
    return -intersection_over_union(y_true_flatten, y_pred_flatten)
st.title("MRI Segmentation")
model = load_model("MRI_segmentation_mode.h5", custom_objects={'dice_coef_loss': dice_coeffloss, 'intersection_over_union': intersection_over_union, 'dice_coef': dice_coeffs})
image_height = 256
image_width = 256
model_file = st.file_uploader("Upload file", type=["csv", "png", "jpg"], accept_multiple_files=True)
if model_file:
    for i in model_file:
        st.header("Original Image:")
        st.image(i)
        content = i.getvalue()
        image = np.asarray(bytearray(content), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
        img2 = cv2.resize(image, (image_height, image_width))
        img3 = img2/255
        img4 = img3[np.newaxis, :, :, :]
        if st.button("Predict Output:"):
            pred_img = model.predict(img4)
            st.header("Predicted Image:")
            st.image(pred_img)
        else:
            continue