import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({callAPI, dataAPI}) => {
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

  useEffect(() => {
    if (isModalOpen){
      callAPI()
    }
  }, [isModalOpen])
  

  const productList = dataAPI.map((element)=>{
    return(
      <>
      <ul>
        <li>
          {element.title}
        </li>
      </ul>
      </>
    )
  })


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show product
      </Button>
      <Modal title="Product list:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {productList}
      </Modal>
    </>
  );
};
export default ModalANT;