
var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

console.log(productData.price);

console.log(productData.title);

console.log(productData.tags[2]);

console.log(productData.image.small.url);

console.log(productData.category_path[0]);



// Get the sum of two numbers
  function sum (x, y) {
  return x + y;
  }

  console.log(sum(25, 52));

  // Find the largest of two numbers
  function max(a, b){
    var largest;
    if (a > b) {
      largest = a;
    } else {
      largest = b;
    }
    return largest;
  }

  console.log(max(8, 3));


  var example = "im so small...not";
  console.log(example.toUpperCase());

  function isVowel(letter){
      if(letter = "a" || letter == "e"){
        return "true";
      }else{
        return "false";
      };
  };
  console.log(isVowel("A"));
