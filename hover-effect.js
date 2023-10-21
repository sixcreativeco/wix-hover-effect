{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const numPoints = 5;\
let points = [];\
\
document.body.addEventListener("mousemove", handleMouseMove);\
\
function handleMouseMove(event) \{\
    const cursorLocation = \{\
        x: event.clientX,\
        y: event.clientY\
    \};\
\
    points.push(cursorLocation);\
    if (points.length > numPoints) \{\
        points.shift();\
    \}\
\
    updateBackground();\
\}\
\
function updateBackground() \{\
    let gradient = 'radial-gradient(at ';\
\
    points.forEach((point, index) => \{\
        gradient += `$\{point.x\}px $\{point.y\}px`;\
        if (index < points.length - 1) \{\
            gradient += ', ';\
        \}\
    \});\
\
    gradient += ', #234158, #76AE91, #234158, #4988EF, #234158)';\
\
    document.body.style.background = gradient;\
\}\
}