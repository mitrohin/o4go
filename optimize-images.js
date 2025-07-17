const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');
const path = require('path');

(async () => {
  try {
    const inputDir = path.join(__dirname, 'public/images/*.{jpg,jpeg,png,svg}');
    const outputDir = path.join(__dirname, 'build/images');
    
    console.log('Начинаю оптимизацию изображений...');
    
    const files = await imagemin([inputDir], {
      destination: outputDir,
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
        svgo({
          plugins: [
            { removeViewBox: false },
            { removeEmptyAttrs: false }
          ]
        })
      ]
    });
    
    console.log(`Оптимизировано ${files.length} изображений!`);
  } catch (error) {
    console.error('Ошибка при оптимизации изображений:', error);
    process.exit(1);
  }
})(); 