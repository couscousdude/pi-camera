const StillCamera = require('StillCamera');
const fs = require('fs');

const runApp = async () => {
    const stillCamera = new StillCamera;
    const image = await stillCamera.takeImage();

    fs.writeFileSync("still-image-node.jpg", image);
};

runApp();