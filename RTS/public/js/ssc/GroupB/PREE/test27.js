const questions = [
  {
        "num": 1,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": [
            "New Delhi",
            "Berlin",
            "Ottawa",
            "Brasilia"
        ],
        "options_hi": [
            "नई दिल्ली",
            "बर्लिन",
            "ऑटावा",
            "ब्रासीलिया"
        ],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the capital of France?",
        "question_hi": "फ़्रांस की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Paris",
            "Paris",
            "New Delhi"
        ],
        "options_hi": [
            "ऑटावा",
            "पेरिस",
            "पेरिस",
            "नई दिल्ली"
        ],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": [
            "Paris",
            "Moscow",
            "Tokyo",
            "Berlin"
        ],
        "options_hi": [
            "पेरिस",
            "मॉस्को",
            "टोक्यो",
            "बर्लिन"
        ],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "New Delhi",
            "Paris",
            "Berlin"
        ],
        "options_hi": [
            "कैनबरा",
            "नई दिल्ली",
            "पेरिस",
            "बर्लिन"
        ],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Brasilia",
            "New Delhi",
            "Madrid"
        ],
        "options_hi": [
            "कैनबरा",
            "ब्रासीलिया",
            "नई दिल्ली",
            "मैड्रिड"
        ],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Rome",
            "Canberra",
            "Moscow"
        ],
        "options_hi": [
            "ऑटावा",
            "रोम",
            "कैनबरा",
            "मॉस्को"
        ],
        "answer_en": "Ottawa",
        "answer_hi": "ऑटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the capital of Germany?",
        "question_hi": "जर्मनी की राजधानी क्या है?",
        "options_en": [
            "New Delhi",
            "Tokyo",
            "Ottawa",
            "Berlin"
        ],
        "options_hi": [
            "नई दिल्ली",
            "टोक्यो",
            "ऑटावा",
            "बर्लिन"
        ],
        "answer_en": "Berlin",
        "answer_hi": "बर्लिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": [
            "Brasilia",
            "Ottawa",
            "Canberra",
            "Moscow"
        ],
        "options_hi": [
            "ब्रासीलिया",
            "ऑटावा",
            "कैनबरा",
            "मॉस्को"
        ],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the capital of Italy?",
        "question_hi": "इटली की राजधानी क्या है?",
        "options_en": [
            "Paris",
            "Berlin",
            "Rome",
            "Canberra"
        ],
        "options_hi": [
            "पेरिस",
            "बर्लिन",
            "रोम",
            "कैनबरा"
        ],
        "answer_en": "Rome",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the capital of Spain?",
        "question_hi": "स्पेन की राजधानी क्या है?",
        "options_en": [
            "Berlin",
            "Paris",
            "Madrid",
            "Brasilia"
        ],
        "options_hi": [
            "बर्लिन",
            "पेरिस",
            "मैड्रिड",
            "ब्रासीलिया"
        ],
        "answer_en": "Madrid",
        "answer_hi": "मैड्रिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": [
            "Madrid",
            "Tokyo",
            "New Delhi",
            "Moscow"
        ],
        "options_hi": [
            "मैड्रिड",
            "टोक्यो",
            "नई दिल्ली",
            "मॉस्को"
        ],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the capital of France?",
        "question_hi": "फ़्रांस की राजधानी क्या है?",
        "options_en": [
            "Tokyo",
            "Paris",
            "Paris",
            "Moscow"
        ],
        "options_hi": [
            "टोक्यो",
            "पेरिस",
            "पेरिस",
            "मॉस्को"
        ],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "New Delhi",
            "Tokyo",
            "Tokyo"
        ],
        "options_hi": [
            "ऑटावा",
            "नई दिल्ली",
            "टोक्यो",
            "टोक्यो"
        ],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Canberra",
            "Ottawa",
            "Rome"
        ],
        "options_hi": [
            "कैनबरा",
            "कैनबरा",
            "ऑटावा",
            "रोम"
        ],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": [
            "Berlin",
            "Brasilia",
            "Ottawa",
            "New Delhi"
        ],
        "options_hi": [
            "बर्लिन",
            "ब्रासीलिया",
            "ऑटावा",
            "नई दिल्ली"
        ],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": [
            "Moscow",
            "Madrid",
            "Ottawa",
            "Brasilia"
        ],
        "options_hi": [
            "मॉस्को",
            "मैड्रिड",
            "ऑटावा",
            "ब्रासीलिया"
        ],
        "answer_en": "Ottawa",
        "answer_hi": "ऑटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the capital of Germany?",
        "question_hi": "जर्मनी की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Berlin",
            "Rome",
            "Madrid"
        ],
        "options_hi": [
            "ऑटावा",
            "बर्लिन",
            "रोम",
            "मैड्रिड"
        ],
        "answer_en": "Berlin",
        "answer_hi": "बर्लिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": [
            "Moscow",
            "Rome",
            "Paris",
            "Tokyo"
        ],
        "options_hi": [
            "मॉस्को",
            "रोम",
            "पेरिस",
            "टोक्यो"
        ],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the capital of Italy?",
        "question_hi": "इटली की राजधानी क्या है?",
        "options_en": [
            "Moscow",
            "Rome",
            "Ottawa",
            "Rome"
        ],
        "options_hi": [
            "मॉस्को",
            "रोम",
            "ऑटावा",
            "रोम"
        ],
        "answer_en": "Rome",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the capital of Spain?",
        "question_hi": "स्पेन की राजधानी क्या है?",
        "options_en": [
            "New Delhi",
            "Madrid",
            "Ottawa",
            "Tokyo"
        ],
        "options_hi": [
            "नई दिल्ली",
            "मैड्रिड",
            "ऑटावा",
            "टोक्यो"
        ],
        "answer_en": "Madrid",
        "answer_hi": "मैड्रिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": [
            "Rome",
            "New Delhi",
            "Berlin",
            "Canberra"
        ],
        "options_hi": [
            "रोम",
            "नई दिल्ली",
            "बर्लिन",
            "कैनबरा"
        ],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the capital of France?",
        "question_hi": "फ़्रांस की राजधानी क्या है?",
        "options_en": [
            "Paris",
            "Madrid",
            "Brasilia",
            "Ottawa"
        ],
        "options_hi": [
            "पेरिस",
            "मैड्रिड",
            "ब्रासीलिया",
            "ऑटावा"
        ],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": [
            "Paris",
            "Madrid",
            "Rome",
            "Tokyo"
        ],
        "options_hi": [
            "पेरिस",
            "मैड्रिड",
            "रोम",
            "टोक्यो"
        ],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": [
            "New Delhi",
            "Canberra",
            "Canberra",
            "Paris"
        ],
        "options_hi": [
            "नई दिल्ली",
            "कैनबरा",
            "कैनबरा",
            "पेरिस"
        ],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": [
            "Moscow",
            "New Delhi",
            "Brasilia",
            "Berlin"
        ],
        "options_hi": [
            "मॉस्को",
            "नई दिल्ली",
            "ब्रासीलिया",
            "बर्लिन"
        ],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "New Delhi",
            "Paris",
            "Canberra"
        ],
        "options_hi": [
            "ऑटावा",
            "नई दिल्ली",
            "पेरिस",
            "कैनबरा"
        ],
        "answer_en": "Ottawa",
        "answer_hi": "ऑटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the capital of Germany?",
        "question_hi": "जर्मनी की राजधानी क्या है?",
        "options_en": [
            "Berlin",
            "Paris",
            "New Delhi",
            "Moscow"
        ],
        "options_hi": [
            "बर्लिन",
            "पेरिस",
            "नई दिल्ली",
            "मॉस्को"
        ],
        "answer_en": "Berlin",
        "answer_hi": "बर्लिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Brasilia",
            "New Delhi",
            "Moscow"
        ],
        "options_hi": [
            "ऑटावा",
            "ब्रासीलिया",
            "नई दिल्ली",
            "मॉस्को"
        ],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the capital of Italy?",
        "question_hi": "इटली की राजधानी क्या है?",
        "options_en": [
            "Brasilia",
            "Paris",
            "Canberra",
            "Rome"
        ],
        "options_hi": [
            "ब्रासीलिया",
            "पेरिस",
            "कैनबरा",
            "रोम"
        ],
        "answer_en": "Rome",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the capital of Spain?",
        "question_hi": "स्पेन की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Madrid",
            "Berlin",
            "Rome"
        ],
        "options_hi": [
            "कैनबरा",
            "मैड्रिड",
            "बर्लिन",
            "रोम"
        ],
        "answer_en": "Madrid",
        "answer_hi": "मैड्रिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": [
            "Berlin",
            "Madrid",
            "Tokyo",
            "New Delhi"
        ],
        "options_hi": [
            "बर्लिन",
            "मैड्रिड",
            "टोक्यो",
            "नई दिल्ली"
        ],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the capital of France?",
        "question_hi": "फ़्रांस की राजधानी क्या है?",
        "options_en": [
            "Berlin",
            "Paris",
            "Paris",
            "Moscow"
        ],
        "options_hi": [
            "बर्लिन",
            "पेरिस",
            "पेरिस",
            "मॉस्को"
        ],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": [
            "Tokyo",
            "Ottawa",
            "Rome",
            "Tokyo"
        ],
        "options_hi": [
            "टोक्यो",
            "ऑटावा",
            "रोम",
            "टोक्यो"
        ],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Rome",
            "Ottawa",
            "Madrid"
        ],
        "options_hi": [
            "कैनबरा",
            "रोम",
            "ऑटावा",
            "मैड्रिड"
        ],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": [
            "Brasilia",
            "Ottawa",
            "Canberra",
            "Rome"
        ],
        "options_hi": [
            "ब्रासीलिया",
            "ऑटावा",
            "कैनबरा",
            "रोम"
        ],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Moscow",
            "Ottawa",
            "Rome"
        ],
        "options_hi": [
            "ऑटावा",
            "मॉस्को",
            "ऑटावा",
            "रोम"
        ],
        "answer_en": "Ottawa",
        "answer_hi": "ऑटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the capital of Germany?",
        "question_hi": "जर्मनी की राजधानी क्या है?",
        "options_en": [
            "Tokyo",
            "Brasilia",
            "Berlin",
            "New Delhi"
        ],
        "options_hi": [
            "टोक्यो",
            "ब्रासीलिया",
            "बर्लिन",
            "नई दिल्ली"
        ],
        "answer_en": "Berlin",
        "answer_hi": "बर्लिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": [
            "Ottawa",
            "Canberra",
            "Madrid",
            "Moscow"
        ],
        "options_hi": [
            "ऑटावा",
            "कैनबरा",
            "मैड्रिड",
            "मॉस्को"
        ],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the capital of Italy?",
        "question_hi": "इटली की राजधानी क्या है?",
        "options_en": [
            "Madrid",
            "Rome",
            "Tokyo",
            "Rome"
        ],
        "options_hi": [
            "मैड्रिड",
            "रोम",
            "टोक्यो",
            "रोम"
        ],
        "answer_en": "Rome",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the capital of Spain?",
        "question_hi": "स्पेन की राजधानी क्या है?",
        "options_en": [
            "Rome",
            "Madrid",
            "Ottawa",
            "Tokyo"
        ],
        "options_hi": [
            "रोम",
            "मैड्रिड",
            "ऑटावा",
            "टोक्यो"
        ],
        "answer_en": "Madrid",
        "answer_hi": "मैड्रिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": [
            "Rome",
            "Canberra",
            "Brasilia",
            "New Delhi"
        ],
        "options_hi": [
            "रोम",
            "कैनबरा",
            "ब्रासीलिया",
            "नई दिल्ली"
        ],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the capital of France?",
        "question_hi": "फ़्रांस की राजधानी क्या है?",
        "options_en": [
            "Paris",
            "Paris",
            "Madrid",
            "Canberra"
        ],
        "options_hi": [
            "पेरिस",
            "पेरिस",
            "मैड्रिड",
            "कैनबरा"
        ],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": [
            "Brasilia",
            "Moscow",
            "Paris",
            "Tokyo"
        ],
        "options_hi": [
            "ब्रासीलिया",
            "मॉस्को",
            "पेरिस",
            "टोक्यो"
        ],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Ottawa",
            "Paris",
            "New Delhi"
        ],
        "options_hi": [
            "कैनबरा",
            "ऑटावा",
            "पेरिस",
            "नई दिल्ली"
        ],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Paris",
            "Brasilia",
            "New Delhi"
        ],
        "options_hi": [
            "कैनबरा",
            "पेरिस",
            "ब्रासीलिया",
            "नई दिल्ली"
        ],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": [
            "New Delhi",
            "Ottawa",
            "Ottawa",
            "Rome"
        ],
        "options_hi": [
            "नई दिल्ली",
            "ऑटावा",
            "ऑटावा",
            "रोम"
        ],
        "answer_en": "Ottawa",
        "answer_hi": "ऑटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the capital of Germany?",
        "question_hi": "जर्मनी की राजधानी क्या है?",
        "options_en": [
            "Tokyo",
            "Berlin",
            "New Delhi",
            "Berlin"
        ],
        "options_hi": [
            "टोक्यो",
            "बर्लिन",
            "नई दिल्ली",
            "बर्लिन"
        ],
        "answer_en": "Berlin",
        "answer_hi": "बर्लिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": [
            "Canberra",
            "Berlin",
            "Moscow",
            "Brasilia"
        ],
        "options_hi": [
            "कैनबरा",
            "बर्लिन",
            "मॉस्को",
            "ब्रासीलिया"
        ],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the capital of Italy?",
        "question_hi": "इटली की राजधानी क्या है?",
        "options_en": [
            "Moscow",
            "Ottawa",
            "Paris",
            "Rome"
        ],
        "options_hi": [
            "मॉस्को",
            "ऑटावा",
            "पेरिस",
            "रोम"
        ],
        "answer_en": "Rome",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the capital of Spain?",
        "question_hi": "स्पेन की राजधानी क्या है?",
        "options_en": [
            "Brasilia",
            "Madrid",
            "Paris",
            "Berlin"
        ],
        "options_hi": [
            "ब्रासीलिया",
            "मैड्रिड",
            "पेरिस",
            "बर्लिन"
        ],
        "answer_en": "Madrid",
        "answer_hi": "मैड्रिड",
        "attempted": false,
        "selected": ""
    }
];

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};