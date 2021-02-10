# trachoma-app
App for trachoma detection on phone


## Convert a keras model to tfjs
```
tensorflowjs_converter --input_format=keras --output_format=tfjs_layers_model --quantize_uint8 --weight_shard_size_bytes=999999999999 /mnt/remote/EGower/jprieto/trained/eyes_cropped_resampled_512_seg_clean/flat_u_seg_nn.h5 /home/juan/UNC/source/trachoma-app/assets/models/flat_u_seg_nn
```