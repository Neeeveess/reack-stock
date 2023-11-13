import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

function UpdateItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);
  return (
    <>
      <ItemForm itemToUpdate={item} />
    </>
  );
}

export default UpdateItem;
