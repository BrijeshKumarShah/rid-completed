


const questions = [
  {
    "num": 1,
    "question_hi": "उत्तर प्रदेश में 'महर्षि महेश योगी' ने किस विश्वविद्यालय की स्थापना की?",
    "options_hi": ["महर्षि मार्कंडेश्वर विश्वविद्यालय", "महर्षि दयानंद विश्वविद्यालय", "महर्षि विश्वविद्यालय", "महर्षि वेद विश्वविद्यालय"],
    "answer_hi": "महर्षि विश्वविद्यालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य विज्ञान आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["डॉ. शशि थरूर", "डॉ. किरण मजूमदार", "डॉ. सुमित्रा महाजन", "डॉ. सुषमा स्वराज"],
    "answer_hi": "डॉ. शशि थरूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_hi": "उत्तर प्रदेश में 'कौशांबी' किसके लिए ऐतिहासिक रूप से प्रसिद्ध है?",
    "options_hi": ["गुप्त काल की राजधानी", "मौर्य काल की राजधानी", "कुषाण काल की राजधानी", "शुंग काल की राजधानी"],
    "answer_hi": "गुप्त काल की राजधानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा नैनो टेक्नोलॉजी संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "चेन्नई", "मुंबई", "दिल्ली"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_hi": "उत्तर प्रदेश में 'सूर्य मंदिर, कोणार्क' किस देवता को समर्पित है?",
    "options_hi": ["सूर्य देव", "विष्णु देव", "शिव देव", "ब्रह्मा देव"],
    "answer_hi": "सूर्य देव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य प्रशासनिक सुधार आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["डॉ. सुषमा स्वराज", "डॉ. सुमित्रा महाजन", "डॉ. मीनाक्षी लेखी", "डॉ. किरण खेर"],
    "answer_hi": "डॉ. सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_hi": "उत्तर प्रदेश में 'बीरबल' किस मुगल बादशाह के दरबारी थे?",
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगजेब"],
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा स्पेस रिसर्च सेंटर कहाँ है?",
    "options_hi": ["बेंगलुरु", "श्रीहरिकोटा", "अहमदाबाद", "तिरुवनंतपुरम"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_hi": "उत्तर प्रदेश में 'मीराबाई' किस भक्ति संप्रदाय से संबंधित थीं?",
    "options_hi": ["कृष्ण भक्ति", "राम भक्ति", "शिव भक्ति", "दुर्गा भक्ति"],
    "answer_hi": "कृष्ण भक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य युवा आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["सुश्री मीनाक्षी लेखी", "सुश्री सुमित्रा महाजन", "सुश्री सुषमा स्वराज", "सुश्री किरण खेर"],
    "answer_hi": "सुश्री मीनाक्षी लेखी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_hi": "उत्तर प्रदेश में 'नालंदा विश्वविद्यालय' किस राजा ने स्थापित किया?",
    "options_hi": ["कुमारगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
    "answer_hi": "कुमारगुप्त प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा आर्टिफिशियल इंटेलिजेंस संस्थान कहाँ है?",
    "options_hi": ["हैदराबाद", "बेंगलुरु", "पुणे", "दिल्ली"],
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_hi": "उत्तर प्रदेश में 'गुरु नानक देव' ने किस धर्म की स्थापना की?",
    "options_hi": ["सिख धर्म", "बौद्ध धर्म", "जैन धर्म", "पारसी धर्म"],
    "answer_hi": "सिख धर्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य बाल अधिकार आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुषमा स्वराज", "श्रीमती सुमित्रा महाजन", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_hi": "उत्तर प्रदेश में 'हुमायूँ का मकबरा' कहाँ स्थित है?",
    "options_hi": ["दिल्ली", "आगरा", "फतेहपुर सीकरी", "लाहौर"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा साइबर सुरक्षा संस्थान कहाँ है?",
    "options_hi": ["दिल्ली", "मुंबई", "चेन्नई", "बेंगलुरु"],
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_hi": "उत्तर प्रदेश में 'अकबर' ने किस धर्म की स्थापना की?",
    "options_hi": ["दीन-ए-इलाही", "सुलह-ए-कुल", "तौहीद-ए-इलाही", "इबादत-ए-इलाही"],
    "answer_hi": "दीन-ए-इलाही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य वरिष्ठ नागरिक आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुमित्रा महाजन", "श्रीमती सुषमा स्वराज", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुमित्रा महाजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_hi": "उत्तर प्रदेश में 'महात्मा बुद्ध' ने अपना पहला उपदेश कहाँ दिया?",
    "options_hi": ["सारनाथ", "बोधगया", "कुशीनगर", "लुम्बिनी"],
    "answer_hi": "सारनाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा रोबोटिक्स संस्थान कहाँ है?",
    "options_hi": ["पुणे", "बेंगलुरु", "चेन्नई", "हैदराबाद"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_hi": "उत्तर प्रदेश में 'विजयनगर साम्राज्य' की स्थापना किसने की?",
    "options_hi": ["हरिहर और बुक्का", "कृष्णदेव राय", "देव राय प्रथम", "संगम"],
    "answer_hi": "हरिहर और बुक्का",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य अल्पसंख्यक आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुषमा स्वराज", "श्रीमती सुमित्रा महाजन", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_hi": "उत्तर प्रदेश में 'तानसेन समारोह' कहाँ आयोजित होता है?",
    "options_hi": ["ग्वालियर", "आगरा", "लखनऊ", "वाराणसी"],
    "answer_hi": "ग्वालियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा ब्लॉकचेन संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "मुंबई", "दिल्ली", "हैदराबाद"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_hi": "उत्तर प्रदेश में 'भक्ति आंदोलन' का प्रारंभ किस शताब्दी में हुआ?",
    "options_hi": ["7वीं शताब्दी", "8वीं शताब्दी", "9वीं शताब्दी", "10वीं शताब्दी"],
    "answer_hi": "7वीं शताब्दी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य अनुसूचित जाति आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुमित्रा महाजन", "श्रीमती सुषमा स्वराज", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुमित्रा महाजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "उत्तर प्रदेश में 'मुगल साम्राज्य' का अंतिम शासक कौन था?",
    "options_hi": ["बहादुर शाह जफर", "शाह आलम द्वितीय", "अकबर द्वितीय", "मुहम्मद शाह"],
    "answer_hi": "बहादुर शाह जफर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा क्वांटम कंप्यूटिंग संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "उत्तर प्रदेश में 'सती प्रथा' का अंत किसके द्वारा किया गया?",
    "options_hi": ["लॉर्ड विलियम बेंटिक", "लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड रिपन"],
    "answer_hi": "लॉर्ड विलियम बेंटिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य अनुसूचित जनजाति आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुषमा स्वराज", "श्रीमती सुमित्रा महाजन", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "उत्तर प्रदेश में '1857 का विद्रोह' कहाँ से शुरू हुआ?",
    "options_hi": ["मेरठ", "दिल्ली", "कानपुर", "लखनऊ"],
    "answer_hi": "मेरठ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा मेटावर्स संस्थान कहाँ है?",
    "options_hi": ["दिल्ली", "मुंबई", "बेंगलुरु", "हैदराबाद"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "उत्तर प्रदेश में 'स्वतंत्रता संग्राम' में 'चंद्रशेखर आजाद' की भूमिका क्या थी?",
    "options_hi": ["क्रांतिकारी", "गांधीवादी", "सुधारवादी", "समाजवादी"],
    "answer_hi": "क्रांतिकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य पिछड़ा वर्ग आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुमित्रा महाजन", "श्रीमती सुषमा स्वराज", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुमित्रा महाजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "उत्तर प्रदेश में 'महात्मा गांधी' ने 'नमक सत्याग्रह' कब शुरू किया?",
    "options_hi": ["1930", "1931", "1932", "1933"],
    "answer_hi": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा साइबर फिजिकल सिस्टम संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "पुणे", "चेन्नई", "दिल्ली"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "उत्तर प्रदेश में 'जवाहरलाल नेहरू' भारत के प्रथम क्या बने?",
    "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति", "मुख्य न्यायाधीश"],
    "answer_hi": "प्रधानमंत्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य मानव विकास आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुषमा स्वराज", "श्रीमती सुमित्रा महाजन", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "उत्तर प्रदेश में 'डॉ. बी. आर. अंबेडकर' ने संविधान का मसौदा कब तैयार किया?",
    "options_hi": ["1947-1949", "1948-1950", "1949-1951", "1950-1952"],
    "answer_hi": "1947-1949",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा आगामी प्रौद्योगिकी शोध संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "उत्तर प्रदेश में 'लाल बहादुर शास्त्री' ने किस नारे को लोकप्रिय बनाया?",
    "options_hi": ["जय जवान जय किसान", "इंकलाब जिंदाबाद", "वंदे मातरम", "भारत माता की जय"],
    "answer_hi": "जय जवान जय किसान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य डिजिटल इंडिया आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुमित्रा महाजन", "श्रीमती सुषमा स्वराज", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुमित्रा महाजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "उत्तर प्रदेश में 'इंदिरा गांधी' कब प्रधानमंत्री बनीं?",
    "options_hi": ["1966", "1967", "1968", "1969"],
    "answer_hi": "1966",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा सस्टेनेबल टेक्नोलॉजी संस्थान कहाँ है?",
    "options_hi": ["दिल्ली", "बेंगलुरु", "चेन्नई", "हैदराबाद"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "उत्तर प्रदेश में 'डॉ. ए. पी. जे. अब्दुल कलाम' किस क्षेत्र में प्रसिद्ध थे?",
    "options_hi": ["मिसाइल प्रौद्योगिकी", "चिकित्सा विज्ञान", "अर्थशास्त्र", "साहित्य"],
    "answer_hi": "मिसाइल प्रौद्योगिकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य स्टार्टअप आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुषमा स्वराज", "श्रीमती सुमित्रा महाजन", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुषमा स्वराज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "उत्तर प्रदेश में 'नरेंद्र मोदी' कब प्रधानमंत्री बने?",
    "options_hi": ["2014", "2015", "2016", "2017"],
    "answer_hi": "2014",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "उत्तर प्रदेश का सबसे बड़ा हरित प्रौद्योगिकी संस्थान कहाँ है?",
    "options_hi": ["बेंगलुरु", "मुंबई", "दिल्ली", "चेन्नई"],
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "उत्तर प्रदेश में 'कोविड-19 महामारी' कब शुरू हुई?",
    "options_hi": ["2019", "2020", "2021", "2022"],
    "answer_hi": "2020",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "उत्तर प्रदेश की प्रथम महिला राज्य भविष्य प्रौद्योगिकी आयोग अध्यक्ष कौन थीं?",
    "options_hi": ["श्रीमती सुमित्रा महाजन", "श्रीमती सुषमा स्वराज", "श्रीमती मीनाक्षी लेखी", "श्रीमती किरण खेर"],
    "answer_hi": "श्रीमती सुमित्रा महाजन",
    "attempted": false,
    "selected": ""
  }
]


        
        

// Add more questions here...

let currentQuestion = 0; 
let language = "hindi";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
