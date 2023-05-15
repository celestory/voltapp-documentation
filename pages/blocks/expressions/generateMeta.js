const fs = require("fs");
const path = require("path");

const dossier = __dirname; // Remplacez par le chemin de votre dossier

fs.readdir(dossier, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du dossier :", err);
    return;
  }

  const meta = {};
  files.forEach((file) => {
    const filePath = path.join(dossier, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      const name = file.split(".")[0];
      meta[name] = name[0].toUpperCase() + name.slice(1);
    }
  });

  const metaJSON = JSON.stringify(meta, null, 2);

  fs.writeFile(path.join(dossier, "_meta.json"), metaJSON, (err) => {
    if (err) {
      console.error("Erreur lors de la création du fichier _meta.json :", err);
      return;
    }
    console.log("Fichier _meta.json généré avec succès !");
  });
});
