
// 加载模型
async function loadAndPredict(imageElement) {
  const model = await tf.loadLayersModel('./model/my-model.json');

  // 预处理输入图像
  const inputTensor = preprocessImage(imageElement);

  // 进行预测
  const predictions = model.predict(inputTensor);

  // 获取预测结果
  const predictedIndex = predictions.argMax(1).dataSync()[0];
  console.log(`Predicted digit: ${predictedIndex}`);
}

// 预处理函数
function preprocessImage(imageElement) {
  // 将图像转换为 28x28 的灰度图像
  const tensor = tf.browser.fromPixels(imageElement, 1)
    .resizeNearestNeighbor([28, 28])
    .toFloat()
    .div(tf.scalar(255.0))
    .expandDims();
  return tensor;
}

// 假设 imageElement 是一个 HTMLImageElement
// loadAndPredict(imageElement);
function onClick(){

    let imageElement = document.getElementById(document.getElementById('select').value);
    loadAndPredict(imageElement);

}