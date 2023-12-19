import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ShowFormModal = ({dataForm}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Abre para ver los datos guardados
      </Button>
      <Modal title="Los datos guardados son:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{dataForm.name}</p>
        <p>{dataForm.password}</p>
        <p>{dataForm.age}</p>
        <p>{dataForm.mail}</p>
      </Modal>
    </>
  );
};
export default ShowFormModal;