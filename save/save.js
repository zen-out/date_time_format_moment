function readAndCopy(file) {
    fs.writeFileSync("../README.md", "")
    fs.readFileSync(`./intro.md`, "utf-8")
    fs.appendFileSync("./intro.md", content)

}