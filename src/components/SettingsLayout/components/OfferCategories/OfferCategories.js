import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import OfferCategoryItem from './components/OfferCategoryItem';
import OfferCategoryEdit from './components/OfferCategoryEdit';
import { OfferCategory } from 'model/OfferCategory';
import selectOfferCategories from 'store/selectors/offerCategories';

class OfferCategories extends React.Component {
  static propTypes = {

  }
  state = {
    category: new OfferCategory(),
  }


  handleChooseCategory = (category) => () => {
    this.setState(() => {
      return {
        category,
      };
    });
  }

  handleResetCategory = () => {
    this.setState(() => {
      return {
        currentCategory: new OfferCategory(),
      };
    });
  }

  render = () => (
    <div className="animated fadeIn">
      <ul>
        {this.props.offerCategories.map((category, index) => {
          return (
            <li key={uuid()}>
              <OfferCategoryItem click={this.handleChooseCategory(category)} category={category}></OfferCategoryItem>
            </li>
          )
        })
        }
      </ul>
      <OfferCategoryEdit category={this.state.category} reset={this.handleResetCategory} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    offerCategories: selectOfferCategories(state.offerCategories, state.filters),
  }
};
export default connect(mapStateToProps)(OfferCategories);

