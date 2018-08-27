export class Product {
  id = '';
  code = '';
  description = '';
  //TODO: create constructor, that can work with redux store
  constructor({ code = '', id = '', description = '' } = {}) {
    this.code = code;
    this.id = id;
    this.description = description;
  };
}

