import React from 'react';
import { OFFERCATEGORYMAP } from 'mock-data';

import uuid from 'uuid';
import OfferCategoryItem from './components/OfferCategoryItem';
import OfferCategoryEdit from './components/OfferCategoryEdit/OfferCategoryEdit';
import { OfferCategory } from 'model/OfferCategory';

class OfferCategories extends React.Component {
  static propTypes = {

  }
  state = {
    categories: [],
    currentCategory: new OfferCategory(),
  }

  componentDidMount = () => {
    this.setState(() => {
      return {
        categoriesMap: OFFERCATEGORYMAP,
        categories: Array.from(OFFERCATEGORYMAP.keys())
      };
    });
  }
  handleChooseCategory = (code) => () => {

    this.setState((prevState) => {
      return {
        currentCategory: this.state.categoriesMap.get(code),
      };
    });
  }
  handleResetCategory = () => {

    this.setState((prevState) => {
      return {
        currentCategory: new OfferCategory(),
      };
    });
  }

  render = () => (
    <div className="animated fadeIn">
      <ul>
        {this.state.categories.map((categoryCode, index) => {
          return (
            <li key={uuid()}>
              <OfferCategoryItem click={this.handleChooseCategory(categoryCode)} category={this.state.categoriesMap.get(categoryCode)}></OfferCategoryItem>
            </li>
          )
        })
        }
      </ul>
      <OfferCategoryEdit category={this.state.currentCategory} reset={this.handleResetCategory} />
    </div>
  )
}

export default OfferCategories;
