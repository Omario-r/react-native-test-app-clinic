import React from 'react';
import Svg, { G, Path } from 'react-native-svg';


export const PlusIcon = (height = '100%', width = '100%', color = '#ff0000') => (
  <Svg x="0px" y="0px" viewBox="0 0 512 512" height={height} width={width}>
    <G>
      <Path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
        fill={color} fillRule="evenodd"
      />
    </G>
  </Svg>
);


export const CheckmarkIcon = (height = '100%', width = '100%', color = '#ff0000') => (
  <Svg x="0px" y="0px" viewBox="0 0 512 512" height={height} width={width}>
    <G>
      <Path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
			c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
			C514.5,101.703,514.499,85.494,504.502,75.496z"
        fill={color} fillRule="evenodd"
      />
    </G>
  </Svg>
);
