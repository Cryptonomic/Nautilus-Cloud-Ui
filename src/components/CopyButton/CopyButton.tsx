import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import copyIcon from '../../assets/img/copy-icon.svg';
import { copyTxt } from '../../utils/general';
import CustomImg from '../../components/CustomImg';

const CopyButton = ({ txt = '', margin = '0 auto 0 10px' }) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
        copyTxt(txt);
        setTimeout(onClose, 600);
    };

    const onClose = () => setOpen(false);

    return (
        <Tooltip
            PopperProps={{ disablePortal: true }}
            onClose={onClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied!"
        >
            <CustomImg
                src={copyIcon}
                size="0.9375rem"
                margin={margin}
                name="copy-icon"
                onClick={onOpen}
            />
        </Tooltip>
    );
};

export default CopyButton;
