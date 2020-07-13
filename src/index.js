import { StillCamera } from 'pi-camera-connect';
import * as fs from 'fs';

const runApp = async () => {
    const stillCamera = new StillCamera;
    const image = await stillCamera.takeImage();

    fs.writeFileSync("still-image-node.jpg", image);
};

runApp();