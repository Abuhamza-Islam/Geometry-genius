
//make a function to get input field value
function inputFieldValue(fieldId) {
  const inputFieldElement = document.getElementById(fieldId);
  const inputFieldElementString = inputFieldElement.value;
  const inputFieldElementValue = parseFloat(inputFieldElementString);
  return inputFieldElementValue;
}

// make a function to get input field value
function setAreaValue(areaId, areaValue) {
    document.getElementById(areaId).innerText = areaValue;
  }

function calculateTriangleArea() {
  //  //get triangle base value
  //  const triangleBaseElement = document.getElementById('triangle-base');
  //  const triangleBaseString = triangleBaseElement.value;
  //  const triangleBaseValue = parseFloat(triangleBaseString);

  //  //get triangle height value
  //  const triangleHeightElement  = document.getElementById('triangle-height');
  //  const triangleHeightString = triangleHeightElement.value;
  //  const triangleHeightValue = parseFloat(triangleHeightValue);

  

 const triangleBaseValue = inputFieldValue("triangle-base");
  // console.log('base:',triangleBaseValue);

  const triangleHeightValue = inputFieldValue("triangle-height");
  // console.log('height:',triangleHeightValue);

  const triangleAreaValue = 0.5 * triangleBaseValue * triangleHeightValue;
  setAreaValue("triangle-area", triangleAreaValue);
}


function calculateRectangleArea(){
   //get rectangle value of height and wide
   const rectangleWideValue = inputFieldValue('rectangle-wide');
   const rectangleLengthValue = inputFieldValue('rectangle-length');

   const rectangleAreaValue = rectangleWideValue * rectangleLengthValue;

   //set the value in area
   setAreaValue("rectangle-area",rectangleAreaValue);
}

function calculateParallelogramArea(){
    //get the value of parallelogram width and length
    const parallelogramBaseValue = inputFieldValue('parallelogram-base');
    const parallelogramHeightValue = inputFieldValue('parallelogram-height');

    const ParallelogramArea = parallelogramBaseValue * parallelogramHeightValue;

    //set area value of parallelogram
    setAreaValue('parallelogram-area',ParallelogramArea);
}

//ellipse
function calculateEllipseArea(){
    //get the value of ellipse radius
    const firstRadiusValue = inputFieldValue('first-radius');
    const secondRadiusValue = inputFieldValue('first-radius');
    
    const ellipseArea = Math.PI * firstRadiusValue * secondRadiusValue;
    //set the value of ellipse area 
    setAreaValue('ellipse-area',ellipseArea);
}