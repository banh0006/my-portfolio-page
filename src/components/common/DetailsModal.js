import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function DetailsModal({ currentProject, toggle, modal }) {
    return (
        <Modal isOpen={modal} toggle={toggle} className="my-modal">
            <ModalHeader toggle={toggle}>{currentProject.projectName}</ModalHeader>
            <ModalBody>
                {currentProject.projectDescription}
            </ModalBody>
        </Modal>
    )
}
