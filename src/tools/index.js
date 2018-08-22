// Tools library 

export default class {

  // TODO: implement more suitable function for coloring blocks
  static getColor = (index = 0) => {
    const colors = ['blue', 'yellow', 'pink', 'green', 'indigo', 'teal', 'purple', 'orange', 'cyan'];
    return colors[index % 9];
  }
}