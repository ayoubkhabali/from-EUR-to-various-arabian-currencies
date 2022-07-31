let result = document.querySelector(".result .container"),
  btn = document.querySelector(".btn"),
  inputBx = document.querySelector(".inputEl"),
  copyBtn = document.querySelector(".copy-text");

window.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    result.textContent = "";
    showCurrencies();
    inputBx.value = "";
  });

  copyBtn.addEventListener("click", function () {
    result.select();
    document.execCommand("copy");
  });
});

async function showCurrencies() {
  let getValue = inputBx.value;
  const response = await fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=457e9293cd97091c1dc126e15620d9eb"
  );
  const data = await response.json();

  let usdTo = [
    {
      currency: "الدولار",
      shortcut : 'USD',
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "دولار أمريكي",
    },
    { currency: "اليورو",
    factor: function() { return data.rates[this.shortcut]},
    currencyText: "يورو",
      shortcut : 'EUR'
 },
    {
      currency: "الريال السعودي",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "ريال",
      shortcut : 'SAR'

    },
    {
      currency: "الدينار العراقي",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "دينار",
      shortcut : 'IQD'

    
    },
    {
      currency: "الجنيه المصري",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "جنيه",
      shortcut : 'EGP'

    },
    {
      currency: "الدينار الجزائري",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "دينار",
      shortcut : 'DZD'

    },
    {
      currency: "الدرهم المغربي",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "درهم",
      shortcut : 'MAD'

    },
    {
      currency: "الدرهم الإماراتي",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "درهم",
      shortcut : 'AED'

    },
    {
      currency: "الدينار الكويتي",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "دينار",
      shortcut : 'KWD'

    },
    {
      currency: "الدينار الأردني",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "دينار",
      shortcut : 'JOD'

    },
    {
      currency: "الليرة اللبنانية",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "ليرة",
      shortcut : 'LBP'

    },
    {
      currency: "الليرة السورية",
      factor: function() { return data.rates[this.shortcut]},
      currencyText: "ليرة",
    shortcut : 'SYP'

    },
    {
      currency: "فلسطين",
      currencyText: "دولار امريكي",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'USD'

    },
    {
      currency: "الدينار التونسي",
      currencyText: "دينار",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'TND'

    },
    {
      currency: "الدينار الليبي",
      currencyText: "دينار",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'LYD'

    },
    {
      currency: "الريال العُماني",
      currencyText: "ريال",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'OMR'

    },
    {
      currency: "الريال اليمني",
      currencyText: "ريال",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'YER'

    },
    {
      currency: "الريال القطري",
      currencyText: "ريال",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'YER'

    },
    {
      currency: "الجنيه السوداني",
      currencyText: "جنيه",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'SDG'

    },
    {
      currency: "الليرة التركية",
      currencyText: "ليرة",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'TRY'

    },
    {
      currency: "الدينار البحريني",
      currencyText: "دينار",
      factor: function() { return data.rates[this.shortcut]},
      shortcut : 'BHD'

    },
  ];
  let i = 0;

// To Show Currencies in the console log

  for (i = 0; i < Object.keys(data.rates).length; i++) {
          console.log(
            i +
              " = " +
              Object.keys(data.rates)[i] +
              " : " +
              Object.values(data.rates)[i]
          );
  }

  // if the price more than 1000 or 10 000

      if (getValue >= 0) {
        let displayCurrencies = usdTo.map(function (item) {
          let currencyResult = item.factor() * getValue;
          let  continuee = "";
            console.log(usdTo[0].factor)
          if (currencyResult > 999999) {
            currencyResult = currencyResult / 1000000;
            continuee = "مليون";
          } else if (currencyResult > 9999) {
            currencyResult = currencyResult / 1000;
            continuee = "ألف";
          }

  // The text that appears in the page
      return `
السعر ب${
        item.currency
      }  : ${currencyResult.toFixed(2)} ${continuee}  ${item.currencyText}`;
    });

    displayCurrencies = displayCurrencies.join(" ");
    result.innerHTML += displayCurrencies;
  } else {
    result.innerHTML = `<p> المرجوا ادخال السعر الصحيح</p>`;
  }


}

