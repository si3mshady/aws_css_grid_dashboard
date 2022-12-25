const express = require('express')
const app = express()
const cors = require('cors')
fs = require('fs');
app.use(cors())


app.use("/data", (req, res) => {

    try {

        fs.readFile('data.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
          res.send(data)
        
            // console.log(data);
          });
        
    } catch (error) {
        console.log(error)
    }
 
  
})




app.listen(888, () => {
    console.log("Server is running on port 888")
})