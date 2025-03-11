import React from 'react'
import Button from '../../../../components/shared/small/Button'

function DeleteModal({ confirmDelete, closeDeleteModal }) {
    return (
        <div className="p-4">
            <p className="mb-4">Are you sure you want to delete this alert?</p>
            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    text="Cancel"
                    onClick={closeDeleteModal}
                    className="p-2 text-xs"
                />
                <Button
                    type="button"
                    text="Confirm"
                    onClick={confirmDelete}
                    className="p-2 text-xs"
                />
            </div>
        </div>
    )
}

export default DeleteModal