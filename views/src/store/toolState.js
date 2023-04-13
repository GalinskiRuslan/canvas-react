import { makeAutoObservable } from "mobx";

class ToolsState {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }
}

export default new ToolsState();
