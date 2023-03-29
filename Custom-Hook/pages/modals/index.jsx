import useModal from "@/components/hooks/useModal";

function Index() {
  const {
    isOpen: isOpenModal1,
    openModal: openModal1,
    closeModal: closeModal1,
  } = useModal();
  const {
    isOpen: isOpenModal2,
    openModal: openModal2,
    closeModal: closeModal2,
  } = useModal();

  return (
    <div>
      <button onClick={openModal1}>Open Modal 1</button>
      {isOpenModal1 && (
        <div>
          <div>Modal 1 Content</div>
          <button onClick={closeModal1}>Close Modal 1</button>
        </div>
      )}
      <button onClick={openModal2}>Open Modal 2</button>
      {isOpenModal2 && (
        <div>
          <div>Modal 2 Content</div>
          <button onClick={closeModal2}>Close Modal 2</button>
        </div>
      )}
    </div>
  );
}

export default Index;
