import express from 'express';
import cors from 'cors';
import taskRoutes from '../src/routes/taskRoute';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(taskRoutes);

app.get('/', (req, res) => {
  res.send('API is running successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
