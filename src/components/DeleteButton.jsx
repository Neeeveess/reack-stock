import PropTypes from "prop-types";
import useStock from "../hooks/useStock";

DeleteButton.propTypes = {
  itemId: PropTypes.int,
  itemName: PropTypes.string,
};

function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId);
    }
  };
  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}

export default DeleteButton;
