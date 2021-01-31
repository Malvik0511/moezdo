import React from 'react'
import style from './style.module.scss'
import { Modal as BModal } from "react-bootstrap";

export const Modal = () => (
    <div className={style.modelWrapper}>
        <BModal.Dialog>
            <BModal.Body>
                <p>Успешно отправлено</p>
            </BModal.Body>
        </BModal.Dialog>
    </div>
)