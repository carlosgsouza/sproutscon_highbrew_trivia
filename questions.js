const questions = [
  // High Brew Coffee History
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
    "funFact": "David Smith's love for coffee was sparked during a family sailing trip, which led to the creation of High Brew Coffee."
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
    "funFact": "Austin, Texas, known for its entrepreneurial spirit, is home to High Brew Coffee, aligning with the brand's bold and adventurous nature!"
  },
  {
    "category": "High Brew Coffee History",
    "question": "What is High Brew Coffee's current tagline?",
    "correctAnswer": "For Those Who Do.",
    "incorrectAnswers": [
      "Coffee With a Kick!",
      "Brewed for Greatness.",
      "Fuel Your Adventures."
    ],
    "funFact": "High Brew's tagline reflects its commitment to fueling active, busy lifestyles with premium cold brew coffee."
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
    "question": "Why is one of High Brew's flavor cold Mexican Vanilla?",
    "correctAnswer": "Because of the flavor profile combination of cinnamon and vanilla which is popular in Mexican beverages and desserts",
    "incorrectAnswers": [
      "Because it's a traditional Mexican holiday flavor",
      "Because it's brewed with ice-cold water from Mexico City",
      "Because it's inspired by Mexico's cool, high-altitude regions"
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
    "funFact": "High Brew's cold brew offers a low-calorie option for coffee lovers, with most cans ranging from 50 to 90 calories depending on the flavor!"
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
    "correctAnswer": "Cold-brewing over time (not heat!)",
    "incorrectAnswers": [
      "Hot water extraction",
      "Cold-pressed rapid brew",
      "Flash-freeze brewing over time"
    ],
    "funFact": "High Brew uses a cold-brewing process, which allows for a smoother, less acidic coffee that's packed with natural caffeine!"
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
    "question": "Where does the \"high\" in High Brew come from?",
    "correctAnswer": "A commitment to a higher standard and quality of coffee",
    "incorrectAnswers": [
      "Because of its high-altitude sourced beans",
      "A higher concentration of caffeine",
      "A promise to offer a high level of craftsmanship in every can"
    ],
    "funFact": "The \"High\" in High Brew stands for the company's commitment to excellence, delivering a premium cold brew experience to customers everywhere!"
  },
  
  // High Brew Coffee Products
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
      "Double Espresso",
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
      "L-Theanine"
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
  },
  {
    "category": "High Brew Coffee Products",
    "question": "How many flavor options does High Brew currently offer in cold brew 8oz?",
    "correctAnswer": "5",
    "incorrectAnswers": [
      "3",
      "6",
      "4"
    ],
    "funFact": "High Brew offers five delicious flavors in its 8oz cold brew lineup, including fan favorites like Double Espresso and Mexican Vanilla!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "Which High Brew product contains the highest caffeine content?",
    "correctAnswer": "Triple Shot Espresso",
    "incorrectAnswers": [
      "Double Espresso",
      "Salted Caramel",
      "Black & Bold"
    ],
    "funFact": "Triple Shot Espresso packs the most caffeine in the High Brew lineup, offering an intense boost with every can, perfect for long days or workouts!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What flavor of High Brew is specifically marketed as a \"protein\" drink?",
    "correctAnswer": "Creamy Cappuccino + Protein",
    "incorrectAnswers": [
      "Vanilla Bean + Protein",
      "Dark Chocolate + Protein",
      "Espresso Latte + Protein"
    ],
    "funFact": "Creamy Cappuccino + Protein offers not only the rich taste of cold brew but also a protein boost, making it an ideal post-workout drink!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "How many grams of protein are in High Brew's Creamy Cappuccino + Protein coffee?",
    "correctAnswer": "12 grams",
    "incorrectAnswers": [
      "10 grams",
      "15 grams",
      "8 grams"
    ],
    "funFact": "With 12 grams of protein, Creamy Cappuccino + Protein is both a coffee and a protein-packed drink to help fuel your day!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What is the fiber source in High Brew's Creamy Cappuccino + Protein?",
    "correctAnswer": "Chicory Root Extract",
    "incorrectAnswers": [
      "Flaxseed",
      "Oat Fiber",
      "Psyllium Husk"
    ],
    "funFact": "Chicory Root Extract not only provides fiber in High Brew's Creamy Cappuccino + Protein but also adds a slight, natural sweetness!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What is the shelf life of a can of High Brew Coffee?",
    "correctAnswer": "365 days",
    "incorrectAnswers": [
      "180 days",
      "730 days",
      "450 days"
    ],
    "funFact": "A can of High Brew Coffee can last for up to a year without refrigeration, making it perfect for on-the-go storage and travel!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What ingredients differentiate High Brew from other coffee brands?",
    "correctAnswer": "Cold-brewed Arabica beans, sustainably sourced",
    "incorrectAnswers": [
      "Organic cane sugar and cold-brewed Robusta beans",
      "Specialty-grade Robusta beans, sustainably sourced",
      "Premium blends of espresso and powdered dairy milk"
    ],
    "funFact": "High Brew's commitment to using cold-brewed Arabica beans and sourcing them sustainably ensures both quality and ethical production practices!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What High Brew flavor features a hint of cinnamon?",
    "correctAnswer": "Mexican Vanilla",
    "incorrectAnswers": [
      "Salted Caramel",
      "Dark Chocolate Mocha",
      "Double Espresso"
    ],
    "funFact": "The hint of cinnamon in Mexican Vanilla offers a unique and spicy twist, inspired by traditional Mexican drinks and desserts!"
  },
  {
    "category": "High Brew Coffee Products",
    "question": "What were the main two colors of a can of High Brew Dark Chocolate Mocha (old packaging)?",
    "correctAnswer": "Green and brown",
    "incorrectAnswers": [
      "Red and white",
      "Blue and black",
      "Yellow and brown"
    ],
    "funFact": "The old packaging of High Brew's Cold Brew Dark Chocolate was distinguished by its green and brown design, reflecting earthy and rich tones to match the flavor!"
  },
  // High Brew & Sprouts -- History & Partnership
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "When did High Brew Coffee launch at Sprouts?",
    "correctAnswer": "2016",
    "incorrectAnswers": [
      "2014",
      "2018",
      "2020"
    ],
    "funFact": "High Brew Coffee debuted at Sprouts in 2016, introducing their cold brew products to the health-conscious shoppers of the popular grocery chain!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "When did High Brew Coffee launch at Sprouts?",
    "correctAnswer": "2016",
    "incorrectAnswers": ["2014", "2018", "2020"],
    "funFact": "High Brew Coffee debuted at Sprouts in 2016, introducing their cold brew products to the health-conscious shoppers of the popular grocery chain!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "How many SKUs of High Brew Coffee are planogrammed in Sprouts' RTD Coffee sets in 2024?",
    "correctAnswer": "5 SKUs",
    "incorrectAnswers": ["3 SKUs", "4 SKUs", "6 SKUs"],
    "funFact": "In 2024, High Brew Coffee offers 5 different SKUs in Sprouts' ready-to-drink coffee sets, providing a variety of cold brew and nitro cold brew options!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "How many placements does High Brew have at Sprouts, in most stores?",
    "correctAnswer": "3 placements (RTD warm sets, grab & go cooler and FEM cooler)",
    "incorrectAnswers": [
      "1 placement (RTD warm sets)",
      "4 placements (RTD warm sets, FEM cooler, grab & go cooler, and forager display)",
      "2 placements (RTD warm sets, grab & go cooler)"
    ],
    "funFact": "High Brew Coffee is featured in THREE strategic locations in most Sprouts stores, ensuring great visibility in warm and cold beverage sections!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "In which (full) year did High Brew Coffee see its highest revenue growth at Sprouts?",
    "correctAnswer": "2023",
    "incorrectAnswers": ["2021", "2020", "2022"],
    "funFact": "2023 was a standout year for High Brew Coffee at Sprouts, achieving a remarkable 46% growth compared to 2022 and surpassing $1.2 million in sales!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Approximately how many Sprouts locations carry High Brew Coffee in their FEM coolers in 2024?",
    "correctAnswer": "270",
    "incorrectAnswers": ["150", "400", "320"],
    "funFact": "In 2024, around 270 Sprouts locations stock High Brew Coffee in their FEM coolers, offering chilled options for customers on the go!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Approximately how many Sprouts locations carry High Brew Coffee in their Grab&Go coolers as of June 2024?",
    "correctAnswer": "395",
    "incorrectAnswers": ["350", "295", "425"],
    "funFact": "High Brew Coffee is widely available in Sprouts' Grab & Go coolers, with placement in 382 stores for Nitro Caramel and up to 405 stores for Cold Brew Double Espresso!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What exclusive promotion did High Brew launch with Sprouts in 2022?",
    "correctAnswer": "Every Day Low Price (EDLP)",
    "incorrectAnswers": [
      "Every Day Low Cost (EDLC)",
      "Free High Brew (In-Store Coupons)",
      "Buy One, Get One Free (Weekly AD)"
    ],
    "funFact": "In 2022, High Brew Coffee launched an EDLP promotion at Sprouts, offering Cold Brews at 2 for $5 and Nitro Cold Brews at 2 for $7, making their products even more accessible to shoppers!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Which High Brew Coffee SKU was the #1 seller at Sprouts in 2023?",
    "correctAnswer": "Nitro Cold Brew - Sweet Cream",
    "incorrectAnswers": [
      "Cold Brew - Double Espresso",
      "Nitro Cold Brew - Black & Bold",
      "Cold Brew - Mexican Vanilla"
    ],
    "funFact": "Nitro Sweet Cream was the best-selling High Brew SKU at Sprouts in 2023, generating over $358K in sales, while the second top seller, Cold Brew Double Espresso, reached $306K in sales!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What is the price of High Brew Coffee Nitro 10oz at Sprouts currently?",
    "correctAnswer": "2/$7",
    "incorrectAnswers": ["$3.99", "2/$5", "$4.49"],
    "funFact": "As of 2022, High Brew Coffee Nitro 10oz is available at a competitive price of 2 for $7 at Sprouts, making it an affordable option for Nitro fans!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Which High Brew Coffee SKU was the #1 seller at Sprouts in 2021?",
    "correctAnswer": "Cold Brew - Double Espresso",
    "incorrectAnswers": [
      "Nitro Cold Brew - Sweet Cream",
      "Cold Brew - Salted Caramel",
      "Nitro Cold Brew - Black & Bold"
    ],
    "funFact": "In 2021, Double Espresso was the best-selling High Brew SKU at Sprouts, generating over $185K in sales!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "When did High Brew Nitro Cold Brews, Black and Sweet Cream, launch at Sprouts?",
    "correctAnswer": "2021",
    "incorrectAnswers": ["2019", "2020", "2022"],
    "funFact": "High Brew launched Nitro Cold Brews at Sprouts in 2021, offering a rich, bold coffee experience with the smoothness of nitro infusion!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What new SKU did High Brew launch at Sprouts in 2024?",
    "correctAnswer": "Nitro Cold Brew - Caramel",
    "incorrectAnswers": [
      "Cold Brew - Mexican Vanilla",
      "Cold Brew - Peppermint Mocha",
      "Nitro Cold Brew - Pecan Caramel"
    ],
    "funFact": "High Brew introduced Nitro Caramel at Sprouts in 2024, expanding their nitro lineup with this sweet and velvety new flavor!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What was the growth percentage for High Brew Coffee at Sprouts in 2023 ($ sales growth vs 2022)?",
    "correctAnswer": "+46%",
    "incorrectAnswers": ["+30%", "+55%", "+40%"],
    "funFact": "2023 was a standout year for High Brew Coffee at Sprouts, achieving a remarkable 46% growth compared to 2022 and surpassing $1.2 million in sales!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What were the total $ sales at Sprouts for High Brew coffee in 2023?",
    "correctAnswer": "$1,226,434",
    "incorrectAnswers": ["$951,193", "$1,534,876", "$745,934"],
    "funFact": "High Brew Coffee surpassed $1.2 million in total sales at Sprouts in 2023, according to SPINS data, marking a record year for the brand and achieving a remarkable 46% growth!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "How does High Brew Coffee rank in terms of total SS RTD coffee $ sales at Sprouts?",
    "correctAnswer": "#1",
    "incorrectAnswers": ["#2", "#3", "#4"],
    "funFact": "High Brew Coffee ranked #1 in terms of total shelf-stable RTD coffee dollar sales at Sprouts, leading the market in this key category!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What are the top 3 ready to drink Coffee Brands at Sprouts? (SPINs L52W, ending 8/11/24)",
    "correctAnswer": "High Brew Coffee, La Colombe, Pop and Bottle",
    "incorrectAnswers": [
      "Rise Coffee, La Colombe, High Brew Coffee",
      "Taika, High Brew Coffee, Pop and Bottle",
      "High Brew Coffee, Stumptown, La Colombe"
    ],
    "funFact": "High Brew Coffee leads the RTD coffee category at Sprouts, with La Colombe and Pop and Bottle rounding out the top three brands!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What is High Brew Coffee's dollar share of the shelf-stable RTD coffee category at Sprouts for the latest 4-week period ending on August 11, 2024, according to SPINS data?",
    "correctAnswer": "30.4%",
    "incorrectAnswers": ["25.5%", "20.8%", "28.6%"],
    "funFact": "High Brew commanded an impressive 30.4% dollar share of the shelf-stable RTD coffee category at Sprouts, outperforming closest competitors like La Colombe (17.5%) and Pop and Bottle (14.4%)!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What is High Brew Coffee's dollar share of the shelf-stable RTD coffee category at Sprouts for the latest 52-week period ending on August 11, 2024, according to SPINS data?",
    "correctAnswer": "31.4%",
    "incorrectAnswers": ["29.3%", "33.2%", "27.5%"],
    "funFact": "Over the latest 52-week period, High Brew Coffee commanded 31.4% of the shelf-stable RTD coffee market at Sprouts, solidifying its leadership position ahead of competitors La Colombe (19.1%) and Pop and Bottle (14.7%)!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What seasonal SKUs has made an appearance on Sprouts shelves in the past?",
    "correctAnswer": "Cold Brew - Peppermint Mocha",
    "incorrectAnswers": [
      "Cold Brew -- Cinnamon Swirl",
      "Nitro Cold Brew - Pumpkin Spice",
      "Nitro Cold Brew - Peppermint Mocha"
    ],
    "funFact": "High Brew's Cold Brew Peppermint Mocha has appeared as a seasonal SKU at Sprouts, offering a festive and refreshing holiday flavor for coffee lovers!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What was the first High Brew product sold at Sprouts?",
    "correctAnswer": "8oz Cold Brew",
    "incorrectAnswers": [
      "10oz Nitro Cold Brew",
      "12oz Cold Brew",
      "6oz Triple Shot Cold Brew"
    ],
    "funFact": "High Brew Coffee's first product at Sprouts was the 8oz shelf-stable Cold Brew RTD, a convenient and delicious option for coffee lovers on the go!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What are the total dollar sales for High Brew Coffee at Sprouts for the latest 24-week period ending on August 11, 2024?",
    "correctAnswer": "$803,246",
    "incorrectAnswers": ["$589,294", "$1,001,432", "$703,274"],
    "funFact": "High Brew Coffee achieved $803,246 in sales at Sprouts for the 24-week period ending August 11th, 2024, highlighting its steady growth in the ready-to-drink coffee category!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "What are the total dollar sales for High Brew Coffee at Sprouts for the latest 52-week period ending on August 11, 2024?",
    "correctAnswer": "$1,509,563",
    "incorrectAnswers": ["$983,846", "$1,221,639", "$1,703,532"],
    "funFact": "Over the 52-week period ending August, 11th, 2024, High Brew Coffee reached impressive total sales of $1,509,563 at Sprouts, maintaining strong consumer demand!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Which Sprouts region (state) shows the highest $ sales for High Brew Coffee YTD 2024?",
    "correctAnswer": "California",
    "incorrectAnswers": ["Texas", "Arizona", "Colorado"],
    "funFact": "California leads the way in High Brew Coffee sales at Sprouts, with over $248K in revenue YTD 2024, demonstrating the brand's strong presence in the state!"
  },
  {
    "category": "High Brew & Sprouts -- History & Partnership",
    "question": "Which Sprouts region (state) shows the highest $ sales per TDP (Total Distribution Points) for High Brew Coffee YTD 2024?",
    "correctAnswer": "Washington",
    "incorrectAnswers": ["California", "Colorado", "Arizona"],
    "funFact": "Washington shows the highest sales per TDP for High Brew Coffee YTD 2024, with $536 per Total Distribution Point, reflecting strong market penetration in the state!"
  },
  // Product Line & Availability at Sprouts
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How many High Brew Coffee product lines are available at Sprouts currently?",
    "correctAnswer": "2",
    "incorrectAnswers": ["1", "3", "4"],
    "funFact": "High Brew offers both cold brew and nitro cold brew lines at Sprouts, giving coffee lovers a choice between classic and creamy nitrogen-infused options!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "What dairy-free options does High Brew Coffee offer at Sprouts currently?",
    "correctAnswer": "Nitro Cold Brew Black",
    "incorrectAnswers": [
      "Cold Brew Mexican Vanilla",
      "Nitro Cold Brew Caramel",
      "Cold Brew Double Espresso"
    ],
    "funFact": "The Nitro Cold Brew Black is a dairy-free option at Sprouts, delivering a smooth, creamy texture without any dairy!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "What type of milk is used in High Brew Mexican Vanilla?",
    "correctAnswer": "Dairy milk",
    "incorrectAnswers": [
      "Almond milk",
      "Coconut milk",
      "Oat milk"
    ],
    "funFact": "High Brew\u2019s Mexican Vanilla features traditional dairy milk, combined with vanilla and a hint of cinnamon for a delicious, creamy flavor!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How much less sugar does High Brew Coffee contain compared to leading ready-to-drink coffee brands?",
    "correctAnswer": "70 to 85% less sugar",
    "incorrectAnswers": [
      "45 to 60% less sugar",
      "30 to 45% less sugar",
      "10 to 20% less sugar"
    ],
    "funFact": "High Brew Coffee contains significantly less sugar than most leading coffee brands, making it a great choice for those looking to reduce their sugar intake!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "What packaging does High Brew offer at Sprouts?",
    "correctAnswer": "Cold Brew 8oz and Nitro Cold Brew 10oz",
    "incorrectAnswers": [
      "Cold Brew 8oz, Nitro Cold Brew 10oz, and Protein Coffee 10oz",
      "Cold Brew 12oz and Nitro Cold Brew 8oz",
      "Nitro Cold Brew 12oz and Cold Brew 6oz"
    ],
    "funFact": "High Brew Coffee is available at Sprouts in convenient 8oz and 10oz cans, perfect for on-the-go coffee enthusiasts!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "Which High Brew Coffee product at Sprouts is targeted toward health-conscious consumers?",
    "correctAnswer": "Black & Bold",
    "incorrectAnswers": [
      "Mexican Vanilla",
      "Salted Caramel",
      "Dark Chocolate Mocha"
    ],
    "funFact": "Black & Bold is the ideal choice for health-conscious consumers, offering a pure coffee experience with 0g sugar and 0 calories!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "Which High Brew flavor includes almond milk?",
    "correctAnswer": "None",
    "incorrectAnswers": [
      "Salted Caramel",
      "Mexican Vanilla",
      "Creamy Cappuccino"
    ],
    "funFact": "High Brew Coffee products sold at Sprouts do not contain almond milk, making them dairy-focused or dairy-free based on the product!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "What percentage of High Brew Coffee products sold at Sprouts are sustainably sourced?",
    "correctAnswer": "100%",
    "incorrectAnswers": [
      "75%",
      "50%",
      "90%"
    ],
    "funFact": "High Brew Coffee is committed to sustainability, with all its coffee beans being responsibly and ethically sourced!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How many calories are in a can of High Brew\u2019s Cold Brew Double Espresso sold at Sprouts?",
    "correctAnswer": "50 calories",
    "incorrectAnswers": [
      "70 calories",
      "90 calories",
      "120 calories"
    ],
    "funFact": "High Brew\u2019s Double Espresso offers a rich coffee flavor with only 50 calories per can, making it a lighter choice compared to other coffee drinks!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "Which High Brew product is sugar-free and available at Sprouts?",
    "correctAnswer": "Black & Bold",
    "incorrectAnswers": [
      "Mexican Vanilla",
      "Salted Caramel",
      "Double Espresso"
    ],
    "funFact": "Black & Bold is completely sugar-free, offering coffee drinkers a bold, pure brew without any added sweetness!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How much caffeine does a can of High Brew\u2019s Double Espresso have?",
    "correctAnswer": "140 mg",
    "incorrectAnswers": [
      "100 mg",
      "160 mg",
      "120 mg"
    ],
    "funFact": "With 140 mg of caffeine, High Brew\u2019s Double Espresso provides a strong, energizing coffee kick with every sip!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "What High Brew flavor includes a cinnamon-infused recipe, and is sold at Sprouts?",
    "correctAnswer": "Mexican Vanilla",
    "incorrectAnswers": [
      "Salted Caramel",
      "Dark Chocolate Mocha",
      "Double Espresso"
    ],
    "funFact": "High Brew\u2019s Mexican Vanilla features a touch of cinnamon, giving it a unique and flavorful twist on classic vanilla coffee!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How many calories are in a can of High Brew\u2019s Nitro Black coffee sold at Sprouts?",
    "correctAnswer": "0 calories",
    "incorrectAnswers": [
      "5 calories",
      "10 calories",
      "15 calories"
    ],
    "funFact": "High Brew\u2019s Nitro Black coffee has 0 calories, making it a perfect option for those looking for a flavorful coffee without any guilt!"
  },
  {
    "category": "Product Line & Availability at Sprouts",
    "question": "How many grams of sugar are in High Brew\u2019s Cold Brew Double Espresso sold at Sprouts?",
    "correctAnswer": "7 grams",
    "incorrectAnswers": [
      "10 grams",
      "5 grams",
      "12 grams"
    ],
    "funFact": "High Brew\u2019s Double Espresso contains only 7 grams of sugar, much lower than leading ready-to-drink coffee beverages!"
  },
  
  // Cold Brew Coffee
  {
    "category": "Cold Brew Coffee",
    "question": "What is the difference between cold brew and iced coffee?",
    "correctAnswer": "Cold brew is brewed slowly in cold water, while iced coffee is brewed hot and then chilled",
    "incorrectAnswers": [
      "Cold brew is brewed with ice, while iced coffee is brewed hot and served over ice",
      "Cold brew is brewed at room temperature, while iced coffee is brewed using milk",
      "Cold brew uses coarse coffee grounds, while iced coffee uses fine grounds"
    ],
    "funFact": "Cold brew is never exposed to heat during the brewing process, which gives it a smoother, less acidic taste than iced coffee!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How many hours does it take to brew cold brew coffee?",
    "correctAnswer": "12-24 hours",
    "incorrectAnswers": [
      "4-8 hours",
      "24-36 hours",
      "8-12 hours"
    ],
    "funFact": "Cold brew coffee is brewed for 12-24 hours to extract the flavors slowly, which results in a smoother, less bitter coffee!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What temperature is used in the cold brew process?",
    "correctAnswer": "Room temperature or cold water",
    "incorrectAnswers": [
      "Hot water",
      "Iced water",
      "Lukewarm water"
    ],
    "funFact": "Cold brew coffee is steeped in either cold or room temperature water, which allows for a longer, gentler extraction of flavors compared to hot brewing methods!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "Which coffee beans are best for cold brew?",
    "correctAnswer": "Arabica beans",
    "incorrectAnswers": [
      "Robusta beans",
      "Espresso beans",
      "French roast beans"
    ],
    "funFact": "Arabica beans are preferred for cold brew because they offer a sweeter, more complex flavor, perfect for the slow extraction process of cold brewing!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "Is cold brew coffee typically less acidic than hot coffee?",
    "correctAnswer": "Yes",
    "incorrectAnswers": [
      "No, it has the same acidity",
      "Yes, but only if made with a specific type of bean",
      "No, it\u2019s usually more acidic"
    ],
    "funFact": "Cold brew coffee is up to 67% less acidic than hot brewed coffee, making it a popular choice for people with sensitive stomachs!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How much stronger is cold brew coffee compared to hot brewed coffee?",
    "correctAnswer": "About 2 to 3 times stronger",
    "incorrectAnswers": [
      "About 1.5 times stronger",
      "It\u2019s usually the same strength",
      "Half as strong"
    ],
    "funFact": "Cold brew is more concentrated than regular coffee, often making it 2 to 3 times stronger, which is why many people dilute it with water or milk!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What are the two main ingredients in cold brew coffee?",
    "correctAnswer": "Coffee grounds and water",
    "incorrectAnswers": [
      "Coffee grounds and sugar",
      "Coffee grounds and milk",
      "Coffee grounds and ice"
    ],
    "funFact": "Cold brew coffee is made with just coffee grounds and water, but it\u2019s often served with milk, cream, or sweeteners to enhance the flavor!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "Can cold brew coffee be served hot?",
    "correctAnswer": "Yes, it can be heated after brewing",
    "incorrectAnswers": [
      "No, it can only be served cold",
      "Yes, but it will lose flavor",
      "Only if brewed with hot water"
    ],
    "funFact": "Cold brew coffee can be enjoyed hot by simply warming it up after brewing, offering a smoother, less acidic alternative to hot-brewed coffee!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How is nitro cold brew different from regular cold brew?",
    "correctAnswer": "It\u2019s infused with nitrogen, making it creamier and smoother",
    "incorrectAnswers": [
      "It\u2019s brewed with hot water and then cooled",
      "It has a higher caffeine content",
      "It contains added sugar and milk"
    ],
    "funFact": "Nitro cold brew is infused with nitrogen gas, which gives it a creamy texture and a rich, frothy head without needing any milk or cream!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What is the ideal grind size for making cold brew?",
    "correctAnswer": "Coarse grind",
    "incorrectAnswers": [
      "Fine grind",
      "Medium grind",
      "Extra fine grind"
    ],
    "funFact": "A coarse grind is ideal for cold brew because it allows for a slower extraction process, preventing the coffee from becoming too bitter!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What is the shelf life of cold brew coffee when refrigerated?",
    "correctAnswer": "1-2 weeks",
    "incorrectAnswers": [
      "2-3 days",
      "1 month",
      "5-7 days"
    ],
    "funFact": "Cold brew coffee can last up to 2 weeks in the refrigerator if stored in an airtight container, making it a convenient option for coffee lovers!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How many calories are in an unsweetened cold brew?",
    "correctAnswer": "0 calories",
    "incorrectAnswers": [
      "5 calories",
      "10 calories",
      "15 calories"
    ],
    "funFact": "Unsweetened cold brew coffee has 0 calories, making it a great option for those who want to enjoy their coffee without any sugars or calories!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "Can cold brew coffee be made with flavored coffee beans?",
    "correctAnswer": "Yes",
    "incorrectAnswers": [
      "No, it only works with plain beans",
      "Yes, but only with vanilla-flavored beans",
      "Yes, but only if the beans are medium roast"
    ],
    "funFact": "Cold brew coffee can be made with flavored coffee beans, such as vanilla or hazelnut, to add an extra layer of flavor to the final brew!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What is the best ratio of coffee to water for cold brew?",
    "correctAnswer": "1:4 to 1:5",
    "incorrectAnswers": [
      "1:3 to 1:2",
      "1:7",
      "1:10"
    ],
    "funFact": "The ideal coffee-to-water ratio for cold brew is 1:4 to 1:5, which results in a strong concentrate that can be diluted to taste!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How long should cold brew steep before being filtered?",
    "correctAnswer": "12-24 hours",
    "incorrectAnswers": [
      "8-10 hours",
      "4-6 hours",
      "24-36 hours"
    ],
    "funFact": "Cold brew coffee requires 12-24 hours of steeping to extract the full flavor from the beans, resulting in a rich and smooth beverage!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What type of container is best for making cold brew?",
    "correctAnswer": "A mason jar or pitcher with a lid",
    "incorrectAnswers": [
      "A plastic cup with an airtight lid  ",
      "A French press",
      "A thermal flask"
    ],
    "funFact": "A mason jar or a pitcher with a lid is ideal for making cold brew because it\u2019s easy to store in the fridge and keeps the coffee fresh!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "Does cold brew need to be refrigerated while brewing?",
    "correctAnswer": "No, but it should be refrigerated after brewing",
    "incorrectAnswers": [
      "Yes, it must always be refrigerated during brewing",
      "No, it can be left at room temperature indefinitely",
      "Yes, but only if it\u2019s made with hot water"
    ],
    "funFact": "Cold brew doesn\u2019t need to be refrigerated while steeping, but it should be stored in the fridge once it\u2019s finished to keep it fresh!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "How should cold brew be stored after it's made?",
    "correctAnswer": "In the refrigerator in an airtight container",
    "incorrectAnswers": [
      "At room temperature in an airtight container",
      "In the refrigerator In a thermal flask",
      "In a freezer-safe bag"
    ],
    "funFact": "Storing cold brew in an airtight container in the fridge keeps it fresh and flavorful for up to 2 weeks!"
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What is the best way to sweeten cold brew coffee?",
    "correctAnswer": "Use simple syrup or flavored syrups",
    "incorrectAnswers": [
      "Add granulated sugar",
      "Stir in honey",
      "Use date sugar"
    ],
    "funFact": "Simple syrup or flavored syrups are ideal for sweetening cold brew because they dissolve easily in cold liquids, unlike granulated sugar!"
  },
  {
    "category": "Coffee Culture",
    "question": "What country is the largest producer of coffee?",
    "correctAnswer": "Brazil",
    "incorrectAnswers": [
      "Colombia",
      "Vietnam",
      "Ethiopia"
    ],
    "funFact": "Brazil has been the largest producer of coffee in the world for over 150 years, contributing about 40% of the world\u2019s coffee supply!"
  },
  {
    "category": "Coffee Culture",
    "question": "What percentage of Americans drink coffee daily?",
    "correctAnswer": "Around 62%",
    "incorrectAnswers": [
      "Around 45%",
      "Around 73%",
      "Around 89%"
    ],
    "funFact": "Over 62% of Americans drink coffee daily, with the average coffee drinker consuming about 3 cups per day!"
  },
  {
    "category": "Coffee Culture",
    "question": "What is the most popular coffee drink in the U.S.?",
    "correctAnswer": "Espresso-based drinks like lattes and cappuccinos",
    "incorrectAnswers": [
      "Cold brew Coffee",
      "Drip coffee made with a French press",
      "Americano Coffee"
    ],
    "funFact": "While regular drip coffee remains popular, espresso-based drinks like lattes and cappuccinos have become the go-to favorites in coffee shops!"
  },
  {
    "category": "Coffee Culture",
    "question": "What is the average amount of caffeine in a cup of coffee?",
    "correctAnswer": "95 mg",
    "incorrectAnswers": [
      "50 mg",
      "75 mg",
      "120 mg"
    ],
    "funFact": "The average cup of coffee contains around 95 mg of caffeine, though this can vary depending on the type of coffee bean and brewing method used."
  },
  {
    "category": "Coffee Culture",
    "question": "What are the two main types of coffee beans?",
    "correctAnswer": "Arabica and Robusta",
    "incorrectAnswers": [
      "Arabica and Liberica",
      "Robusta and Excelsa",
      "Liberica and Robusta"
    ],
    "funFact": "Arabica beans are known for their smooth, mild flavor, while Robusta beans are more robust, with higher caffeine content and a stronger taste."
  },
  {
    "category": "Coffee Culture",
    "question": "Which country consumes the most coffee per capita?",
    "correctAnswer": "Finland",
    "incorrectAnswers": [
      "Italy",
      "United States",
      "Norway"
    ],
    "funFact": "Finland tops the world in coffee consumption per capita, with the average Finn drinking around 4 cups of coffee per day!"
  },
  {
    "category": "Coffee Culture",
    "question": "What is the difference between espresso and regular coffee?",
    "correctAnswer": "Espresso is brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans",
    "incorrectAnswers": [
      "Espresso uses cold water and coffee, while regular coffee uses hot water",
      "Espresso is brewed faster and has a thicker consistency",
      "Regular coffee has more caffeine than espresso"
    ],
    "funFact": "Espresso is brewed under high pressure, resulting in a thicker and more concentrated coffee than regular drip coffee."
  },
  {
    "category": "Coffee Culture",
    "question": "How much coffee does the average American drink per year?",
    "correctAnswer": "Around 88 gallons",
    "incorrectAnswers": [
      "Around 55 gallons",
      "Around 111 gallons",
      "Around 66 gallons"
    ],
    "funFact": "The average American drinks around 88 gallons of coffee each year, which is the equivalent of about 1.7 cups per day!"
  },
  {
    "category": "Coffee Culture",
    "question": "\u2018s the name of the process for removing caffeine from coffee?",
    "correctAnswer": "Decaffeination",
    "incorrectAnswers": [
      "Filtration",
      "Extraction",
      "Dilution"
    ],
    "funFact": "Decaffeination involves removing caffeine from coffee beans, typically using water, solvents, or carbon dioxide."
  },
  {
    "category": "Coffee Culture",
    "question": "What is the most common coffee brewing method in the U.S.?",
    "correctAnswer": "Drip brewing",
    "incorrectAnswers": [
      "French press",
      "Pour over",
      "Espresso machine"
    ],
    "funFact": "Drip brewing, where hot water passes through coffee grounds in a filter, remains the most popular method of making coffee in the U.S."
  },
  {
    "category": "Coffee Culture",
    "question": "What does \u201csingle origin\u201d coffee mean?",
    "correctAnswer": "Coffee sourced from one region or country",
    "incorrectAnswers": [
      "Coffee sourced from one farm",
      "Coffee made from a single type of bean",
      "Coffee brewed using a single method"
    ],
    "funFact": "Single origin coffee highlights the unique flavors of a specific region or country, often prized for its traceability and quality."
  },
  {
    "category": "Coffee Culture",
    "question": "What is the most expensive coffee in the world?",
    "correctAnswer": "Kopi Luwak",
    "incorrectAnswers": [
      "Hacienda La Esmeralda",
      "Hawaiian Kona Coffee",
      "Jamaica Blue Mountain Coffee"
    ],
    "funFact": "Kopi Luwak is made from beans that have been eaten, digested, and excreted by civet cats. The fermentation that occurs during the digestive process is believed to reduce the acidity and bitterness of the beans, resulting in a smoother, richer, and more aromatic coffee. In specialty coffee shops, a single cup can cost anywhere from $30 to $100. "
  },
  {
    "category": "Coffee Culture",
    "question": "How many cups of coffee are consumed worldwide every day?",
    "correctAnswer": "2.25 billion cups",
    "incorrectAnswers": [
      "1.5 billion cups",
      "3.75 billion cups",
      "4.25 billion cups"
    ],
    "funFact": "Around 2.25 billion cups of coffee are consumed worldwide each day, making it one of the most popular beverages globally!"
  },
  {
    "category": "Coffee Culture",
    "question": "What\u2019s the best temperature to brew coffee?",
    "correctAnswer": "195\u00b0F to 205\u00b0F",
    "incorrectAnswers": [
      "180\u00b0F to 190\u00b0F",
      "150\u00b0F to 160\u00b0F",
      "210\u00b0F to 220\u00b0F"
    ],
    "funFact": "The ideal temperature for brewing coffee is between 195\u00b0F and 205\u00b0F, as this range helps extract the best flavors from the coffee grounds."
  },
  {
    "category": "Coffee Culture",
    "question": "What is a macchiato?",
    "correctAnswer": "An espresso shot with a small amount of steamed milk",
    "incorrectAnswers": [
      "A shot of espresso mixed with whipped cream",
      "A coffee drink made with equal parts cold brew coffee and milk",
      "A double shot of espresso with a dash of vanilla syrup"
    ],
    "funFact": "The macchiato is an Italian espresso drink that\u2019s marked with just a touch of steamed milk, which helps balance the strong espresso flavor."
  },
  {
    "category": "Coffee Culture",
    "question": "How long does it take for coffee beans to grow from plant to harvest?",
    "correctAnswer": "Around 3-4 years",
    "incorrectAnswers": [
      "Around 1 year",
      "Between 6-12 months",
      "Around 6 years"
    ],
    "funFact": "It takes about 3 to 4 years for a coffee plant to mature and produce its first crop of coffee cherries, which are then processed into coffee beans."
  },
  {
    "category": "Coffee Culture",
    "question": "Which country invented the flat white coffee?",
    "correctAnswer": "Australia (though some debate it was New Zealand)",
    "incorrectAnswers": [
      "United States (though some debate it was Canada)",
      "Italy (though some debate it was Sicily)",
      "Brazil (though some debate it was Argentina)"
    ],
    "funFact": "The flat white, a popular espresso-based drink, was invented in Australia (though some argue it originated in New Zealand) and has since become a favorite worldwide."
  },
  {
    "category": "Cold Brew Coffee",
    "question": "What is cold brew\u2019s origin?",
    "correctAnswer": "Japan, from Kyoto-style brewing methods",
    "incorrectAnswers": [
      "Italy, from espresso variations",
      "France, from the French press",
      "United States, from the 1990s coffee boom"
    ],
    "funFact": "Cold brew originated in Japan with Kyoto-style brewing, a slow process that involved dripping cold water over coffee grounds for several hours."
  },
  {
    "category": "Coffee Culture",
    "question": "What\u2019s the difference between light, medium, and dark roast coffee?",
    "correctAnswer": "Light roast is more acidic with higher caffeine, medium roast is balanced, and dark roast has a richer, bitter taste with less caffeine",
    "incorrectAnswers": [
      "Light roast has the most sugar, medium roast is the strongest, and dark roast is the lightest",
      "Light roast is the strongest, medium roast has the most flavor, and dark roast is mild",
      "Light roast is the weakest, medium roast is strongest, and dark roast is richest in flavor"
    ],
    "funFact": "While dark roasts are often perceived as stronger, light roast coffee actually contains more caffeine and maintains the natural acidity of the beans."
  },
  {
    "category": "Coffee Culture",
    "question": "What is the name of the process used to turn coffee cherries into coffee beans?",
    "correctAnswer": "Coffee processing",
    "incorrectAnswers": [
      "Coffee fermentation",
      "Coffee roasting",
      "Coffee grinding"
    ],
    "funFact": "Coffee processing involves removing the cherry pulp to reveal the beans inside, with methods like dry (natural) or wet (washed) processing being the most common!"
  }

]