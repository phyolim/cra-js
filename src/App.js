import React, {useState} from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiHeader,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiOverlayMask,
  EuiButton,
  EuiButtonEmpty,
  EuiModal
} from '@elastic/eui';

function App() {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);


  return (
    <div className="App">
      <EuiHeader>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="#">Demo</EuiHeaderLogo>
        </EuiHeaderSectionItem>

        <EuiHeaderLinks>
          <EuiButtonEmpty onClick={()=> setIsPopoverOpen(true)}>
            Open Popover
          </EuiButtonEmpty>
        </EuiHeaderLinks>
      </EuiHeader>
      {isPopoverOpen &&
      <EuiOverlayMask>
        <EuiModal>
          <EuiButton onClick={()=> setIsPopoverOpen(false)}>
            Close
          </EuiButton>
        </EuiModal>
      </EuiOverlayMask>}
    </div>
  );
}

export default App;
