
const storeInventory = {
    item1: 20,  
    item2: 30,
    item3: 15,

  };
  
  // Define the exchange rate
  const exchangeRate = 80; 
  
  // Use the `map` function to create a new object with prices in INR
  const inventoryInRupees = Object.keys(storeInventory).map(item => {
    const priceInUSD = storeInventory[item];
    const priceInINR = priceInUSD * exchangeRate;
    return {
      item,
      priceInINR
    };
  });
  
  const inventoryInRupeesObject = inventoryInRupees.reduce((acc, item) => {
    acc[item.item] = item.priceInINR;
    return acc;
  }, {});
  

  console.log("Store's Inventory in INR:", inventoryInRupeesObject);
  