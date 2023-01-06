export default class NodeService {

  getTreeNodes() {
    return fetch("/data/treenodes.json")
      .then((res) => res.json())
      .then((d) => d.root);
  }

  getProfs() {
    return fetch("/data/profs.json")
      .then((res) => res.json())
  }
}
