const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

(async() => {
    const dirName = 'pages/blocks/controls';
    const fileNames = await readdir(dirName);

    for (const fileName of fileNames) {
        if (fileName.startsWith('_meta')) {
            continue
        }
        const filePath =`${dirName}/${fileName}`;
        const file = await readFile(filePath);
        const locale = fileName.split('.')[1];
        const name = fileName.split('.')[0];
        await writeFile(filePath, file.toString('utf8') + `\n\n![preview](/images/controls/${name}-${locale}.png)`);
    }
})();
