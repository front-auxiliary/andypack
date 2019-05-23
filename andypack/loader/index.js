const fs = require('fs');
const ready = (path) => {
    return fs.readFileSync(path, 'utf-8');
}
const write = (path, content) => {
    fs.writeFileSync(path, content, () => {
        console.log('this is ok')
    });
}
const loader = (params, path) => {
    params.forEach(element => {
        if (path.search(element.test) != -1) {
            require(element.loader).render(ready(path),
                {
                    paths: [path],  // Specify search paths for @import directives
                    // Specify a filename, for better error messages
                    compress: true
                }, (e, output) => {
                    // console.log(output.css)
                    write(path.replace(/\.less$/, ".css"), output.css)
                }
            )
        }
    });

}

module.exports = loader;
