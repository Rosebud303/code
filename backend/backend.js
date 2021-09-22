const express = require('express')
const app = express()
const port = 8080
const fs = require('fs')
const cors = require('cors')

app.use(cors())

let backendData;

try {
    const data = fs.readFileSync('./data/reports.json', 'utf8') 
    backendData = JSON.parse(data)
}
catch(err){
    console.log('Cannot read database')
}

app.get('/reports', (req, res) => {
    res.send(backendData.elements.filter(report => {
      return report.state == "OPEN"
  }))
})

app.get('/', (req, res) => {
    res.send(backendData)
})

app.put('/reports/:reportId', (req, res) => {
    console.log(req.params.reportId)
    backendData.elements.forEach(report => {
        if(report.id == req.params.reportId) {
            report.state = "CLOSED"
        } 
    })
    res.send(
        {
            "ticketState": "CLOSED"
        }
    )
})

app.put('/reports/block/:reportId', (req, res) => {
    console.log(req.params.reportId)
    backendData.elements.forEach(report => {
        if(report.id == req.params.reportId) {
            report.blocked = true
        } 
    })
    res.send(
        {
            "blockState": true
        }
    )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})