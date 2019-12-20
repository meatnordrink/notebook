const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function(err, files){
    if (err) console.error(err)
    for (i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === "." + process.argv[3]){
            console.log(files[i])
        }
    }
})



var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })    
})









const fs = require('fs')
const path = require('path')
// const dir = process.argv[2]
// const ext = process.argv[3]

let myFiles = []
fs.readdir(process.argv[2], function(err, files){
    if (err) console.error(err)
    myFiles = files
    for (i = 0; i < myFiles.length; i++) {
        if (path.extname(myFiles[i]) === "." + process.argv[3]){
            console.log(myFiles[i])
        }
    }
})

for (i = 0; i < myFiles.length; i++) {
    if (path.extname(myFiles[i]) === "." + process.argv[3]){
        console.log(myFiles[i])
    }
}

// If I run 

// let myFiles = fs.readdir(dir, function(err, files){
//     if (err) console.error(err)
//     console.log(files)
// })

// it works. But `return files` doesn't.

let test4 = fs.readdir('.', function(err, files){
    if (err) console.error(err)
    let newFiles = files
    return newFiles
})


