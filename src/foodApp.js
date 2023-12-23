const getCategoriesData = async () => {
  // code here
  try{
    const response = await fetch('https://restcountries.com/v3.1/all ');
    if(response.ok){
      const CategoriesData = await response.json();
      console.log(CategoriesData);
      return CategoriesData;
    }else{
      console.error('Error fetching categories data :',response.statusText);
    }
  }catch (error){
    console.error('An error occured:',error.message);
  }
};

const getIngredientData = async () => {
  // code here
  try{
    const response = await fetch('https://restcountries.com/v3.1/all ');
    if(response.ok){
      const IngredientData = await response.json();
      console.log(IngredientData);
      return IngredientData;
    }else{
      console.error('Error fetching IngredientData :',response.statusText);
    }
  }catch (error){
    console.error('An error occured:',error.message);
  }
  };


window.onload = function () {
  //  get the buttons here and add click event
  console.log('page has finished loading');
  var greetingElement = document.getElementById('greeting')
  if (greetingElement){
    greetingElement.innerHTML = 'country'
  }
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
