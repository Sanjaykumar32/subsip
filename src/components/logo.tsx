import { PoshSubLogo, PoshSubLogoProps } from "assets";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export function Logo(props: PoshSubLogoProps): ReactElement {
  const navigate = useNavigate();

  return (
    <div
      style={{ width: "150px", height: "48px", cursor: "pointer", }}
      onClick={() => navigate('/')}
      className='logoHheader'
    >
      <PoshSubLogo {...props} />
    </div>
  );
}
