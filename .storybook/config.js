import { configure } from "@kadira/storybook";

function loadStories() {
    require("../src/components/stories.js");
}

configure(loadStories, module);
