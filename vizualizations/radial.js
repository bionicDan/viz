export function drawRadial(analyser, dataArray, bufferLength) {
  const numPoints = bufferLength / 4;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = min(width, height) / 2;
  const angleStep = TWO_PI / numPoints;

  push();
  translate(centerX, centerY);
  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleStep;
    const radius = map(dataArray[i], 0, 255, 0, maxRadius);
    const x = radius * cos(angle);
    const y = radius * sin(angle);
    fill(dataArray[i] + 100, i % 255, 255);
    ellipse(x, y, 10, 10);
  }
  pop();
}
