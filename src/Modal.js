import React, { useState } from 'react';

import {
    EuiOverlayMask,
    EuiButton,
    EuiSpacer,
    EuiFlyout,
    EuiTitle,
    EuiFlyoutHeader,
} from '@elastic/eui';

export default () => {
    const [modalOpen, changeModal] = useState(false);

    const closeModal = () => changeModal(false);

    if (modalOpen) {
        return (
            <EuiOverlayMask>
                <EuiButton onClick={closeModal}>Click this button to close</EuiButton>
            </EuiOverlayMask>
        );
    }

    return (
        <React.Fragment>
            <EuiSpacer size="xxl" />
            <EuiButton onClick={() => changeModal(!modalOpen)}>Overlay with button</EuiButton>
            <EuiSpacer size="xxl" />
        </React.Fragment>
    );
};