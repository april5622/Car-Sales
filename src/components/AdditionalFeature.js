import React from 'react';
import {buyItem} from "../actions/carsaleAction";
import {connect} from "react-redux";

const AdditionalFeature = props => {


  return (
    <li>
      <button className="button" onClick={() => props.buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    carprice:state.car.price,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {buyItem}) (AdditionalFeature);