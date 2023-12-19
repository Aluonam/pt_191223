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
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{dataForm.name}</p>
        <p>{dataForm.password}</p>
        <p>{dataForm.age}</p>
        <p>{dataForm.mail}</p>
      </Modal>
    </>
  );
};
export default ShowFormModal;