const questions = [
  
{ num:1, question_en:"What is 72 + 18?", question_hi:"72 + 18 कितना होता है?", options_en:["90","88","92","89"], options_hi:["90","88","92","89"], answer_en:"90", answer_hi:"90", attempted:false, selected:"" },

{ num:2, question_en:"Which continent is known as the Dark Continent?", question_hi:"किस महाद्वीप को अंधकार महाद्वीप कहा जाता है?", options_en:["Africa","Asia","Europe","Australia"], options_hi:["अफ्रीका","एशिया","यूरोप","ऑस्ट्रेलिया"], answer_en:"Africa", answer_hi:"अफ्रीका", attempted:false, selected:"" },

{ num:3, question_en:"What is 25 × 4?", question_hi:"25 × 4 कितना होता है?", options_en:["100","90","110","95"], options_hi:["100","90","110","95"], answer_en:"100", answer_hi:"100", attempted:false, selected:"" },

{ num:4, question_en:"Which vitamin helps in blood clotting?", question_hi:"रक्त के थक्के जमने में कौन सा विटामिन मदद करता है?", options_en:["Vitamin K","Vitamin A","Vitamin C","Vitamin D"], options_hi:["विटामिन K","विटामिन A","विटामिन C","विटामिन D"], answer_en:"Vitamin K", answer_hi:"विटामिन K", attempted:false, selected:"" },

{ num:5, question_en:"What is the capital of Assam?", question_hi:"असम की राजधानी क्या है?", options_en:["Dispur","Guwahati","Silchar","Tezpur"], options_hi:["दिसपुर","गुवाहाटी","सिलचर","तेजपुर"], answer_en:"Dispur", answer_hi:"दिसपुर", attempted:false, selected:"" },

{ num:6, question_en:"What is 144 ÷ 12?", question_hi:"144 ÷ 12 कितना होता है?", options_en:["12","14","10","16"], options_hi:["12","14","10","16"], answer_en:"12", answer_hi:"12", attempted:false, selected:"" },

{ num:7, question_en:"Which metal is liquid at room temperature?", question_hi:"कमरे के तापमान पर द्रव अवस्था में कौन सी धातु होती है?", options_en:["Mercury","Iron","Aluminium","Copper"], options_hi:["पारा","लोहा","एल्युमिनियम","तांबा"], answer_en:"Mercury", answer_hi:"पारा", attempted:false, selected:"" },

{ num:8, question_en:"Who is known as the Father of the Indian Constitution?", question_hi:"भारतीय संविधान के जनक किसे कहा जाता है?", options_en:["B.R. Ambedkar","Mahatma Gandhi","Jawaharlal Nehru","Rajendra Prasad"], options_hi:["बी.आर. आंबेडकर","महात्मा गांधी","जवाहरलाल नेहरू","राजेंद्र प्रसाद"], answer_en:"B.R. Ambedkar", answer_hi:"बी.आर. आंबेडकर", attempted:false, selected:"" },

{ num:9, question_en:"What is 60% of 150?", question_hi:"150 का 60% कितना है?", options_en:["90","80","100","70"], options_hi:["90","80","100","70"], answer_en:"90", answer_hi:"90", attempted:false, selected:"" },

{ num:10, question_en:"Which river flows through Delhi?", question_hi:"दिल्ली से होकर कौन सी नदी बहती है?", options_en:["Yamuna","Ganga","Sutlej","Godavari"], options_hi:["यमुना","गंगा","सतलुज","गोदावरी"], answer_en:"Yamuna", answer_hi:"यमुना", attempted:false, selected:"" },

{ num:11, question_en:"What is the square root of 196?", question_hi:"196 का वर्गमूल क्या है?", options_en:["14","12","16","18"], options_hi:["14","12","16","18"], answer_en:"14", answer_hi:"14", attempted:false, selected:"" },

{ num:12, question_en:"Which organ purifies blood in human body?", question_hi:"मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?", options_en:["Kidney","Heart","Lungs","Liver"], options_hi:["गुर्दा","हृदय","फेफड़े","यकृत"], answer_en:"Kidney", answer_hi:"गुर्दा", attempted:false, selected:"" },

{ num:13, question_en:"What is 7³?", question_hi:"7³ कितना होता है?", options_en:["343","216","512","240"], options_hi:["343","216","512","240"], answer_en:"343", answer_hi:"343", attempted:false, selected:"" },

{ num:14, question_en:"Which country is known as the Land of Rising Sun?", question_hi:"उगते सूर्य की भूमि किस देश को कहा जाता है?", options_en:["Japan","China","Thailand","Korea"], options_hi:["जापान","चीन","थाईलैंड","कोरिया"], answer_en:"Japan", answer_hi:"जापान", attempted:false, selected:"" },

{ num:15, question_en:"What is the SI unit of power?", question_hi:"शक्ति की SI इकाई क्या है?", options_en:["Watt","Joule","Newton","Volt"], options_hi:["वाट","जूल","न्यूटन","वोल्ट"], answer_en:"Watt", answer_hi:"वाट", attempted:false, selected:"" },

{ num:16, question_en:"What is 500 − 275?", question_hi:"500 − 275 कितना होता है?", options_en:["225","215","235","245"], options_hi:["225","215","235","245"], answer_en:"225", answer_hi:"225", attempted:false, selected:"" },

{ num:17, question_en:"Which gas is essential for combustion?", question_hi:"दहन के लिए कौन सी गैस आवश्यक है?", options_en:["Oxygen","Nitrogen","Carbon Dioxide","Helium"], options_hi:["ऑक्सीजन","नाइट्रोजन","कार्बन डाइऑक्साइड","हीलियम"], answer_en:"Oxygen", answer_hi:"ऑक्सीजन", attempted:false, selected:"" },

{ num:18, question_en:"Who was the first President of India?", question_hi:"भारत के प्रथम राष्ट्रपति कौन थे?", options_en:["Dr. Rajendra Prasad","Dr. Radhakrishnan","Jawaharlal Nehru","B.R. Ambedkar"], options_hi:["डॉ. राजेंद्र प्रसाद","डॉ. राधाकृष्णन","जवाहरलाल नेहरू","बी.आर. आंबेडकर"], answer_en:"Dr. Rajendra Prasad", answer_hi:"डॉ. राजेंद्र प्रसाद", attempted:false, selected:"" },

{ num:19, question_en:"What is 36 ÷ 6?", question_hi:"36 ÷ 6 कितना होता है?", options_en:["6","8","9","5"], options_hi:["6","8","9","5"], answer_en:"6", answer_hi:"6", attempted:false, selected:"" },

{ num:20, question_en:"Which Indian city is known as Pink City?", question_hi:"गुलाबी शहर किस भारतीय शहर को कहा जाता है?", options_en:["Jaipur","Jodhpur","Udaipur","Ajmer"], options_hi:["जयपुर","जोधपुर","उदयपुर","अजमेर"], answer_en:"Jaipur", answer_hi:"जयपुर", attempted:false, selected:"" },

{ num:21, question_en:"Which instrument measures air pressure?", question_hi:"वायुदाब मापने वाला यंत्र कौन सा है?", options_en:["Barometer","Thermometer","Hygrometer","Anemometer"], options_hi:["बैरोमीटर","थर्मामीटर","हाइग्रोमीटर","एनीमोमीटर"], answer_en:"Barometer", answer_hi:"बैरोमीटर", attempted:false, selected:"" },

{ num:22, question_en:"What is 11 × 9?", question_hi:"11 × 9 कितना होता है?", options_en:["99","101","89","109"], options_hi:["99","101","89","109"], answer_en:"99", answer_hi:"99", attempted:false, selected:"" },

{ num:23, question_en:"Which vitamin is obtained from sunlight?", question_hi:"सूर्य के प्रकाश से कौन सा विटामिन मिलता है?", options_en:["Vitamin D","Vitamin A","Vitamin B","Vitamin C"], options_hi:["विटामिन D","विटामिन A","विटामिन B","विटामिन C"], answer_en:"Vitamin D", answer_hi:"विटामिन D", attempted:false, selected:"" },

{ num:24, question_en:"Which state is known as the Sugar Bowl of India?", question_hi:"भारत का चीनी कटोरा किस राज्य को कहा जाता है?", options_en:["Uttar Pradesh","Punjab","Bihar","Maharashtra"], options_hi:["उत्तर प्रदेश","पंजाब","बिहार","महाराष्ट्र"], answer_en:"Uttar Pradesh", answer_hi:"उत्तर प्रदेश", attempted:false, selected:"" },

{ num:25, question_en:"What is 2⁵?", question_hi:"2⁵ कितना होता है?", options_en:["32","16","64","24"], options_hi:["32","16","64","24"], answer_en:"32", answer_hi:"32", attempted:false, selected:"" },

{ num:26, question_en:"Which organ controls all activities of the body?", question_hi:"शरीर की सभी क्रियाओं को कौन नियंत्रित करता है?", options_en:["Brain","Heart","Liver","Kidney"], options_hi:["मस्तिष्क","हृदय","यकृत","गुर्दा"], answer_en:"Brain", answer_hi:"मस्तिष्क", attempted:false, selected:"" },

{ num:27, question_en:"What is 90 ÷ 15?", question_hi:"90 ÷ 15 कितना होता है?", options_en:["6","5","7","8"], options_hi:["6","5","7","8"], answer_en:"6", answer_hi:"6", attempted:false, selected:"" },

{ num:28, question_en:"Which Indian festival is known as the Festival of Lights?", question_hi:"रोशनी का त्योहार किसे कहा जाता है?", options_en:["Diwali","Holi","Eid","Navratri"], options_hi:["दीपावली","होली","ईद","नवरात्रि"], answer_en:"Diwali", answer_hi:"दीपावली", attempted:false, selected:"" },

{ num:29, question_en:"What is the freezing point of water?", question_hi:"पानी का हिमांक बिंदु क्या है?", options_en:["0°C","10°C","-10°C","100°C"], options_hi:["0°C","10°C","-10°C","100°C"], answer_en:"0°C", answer_hi:"0°C", attempted:false, selected:"" },

{ num:30, question_en:"What is 13 × 8?", question_hi:"13 × 8 कितना होता है?", options_en:["104","96","112","108"], options_hi:["104","96","112","108"], answer_en:"104", answer_hi:"104", attempted:false, selected:"" },

{ num:31, question_en:"Which ocean is the largest?", question_hi:"सबसे बड़ा महासागर कौन सा है?", options_en:["Pacific","Atlantic","Indian","Arctic"], options_hi:["प्रशांत","अटलांटिक","हिंद","आर्कटिक"], answer_en:"Pacific", answer_hi:"प्रशांत", attempted:false, selected:"" },

{ num:32, question_en:"What is 49 ÷ 7?", question_hi:"49 ÷ 7 कितना होता है?", options_en:["7","6","8","9"], options_hi:["7","6","8","9"], answer_en:"7", answer_hi:"7", attempted:false, selected:"" },

{ num:33, question_en:"Which gas is filled in electric bulbs?", question_hi:"बिजली के बल्बों में कौन सी गैस भरी जाती है?", options_en:["Argon","Oxygen","Nitrogen","Helium"], options_hi:["आर्गन","ऑक्सीजन","नाइट्रोजन","हीलियम"], answer_en:"Argon", answer_hi:"आर्गन", attempted:false, selected:"" },

{ num:34, question_en:"Who wrote Ramcharitmanas?", question_hi:"रामचरितमानस के लेखक कौन हैं?", options_en:["Tulsidas","Valmiki","Kalidas","Surdas"], options_hi:["तुलसीदास","वाल्मीकि","कालिदास","सूरदास"], answer_en:"Tulsidas", answer_hi:"तुलसीदास", attempted:false, selected:"" },

{ num:35, question_en:"What is 1000 ÷ 25?", question_hi:"1000 ÷ 25 कितना होता है?", options_en:["40","25","50","35"], options_hi:["40","25","50","35"], answer_en:"40", answer_hi:"40", attempted:false, selected:"" },

{ num:36, question_en:"Which day is celebrated as World Environment Day?", question_hi:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options_en:["5 June","22 April","8 March","1 May"], options_hi:["5 जून","22 अप्रैल","8 मार्च","1 मई"], answer_en:"5 June", answer_hi:"5 जून", attempted:false, selected:"" },

{ num:37, question_en:"What is the cube of 3?", question_hi:"3 का घन कितना है?", options_en:["27","9","81","18"], options_hi:["27","9","81","18"], answer_en:"27", answer_hi:"27", attempted:false, selected:"" },

{ num:38, question_en:"Which part of plant makes food?", question_hi:"पौधे का कौन सा भाग भोजन बनाता है?", options_en:["Leaf","Root","Stem","Flower"], options_hi:["पत्ती","जड़","तना","फूल"], answer_en:"Leaf", answer_hi:"पत्ती", attempted:false, selected:"" },

{ num:39, question_en:"What is 15% of 200?", question_hi:"200 का 15% कितना है?", options_en:["30","25","35","40"], options_hi:["30","25","35","40"], answer_en:"30", answer_hi:"30", attempted:false, selected:"" },

{ num:40, question_en:"Which Indian state has longest coastline?", question_hi:"भारत में सबसे लंबा समुद्री तट किस राज्य का है?", options_en:["Gujarat","Tamil Nadu","Maharashtra","Andhra Pradesh"], options_hi:["गुजरात","तमिलनाडु","महाराष्ट्र","आंध्र प्रदेश"], answer_en:"Gujarat", answer_hi:"गुजरात", attempted:false, selected:"" },

{ num:41, question_en:"Which gas causes global warming?", question_hi:"वैश्विक ऊष्मीकरण के लिए कौन सी गैस जिम्मेदार है?", options_en:["Carbon Dioxide","Oxygen","Nitrogen","Helium"], options_hi:["कार्बन डाइऑक्साइड","ऑक्सीजन","नाइट्रोजन","हीलियम"], answer_en:"Carbon Dioxide", answer_hi:"कार्बन डाइऑक्साइड", attempted:false, selected:"" },

{ num:42, question_en:"What is 8 × 14?", question_hi:"8 × 14 कितना होता है?", options_en:["112","104","98","120"], options_hi:["112","104","98","120"], answer_en:"112", answer_hi:"112", attempted:false, selected:"" },

{ num:43, question_en:"Which metal is best conductor of electricity?", question_hi:"विद्युत का सबसे अच्छा चालक कौन सी धातु है?", options_en:["Silver","Copper","Gold","Aluminium"], options_hi:["चांदी","तांबा","सोना","एल्युमिनियम"], answer_en:"Silver", answer_hi:"चांदी", attempted:false, selected:"" },

{ num:44, question_en:"Which freedom fighter is known as Netaji?", question_hi:"नेताजी के नाम से कौन स्वतंत्रता सेनानी जाने जाते हैं?", options_en:["Subhash Chandra Bose","Bhagat Singh","Sardar Patel","Lala Lajpat Rai"], options_hi:["सुभाष चंद्र बोस","भगत सिंह","सरदार पटेल","लाला लाजपत राय"], answer_en:"Subhash Chandra Bose", answer_hi:"सुभाष चंद्र बोस", attempted:false, selected:"" },

{ num:45, question_en:"What is 121 ÷ 11?", question_hi:"121 ÷ 11 कितना होता है?", options_en:["11","10","12","9"], options_hi:["11","10","12","9"], answer_en:"11", answer_hi:"11", attempted:false, selected:"" },

{ num:46, question_en:"Which organ stores bile juice?", question_hi:"पित्त रस को कौन सा अंग संचित करता है?", options_en:["Gall Bladder","Liver","Pancreas","Stomach"], options_hi:["पित्ताशय","यकृत","अग्न्याशय","आमाशय"], answer_en:"Gall Bladder", answer_hi:"पित्ताशय", attempted:false, selected:"" },

{ num:47, question_en:"What is 18 × 5?", question_hi:"18 × 5 कितना होता है?", options_en:["90","85","95","80"], options_hi:["90","85","95","80"], answer_en:"90", answer_hi:"90", attempted:false, selected:"" },

{ num:48, question_en:"Which planet is nearest to the Sun?", question_hi:"सूर्य के सबसे निकट कौन सा ग्रह है?", options_en:["Mercury","Venus","Earth","Mars"], options_hi:["बुध","शुक्र","पृथ्वी","मंगल"], answer_en:"Mercury", answer_hi:"बुध", attempted:false, selected:"" },

{ num:49, question_en:"What is the boiling point of water?", question_hi:"पानी का क्वथनांक क्या है?", options_en:["100°C","90°C","80°C","110°C"], options_hi:["100°C","90°C","80°C","110°C"], answer_en:"100°C", answer_hi:"100°C", attempted:false, selected:"" },

{ num:50, question_en:"Which Indian currency note has Mahatma Gandhi's picture?", question_hi:"महात्मा गांधी की तस्वीर किस भारतीय नोट पर होती है?", options_en:["All notes","Only ₹500","Only ₹2000","Only ₹100"], options_hi:["सभी नोटों पर","केवल ₹500","केवल ₹2000","केवल ₹100"], answer_en:"All notes", answer_hi:"सभी नोटों पर", attempted:false, selected:"" }


];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};