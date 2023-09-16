  interface Category { 
    name: string; 
  } 
   
  interface ProductD { 
    category: Category; 
  } 

  function processData(input: Category | string | null | ProductD): string | null { 
    if (isCategory(input)) { 
      return (input as Category).name; 
    } else if (isString(input)) { 
      return input as string; 
    } 
    return null; 
  }

  function isCategory <T> (input: T) {
    return ((input as Category) != null && (input as Category).name !== undefined);
  }

  function isString <S> (input: S) {
    return typeof input == "string";
  }

  var category: Category = {
    name: 'cat'
  }
  var productTest: ProductD = {
    category: category
  }
  console.log(processData(category));
  console.log(processData(null));
  console.log(processData(productTest));
  console.log(processData("prova"));