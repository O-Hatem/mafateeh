import "./App.css";
import LessonArea from "./components/LessonArea";

function App() {
  const lessonText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus vitae corrupti voluptate beatae, magnam aliquid ut saepe reiciendis vero, odit doloribus dignissimos libero id eaque fuga. Laudantium, at asperiores?";
  return <LessonArea lessonText={lessonText} />;
}

export default App;
