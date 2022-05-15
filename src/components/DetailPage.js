/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
// import * as d3 from 'd3'
import { StyleSheet, css } from 'aphrodite';
import switchActive from '../img/V_Switch_Active.svg';
import switchInctive from '../img/V_Switch_Inactive.svg';
import titleCoord from '../img/Temp_V-1_Title.svg';
import orImg from '../img/V_or.svg';
import xImg from '../img/V_X.svg';
import leftQuote from '../img/V-2_Placard-4.svg';
import rightQuote from '../img/V-2_Placard-5.svg';
import mediumImg from '../img/V-2_Placard-3.svg';
import artistImg from '../img/V-2_Placard-2.svg';
import titleWordsImg from '../img/Temp_V-2_Subtitle.svg';
import menuBack from '../img/V_Menu_Home.svg';
import menuLegend from '../img/V_Menu_Key.svg';
import panelFrame from '../img/V-7_Frame_BB.svg';
import secondRender from '../img/IMG-5_2nd-Render.png';
import thirdRender from '../img/IMG-4_3rd-Render.png';
import proprieterImg from '../img/V-3_Proprieter.svg';
import swatchA from '../img/IMG-8_Swatch-A.png';
import swatchB from '../img/IMG-8_Swatch-B.png';
import swatchC from '../img/IMG-8_Swatch-C.png';
// import swatchBox from '../img/V-8_Box.svg';
import fig1 from '../img/V-8_Fig-1.svg';
import fig2 from '../img/V-8_Fig-2.svg';
import fig3 from '../img/V-8_Fig-3.svg';
import fig1_1 from '../img/V-8_Fig-1.svg';
import fig2_1 from '../img/V-8_Fig-1.svg';
import fig3_1 from '../img/V-8_Fig-1.svg';
import fig1_12 from '../img/V-8_Fig-1.svg';
import fig2_12 from '../img/V-8_Fig-1.svg';
import fig3_12 from '../img/V-8_Fig-1.svg';
import fig1_15 from '../img/V-8_Fig-1.svg';
import fig2_15 from '../img/V-8_Fig-1.svg';
import fig3_15 from '../img/V-8_Fig-1.svg';
// import dottedSwatchLine from '../img/V_Dotted-Segment.svg';
// import priceIcon from '../img/V_Switch-Inactive.svg';
// import assetValue from '../img/V-13_Asset-Value.svg';
// import printValue from '../img/V-12_Print-Value.svg';
import centerFrame from '../img/V-9_Ribbon.svg';
import swatchBracket from '../img/V-8_Swatches-2.svg';
import swatchBracket_1 from '../img/V-8_Swatches-2.svg';
import swatchBracket_12 from '../img/V-8_Swatches-2.svg';
import swatchBracket_15 from '../img/V-8_Swatches-2.svg';
import paletteWheel from '../img/Temp_V-9_Pie.svg';
import paletteLine from '../img/Temp_V-14_Bar.svg';
import bubble from '../img/V-10_Themes-1.svg';
import wineUp from '../img/V-10_Symbol-1.svg';
import wineDown from '../img/V-10_Symbol-3.svg';
// import themesPlus from '../img/V-10_Themes-2.svg'
import centerTag2 from '../img/V_Scalable_Tag-2.svg';
import centerTag1 from '../img/V_Scalable_Tag-2.svg';
import castOuter from '../img/V-11_Cast.svg';
import castBubble from '../img/V_Scalable_Bubble.svg';
// import castTag from '../img/V-11_Cast-Label.svg';
import cast1 from '../img/V-11_Cast_Char-1.svg';
import cast2 from '../img/V-11_Cast_Char-2.svg';
import cast1Hover from '../img/V-11_Cast-1-Hover.svg';
import cast2Hover from '../img/V-11_Cast-2-Hover.svg';
import castBaby from '../img/V-11_Cast_Baby-1.svg';
import fourthRenderBox from '../img/V-15_4th-R.svg';
import fourthRenderBox_1 from '../img/V-15_4th-R.svg';
import fourthRenderBox_12 from '../img/V-15_4th-R.svg';
import fourthRenderBox_15 from '../img/V-15_4th-R.svg';
import fourthRenderLabel from '../img/V_Scalable_Tag-2.svg';
import fourthRender from '../img/IMG-15_4th-Render.png';
import ratingTag from '../img/V-16_Tag.svg';
import rating from '../img/Temp_V-16_Grade.svg';
import infoConnect from '../img/V_Connect_S.svg';

import cost2 from '../img/V-12_Cost-2.svg';
import usd from '../img/V-13_usd.svg';
import valueSvg2 from '../img/V-13_Value-2.svg';

import adjustOverlay from '../img/PP-Guide-900.png'

// const baseViewportWidth = 1900

const orange = "#fbae5c";

// const debugStyles = {
//     'title-col': {
//         width: true
//     }
// }

const aspectValues = {
    'title-col': {
        bottom: {
            '4/3': 14.93,
            '16/9': 11.55,
            '32/15': 9.7
        },
        height: {
            '4/3': 57,
            '16/9': 67.3,
            '32/15': 77
        },
        left: {
            '4/3': 5.83,
            '16/9': 8.43,
            '32/15': 8.43
        }
    },
    'panel-col': {
        top: {
            '4/3': 10.21,
            '16/9': 7,
            '32/15': 4.3
        },
        left: {
            '4/3': 23.22,
            '16/9': 26.9,
            '32/15': 27.4
        },
        width: {
            '4/3': 37.4,
            '16/9': 30.05,
            '32/15': 29.03
        },
        height: {
            '4/3': 79,
            '16/9': 84.81,
            '32/15': 92
        },
    },
    'info-col': {
        top: {
            '4/3': 8,
            '16/9': 9.63,
            '32/15': 4.95
        },
        width: {
            '4/3': 33,
            '16/9': 36.5,
            '32/15': 36.4
        },
        left: {
            '4/3': 62.64,
            '16/9': 59,
            '32/15': 59.22
        },
        height: {
            '4/3': 84,
            '16/9': 82,
            '32/15': 90.5
        }
    },
    'dotted-swatch-line': {
        left: {
            '4/3': -6.9,
            '16/9': -6,
            '32/15': -10
        },
        top: {
            '4/3': 53.8,
            '16/9': 54.8,
            '32/15': 53
        }
    },
    'fourth-render-frame': {
        width: {
            '4/3': 50,
            '16/9': 35.5,
            '32/15': 35
        },
        left: {
            '4/3': 3,
            '16/9': 4,
            '32/15': 0
        },
        top: {
            '4/3': 16,
            '16/9': 16,
            '32/15': 11
        }
    },
    'fourth-render': {
        width: {
            '4/3': 45,
            '16/9': 32,
            '32/15': 30
        },
        left: {
            '4/3': 5.5,
            '16/9': 5.8,
            '32/15': 2.5
        },
        top: {
            '4/3': 20,
            '16/9': 20,
            '32/15': 18
        }
    },
    'fourth-render-tag': {
        width: {
            '4/3': 25,
            '16/9': 18,
            '32/15': 15
        },
        left: {
            '4/3': 52.9,
            '16/9': 39.3,
            '32/15': 38.2
        },
        top: {
            '4/3': 25,
            '16/9': 25,
            '32/15': 21
        }
    },
    'fourth-render-line': {
        left: {
            '4/3': 52,
            '16/9': 39.8,
            '32/15': 33.4
        },
        top: {
            '4/3': 53.7,
            '16/9': 55.5,
            '32/15': 52
        },
        width: {
            '4/3': 17,
            '16/9': 10,
            '32/15': 10
        }
    },
    'rating-group': {
        width: {
            '4/3': 19,
            '16/9': 15,
            '32/15': 17.3
        },
        left: {
            '4/3': 68,
            '16/9': 50,
            '32/15': 45.55
        },
        top: {
            '4/3': 53.8,
            '16/9': 55.8,
            '32/15': 53
        }
    },
    'back-line-group': {
        top: {
            '4/3': 59.3,
            '16/9': 55.2,
            '32/15': 58.1
        },
        left: {
            '4/3': -1,
            '16/9': -0.9,
            '32/15': -0.89
        }
    },
    'back-line': {
        width: {
            '4/3': 90,
            '16/9': 89,
            '32/15': 89
        }
    },
    'title-box': {
        height: {
            '4/3': 40,
            '16/9': 36.31,
            '32/15': 40
        }
    },
    'title-coord': {
        marginTop: {
            '4/3': 126,
            '16/9': 90,
            '32/15': 113
        }
    },
    'title-options': {
        marginBottom: {
            '4/3': 60,
            '16/9': 42,
            '32/15': 30
        }
    },
    'lower-block': {
        marginTop: {
            '4/3': 18,
            '16/9': 12,
            '32/15': 6.7
        }
    },
    'palette-bar': {
        maxWidth: {
            '4/3': 93,
            '16/9': 82,
            '32/15': 82
        }
    },
    'second-render': {
        top: {
            '4/3': 2.5,
            '16/9': 2.6,
            '32/15': 2.2
        }
    },
    'swatch': {
        width: {
            '4/3': 94,
            '16/9': 80,
            '32/15': 70
        }
    },
    'swatch-block': {
        height: {
            '4/3': 63,
            '16/9': 68,
            '32/15': 65
        }
    },
    'swatch-items': {
        marginRight: {
            '4/3': 12.3,
            '16/9': 6,
            '32/15': 7
        },
        width: {
            '4/3': 91,
            '16/9': 67,
            '32/15': 66.7
        }
    },
    'info-center-group': {
        height: {
            '4/3': 43,
            '16/9': 66,
            '32/15': 70.5
        },
        top: {
            '4/3': 19.5,
            '16/9': 7,
            '32/15': 7
        },
        width: {
            '4/3': 73,
            '16/9': 65,
            '32/15': 65
        }
    },
    'cast-icon-1': {
        top: {
            '4/3': 50,
            '16/9': 54,
            '32/15': 51
        }
    },
    'cast-icon-2': {
        top: {
            '4/3': 51,
            '16/9': 56,
            '32/15': 53
        }
    },
    'cast-baby': {
        top: {
            '4/3': 22.5,
            '16/9': 13.5,
            '32/15': 13.5
        }
    },
    'upper-block': {
        height: {
            '4/3': 57.5,
            '16/9': 55,
            '32/15': 58.5
        }
    },
    'info-connect': {
        top: {
            '4/3': 55.8,
            '16/9': 52.5,
            '32/15': 50.5
        },
        width: {
            '4/3': 4.8,
            '16/9': 16,
            '32/15': 16
        },
        left: {
            '4/3': 11.5,
            '16/9': 0,
            '32/15': 0
        }
    },
    'value-amount-wrapper': {
        height: {
            '4/3': 18.5,
            '16/9': 27.5,
            '32/15': 27.5
        }
    },
    'value-block': {
        height: {
            '4/3': 19.5,
            '16/9': 22.5,
            '32/15': 20
        }
    },
    'info-cast-group': {
        left: {
            '4/3': 44,
            '16/9': 35,
            '32/15': 35
        },
        top: {
            '4/3': 0,
            '16/9': -11,
            '32/15': -10.4
        }
    },
    'theme-icon-1': {
        top: {
            '4/3': 10,
            '16/9': 6,
            '32/15': 8
        }
    },
    'value-amount': {
        fontSize: {
            '4/3': 250,
            '16/9': 220,
            '32/15': 250
        }
    }
};

const calculateStyle = (element, style) => {
    const {innerWidth, innerHeight} = window;
    const currentRatio = Math.max(1.6, innerWidth/innerHeight);
    const aspectRatios = [{name: '4/3', value: 4/3},
        {name: '16/9', value: 16/9},
        {name: '32/15', value: 32/15}];
    let lowerRatio = {};
    let higherRatio = {};
    aspectRatios.forEach((ratio,i,ratios) => {
        if (currentRatio < ratio.value && i === 0) {
            higherRatio = lowerRatio = ratio;
        } else if (currentRatio >= ratio.value) {
            if (i === ratios.length-1) {
                higherRatio = lowerRatio = ratio;
            } else if (ratios[i+1] && currentRatio < ratios[i+1].value) {
                higherRatio = ratios[i+1];
                lowerRatio = ratio;
            }
        } 
    });
    
    if (higherRatio.name === lowerRatio.name) {
        const value = aspectValues[element][style][higherRatio.name];
        // if (debugStyles[element][style]) {
        //     console.log(element,style,value)
        // }
        return value;
    }
    const higherValue = aspectValues[element][style][higherRatio.name];
    const lowerValue = aspectValues[element][style][lowerRatio.name];
    const lerpValue = ((higherValue-lowerValue)/(higherRatio.value-lowerRatio.value)) * (currentRatio - lowerRatio.value) + lowerValue;
    // if (debugStyles[element][style]) {
    //     console.log(element,style,lerpValue)
    // }
    return lerpValue;
};


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {},
            update: 0, 
            viewportScale: 1, 
            showStats: true,
            showBar: true,
            stabilize: false,
            cast1Src: cast1,
            cast2Src: cast2
        };
        this.toggleStats = this.toggleStats.bind(this);
        this.toggleStabilize = this.toggleStabilize.bind(this);
        this.toggleBar = this.toggleBar.bind(this);
        this.rootRef = React.createRef();
    }

    calculateAspectDelta() {
        const {innerWidth, innerHeight} = window;
        const currentAspect = innerWidth/innerHeight;
        if (currentAspect > 1.6 && currentAspect <= 32/15) {
            return {
                rootWidth: 1,
                rootHeight: 1
            };
        } else if (currentAspect <= 1.6) {
            return {
                rootWidth: (1.6) / currentAspect,
                rootHeight: 1
            };
        } else if (currentAspect > 32/15) {
            return {
                rootWidth: 1,
                rootHeight: currentAspect / (32/15)
            };
        } 
    }

    calculateStyles() { 
        const {rootWidth, rootHeight} = this.calculateAspectDelta();
        const styles = StyleSheet.create({
            'root': {
                width: `${100 * rootWidth}vw`,
                height: `${100 * rootHeight}vh`,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
            },
            'upper-actions': {
                display: 'flex',
                position: 'absolute',
                top: `3.5%`,
                left: `2.05%`,
                width: `4.3%`,
                justifyContent: 'space-between'
            },
            'upper-action-back': {
                width: `26%`, 
                cursor: 'pointer'
            },
            'upper-action-legend': {
                width: `35.5%`, 
                cursor: 'pointer'
            },
            'left-x': {
                width: `.625%`
            },
            'back-line-group': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: 'flex',
                position: 'absolute',
                top: `${calculateStyle('back-line-group', 'top')}%`,
                left: `${calculateStyle('back-line-group', 'left')}%`,
                width: '101.25%',
                justifyContent: 'center'
            },
            'back-line': {
                background: orange,
                height: `1px`,
                width: `${calculateStyle('back-line', 'width')}%`,
                alignSelf: 'end'
            },
            'title-col': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                bottom: `${calculateStyle('title-col','bottom')}%`,
                left: `${calculateStyle('title-col','left')}%`,
                width: `13.54%`,
                height: `${calculateStyle('title-col','height')}%`,
                position: 'absolute',
                background: this.state.stabilize ? 'rgba(255,0,0,.1)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            },
            'panel-col': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                position: 'absolute',
                top: `${calculateStyle('panel-col','top')}%`,
                left: `${calculateStyle('panel-col','left')}%`,
                width: `${calculateStyle('panel-col','width')}%`,
                height: `${calculateStyle('panel-col','height')}%`,
                alignItems: 'center',
                display: 'flex',
                background: this.state.stabilize ? 'rgba(0,255,0,.1)' : 'none'
            },
            'info-col': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                position: 'absolute',
                top: `${calculateStyle('info-col','top')}%`,
                left: `${calculateStyle('info-col','left')}%`,
                width: `${calculateStyle('info-col','width')}%`,
                height: `${calculateStyle('info-col','height')}%`,
                background: this.state.stabilize ? 'rgba(0,0,255,.1)' : 'none'
            },
            'title-coord': {
                width: '88.5%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: this.state.showStats ? '' : `${calculateStyle('title-coord','marginTop')}%`
            },
            'title-or': {
                width: `10%`,
                alignSelf: 'center',
                display: this.state.showStats ? '' : 'none'
            },
            'title-words-wrap': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                height: '53.5%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            },
            'title-section': {
                width: '100%',
                height: '100%',
                // position: 'absolute',
            },
            'title-box': {
                width: `100%`,
                height: `${13.54 * (298/260) * rootWidth}vw`,
                //height: `${calculateStyle('title-box','height')}%`,
                border: `solid ${orange} 1px`,
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'white',
                display: this.state.showStats ? 'flex' : 'none'
            },
            'panel-frame': {
                position: 'absolute',
                background: 'white',
                width: '100%'
            },
            'panel-title': {
                display: 'flex',
                outline: this.state.stabilize ? '1px solid pink' : '',
                justifyContent: 'space-between',
                width: '91.4%',
                margin: '0 auto'
            },
            'left-quote': {
                width: `5%`,
                paddingTop: '3%',
                alignSelf: 'flex-start',
            },
            'right-quote': {
                width: `4.5%`,
                paddingBottom: '4.38%',
                alignSelf: 'flex-end'
            },
            'title-words': {
                width: '79.8%'
            },
            'panel-label': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: 'flex',
                flexDirection: 'column',
                gap: `${30 / 9}%`,
                alignSelf: 'flex-end',
                width: '81%',
                marginLeft: 'auto',
                flexGrow: '1',
                justifyContent: 'inherit',
                paddingTop: '3%'
            },
            'label-artist': {
                marginRight: `13%`,
                marginLeft: '3%',
                outline: this.state.stabilize ? '1px solid pink' : '',
            },
            'label-medium': {
                marginRight: `13%`,
                marginBottom: `12%`,
                outline: this.state.stabilize ? '1px solid pink' : '',
            },
            'second-render': {
                position: 'absolute',
                left: '5.5%',
                top: `${calculateStyle('second-render','top')}%`,
                width: '88.9%',
                filter: this.state.showBar ? 'blur(1px) opacity(0.15)' : ''
            },
            'third-render': {
                position: 'absolute',
                left: '5.5%',
                top: `${calculateStyle('second-render','top')}%`,
                width: '88.9%',
                visibility: this.state.showBar ? '' : 'hidden'
            },
            'title-options': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: 'flex',
                justifyContent: 'space-between',
                width: '98.5%',
                marginBottom: this.state.showStats ? '' : `${calculateStyle('title-options','marginBottom')}%`,
                transform: 'translate(0, 100%)'
            },
            'stats-option': {
                display: 'flex',
                outline: this.state.stabilize ? '1px solid pink' : '',
                gap: '41%'
            },
            'stabilize-option': {
                display: 'flex',
                outline: this.state.stabilize ? '1px solid pink' : '',
                justifyContent: 'flex-end',
                gap: '28%'
            },
            'option-box': {
                width: `${.65 * rootWidth}vw`,
                cursor: 'pointer'
            },
            'title-option-text': {
                color: orange,
                fontSize: `74%`,
                fontFamily: 'brandon-grotesque',
                letterSpacing: '.087vw',
                margin: 'auto 0'
            },
            'panel-wrapper': {
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            },
            'proprieter-wrapper': {
                width: '100%',
                display: 'flex',
                visibility: this.state.showStats ? 'visible' : 'hidden'
            },
            'proprieter-box': {
                width: '87%',
                marginLeft: 'auto',
                transform: 'translate(0, 25%)'
            },
            'swatch': {
                width: `${3.73 * rootWidth}vw`,
                height: `${3.73 * rootWidth}vw`,
                outline: `solid 1px ${orange}`,
            },
            'swatch-fig': {
                width: `19%`,
                marginBottom: 'auto',
                paddingRight: `12%`
            },
            'swatch-block': {
                width: '35%',
                height: `${calculateStyle('swatch-block','height')}%`,
                display: 'flex', 
                // gap: `${47/19.2}vw`,
            },
            'swatch-items': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: `${calculateStyle('swatch-items','width')}%`,
                // marginRight: `${calculateStyle('swatch-items','marginRight')}%`,
            },
            'swatch-item': {
                display:'flex',
                position: 'relative',
                height: '23%'
            },
            'upper-block': {
                width: `100%`,
                height: `${calculateStyle('upper-block','height')}%`,
                // outline: `solid 1px lightblue`,
                position: `relative`,
                visibility: this.state.showStats ? '' : 'hidden',
                //overflow: 'hidden'
            },
            'info-center-group': {
                position: `absolute`,
                width: `${calculateStyle('info-center-group','width')}%`,
                top: `${calculateStyle('info-center-group','top')}%`,
                left: `24.8%`,
                height: `${calculateStyle('info-center-group','height')}%`,
                // transform: `translate(-50%,-50%)`
            },
            'center-frame': {
                top: `28.5%`,
                left: `18%`,
                width: '64.3%',
                position: `absolute`,
                // transform: `translate(-30%,-50%)`
            },
            'swatch-bracket': {
                height: '100%',
            },
            'info-connect': {
                top: `${calculateStyle('info-connect','top')}%`,
                left: `${calculateStyle('info-connect','left')}%`,
                width: `${calculateStyle('info-connect','width')}%`,
                height: `17.5%`,
                position: `absolute`,
                // display: 'none'
            },
            'palette-wheel': {
                width: `26.5%`,
                position: `absolute`,
                top: `40.5%`,
                left: `30%`
            },
            'info-themes-group': {
                position: `absolute`,
                width: `28%`,
                top: `70%`,
                left: `60.2%`,
                height: 'inherit'
                // transform: `translate(-50%,-50%)`
            },
            'info-cast-group': {
                position: `absolute`,
                top: `${calculateStyle('info-cast-group','top')}%`,
                left: `${calculateStyle('info-cast-group','left')}%`,
                width: `28%`,
                height: 'inherit'
                // transform: `translate(-50%,-50%)`
            },
            'cast-group-wrap': {
                position: 'relative',
                height: '50%',
                width: '90%'
            },
            'lower-block': {
                width: `100%`,
                height: `100%`,
                // outline: `solid 1px lightcoral`,
                position: `relative`,
                marginTop:  `${calculateStyle('lower-block','marginTop')}%`
            },
            'info-blocks': {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            },
            'value-block-item': {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            },
            'price-icon-left': {
                width: `56%`
            },
            'price-icon-right': {
                width: `56%`,
                marginLeft: 'auto'
            },
            'value-text': {
                width: 'fit-content',
                fontFamily: 'brandon-grotesque',
                letterSpacing: '.25em',
                color: orange,
                fontWeight: '300'
            },
            'print-item': {
                display: 'flex',
                flexDirection: 'column'
            },
            'print-value-text': {
                marginLeft: 'auto',
                transform: 'translateX(3%)'
            },
            'value-block': {
                paddingLeft: `9%`,
                position: 'absolute',
                bottom: '4.5%',
                display: 'flex',
                justifyContent: 'space-between',
                height: `${calculateStyle('value-block','height')}%`,
                width: '-webkit-fill-available',
                // eslint-disable-next-line
                width: '-moz-available',
                // eslint-disable-next-line
                width: 'fill-available',
                left: '-12px'
            },
            'center-group-wrapper': {
                position: 'relative',
                width: '100%',
                height: '100%'
            },
            'center-tag-char': {
                width:`33.1%`,
                height: '6.9%',
                position: 'absolute',
                left:`45.4%`,
                top:`25.5%`,
                transform: 'scaleX(1.35)'
            },
            'center-tag-themes': {
                width:`23.9%`,
                position: 'absolute',
                left:`83.3%`,
                top: `55.3%`
            },
            'theme-bubble': {
                width:`63%`,
                position: 'absolute',
                left:`14%`
            },
            'theme-icon-1': {
                width:`17.8%`,
                position: 'absolute',
                left:`37%`,
                top: `${calculateStyle('theme-icon-1','top')}%`
            },
            'theme-icon-2': {
                width:`17.9%`,
                position: 'absolute',
                left:`126.2%`,
                top: `${calculateStyle('theme-icon-1','top')}%`
            },
            'cast-outer': {
                width:`23%`,
                position: 'absolute',
                left:`3.3%`,
                top:`44.4%`
            },
            'cast-bubble': {
                width:`133.5%`,
                position: 'absolute',
                left:`68%`,
                top:`35%`
            },
            'cast-icon-1': {
                cursor: "pointer",
                width:`25%`,
                position: 'absolute',
                left:`79%`,
                top: `${calculateStyle('cast-icon-1','top')}%`
            },
            'cast-icon-2': {
                cursor: "pointer",
                width:`21%`,
                position: 'absolute',
                left:`112%`,
                top: `${calculateStyle('cast-icon-2','top')}%`
            },
            'cast-baby': {
                width:`80%`,
                position: 'absolute',
                left:`140%`,
                top: `${calculateStyle('cast-baby','top')}%`
            },
            // 'cast-tag': {
            // 'dotted-swatch-line': {
            //     width:'66px',
            //     position: 'relative',
            //     top:'135px',
            //     left:'-38px'
            // },
            'palette-bar-wrapper': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: "flex",
                height: '5%'
            },
            'palette-switch': {
                width: `1.8%`,
                marginRight: `3.2%`,
                marginLeft: '2.3%',
                cursor: 'pointer',
            },
            'value-switch': {
                width: `4%`,
                transform: `translate(-320%, 0px)`
            },
            'value-switch-right': {
                width: `4%`,
                transform: `translate(-180%, 0px)`
            },
            'palette-bar': {
                width: this.state.showBar ? '' : '0',
                margin: 'auto 0',
                maxWidth: `${calculateStyle('palette-bar','maxWidth')}%`
            },
            'value-amount-wrapper': {
                display: 'flex',
                height: `${calculateStyle('value-amount-wrapper','height')}%`,
                transform: 'translate(2%, 35%)'
            },
            'value-column': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '50%'
            },
            'value-amount': {
                color: orange,
                marginTop: 'auto',
                lineHeight: '65%',
                fontSize: `${calculateStyle('value-amount','fontSize')}%`,
                fontFamily: 'brandon-grotesque',
                fontWeight: 100,
                letterSpacing: '.18em'
            },
            'usd': {
                marginTop: 'auto',
                width: '20px',
            },
            'no-sale': {
                color: orange,
                margin: 'auto 0',
                fontFamily: 'brandon-grotesque',
                letterSpacing: '0.25em',
                transform: 'translateX(-3%)'
            },
            'print-amount-wrapper': {
                display: 'flex',
                height: '27.5%',
                justifyContent: 'flex-end',
                transform: 'translate(2%, 36%)'
            },
            'asset-value': {
                transform: `translate(-10%, 0px)`,
                display: 'flex'
            },
            'fourth-render-wrapper': {
                position: 'relative',
                height: 'inherit',
                display: this.state.showStats ? '' : 'none'
            },
            'dotted-swatch-line': {
                position: 'absolute',
                width: `10%`,
                height: '1px',
                left: `${calculateStyle('dotted-swatch-line','left')}%`,
                top: `${calculateStyle('dotted-swatch-line','top')}%`
            }, 
            'fourth-render-frame': {
                position: 'absolute',
                width: `${calculateStyle('fourth-render-frame','width')}%`,
                left: `${calculateStyle('fourth-render-frame','left')}%`,
                top: `${calculateStyle('fourth-render-frame','top')}%`
            }, 
            'fourth-render': {
                position: 'absolute',
                width: `${calculateStyle('fourth-render','width')}%`,
                left: `${calculateStyle('fourth-render','left')}%`,
                top: `${calculateStyle('fourth-render','top')}%`
            }, 
            'fourth-render-tag': {
                position: 'absolute',
                transform: 'scaleX(1.45)',
                width: `${calculateStyle('fourth-render-tag','width')}%`,
                left: `${calculateStyle('fourth-render-tag','left')}%`,
                top: `${calculateStyle('fourth-render-tag','top')}%`
            }, 
            'fourth-render-line': {
                position: 'absolute',
                width: `${calculateStyle('fourth-render-line','width')}%`,
                minHeight: '2px',
                left: `${calculateStyle('fourth-render-line','left')}%`,
                top: `${calculateStyle('fourth-render-line','top')}%`
            }, 
            'rating-tag': {
                transform: `translate(0, -50%)`,
            }, 
            'rating-icon': {
                position: 'absolute',
                width: `30%`,
                left: `50%`,
                top: `-12%`
            },
            'rating-group': {
                position: 'relative',
                width: `${calculateStyle('rating-group','width')}%`,
                left: `${calculateStyle('rating-group','left')}%`,
                top: `${calculateStyle('rating-group','top')}%`
            },
            'lower-title': {
                display: 'flex',
                flexDirection: 'column',
                gap: `${80}%`
            },
            'root-wrap': {
                width: '100vw',
                height: '100vh',
                overflowX: rootWidth > 1 ? '' : 'hidden',
                overflowY: rootHeight > 1 ? '' : 'hidden'
            },
            'overlay': {
                zIndex: 1000
            }
        });

        this.setState(() => ({styles}));
    }

    toggleStats() {
        this.setState(({showStats}) => ({showStats: !showStats}), this.calculateStyles);
    }

    toggleStabilize() {
        this.setState(({stabilize}) => ({stabilize: !stabilize}), this.calculateStyles);
    }

    toggleBar() {
        this.setState(({showBar}) => ({showBar: !showBar}), this.calculateStyles);
    }

    componentDidMount() {
        const resizeObserver = new ResizeObserver(() => this.calculateStyles());
        resizeObserver.observe(this.rootRef.current);
        this.setState(() => ({resizeObserver}));
    }

    render() {
        const {row, col} = this.props.activePanel.props
        const temp = {}
        if (row === 1 && [1,2,3].includes(col)) {
            if (col === 1) {
                temp.swatchBracket = swatchBracket_1
                temp.fourthRenderBox = fourthRenderBox_1
                temp.fig1 = fig1_1
                temp.fig2 = fig2_1
                temp.fig3 = fig3_1
            } else if (col === 2) {
                console.log(row, col)
                temp.swatchBracket = swatchBracket_12
                temp.fourthRenderBox = fourthRenderBox_12
                temp.fig1 = fig1_12
                temp.fig2 = fig2_12
                temp.fig3 = fig3_12
            } else if (col === 3) {
                temp.swatchBracket = swatchBracket_15
                temp.fourthRenderBox = fourthRenderBox_15
                temp.fig1 = fig1_15
                temp.fig2 = fig2_15
                temp.fig3 = fig3_15
            }
        } else {
            temp.swatchBracket = swatchBracket
            temp.fourthRenderBox = fourthRenderBox
            temp.fig1 = fig1
            temp.fig2 = fig2
            temp.fig3 = fig3
        }

        const {styles} = this.state;
        return (<div className={css(styles["root-wrap"])}>
            <div ref={this.rootRef} className={css(styles["root"])} id="detail-page-root">
                {true && <img className={css(styles["overlay"])} src={adjustOverlay} alt='overlay'/>}
                <div className={css(styles["upper-actions"])}>
                    <img className={css(styles["upper-action-back"])} src={menuBack} onClick={this.props.closePanelDetail} alt='detail page back button'/>
                    <img className={css(styles["upper-action-legend"])} src={menuLegend} onClick={this.toggleOutlines} alt='detail page legend button'/>
                </div>
                <div className={css(styles["back-line-group"])}>
                    <img className={css(styles["left-x"])} src={xImg} alt='x mark for backline'/>
                    <div className={css(styles["back-line"])}/>   
                </div>
                <div className={css(styles['title-col'])}>
                        <img className={css(styles['title-coord'])} src={titleCoord} alt="panel coordinate"/>
                        <img className={css(styles['title-or'])} src={orImg} alt=""/>
                        <div className={css(styles['title-box'])}>
                            <div className={css(styles['title-words-wrap'])}>
                                <div className={css(styles['panel-title'])}>
                                    <img className={css(styles['left-quote'])} src={leftQuote} alt=""/>
                                    <img className={css(styles['title-words'])} src={titleWordsImg} alt=""/>
                                    <img className={css(styles['right-quote'])} src={rightQuote} alt=""/>
                                </div>
                            </div>
                            <div className={css(styles['panel-label'])}>
                                <img className={css(styles['label-artist'])} src={artistImg} alt=""/>
                                <img className={css(styles['label-medium'])} src={mediumImg} alt=""/>
                            </div>
                        </div>
                        <div className={css(styles['title-options'])}>
                            <div className={css(styles['stats-option'])}>
                                <img className={css(styles['option-box'])} alt="" onClick={this.toggleStats} src={this.state.showStats ? switchActive : switchInctive}/>
                                <div className={css(styles['title-option-text'])}>
                                    STATS
                                </div>
                            </div>  
                            <div className={css(styles['stabilize-option'])}>
                                <img className={css(styles['option-box'])} alt="" onClick={this.toggleStabilize} src={this.state.stabilize ? switchActive : switchInctive}/>
                                <div className={css(styles['title-option-text'])}>
                                    STABILIZE
                                </div>
                            </div>  
                        </div>
                        <div className={css(styles['proprieter-wrapper'])}>
                            <img className={css(styles['proprieter-box'])} alt="" src={proprieterImg}/>
                        </div>
                </div>
                <div className={css(styles['panel-col'])}>
                    <img className={css(styles['panel-frame'])} src={panelFrame} alt=""/>
                    <img className={css(styles['second-render'])} src={secondRender} alt=""/>
                    <img className={css(styles['third-render'])} src={thirdRender} alt=""/>
                </div>
                <div className={css(styles['info-col'])}>
                    <div className={css(styles['info-blocks'])}>
                        <div className={css(styles['upper-block'])}>
                            <div className={css(styles['swatch-block'])}>
                                <div className={css(styles['swatch-items'])}>
                                    <div className={css(styles['swatch-item'])}>
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={temp.fig1}/>
                                        <img className={css(styles['swatch'])} src={swatchA} alt=""/>
                                    </div>
                                    <div className={css(styles['swatch-item'])}>
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={temp.fig2}/>
                                        <img className={css(styles['swatch'])} src={swatchB} alt=""/>
                                    </div>
                                    <div className={css(styles['swatch-item'])}>
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={temp.fig3}/>
                                        <img className={css(styles['swatch'])} src={swatchC} alt=""/>
                                    </div>
                                </div>
                                <img className={css(styles['swatch-bracket'])} alt="swatch grouping" src={temp.swatchBracket}/>
                            </div>
                            <div className={css(styles['info-center-group'])}>
                                <div className={css(styles['center-group-wrapper'])}>
                                    <img className={css(styles['info-connect'])} alt="info connect" src={infoConnect}/>
                                    <img className={css(styles['center-frame'])} alt="center frame" src={centerFrame}/>
                                    <img className={css(styles['palette-wheel'])} alt="palette wheel" src={paletteWheel}/>
                                    <img className={css(styles['center-tag-char'])} alt="character study box" src={centerTag2}/>
                                    <img className={css(styles['center-tag-themes'])} alt="themes box" src={centerTag1}/>
                                </div>
                                <div className={css(styles['info-themes-group'])}>
                                    <img className={css(styles['theme-bubble'])} alt="wine holder" src={bubble}/>
                                    <img className={css(styles['theme-icon-1'])} alt="wine up" src={wineUp}/>
                                    <img className={css(styles['theme-icon-2'])} alt="wine down" src={wineDown}/>
                                </div>
                            </div>
                            <div className={css(styles['info-cast-group'])}>
                                <div className={css(styles['cast-group-wrap'])}>
                                    <img className={css(styles['cast-outer'])} alt="cast outer" src={castOuter}/>
                                    <img className={css(styles['cast-bubble'])} alt="cast bubble" src={castBubble}/>
                                    <img className={css(styles['cast-icon-1'])} alt="cast 1" src={this.state.cast1Src}
                                        onMouseOver={() => {this.setState(()=>{return {cast1Src: cast1Hover}})}}
                                        onMouseOut={() => {this.setState(()=>{return {cast1Src: cast1}})}}/>
                                    <img className={css(styles['cast-icon-2'])} alt="cast 2" src={this.state.cast2Src}
                                        onMouseOver={() => {this.setState(()=>{return {cast2Src: cast2Hover}})}}
                                        onMouseOut={() => {this.setState(()=>{return {cast2Src: cast2}})}}/>
                                    <img className={css(styles['cast-baby'])} alt="cast baby" src={castBaby}/>
                                </div>
                            </div>
                            <div className={css(styles['value-block'])}>
                                <div className={css(styles['value-column'])}>
                                    {/* <img  alt='asset-text' src={valueSvg1}/> */}
                                    <div className={css(styles['value-text'])}>ASSET VALUE</div>
                                    <img className={css(styles['price-icon-left'])} alt='asset-icon' src={valueSvg2}/>
                                    <div className={css(styles['value-amount-wrapper'])}>
                                        <img className={css(styles['value-switch'])} alt='palette icon' src={switchActive}/>
                                        <div className={css(styles['asset-value'])}>
                                            <div className={css(styles['value-amount'])}>320.00</div>
                                            <img className={css(styles['usd'])} alt='US dollar unit' src={usd}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={css(styles['value-column'])}>
                                    {/* <img className={css(styles['value-text'], styles['print-value-text'])} alt='print-text' src={cost1}/> */}
                                    <div className={css(styles['value-text'], styles['print-value-text'])}>PRINT COST</div>
                                    <img className={css(styles['price-icon-right'])} alt='print-icon' src={cost2}/>
                                    <div className={css(styles['print-amount-wrapper'])}>
                                        <img className={css(styles['value-switch-right'])} alt='palette icon' src={switchActive}/>
                                        {/* <img className={css(styles['no-sale'])} alt='no sale' src={noSale}/> */}
                                        <div className={css(styles['no-sale'])}>NO SALE</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className={css(styles['lower-block'])}>
                            <div className={css(styles['palette-bar-wrapper'])}>
                                <img className={css(styles['palette-switch'])} alt='palette icon' onClick={this.toggleBar} src={this.state.showBar ? switchActive : switchInctive}/>
                                <img  className={css(styles['palette-bar'])} alt="palette line" src={paletteLine}/>
                            </div>
                            <div className={css(styles['fourth-render-wrapper'])}>
                                {/* <img className={css(styles['dotted-swatch-line'])} alt="dotted line" src={dottedSwatchLine}/> */}
                                <img className={css(styles['fourth-render-frame'])} alt="fourth render box" src={temp.fourthRenderBox}/>
                                <img className={css(styles['fourth-render'])} alt="fourth render" src={fourthRender}/>
                                <img className={css(styles['fourth-render-tag'])} alt="fourth render tag" src={fourthRenderLabel}/>
                                {/* <img className={css(styles['fourth-render-line'])} alt="dotted line" src={dottedSwatchLine}/> */}
                                <div className={css(styles['rating-group'])}>
                                    <img className={css(styles['rating-tag'])} alt="rating box" src={ratingTag}/>
                                    <img className={css(styles['rating-icon'])} alt="rating icon" src={rating}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default DetailPage