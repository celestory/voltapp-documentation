const fs = require('fs');
const {promisify} = require('util');
const {mkdirp} = require('mkdirp');

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const dirNames = ['mapboxDraw/events', 'mapboxDraw/actions'];

(async() => {
    for (const dirName of dirNames) {
        const dirPath = `pages/nodes/${dirName}`;
        const fileNames = await readdir(dirPath);
        for (const fileName of fileNames) {
            if (fileName.startsWith('_meta')) {
                continue
            }
            const filePath =`${dirPath}/${fileName}`;
            const file = await readFile(filePath);
            const locale = fileName.split('.')[1];
            const name = fileName.split('.')[0];
            const content = file.toString('utf-8');
            const preview = `\n\n![preview](/images/${dirName}/${name}-${locale}.png)`;
            if (!content.includes(preview)) {
                await writeFile(filePath, content + preview);
            }
        }
    }
})();
