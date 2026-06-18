// Pasumai Madurai - Waste Segregation Assistant
// Comprehensive Waste Database with Tamil translations

const wasteDatabase = {
    // GREEN BIN - Biodegradable Waste (மட்கும் குப்பை)
    biodegradable: {
        category: "Green Bin (மட்கும் குப்பை / Biodegradable Waste)",
        icon: "🟢",
        items: {
            // Food Waste
            "banana peel": {
                tamil: "வாழைப்பழ தோல்",
                steps: "Collect in a separate container. Can be composted at home or put in green bin.",
                impact: "Banana peels decompose quickly and create nutrient-rich compost for Madurai's gardens!"
            },
            "vegetable waste": {
                tamil: "காய்கறி கழிவுகள்",
                steps: "Remove any plastic/stickers. Collect in green bin daily to avoid smell.",
                impact: "Proper segregation helps Madurai's composting plants create organic fertilizer for local farms."
            },
            "fruit waste": {
                tamil: "பழக் கழிவுகள்",
                steps: "Remove seeds if composting at home. Put in green bin.",
                impact: "Fruit waste becomes compost in 45-60 days, reducing landfill burden in Madurai."
            },
            "cooked food": {
                tamil: "சமைத்த உணவு",
                steps: "Drain excess liquid. Put in green bin. Avoid mixing with plastic containers.",
                impact: "Food waste in landfills creates methane gas. Proper disposal helps reduce greenhouse emissions."
            },
            "rice": {
                tamil: "சாதம்",
                steps: "Leftover rice goes in green bin. Can also be used as animal feed if fresh.",
                impact: "Segregated food waste helps தூய்மை பணியாளர்கள் (sanitation workers) process waste efficiently."
            },
            "tea leaves": {
                tamil: "தேயிலை கழிவு",
                steps: "Drain water, put leaves in green bin. Great for home composting too!",
                impact: "Tea leaves are excellent compost material, enriching soil for Madurai's urban gardens."
            },
            "coffee grounds": {
                tamil: "காபி கழிவு",
                steps: "Dry coffee grounds can go in green bin or use for home composting.",
                impact: "Coffee grounds add nitrogen to compost, creating rich soil for plants."
            },
            "egg shells": {
                tamil: "முட்டை ஓடு",
                steps: "Crush shells and put in green bin. They decompose slowly but add calcium to compost.",
                impact: "Egg shells improve soil quality and help reduce waste going to Madurai's landfills."
            },
            // Garden Waste
            "leaves": {
                tamil: "இலைகள்",
                steps: "Dry leaves can be composted at home or put in green bin. Avoid diseased leaves.",
                impact: "Leaf waste creates excellent mulch, helping Madurai maintain green spaces naturally."
            },
            "grass": {
                tamil: "புல்",
                steps: "Collect grass clippings in green bin. Mix with dry leaves for better composting.",
                impact: "Grass clippings decompose fast and return nutrients to soil, supporting urban greenery."
            },
            "flowers": {
                tamil: "பூக்கள்",
                steps: "Remove any plastic/wire. Put wilted flowers in green bin.",
                impact: "Flower waste from temples and homes can be composted, reducing religious waste pollution."
            },
            "coconut shells": {
                tamil: "தேங்காய் ஓடு",
                steps: "Break into smaller pieces. Takes longer to decompose but goes in green bin.",
                impact: "Coconut shells can be used for crafts or fuel before disposal, promoting circular economy."
            },
            "paper": {
                tamil: "காகிதம்",
                steps: "Clean paper without plastic coating goes in green bin or blue bin for recycling.",
                impact: "Paper recycling saves trees and reduces water usage in paper manufacturing."
            },
            "cardboard": {
                tamil: "அட்டை பெட்டி",
                steps: "Flatten boxes, remove tape/staples. Put in blue bin for recycling.",
                impact: "Cardboard recycling reduces deforestation and saves energy in production."
            },
            "wood": {
                tamil: "மரம்",
                steps: "Small untreated wood pieces go in green bin. Large pieces need special disposal.",
                impact: "Wood waste can be repurposed or composted, reducing landfill volume."
            }
        }
    },

    // BLUE BIN - Non-biodegradable Recyclable (மட்காத குப்பை)
    recyclable: {
        category: "Blue Bin (மட்காத குப்பை / Non-biodegradable Recyclable)",
        icon: "🔵",
        items: {
            // Plastic
            "plastic bottle": {
                tamil: "பிளாஸ்டிக் பாட்டில்",
                steps: "Empty and rinse bottle. Remove cap and label. Crush and put in blue bin.",
                impact: "Recycling one plastic bottle saves enough energy to power a light bulb for 3 hours!"
            },
            "plastic cover": {
                tamil: "பிளாஸ்டிக் கவர்",
                steps: "Clean and dry plastic covers. Collect multiple covers together in blue bin.",
                impact: "Plastic covers take 500+ years to decompose. Recycling prevents them from choking Madurai's drains."
            },
            "plastic container": {
                tamil: "பிளாஸ்டிக் டப்பா",
                steps: "Wash container thoroughly. Check for recycling symbol. Put in blue bin.",
                impact: "Recycled plastic containers reduce oil consumption and pollution in manufacturing."
            },
            "plastic bag": {
                tamil: "பிளாஸ்டிக் பை",
                steps: "Collect clean plastic bags together. Avoid mixing with food waste. Blue bin.",
                impact: "Plastic bags harm marine life and clog drainage. Recycling protects Madurai's water systems."
            },
            "plastic toys": {
                tamil: "பிளாஸ்டிக் பொம்மைகள்",
                steps: "Remove batteries first. Clean toys go in blue bin for recycling.",
                impact: "Toy recycling reduces plastic waste and can create new products for children."
            },
            // Metal
            "tin can": {
                tamil: "டின் டப்பா",
                steps: "Rinse can thoroughly. Remove label if possible. Put in blue bin.",
                impact: "Recycling aluminum saves 95% of energy needed to make new cans from raw materials!"
            },
            "aluminum foil": {
                tamil: "அலுமினியம் தாள்",
                steps: "Clean foil, remove food residue. Crumple into ball and put in blue bin.",
                impact: "Aluminum is infinitely recyclable without quality loss, making it highly valuable."
            },
            "metal utensils": {
                tamil: "உலோக பாத்திரங்கள்",
                steps: "Old metal utensils can be sold to scrap dealers or put in blue bin.",
                impact: "Metal recycling reduces mining and saves significant energy in production."
            },
            "steel containers": {
                tamil: "எஃகு பாத்திரங்கள்",
                steps: "Clean steel containers go in blue bin. Can also be donated if usable.",
                impact: "Steel recycling conserves iron ore and reduces carbon emissions significantly."
            },
            // Glass
            "glass bottle": {
                tamil: "கண்ணாடி பாட்டில்",
                steps: "Rinse bottle. Remove cap. Wrap in newspaper if broken. Put in blue bin carefully.",
                impact: "Glass is 100% recyclable and can be recycled endlessly without quality loss!"
            },
            "glass jar": {
                tamil: "கண்ணாடி ஜாடி",
                steps: "Clean jar thoroughly. Remove metal lid. Put in blue bin.",
                impact: "Recycling glass reduces raw material extraction and saves energy in manufacturing."
            },
            // Paper Products
            "newspaper": {
                tamil: "செய்தித்தாள்",
                steps: "Stack newspapers neatly. Keep dry. Tie with string and put in blue bin.",
                impact: "Recycling newspapers saves trees and reduces water pollution from paper mills."
            },
            "magazine": {
                tamil: "பத்திரிகை",
                steps: "Remove plastic covers. Stack magazines and put in blue bin.",
                impact: "Magazine recycling reduces deforestation and conserves water resources."
            },
            "notebook": {
                tamil: "குறிப்பேடு",
                steps: "Remove spiral binding and plastic covers. Paper goes in blue bin.",
                impact: "Recycling one ton of paper saves 17 trees and 7,000 gallons of water!"
            },
            "cardboard box": {
                tamil: "அட்டைப் பெட்டி",
                steps: "Flatten boxes to save space. Remove tape and labels. Put in blue bin.",
                impact: "Cardboard recycling reduces landfill waste by 24% and saves forest resources."
            },
            // Textiles
            "old clothes": {
                tamil: "பழைய துணிகள்",
                steps: "Donate wearable clothes. Torn clothes can be used as rags or put in blue bin.",
                impact: "Textile recycling reduces water pollution from dye factories and saves landfill space."
            },
            "cloth bags": {
                tamil: "துணி பைகள்",
                steps: "Reuse cloth bags multiple times. When worn out, recycle in blue bin.",
                impact: "Cloth bags are reusable 100+ times, reducing plastic bag pollution significantly."
            }
        }
    },

    // RED BIN - Domestic Hazardous Waste (ஆபத்தான கழிவுகள்)
    hazardous: {
        category: "Domestic Hazardous Waste (ஆபத்தான கழிவுகள் / Medical or Sanitary Waste)",
        icon: "🔴",
        items: {
            // Medical Waste
            "medicine strip": {
                tamil: "மருந்து பாக்கெட்",
                steps: "Collect expired medicines separately. Return to pharmacy or put in red bag/bin.",
                impact: "Proper medicine disposal prevents water contamination and protects Madurai's groundwater."
            },
            "syringe": {
                tamil: "ஊசி",
                steps: "NEVER throw loose! Put in puncture-proof container, seal, and give to medical waste collector.",
                impact: "Safe syringe disposal protects தூய்மை பணியாளர்கள் from needle-stick injuries and infections."
            },
            "bandage": {
                tamil: "கட்டு",
                steps: "Used bandages go in red bag. Seal bag before disposal.",
                impact: "Medical waste segregation prevents disease spread and protects sanitation workers."
            },
            "cotton": {
                tamil: "பஞ்சு",
                steps: "Used medical cotton goes in red bag. Never mix with regular waste.",
                impact: "Proper disposal of medical cotton prevents infection transmission in the community."
            },
            // Sanitary Waste
            "sanitary pad": {
                tamil: "சானிட்டரி நாப்கின்",
                steps: "Wrap in newspaper or disposal bag. Put in red bin or sanitary waste bin.",
                impact: "Proper sanitary waste disposal maintains hygiene and dignity for all Madurai residents."
            },
            "diaper": {
                tamil: "டயாப்பர்",
                steps: "Wrap used diaper in newspaper. Put in red bin or separate bag for disposal.",
                impact: "Diaper waste management prevents soil and water contamination in residential areas."
            },
            // Chemical Waste
            "battery": {
                tamil: "மின்கலம்",
                steps: "Collect batteries separately. Take to e-waste collection center or designated drop-off points.",
                impact: "Battery chemicals can poison soil and water. Proper disposal protects Madurai's environment."
            },
            "paint": {
                tamil: "பெயிண்ட்",
                steps: "Dry out paint cans. Take to hazardous waste collection center. Never pour down drain.",
                impact: "Paint chemicals contaminate water sources. Proper disposal protects drinking water quality."
            },
            "pesticide": {
                tamil: "பூச்சிக்கொல்லி",
                steps: "Keep in original container. Take to hazardous waste facility. Never mix with regular trash.",
                impact: "Pesticide disposal prevents soil contamination and protects agricultural land around Madurai."
            },
            "cleaning chemicals": {
                tamil: "சுத்தம் செய்யும் ரசாயனங்கள்",
                steps: "Use up completely if possible. Empty containers go in blue bin after rinsing.",
                impact: "Chemical waste management prevents water pollution and protects aquatic ecosystems."
            }
        }
    },

    // YELLOW BIN - E-Waste (மின்னணுக் கழிவுகள்)
    ewaste: {
        category: "E-Waste (மின்னணுக் கழிவுகள் / Electronic Scraps, Wires, and Batteries)",
        icon: "⚡",
        items: {
            // Electronics
            "old mobile": {
                tamil: "பழைய மொபைல்",
                steps: "Remove SIM and memory card. Take to authorized e-waste collection center or mobile shop.",
                impact: "One mobile phone contains gold, silver, and copper worth ₹100+. Recycling recovers precious metals!"
            },
            "mobile phone": {
                tamil: "மொபைல் போன்",
                steps: "Delete personal data. Remove battery if possible. Take to e-waste center.",
                impact: "E-waste recycling prevents toxic materials from polluting soil and recovers valuable resources."
            },
            "laptop": {
                tamil: "லேப்டாப்",
                steps: "Backup and erase data. Take to authorized e-waste recycler. Never throw in regular trash.",
                impact: "Laptops contain hazardous materials like lead and mercury. Proper disposal protects health."
            },
            "computer": {
                tamil: "கம்ப்யூட்டர்",
                steps: "Remove hard drive for data security. Take to e-waste collection center.",
                impact: "Computer recycling recovers metals and prevents toxic chemicals from entering environment."
            },
            "keyboard": {
                tamil: "கீபோர்டு",
                steps: "Take to e-waste center. Can be donated if working.",
                impact: "Electronic peripherals contain recyclable plastics and metals worth recovering."
            },
            "mouse": {
                tamil: "மவுஸ்",
                steps: "Remove batteries. Take to e-waste collection point.",
                impact: "Small electronics add up! Proper disposal prevents accumulation in landfills."
            },
            "charger": {
                tamil: "சார்ஜர்",
                steps: "Collect old chargers. Take to e-waste center or mobile shop collection box.",
                impact: "Chargers contain copper and other recyclable materials. Recycling reduces mining needs."
            },
            "headphones": {
                tamil: "ஹெட்போன்",
                steps: "Take to e-waste center. Donate if working.",
                impact: "Electronic waste recycling creates jobs and recovers valuable materials."
            },
            "tv": {
                tamil: "டிவி",
                steps: "Contact e-waste collector for pickup. Never break or burn.",
                impact: "Old TVs contain lead and mercury. Professional recycling prevents environmental contamination."
            },
            "refrigerator": {
                tamil: "குளிர்சாதனப் பெட்டி",
                steps: "Contact authorized e-waste recycler for pickup. Contains harmful refrigerants.",
                impact: "Refrigerator recycling prevents ozone-depleting gases from escaping into atmosphere."
            },
            "fan": {
                tamil: "விசிறி",
                steps: "Take to scrap dealer or e-waste center. Metal parts are valuable.",
                impact: "Fan recycling recovers copper and aluminum, reducing need for new mining."
            },
            "iron": {
                tamil: "இஸ்திரி",
                steps: "Take to e-waste center. Metal body can be recycled.",
                impact: "Small appliance recycling prevents toxic materials from contaminating soil."
            },
            // Batteries and Bulbs
            "led bulb": {
                tamil: "எல்.இ.டி பல்பு",
                steps: "Wrap carefully to avoid breaking. Take to e-waste center.",
                impact: "LED bulbs contain recyclable components and small amounts of hazardous materials."
            },
            "cfl bulb": {
                tamil: "சி.எஃப்.எல் பல்பு",
                steps: "CAREFUL! Contains mercury. Wrap in newspaper, take to e-waste center.",
                impact: "CFL bulbs contain mercury. Proper disposal prevents toxic contamination of water sources."
            },
            "tube light": {
                tamil: "ட்யூப் லைட்",
                steps: "Handle carefully. Take to e-waste collection center.",
                impact: "Fluorescent tubes contain mercury vapor. Professional recycling prevents health hazards."
            },
            "car battery": {
                tamil: "கார் பேட்டரி",
                steps: "Return to auto shop or battery dealer. They will recycle properly.",
                impact: "Car batteries contain lead and acid. Recycling recovers 99% of materials safely!"
            },
            // Wires and Cables
            "electric wire": {
                tamil: "மின் கம்பி",
                steps: "Collect old wires. Take to scrap dealer or e-waste center.",
                impact: "Copper wire recycling is highly valuable and reduces mining environmental impact."
            },
            "cable": {
                tamil: "கேபிள்",
                steps: "Bundle cables together. Take to e-waste center.",
                impact: "Cable recycling recovers copper and plastic, supporting circular economy."
            }
        }
    }
};

// Chat functionality
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const exampleChips = document.querySelectorAll('.example-chip');

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Search for waste item in database
function searchWasteItem(query) {
    query = query.toLowerCase().trim();
    
    // Search through all categories
    for (const [categoryKey, categoryData] of Object.entries(wasteDatabase)) {
        for (const [itemKey, itemData] of Object.entries(categoryData.items)) {
            if (itemKey.includes(query) || query.includes(itemKey) || 
                itemData.tamil.includes(query) || query.includes(itemData.tamil)) {
                return {
                    found: true,
                    category: categoryData.category,
                    icon: categoryData.icon,
                    item: itemKey,
                    data: itemData
                };
            }
        }
    }
    
    return { found: false };
}

// Format bot response
function formatResponse(result) {
    if (!result.found) {
        return `
            <p><strong>Sorry! I couldn't find that item in my database.</strong></p>
            <p>Could you try describing it differently? For example:</p>
            <ul>
                <li>Instead of "trash" → try "plastic bottle" or "food waste"</li>
                <li>Instead of "garbage" → try specific items like "newspaper" or "banana peel"</li>
            </ul>
            <p>Or click one of the example chips below to see how it works! 😊</p>
        `;
    }
    
    return `
        ${result.icon} <b>Waste Category:</b> ${result.category}<br><br>
        📌 <b>What to do (வழிமுறைகள்):</b><br>
        ${result.data.steps}<br><br>
        🌱 <b>Sustainability Impact:</b><br>
        ${result.data.impact}
    `;
}

// Handle user input
function handleUserInput() {
    const query = userInput.value.trim();
    
    if (!query) return;
    
    // Add user message
    addMessage(query, true);
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    addMessage('<span class="loading-dots">Analyzing</span>', false);
    
    // Simulate processing delay
    setTimeout(() => {
        // Remove typing indicator
        chatMessages.removeChild(chatMessages.lastChild);
        
        // Search and respond
        const result = searchWasteItem(query);
        const response = formatResponse(result);
        addMessage(response, false);
    }, 800);
}

// Event listeners
sendButton.addEventListener('click', handleUserInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Example chip clicks
exampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const item = chip.getAttribute('data-item');
        userInput.value = item;
        handleUserInput();
    });
});

// Focus input on load
window.addEventListener('load', () => {
    userInput.focus();
});

// Made with Bob
