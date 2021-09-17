import { AddDishForm } from './AddDishForm';
import { Container, Zone } from '../../common/Structure/index';
import './AddDish.css';

export const AddDish = () => {
  return (
    <Container>
      <Zone className="addDish-zone">
        <div className="addDish-image"></div>
        <AddDishForm className="addDishForm" />
      </Zone>
    </Container>
  );
};
export default AddDish;
