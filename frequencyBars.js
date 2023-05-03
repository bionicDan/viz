export function drawFrequencyBars(analyser, dataArray, bufferLength) {
  const barWidth = (width / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] / 2;
    fill(barHeight + 100, i % 255, 255);
    rect(x, height - barHeight / 2, barWidth, barHeight);
    x += barWidth + 1;
  }
}
