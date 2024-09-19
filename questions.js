const questions = [
    {
      "category": "High Brew Coffee History",
      "question": "What adventure inspired the creation of High Brew Coffee?",
      "correctAnswer": "Sailing across the Caribbean",
      "incorrectAnswers": [
        "Hiking through the Alps",
        "A cross-country road trip",
        "A bike ride through Europe"
      ],
      "funFact": "David Smith and his family sailed the Caribbean, where he brewed coffee to stay alert, sparking the idea for High Brew!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "When was High Brew Coffee founded?",
      "correctAnswer": "2013",
      "incorrectAnswers": [
        "2009",
        "2015",
        "2011"
      ],
      "funFact": "High Brew Coffee was founded in 2013 by David Smith after an inspiring sailing trip across the Caribbean with his family!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "Who founded High Brew Coffee?",
      "correctAnswer": "David Smith",
      "incorrectAnswers": [
        "David Jones",
        "Sarah Smith",
        "Michael Green"
      ],
      "funFact": "David Smith’s love for coffee was sparked during a family sailing trip, which led to the creation of High Brew Coffee."
    },
    {
      "category": "High Brew Coffee History",
      "question": "Where is High Brew Coffee headquartered?",
      "correctAnswer": "Austin, Texas",
      "incorrectAnswers": [
        "San Antonio, Texas",
        "Los Angeles, California",
        "Denver, Colorado"
      ],
      "funFact": "Austin, Texas, known for its entrepreneurial spirit, is home to High Brew Coffee, aligning with the brand’s bold and adventurous nature!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "What is High Brew Coffee's current tagline?",
      "correctAnswer": "For Those Who Do.",
      "incorrectAnswers": [
        "Coffee with a Kick!",
        "Brewed for Greatness",
        "Awake and Alive"
      ],
      "funFact": "High Brew’s tagline reflects its commitment to fueling active, busy lifestyles with premium cold brew coffee."
    },
    {
      "category": "High Brew Coffee History",
      "question": "What were the first flavors launched by High Brew Coffee?",
      "correctAnswer": "Double Espresso, Mexican Vanilla, Dark Chocolate Mocha, Salted Caramel, Black and Bold",
      "incorrectAnswers": [
        "Double Espresso, Mexican Vanilla, Caramel Macchiato, Vanilla Latte, Black",
        "Hazelnut, Chocolate Almond, Double Espresso, Mexican Vanilla, Black and Bold",
        "Vanilla Bean, Chocolate Peppermint, Sweet Cream, Double Espresso, Mexican Vanilla"
      ],
      "funFact": "These bold and distinct flavors helped High Brew Coffee stand out in the market when it was first introduced!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "How much caffeine is in a can of High Brew Coffee Cold Brew 8oz?",
      "correctAnswer": "140mg",
      "incorrectAnswers": [
        "100mg",
        "120mg",
        "160mg"
      ],
      "funFact": "Each 8oz can of High Brew Coffee contains 140mg of natural caffeine, offering a smooth energy boost without the jitters!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "Why is it cold Mexican Vanilla?",
      "correctAnswer": "Because of the flavor profile combination of cinnamon and vanilla which is popular in Mexican beverages and desserts",
      "incorrectAnswers": [
        "Because it’s a traditional Mexican holiday flavor",
        "Because it’s brewed with ice-cold water from Mexico City",
        "Because it’s inspired by Mexico’s cool, high-altitude regions"
      ],
      "funFact": "Mexican Vanilla's flavor profile is a tribute to traditional Mexican desserts and drinks, combining the sweet notes of vanilla with a hint of spice!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "What is the key ingredient in High Brew Coffee's original product line?",
      "correctAnswer": "100% Colombian Arabica coffee beans",
      "incorrectAnswers": [
        "100% Brazilian Robusta coffee beans",
        "100% Peruvian Typica coffee beans",
        "50% Colombian Arabica and 50% Brazilian Robusta coffee beans"
      ],
      "funFact": "High Brew sources its coffee from high-quality Colombian Arabica beans, known for their smooth and rich flavor!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "How many calories does a typical can of High Brew Coffee (cold brew) have?",
      "correctAnswer": "50-90 calories",
      "incorrectAnswers": [
        "20-50 calories",
        "100-150 calories",
        "Over 150 calories"
      ],
      "funFact": "High Brew’s cold brew offers a low-calorie option for coffee lovers, with most cans ranging from 50 to 90 calories depending on the flavor!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "Which High Brew Coffee flavor has no sugar?",
      "correctAnswer": "Black & Bold",
      "incorrectAnswers": [
        "Mexican Vanilla",
        "Double Espresso",
        "Dark Chocolate Mocha"
      ],
      "funFact": "Black & Bold is the perfect choice for those looking for a sugar-free cold brew, providing a pure and bold coffee experience."
    },
    {
      "category": "High Brew Coffee History",
      "question": "What special brewing process does High Brew use?",
      "correctAnswer": "Cold-brewing over time, rather than heat",
      "incorrectAnswers": [
        "Hot water extraction",
        "Rapid brew",
        "Flash freeze brewing"
      ],
      "funFact": "High Brew uses a cold-brewing process, which allows for a smoother, less acidic coffee that’s packed with natural caffeine!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "How many calories are in High Brew's Black & Bold coffee?",
      "correctAnswer": "0 calories",
      "incorrectAnswers": [
        "10 calories",
        "5 calories",
        "15 calories"
      ],
      "funFact": "Black & Bold is not only sugar-free but also calorie-free, making it a guilt-free option for coffee lovers!"
    },
    {
      "category": "High Brew Coffee History",
      "question": "Where does the 'high' in High Brew come from?",
      "correctAnswer": "The 'High' in High Brew references our commitment to a higher standard and quality of coffee",
      "incorrectAnswers": [
        "High-altitude sourced beans",
        "A higher concentration of caffeine",
        "A commitment to a high level of craftsmanship in every can"
      ],
      "funFact": "The 'High' in High Brew stands for the company’s commitment to excellence, delivering a premium cold brew experience to customers everywhere!"
    },
    {
      "category": "High Brew Coffee Products",
      "question": "What is the most popular flavor of High Brew Coffee?",
      "correctAnswer": "Double Espresso",
      "incorrectAnswers": [
        "Mexican Vanilla",
        "Dark Chocolate Mocha",
        "Salted Caramel"
      ],
      "funFact": "Double Espresso has remained the top choice for High Brew fans, offering a bold and energizing cold brew experience in every sip!"
    },
    {
      "category": "High Brew Coffee Products",
      "question": "Which High Brew Coffee product is dairy-free?",
      "correctAnswer": "Black & Bold",
      "incorrectAnswers": [
        "Salted Caramel",
        "Mexican Vanilla",
        "Dark Chocolate Mocha"
      ],
      "funFact": "Black & Bold is a perfect option for those seeking a smooth, rich coffee without any added dairy, making it vegan-friendly!"
    },
    {
      "category": "High Brew Coffee Products",
      "question": "Which new High Brew Coffee product line was launched in 2023 to meet the needs of health-conscious consumers in the Natural Channel?",
      "correctAnswer": "Smart Coffee Oatmilk Latte",
      "incorrectAnswers": [
        "High Protein Cold Brew",
        "Keto Cold Brew",
        "Plant-Based Cold Brew Latte"
      ],
      "funFact": "High Brew introduced the Smart Coffee Oatmilk Latte in 2023, designed to cater to consumers looking for a plant-based, brain-boosting coffee!"
    },
    {
      "category": "High Brew Coffee Products",
      "question": "What brain health nutrient is featured in High Brew Smart Coffee to support mental energy and focus?",
      "correctAnswer": "Cognizin Citicoline",
      "incorrectAnswers": [
        "Ashwagandha",
        "Ginkgo Biloba",
        "Rhodiola Rosea"
      ],
      "funFact": "Cognizin Citicoline is a powerful brain-health nutrient that helps support cognitive function, giving you mental energy along with your coffee buzz!"
    },
    {
      "category": "High Brew Coffee Products",
      "question": "Which vitamin in High Brew Smart Coffee helps support memory and focus while converting food into energy?",
      "correctAnswer": "Vitamin B12",
      "incorrectAnswers": [
        "Vitamin D",
        "Vitamin B6",
        "Vitamin C"
      ],
      "funFact": "Vitamin B12 in High Brew Smart Coffee not only supports memory and focus but also helps your body convert food into sustainable energy!"
   
    }
]