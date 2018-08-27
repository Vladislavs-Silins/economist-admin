export class Premia {
  code = '';
  description = '';

  //TODO: create constructor, that can work with redux store
  constructor({ code = '', description = '' } = {}) {
    this.code = code;
    this.description = description;
  };
}

