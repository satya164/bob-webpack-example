import { createRoot } from "react-dom/client";
import { Button } from "./lib/module";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Button />);
