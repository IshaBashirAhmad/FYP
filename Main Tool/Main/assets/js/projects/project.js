const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/teamtracker', { useNewUrlParser: true, useUnifiedTopology: true });

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  priority: Number,
});

const Project = mongoose.model('Project', projectSchema);

// Save project
app.post('/api/projects', async (req, res) => {
  try {
    const { name, description, date, priority } = req.body;
    const project = new Project({ name, description, date, priority });
    await project.save();
    res.status(201).send('Project saved successfully!');
  } catch (error) {
    res.status(500).send(error.message);
  }
});
