const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(__dirname));
const PORT = 3000;

const students = JSON.parse(fs.readFileSync('students.json'));

app.get('/student/:hallTicket', (req, res) => {
    const ticket = req.params.hallTicket;
    const student = students.find(s => s.hall_ticket === ticket);
    if(student){
        res.json({ success: true, student });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
