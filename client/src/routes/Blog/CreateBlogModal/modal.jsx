import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, FormGroup, Label } from 'reactstrap';

const BlogPop = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggle = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
        <Button onClick={toggle}>Create</Button>
        <Modal isOpen={modalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Buat Postingan Baru</ModalHeader>
            <ModalBody>
            <FormGroup>
                <Label for="image">Unggah Gambar</Label>
                <Input type="file" id="image" />
            </FormGroup>
            <FormGroup>
                <Label for="text">Tambahkan Teks</Label>
                <Input type="textarea" id="text" rows={3} />
            </FormGroup>
            <FormGroup>
                <Label for="tags">Tag</Label>
                <Input type="text" id="tags" />
            </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="danger" onClick={toggle}>Cancel</Button>
            <Button color="primary" onClick={toggle}>Upload</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
};

export default BlogPop;
