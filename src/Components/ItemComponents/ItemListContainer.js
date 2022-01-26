import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'

export class ItemListContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Bienvenido, {user} <FontAwesomeIcon icon={faHandPeace} size="1x" />!</h1>
      </div>
    );
  };
};

export default ItemListContainer;