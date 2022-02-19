import React, { Component } from 'react'
// import * as d3 from 'd3'
import { StyleSheet, css } from 'aphrodite'
import switchActive from '../img/V_Switch-Active.svg';
import switchInctive from '../img/V_Switch-Inactive.svg';
import titleCoord from '../img/Temp_V-1_Title.svg';
import orImg from '../img/V_or.svg';
import xImg from '../img/V_X.svg'
import leftQuote from '../img/V-2_Placard-4.svg'
import rightQuote from '../img/V-2_Placard-5.svg'
import mediumImg from '../img/V-2_Placard-3.svg'
import artistImg from '../img/V-2_Placard-2.svg'
import titleWordsImg from '../img/Temp_V-2_Subtitle.svg'
import menuBack from '../img/V_Menu_Home.svg'
import menuLegend from '../img/V_Menu_Key.svg'
import panelFrame from '../img/V-GROUP_Panel.svg';
import secondRender from '../img/IMG-5_2nd-Render.png';
import thirdRender from '../img/IMG-4_3rd-Render.png';
import proprieterImg from '../img/V-3_Proprieter.svg'
import swatchA from '../img/IMG-8_Swatch-A.png';
import swatchB from '../img/IMG-8_Swatch-B.png';
import swatchC from '../img/IMG-8_Swatch-C.png';
// import swatchBox from '../img/V-8_Box.svg';
import fig1 from '../img/V-8_Fig-1.svg';
import fig2 from '../img/V-8_Fig-2.svg';
import fig3 from '../img/V-8_Fig-3.svg';
import dottedSwatchLine from '../img/V_Dotted-Segment.svg';
// import priceIcon from '../img/V_Switch-Inactive.svg';
// import assetValue from '../img/V-13_Asset-Value.svg';
// import printValue from '../img/V-12_Print-Value.svg';
import centerFrame from '../img/V-GROUP_Ribbon.svg';
import swatchBracket from '../img/V-8_Swatches-2.svg';
import paletteWheel from '../img/V-9_Subject-Ratio.svg';
import paletteLine from '../img/V-14_Color-Bar.svg';
import bubble from '../img/V-10_Bubble.svg';
import wineUp from '../img/V-10_Theme-1.svg';
import wineDown from '../img/V-10_Theme-2.svg';
import centerTag2 from '../img/V-9_Label.svg';
import centerTag1 from '../img/V-10_Label.svg';
import castOuter from '../img/V-11_Icon.svg';
import castBubble from '../img/V_Scalable_Bubble.svg';
// import castTag from '../img/V-11_Cast-Label.svg';
import cast1 from '../img/V-11_Cast-1.svg';
import cast2 from '../img/V-11_Cast-2.svg';
// import cast1Hover from '../img/V-11_Cast-1-Hover.svg';
// import cast2Hover from '../img/V-11_Cast-2-Hover.svg';
import castBaby from '../img/V-11_Baby.svg';
import fourthRenderBox from '../img/V-15_4th-R-Frame.svg';
import fourthRenderLabel from '../img/V-15_Label.svg';
import fourthRender from '../img/IMG-15_4th-Render.png';
import ratingTag from '../img/V-16_Tag.svg';
import rating from '../img/Temp_V-16_Grade.svg';
import infoConnect from '../img/V_Connect_S.svg';

import cost1 from '../img/V-12_Cost-1.svg';
import cost2 from '../img/V-12_Cost-2.svg';
import noSale from '../img/V-12_no-sale.svg';
import usd from '../img/V-13_usd.svg';
import valueSvg1 from '../img/V-13_Value-1.svg';
import valueSvg2 from '../img/V-13_Value-2.svg';

// const baseViewportWidth = 1900

const orange = "#fbae5c"

// const debugStyles = {
//     'title-col': {
//         width: true
//     }
// }

const aspectValues = {
    'title-col': {
        bottom: {
            '4/3': 14.93,
            '16/9': 9.14,
            '32/15': 7.77
        },
        height: {
            '4/3': 57,
            '16/9': 69.07,
            '32/15': 80
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
            '32/15': 4
        },
        left: {
            '4/3': 23.22,
            '16/9': 26.98,
            '32/15': 28.49
        },
        width: {
            '4/3': 37.4,
            '16/9': 29.9,
            '32/15': 26.93
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
            '32/15': 4
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
            '32/15': 92
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
            '32/15': 33.4
        },
        left: {
            '4/3': 3,
            '16/9': 4,
            '32/15': 0
        },
        top: {
            '4/3': 16,
            '16/9': 16,
            '32/15': 12
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
            '32/15': 1.8
        },
        top: {
            '4/3': 20,
            '16/9': 20,
            '32/15': 16
        }
    },
    'fourth-render-tag': {
        width: {
            '4/3': 25,
            '16/9': 18,
            '32/15': 18
        },
        left: {
            '4/3': 52.9,
            '16/9': 39.3,
            '32/15': 33.2
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
            '32/15': 17
        },
        left: {
            '4/3': 68,
            '16/9': 50,
            '32/15': 43
        },
        top: {
            '4/3': 53.8,
            '16/9': 55.8,
            '32/15': 52.2
        }
    },
    'back-line-group': {
        top: {
            '4/3': 59.3,
            '16/9': 56.3,
            '32/15': 59.3
        },
        left: {
            '4/3': -1,
            '16/9': -.6,
            '32/15': -.4
        }
    },
    'back-line': {
        width: {
            '4/3': 89,
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
            '4/3': 98,
            '16/9': 58,
            '32/15': 56.5
        }
    },
    'palette-bar': {
        maxWidth: {
            '4/3': 89,
            '16/9': 82,
            '32/15': 82
        }
    },
    'second-render': {
        top: {
            '4/3': 2.5,
            '16/9': 2.8,
            '32/15': 3.1
        }
    }
}

const calculateStyle = (element, style, unit) => {
    const {innerWidth, innerHeight} = window
    const currentRatio = innerWidth/innerHeight
    const aspectRatios = [{name: '4/3', value: 4/3},
        {name: '16/9', value: 16/9},
        {name: '32/15', value: 32/15}]
    let lowerRatio = {}
    let higherRatio = {}
    aspectRatios.forEach((ratio,i,ratios) => {
        if (currentRatio < ratio.value && i === 0) {
            higherRatio = lowerRatio = ratio
        } else if (currentRatio >= ratio.value) {
            if (i === ratios.length-1) {
                higherRatio = lowerRatio = ratio
            } else if (ratios[i+1] && currentRatio < ratios[i+1].value) {
                higherRatio = ratios[i+1]
                lowerRatio = ratio
            }
        } 
    })
    
    if (higherRatio.name === lowerRatio.name) {
        const value = aspectValues[element][style][higherRatio.name]
        // if (debugStyles[element][style]) {
        //     console.log(element,style,value)
        // }
        return value
    }
    const higherValue = aspectValues[element][style][higherRatio.name]
    const lowerValue = aspectValues[element][style][lowerRatio.name]
    const lerpValue = ((higherValue-lowerValue)/(higherRatio.value-lowerRatio.value)) * (currentRatio - lowerRatio.value) + lowerValue
    // if (debugStyles[element][style]) {
    //     console.log(element,style,lerpValue)
    // }
    return lerpValue
}


class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {},
            update: 0, 
            viewportScale: 1, 
            showStats: true,
            showBar: true,
            stabilize: false
        }
        this.toggleStats = this.toggleStats.bind(this)
        this.toggleStabilize = this.toggleStabilize.bind(this)
        this.toggleBar = this.toggleBar.bind(this)
        this.rootRef = React.createRef()
    }

    calculateAspectDelta() {
        const {innerWidth, innerHeight} = window
        const currentAspect = innerWidth/innerHeight
        console.log(currentAspect)
        if (currentAspect >= 4/3 && currentAspect <= 32/15) {
            return {
                rootWidth: 1,
                rootHeight: 1
            }
        } else if (currentAspect < 4/3) {
            return {
                rootWidth: (4/3) / currentAspect,
                rootHeight: 1
            }
        } else if (currentAspect > 32/15) {
            return {
                rootWidth: 1,
                rootHeight: currentAspect / (32/15)
            }
        } 
    }

    calculateStyles() { 
        const {rootWidth, rootHeight} = this.calculateAspectDelta()
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
                top: `2%`,
                left: `2%`,
                width: `3.6%`,
                justifyContent: 'space-between'
            },
            'upper-action' : {
                width: `32%`, 
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
                justifyContent: 'space-between',
                gap: `4.86%`,
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
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: this.state.showStats ? '' : `${calculateStyle('title-coord','marginTop')}%`
            },
            'title-or': {
                width: `11%`,
                alignSelf: 'center',
                display: this.state.showStats ? '' : 'none'
            },
            'title-words-wrap': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                height: '55%',
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
                width: '90%',
                margin: '0 auto'
            },
            'left-quote': {
                width: `5%`,
                paddingTop: '3%',
                alignSelf: 'flex-start',
            },
            'right-quote': {
                width: `5%`,
                paddingBottom: '3%',
                alignSelf: 'flex-end'
            },
            'title-words': {
                width: '80%'
            },
            'panel-label': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: 'flex',
                flexDirection: 'column',
                gap: `${30 / 9}%`,
                alignSelf: 'flex-end',
                width: '80%',
                marginLeft: 'auto',
                flexGrow: '1',
                justifyContent: 'inherit'

            },
            'label-artist': {
                marginRight: `${10}%`,
                outline: this.state.stabilize ? '1px solid pink' : '',
            },
            'label-medium': {
                marginRight: `${10}%`,
                marginBottom: `${10}%`,
                outline: this.state.stabilize ? '1px solid pink' : '',
            },
            'second-render': {
                position: 'absolute',
                left: '2.4%',
                top: `${calculateStyle('second-render','top')}%`,
                width: '95.4%',
                filter: this.state.showBar ? 'blur(1px) opacity(0.15)' : ''
            },
            'third-render': {
                position: 'absolute',
                left: '2.4%',
                top: `${calculateStyle('second-render','top')}%`,
                width: '95.4%',
                visibility: this.state.showBar ? '' : 'hidden'
            },
            'title-options': {
                outline: this.state.stabilize ? '1px solid pink' : '',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: this.state.showStats ? '' : `${calculateStyle('title-options','marginBottom')}%`,
            },
            'stats-option': {
                display: 'flex',
                outline: this.state.stabilize ? '1px solid pink' : ''
            },
            'stabilize-option': {
                display: 'flex',
                outline: this.state.stabilize ? '1px solid pink' : '',
                justifyContent: 'flex-end'
            },
            'option-box': {
                width: `9%`,
                cursor: 'pointer',
                marginRight: '15%'
            },
            'title-option-text': {
                color: orange,
                fontSize: `75%`,
                fontFamily: 'brandon-grotesque',
                letterSpacing: '.081vw',
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
                width: '85%',
                marginLeft: 'auto',
            },
            'swatch': {
                outline: `solid 1px ${orange}`,
                width: `${75}%`,
                height: `${75}%`
            },
            'swatch-fig': {
                width: `${40}%`,
                marginBottom: 'auto',
                paddingRight: `${11}%`
            },
            'swatch-block': {
                // width: '5vw'
                height: `${300}%`,
                display: 'flex', 
                // gap: `${47/19.2}vw`,
                paddingTop: `20px`,
            },
            'swatch-items': {
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: `${20}%`,
                marginRight: `${47}%`,
            },
            'swatch-item': {
                display:'flex',
                position: 'relative'
            },
            'upper-block': {
                width: `100%`,
                height: `52%`,
                // outline: `solid 1px lightblue`,
                position: `relative`,
                // visibility: this.state.showStats ? '' : 'hidden',
                visibility: 'hidden',
                overflow: 'hidden'
            },
            'info-center-group': {
                position: `absolute`,
                width: `${250}%`,
                top: `${120}%`,
                left: `${273}%`,
                // transform: `translate(-50%,-50%)`
            },
            'center-frame': {
                // top: `50%`,
                // left: `${350/19.2}vw`,
                position: `absolute`,
                // transform: `translate(-30%,-50%)`
            },
            'swatch-bracket': {
                height: '100%'
            },
            'info-connect': {
                top: `${94}%`,
                left: `${-88}%`,
                width: `${90}%`,
                height: `1.5px`,
                position: `absolute`,
            },
            'palette-wheel': {
                width: `${120}%`,
                position: `absolute`,
                top: `${37}%`,
                left: `${44}%`
            },
            'info-themes-group': {
                position: `absolute`,
                width: `${250}%`,
                top: `${-60}%`,
                left: `${90}%`,
                // transform: `translate(-50%,-50%)`
            },
            'info-cast-group': {
                position: `absolute`,
                width: `${250}%`,
                top: `${20}%`,
                left: `${390}%`,
                // transform: `translate(-50%,-50%)`
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
            'price-icon': {
                width: `${16}%`
            },
            'value-text': {
                width: '100px',
            },
            'value-price': {
                display: 'flex',
                height: '60px',
                justifyContent: 'space-between'
            },
            'print-item': {
                display: 'flex',
                flexDirection: 'column'
            },
            'print-value-text': {
                marginLeft: 'auto'
            },
            'value-block': {
                paddingLeft: `${5}%`
            },
            'center-group-wrapper': {
                position: 'relative'
            },
            'center-tag-char': {
                width:`${9}%`,
                position: 'absolute',
                left:`${25}%`,
                top:`${8}%`
            },
            'center-tag-themes': {
                width:`${12}%`,
                position: 'absolute',
                left:`${112}%`,
                top:`${-8}%`
            },
            'theme-bubble': {
                width:`${70}%`,
                position: 'absolute',
                left:`${120}%`,
                top:`${10}%`
            },
            'theme-icon-1': {
                width:`${20}%`,
                position: 'absolute',
                left:`${13}%`,
                top:`${19}%`
            },
            'theme-icon-2': {
                width:`${2}%`,
                position: 'absolute',
                left:`${2}%`,
                top:`${1}%`
            },
            'cast-outer': {
                width:`${50}%`,
                position: 'absolute',
                left:`${10}%`,
                top:`${35}%`
            },
            'cast-bubble': {
                width:`${170}%`,
                position: 'absolute',
                left:`${60}%`,
                top:`${22}%`
            },
            'cast-icon-1': {
                cursor: "pointer",
                width:`${30}%`,
                position: 'absolute',
                left:`${80}%`,
                top:`${38}%`
            },
            'cast-icon-2': {
                cursor: "pointer",
                width:`${27}%`,
                position: 'absolute',
                left:`${120}%`,
                top:`${38}%`
            },
            'cast-baby': {
                width:`${80}%`,
                position: 'absolute',
                left:`${160}%`,
                top:`${11}%`
            },
            'cast-tag': {
                width:`${80}%`,
                position: 'absolute',
                left:`${50}%`,
                top:`${0}%`
            },
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
                width: `1.7%`,
                marginRight: `3.5%`,
                marginLeft: '3.5%',
                cursor: 'pointer',
            },
            'value-switch': {
                width: `${12}%`,
                transform: `translate(-${34}%, 0px)`
            },
            'palette-bar': {
                width: this.state.showBar ? '' : '0',
                margin: 'auto 0',
                maxWidth: `${calculateStyle('palette-bar','maxWidth')}%`
            },
            'value-row': {
                display: 'flex',
                justifyContent: 'space-between'
            },
            'value-amount-wrapper': {
                display: 'flex'
            },
            'value-amount': {
                color: orange,
                marginTop: 'auto',
                lineHeight: '70%',
                fontSize: `${38/19.2}%`,
                fontFamily: 'brandon-grotesque',
                width: `${160/19.2}%`
            },
            'usd': {
                margin: 'auto 0 0 5px',
                width: '20px',
            },
            'no-sale': {
                width: '50px'
            },
            'print-amount-wrapper': {
                display: 'flex',
                justifyContent: 'flex-end'
            },
            'asset-value': {
                transform: `translate(-${12/19.2}%, 0px)`,
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
            }
        })

        this.setState(() => ({styles}))
    }

    toggleStats() {
        this.setState(({showStats}) => ({showStats: !showStats}), this.calculateStyles)
    }

    toggleStabilize() {
        this.setState(({stabilize}) => ({stabilize: !stabilize}), this.calculateStyles)
    }

    toggleBar() {
        this.setState(({showBar}) => ({showBar: !showBar}), this.calculateStyles)
    }

    componentDidMount() {
        const resizeObserver = new ResizeObserver(() => this.calculateStyles())
        resizeObserver.observe(this.rootRef.current)
        this.setState(() => ({resizeObserver}))
    }

    render() {
        const {styles} = this.state
        return <div className={css(styles["root-wrap"])}>
            <div ref={this.rootRef} className={css(styles["root"])} id="detail-page-root">
                <div className={css(styles["upper-actions"])}>
                    <img className={css(styles["upper-action"])} src={menuBack} onClick={()=>this.props.closePanelDetail()} alt='detail page close button'/>
                    <img className={css(styles["upper-action"])} src={menuLegend} onClick={this.toggleOutlines}/*onClick={()=>this.props.closePanelDetail()}*/ alt='detail page close button'/>
                </div>
                <div className={css(styles["back-line-group"])}>
                    <img className={css(styles["left-x"])} src={xImg} alt='x mark for backline'/>
                    <div className={css(styles["back-line"])}/>   
                </div>
                <div className={css(styles['title-col'])}>
                    {/* <div className={css(styles['title-section'])}> */}
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
                    {/* </div> */}
                    {/* <div className={css(styles['lower-title'])}> */}
                        
                    {/* </div> */}
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
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={fig1}/>
                                        <img className={css(styles['swatch'])} src={swatchA} alt=""/>
                                    </div>
                                    <div className={css(styles['swatch-item'])}>
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={fig2}/>
                                        <img className={css(styles['swatch'])} src={swatchB} alt=""/>
                                    </div>
                                    <div className={css(styles['swatch-item'])}>
                                        <img className={css(styles['swatch-fig'])} alt="swatch img" src={fig3}/>
                                        <img className={css(styles['swatch'])} src={swatchC} alt=""/>
                                    </div>
                                </div>
                                <img className={css(styles['swatch-bracket'])} alt="swatch grouping" src={swatchBracket}/>
                            </div>
                            <div className={css(styles['info-center-group'])}>
                                <div className={css(styles['center-group-wrapper'])}>
                                    <img className={css(styles['info-connect'])} alt="info connect" src={infoConnect}/>
                                    <img className={css(styles['center-frame'])} alt="center frame" src={centerFrame}/>
                                    <img className={css(styles['palette-wheel'])} alt="palette wheel" src={paletteWheel}/>
                                    <img className={css(styles['center-tag-char'])} alt="character study box" src={centerTag1}/>
                                    <img className={css(styles['center-tag-themes'])} alt="themes box" src={centerTag2}/>
                                </div>
                                <div className={css(styles['info-themes-group'])}>
                                    <img className={css(styles['theme-bubble'])} alt="wine holder" src={bubble}/>
                                    <img className={css(styles['theme-icon-1'])} alt="wine up" src={wineUp}/>
                                    <img className={css(styles['theme-icon-2'])} alt="wine down" src={wineDown}/>
                                </div>
                            </div>
                            <div className={css(styles['info-cast-group'])}>
                                <img className={css(styles['cast-outer'])} alt="cast outer" src={castOuter}/>
                                <img className={css(styles['cast-bubble'])} alt="cast bubble" src={castBubble}/>
                                <img className={css(styles['cast-icon-1'])} alt="cast 1" src={cast1}/>
                                <img className={css(styles['cast-icon-2'])} alt="cast 2" src={cast2}/>
                                <img className={css(styles['cast-baby'])} alt="cast baby" src={castBaby}/>
                            </div>
                            <div className={css(styles['value-block'])}>
                                <div className={css(styles['value-row'])}>
                                    <img className={css(styles['value-text'])} alt='asset-text' src={valueSvg1}/>
                                    <img className={css(styles['value-text'], styles['print-value-text'])} alt='print-text' src={cost1}/>
                                </div>
                                <div className={css(styles['value-row'])} style={{marginBottom: '25px'}}>
                                    <img className={css(styles['price-icon'])} alt='asset-icon' src={valueSvg2}/>
                                    <img className={css(styles['price-icon'])} alt='print-icon' src={cost2}/>
                                </div>
                                <div className={css(styles['value-row'])}>
                                    <div className={css(styles['value-amount-wrapper'])}>
                                        <img className={css(styles['value-switch'])} alt='palette icon' src={switchActive}/>
                                        <div className={css(styles['asset-value'])}>
                                            <div className={css(styles['value-amount'])}>320.00</div>
                                            <img className={css(styles['usd'])} alt='US dollar unit' src={usd}/>
                                        </div>
                                    </div>
                                    <div className={css(styles['print-amount-wrapper'])}>
                                        <img className={css(styles['value-switch'])} alt='palette icon' src={switchActive}/>
                                        <img className={css(styles['no-sale'])} alt='no sale' src={noSale}/>
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
                                <img className={css(styles['dotted-swatch-line'])} alt="dotted line" src={dottedSwatchLine}/>
                                <img className={css(styles['fourth-render-frame'])} alt="fourth render box" src={fourthRenderBox}/>
                                <img className={css(styles['fourth-render'])} alt="fourth render" src={fourthRender}/>
                                <img className={css(styles['fourth-render-tag'])} alt="fourth render tag" src={fourthRenderLabel}/>
                                <img className={css(styles['fourth-render-line'])} alt="dotted line" src={dottedSwatchLine}/>
                                <div className={css(styles['rating-group'])}>
                                    <img className={css(styles['rating-tag'])} alt="rating box" src={ratingTag}/>
                                    <img className={css(styles['rating-icon'])} alt="rating icon" src={rating}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    }
}

export default DetailPage