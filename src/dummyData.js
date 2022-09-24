import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "📝To Do",
    tasks: [
      {
        id: uuidv4(),
        title: "Studying React",
      },
      {
        id: uuidv4(),
        title: "Study on youtube",
      },
      {
        id: uuidv4(),
        title: "stroll",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🚀In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "coding",
      },
      {
        id: uuidv4(),
        title: "job change",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "🌳Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "reading",
      },
    ],
  },
];

export default dummyData;
