export default class NodeService {

  getTreeNodes() {
    return fetch("/data/treenodes.json")
      .then((res) => res.json())
      .then((d) => d.root);
  }

  getCountries() {
    return fetch("/data/countries.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getSurvey() {
    return fetch("/data/survey.json")
      .then((res) => res.json())
      .then((d) => d.root);
  }
}
