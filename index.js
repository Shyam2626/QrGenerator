import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
            message: "Type your URL",
            name: "URL"
        }
    ])
    .then((answers) => {

        const url = answers.URL;
        var qr_img = qr.image(url);
        qr_img.pipe(fs.createWriteStream('qrCode.png'));

        fs.writeFile("url.txt", url, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            // Something else went wrong
        }
    });

